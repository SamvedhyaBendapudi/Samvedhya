"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Obstacle = {
  id: number;
  x: number;
  width: number;
  height: number;
  scored: boolean;
};

type GameSnapshot = {
  playerY: number;
  obstacles: Obstacle[];
  score: number;
  isStarted: boolean;
  isGameOver: boolean;
  bestScore: number;
};

const GAME_WIDTH = 800;
const GAME_HEIGHT = 300;
const GROUND_HEIGHT = 54;
const PLAYER_WIDTH = 34;
const PLAYER_HEIGHT = 42;
const PLAYER_X = 112;
const GRAVITY = 1800;
const JUMP_FORCE = 700;
const BASE_SPEED = 325;
const MAX_SPEED = 530;
const PIPE_WIDTH = 56;

const clouds = [
  "left-[7%] top-[14%] h-8 w-18 md:h-10 md:w-24",
  "right-[10%] top-[22%] h-9 w-20 md:h-11 md:w-28",
  "left-[28%] top-[9%] hidden h-7 w-16 md:block",
];

const initialSnapshot: GameSnapshot = {
  playerY: 0,
  obstacles: [],
  score: 0,
  isStarted: false,
  isGameOver: false,
  bestScore: 0,
};

function createObstacle(id: number): Obstacle {
  return {
    id,
    x: GAME_WIDTH + 32 + Math.random() * 48,
    width: PIPE_WIDTH + Math.random() * 14,
    height: 72 + Math.random() * 52,
    scored: false,
  };
}

function getSpawnDelay(score: number) {
  const baseDelay = Math.max(0.82, 1.35 - Math.min(score, 18) * 0.02);
  return baseDelay + Math.random() * 0.35;
}

export default function MarioGame() {
  const [game, setGame] = useState<GameSnapshot>(initialSnapshot);

  const playerYRef = useRef(0);
  const velocityRef = useRef(0);
  const obstaclesRef = useRef<Obstacle[]>([]);
  const scoreRef = useRef(0);
  const startedRef = useRef(false);
  const gameOverRef = useRef(false);
  const bestScoreRef = useRef(0);
  const nextObstacleIdRef = useRef(1);
  const spawnCooldownRef = useRef(0.9);

  const syncSnapshot = useCallback(() => {
    setGame({
      playerY: playerYRef.current,
      obstacles: obstaclesRef.current.map((obstacle) => ({ ...obstacle })),
      score: scoreRef.current,
      isStarted: startedRef.current,
      isGameOver: gameOverRef.current,
      bestScore: bestScoreRef.current,
    });
  }, []);

  const resetGame = useCallback(
    (autoStart = false) => {
      playerYRef.current = 0;
      velocityRef.current = autoStart ? JUMP_FORCE : 0;
      obstaclesRef.current = [];
      scoreRef.current = 0;
      startedRef.current = autoStart;
      gameOverRef.current = false;
      spawnCooldownRef.current = 0.85;
      nextObstacleIdRef.current = 1;
      syncSnapshot();
    },
    [syncSnapshot],
  );

  const jump = useCallback(() => {
    if (gameOverRef.current) {
      resetGame(true);
      return;
    }

    if (!startedRef.current) {
      startedRef.current = true;
    }

    if (playerYRef.current <= 4) {
      velocityRef.current = JUMP_FORCE;
    }

    syncSnapshot();
  }, [resetGame, syncSnapshot]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space") {
        return;
      }

      event.preventDefault();
      jump();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [jump]);

  useEffect(() => {
    let frameId = 0;
    let lastFrameTime = performance.now();

    const update = (timestamp: number) => {
      const deltaTime = Math.min((timestamp - lastFrameTime) / 1000, 0.032);
      lastFrameTime = timestamp;

      if (startedRef.current && !gameOverRef.current) {
        velocityRef.current -= GRAVITY * deltaTime;
        playerYRef.current = Math.max(0, playerYRef.current + velocityRef.current * deltaTime);

        if (playerYRef.current === 0 && velocityRef.current < 0) {
          velocityRef.current = 0;
        }

        const speed = Math.min(BASE_SPEED + scoreRef.current * 12, MAX_SPEED);
        spawnCooldownRef.current -= deltaTime;

        const nextObstacles = obstaclesRef.current
          .map((obstacle) => ({ ...obstacle, x: obstacle.x - speed * deltaTime }))
          .filter((obstacle) => obstacle.x + obstacle.width > -24)
          .map((obstacle) => {
            if (!obstacle.scored && obstacle.x + obstacle.width < PLAYER_X) {
              const nextScore = scoreRef.current + 1;
              scoreRef.current = nextScore;
              bestScoreRef.current = Math.max(bestScoreRef.current, nextScore);
              return { ...obstacle, scored: true };
            }

            return obstacle;
          });

        if (spawnCooldownRef.current <= 0) {
          nextObstacles.push(createObstacle(nextObstacleIdRef.current));
          nextObstacleIdRef.current += 1;
          spawnCooldownRef.current = getSpawnDelay(scoreRef.current);
        }

        obstaclesRef.current = nextObstacles;

        const collided = nextObstacles.some((obstacle) => {
          const overlapsHorizontally = PLAYER_X + PLAYER_WIDTH > obstacle.x + 6 && PLAYER_X < obstacle.x + obstacle.width - 6;
          const hitsPipe = playerYRef.current < obstacle.height - 4;
          return overlapsHorizontally && hitsPipe;
        });

        if (collided) {
          gameOverRef.current = true;
          startedRef.current = false;
          velocityRef.current = 0;
          bestScoreRef.current = Math.max(bestScoreRef.current, scoreRef.current);
        }

        syncSnapshot();
      }

      frameId = window.requestAnimationFrame(update);
    };

    frameId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [syncSnapshot]);

  return (
    <motion.section
      id="game"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative overflow-hidden px-6 py-20 text-white md:px-10 md:py-24"
      style={{
        background: "linear-gradient(180deg, var(--mario-sky) 0%, #4a7de0 48%, #26345f 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {clouds.map((cloud, index) => (
          <div
            key={cloud}
            className={`cloud-8bit animate-float absolute ${cloud}`}
            style={{ opacity: 0.9 - index * 0.15, animationDelay: `${index * 0.6}s` }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 h-16 brick-bg border-t-4 border-[var(--mario-ground)] opacity-95" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-white/90">Hidden portfolio easter egg</p>
          <h2
            className="mt-4 text-4xl font-black uppercase tracking-[0.08em] md:text-6xl"
            style={{
              color: "var(--mario-yellow)",
              textShadow: "4px 4px 0 rgba(26,26,46,0.65)",
              fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
            }}
          >
            🎮 BONUS STAGE
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#f4f7ff] md:text-base">
            A tiny Mario-inspired runner: time your jumps, clear the pipes, and see how far your reflexes can carry you.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[820px] rounded-[1rem] bg-[rgba(9,14,33,0.22)] p-3 md:p-4">
          <div
            role="button"
            tabIndex={0}
            aria-label="Mario bonus stage mini-game. Press space or tap to jump."
            onPointerDown={jump}
            className="pixel-border relative mx-auto aspect-[8/3] w-full overflow-hidden select-none touch-manipulation bg-[#1a1a2e] outline-none focus-visible:ring-4 focus-visible:ring-[var(--mario-yellow)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #5C94FC 0%, #74a9ff 52%, #253159 100%)",
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="cloud-8bit absolute left-[11%] top-[16%] h-[11%] w-[12%] opacity-95" />
              <div className="cloud-8bit absolute right-[14%] top-[26%] h-[13%] w-[14%] opacity-90" />
              <div className="absolute inset-x-0 bottom-[18%] h-[2px] bg-white/20" />
              <div className="absolute bottom-[18%] left-[62%] h-[12%] w-[13%] rounded-t-[10px] bg-[rgba(65,120,70,0.35)]" />
              <div className="absolute bottom-[18%] left-[72%] h-[18%] w-[16%] rounded-t-[12px] bg-[rgba(61,112,60,0.45)]" />
            </div>

            <div className="absolute left-4 top-4 z-20">
              <div className="rounded-sm bg-[rgba(26,26,46,0.72)] px-3 py-2 text-xs font-black uppercase tracking-[0.28em] text-[var(--mario-yellow)] shadow-[3px_3px_0_rgba(0,0,0,0.35)] md:text-sm">
                Score {String(game.score).padStart(4, "0")}
              </div>
              {game.bestScore > 0 ? (
                <div className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/90 md:text-xs">
                  Best {String(game.bestScore).padStart(4, "0")}
                </div>
              ) : null}
            </div>

            <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 px-3 text-center text-[10px] font-black uppercase tracking-[0.24em] text-white/95 md:text-xs">
              {game.isGameOver ? "TAP TO RESTART" : "PRESS SPACE OR TAP TO JUMP"}
            </div>

            {game.obstacles.map((obstacle) => (
              <div
                key={obstacle.id}
                className="absolute z-10"
                style={{
                  left: `${(obstacle.x / GAME_WIDTH) * 100}%`,
                  width: `${(obstacle.width / GAME_WIDTH) * 100}%`,
                  height: `${(obstacle.height / GAME_HEIGHT) * 100}%`,
                  bottom: `${(GROUND_HEIGHT / GAME_HEIGHT) * 100}%`,
                }}
              >
                <div className="pipe-green relative h-full w-full rounded-t-[6px] border-[3px] border-[var(--mario-dark)]">
                  <div className="absolute -left-[8%] right-[-8%] top-0 h-[16%] rounded-t-[6px] border-[3px] border-[var(--mario-dark)] bg-[var(--mario-pipe)]" />
                  <div className="absolute inset-y-[12%] left-[22%] w-[10%] bg-white/20" />
                </div>
              </div>
            ))}

            <div
              className="absolute z-20"
              style={{
                left: `${(PLAYER_X / GAME_WIDTH) * 100}%`,
                width: `${(PLAYER_WIDTH / GAME_WIDTH) * 100}%`,
                height: `${(PLAYER_HEIGHT / GAME_HEIGHT) * 100}%`,
                bottom: `${((GROUND_HEIGHT + game.playerY) / GAME_HEIGHT) * 100}%`,
              }}
            >
              <div className="relative h-full w-full rounded-[4px] border-[3px] border-[var(--mario-dark)] bg-[var(--mario-red)] shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
                <div className="absolute left-[8%] top-[6%] h-[22%] w-[84%] rounded-[2px] bg-[var(--mario-yellow)]" />
                <div className="absolute left-[10%] top-[28%] h-[48%] w-[80%] rounded-[2px] bg-[var(--mario-red)]" />
                <div className="absolute bottom-0 left-0 h-[22%] w-full bg-[#6B3300]" />
                <div className="absolute left-[20%] top-[42%] h-[10%] w-[14%] bg-[var(--mario-dark)]" />
                <div className="absolute right-[20%] top-[42%] h-[10%] w-[14%] bg-[var(--mario-dark)]" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[18%] brick-bg border-t-4 border-[var(--mario-ground)]" />

            {game.isGameOver ? (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[rgba(15,18,41,0.72)] px-6 text-center">
                <p
                  className="text-3xl font-black uppercase md:text-5xl"
                  style={{
                    color: "var(--mario-yellow)",
                    textShadow: "4px 4px 0 rgba(26,26,46,0.9)",
                    fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
                  }}
                >
                  GAME OVER
                </p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.28em] text-white md:text-base">
                  Score {String(game.score).padStart(4, "0")}
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.32em] text-[var(--mario-yellow)] md:text-sm">
                  Tap to restart
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
