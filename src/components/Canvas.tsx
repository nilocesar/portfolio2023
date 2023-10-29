'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ElementProps {
  x: number;
  y: number;
  ox: number;
  oy: number;
  y2: number;
  y1: number;
  x2: number;
  x1: number;
  scale: number;
  oTheta: number;
  theta: number;
  radius: number;
  generation: number;
  growing: boolean;
  age: number;
  wanderStep: number;
  growthRate: number;
  shrinkRate: number;
  update: () => void;
  render: (context: CanvasRenderingContext2D) => void;
  destroy: () => void;
}

interface Config {
  RENDER_MODE: 'segmented';
  BRANCH_PROBABILITY: number;
  MAX_CONCURRENT: number;
  NUM_BRANCHES: number;
  MIN_RADIUS: number;
  MAX_RADIUS: number;
  MIN_WANDER_STEP: number;
  MAX_WANDER_STEP: number;
  MIN_GROWTH_RATE: number;
  MAX_GROWTH_RATE: number;
  MIN_SHRINK_RATE: number;
  MAX_SHRINK_RATE: number;
  MIN_DIVERGENCE: number;
  MAX_DIVERGENCE: number;
}

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let requestId: undefined | number = undefined;

  const config: Config = {
    RENDER_MODE: 'segmented',
    BRANCH_PROBABILITY: 0.05,
    MAX_CONCURRENT: 100,
    NUM_BRANCHES: 4,
    MIN_RADIUS: 0,
    MAX_RADIUS: 0.1,
    MIN_WANDER_STEP: 0.28,
    MAX_WANDER_STEP: 0.7,
    MIN_GROWTH_RATE: 5,
    MAX_GROWTH_RATE: 19,
    MIN_SHRINK_RATE: 0.98,
    MAX_SHRINK_RATE: 0.99,
    MIN_DIVERGENCE: 0.01,
    MAX_DIVERGENCE: 0.05
  };

  const e = 2 * Math.PI;
  const b = Math.PI / 2;
  let fArray: ElementProps[] = [];

  const base = (
    posX: number,
    posY: number,
    posTheta: number,
    radiusValue: number,
    scaleValue: number,
    generationValue: number
  ): ElementProps => {
    const element: ElementProps = {
      x: posX,
      y: posY,
      ox: posX,
      oy: posY,
      y2: NaN,
      y1: NaN,
      x2: NaN,
      x1: NaN,
      scale: scaleValue || 1,
      oTheta: posTheta,
      theta: posTheta,
      radius: radiusValue,
      generation: generationValue || 1,
      growing: true,
      age: 0,
      wanderStep:
        config.MIN_WANDER_STEP +
        Math.random() * (config.MAX_WANDER_STEP - config.MIN_WANDER_STEP),
      growthRate:
        config.MIN_GROWTH_RATE +
        Math.random() * (config.MAX_GROWTH_RATE - config.MIN_GROWTH_RATE),
      shrinkRate:
        config.MIN_SHRINK_RATE +
        Math.random() * (config.MAX_SHRINK_RATE - config.MIN_SHRINK_RATE),

      update() {
        if (element.growing) {
          element.ox = element.x;
          element.oy = element.y;
          element.oTheta = element.theta;
          element.theta +=
            -element.wanderStep +
            Math.random() * (element.wanderStep - -element.wanderStep);
          element.x +=
            Math.cos(element.theta) * element.growthRate * element.scale;
          element.y +=
            Math.sin(element.theta) * element.growthRate * element.scale;
          element.scale *= element.shrinkRate;
          if (
            fArray.length < config.MAX_CONCURRENT &&
            Math.random() < config.BRANCH_PROBABILITY
          ) {
            let bEl =
              config.MIN_DIVERGENCE +
              Math.random() * (config.MAX_DIVERGENCE - config.MIN_DIVERGENCE);
            bEl = element.theta + bEl * (Math.random() < 0.5 ? 1 : -1);
            const c = 0.95 * element.scale;
            const elBase = base(
              element.x,
              element.y,
              bEl,
              element.radius * c,
              c,
              element.generation + 1
            );
            fArray.push(elBase);
          }
          if (element.radius * element.scale <= config.MIN_RADIUS) {
            element.growing = false;
          }
          element.age++;
        }
      },

      render(ctx) {
        if (element.growing) {
          const c = element.scale;
          const d = element.radius * c;

          ctx.save();

          switch (config.RENDER_MODE) {
            case 'segmented':
              ctx.beginPath();
              ctx.moveTo(element.ox, element.oy);
              ctx.lineTo(element.x, element.y);
              if (d > 5) {
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                ctx.shadowBlur = c;
                ctx.shadowColor = 'rgba(0,0,0,0.05)';
              }
              ctx.lineWidth = d + c;
              ctx.strokeStyle = '#000';
              ctx.lineCap = 'round';
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.moveTo(element.ox, element.oy);
              ctx.lineTo(element.x, element.y);
              ctx.lineWidth = d;
              ctx.strokeStyle = '#FFF';
              ctx.lineCap = 'round';
              ctx.stroke();
              ctx.closePath();
          }

          ctx.restore();
        }
      },

      destroy() {
        // Not implemented in the original code
      }
    };

    return element;
  };

  const init = () => {

    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      reset();
      const c = canvasRef.current.width / 2;
      const j = canvasRef.current.height / 2;
      for (let n = 0; n < config.NUM_BRANCHES; n++) {
        const l = (n / config.NUM_BRANCHES) * e;
        const m = config.MAX_RADIUS;
        fArray.push(base(c, j, l - b, m, 1, 1));
      }


      startLoop();
      setTimeout(() => {
        stopLoop();
      }, 1000 * 3);

    }
  };

  const reset = () => {
    for (const element of fArray) {
      // Implement the destroy function to clean up resources if needed
      element.destroy();
    }
    fArray = [];
  };

  const loop = () => {
      requestId = undefined;

      let a, b, d;
      a = 0;
      for (b = fArray.length; a < b; a++)
        (d = fArray[a]),
          d.update(),
          d.render(canvasRef.current?.getContext('2d') as CanvasRenderingContext2D);
      for (a = fArray.length - 1; 0 <= a; a--) fArray[a].growing || fArray.splice(a, 1);
      for (a = fArray.length.toString(); 3 > a.length; ) a = '0' + a;

      startLoop();
  }

  const startLoop = () => {
    if (!requestId) {
      requestId = window.requestAnimationFrame(loop);
    }
  };

  const stopLoop = () => {
    if (requestId) {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      init();
    }

    const handleWindowResize = () => {
      init()
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
