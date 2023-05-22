'use client';

import React, { useRef, useEffect, useState } from 'react';

export const Canvas = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [initCanvas, setInitCanvas] = useState(true);

  const canvas = canvasRef.current;
  // const context = canvasRef.current.getContext('2d');

  const a = {};
  const c = {
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
  let d;

  for (d in c) a[d] = c[d];

  const e = 2 * Math.PI;
  const b = Math.PI / 2;
  let f = [];
  const i = function (b, c, d, e, f, g) {
    this.x = b;
    this.y = c;
    this.ox = b;
    this.oy = c;
    this.y2 = this.y1 = this.x2 = this.x1 = NaN;
    this.scale = f || 1;
    this.oTheta = this.theta = d;
    this.radius = e;
    this.generation = g || 1;
    this.growing = !0;
    this.age = 0;
    this.wanderStep =
      a.MIN_WANDER_STEP +
      Math.random() * (a.MAX_WANDER_STEP - a.MIN_WANDER_STEP);
    this.growthRate =
      a.MIN_GROWTH_RATE +
      Math.random() * (a.MAX_GROWTH_RATE - a.MIN_GROWTH_RATE);
    this.shrinkRate =
      a.MIN_SHRINK_RATE +
      Math.random() * (a.MAX_SHRINK_RATE - a.MIN_SHRINK_RATE);
  };

  i.prototype = {
    update: function () {
      if (this.growing) {
        this.ox = this.x;
        this.oy = this.y;
        this.oTheta = this.theta;
        this.theta +=
          -this.wanderStep +
          Math.random() * (this.wanderStep - -this.wanderStep);
        this.x += Math.cos(this.theta) * this.growthRate * this.scale;
        this.y += Math.sin(this.theta) * this.growthRate * this.scale;
        this.scale *= this.shrinkRate;
        if (
          f.length < a.MAX_CONCURRENT &&
          Math.random() < a.BRANCH_PROBABILITY
        ) {
          var b =
              a.MIN_DIVERGENCE +
              Math.random() * (a.MAX_DIVERGENCE - a.MIN_DIVERGENCE),
            b = this.theta + b * (0.5 > Math.random() ? 1 : -1),
            c = 0.95 * this.scale,
            b = new i(this.x, this.y, b, this.radius * c, c);
          canvasRef.current.getContext('2d').generation = this.generation + 1;
          f.push(b);
        }
        this.radius * this.scale <= a.MIN_RADIUS && (this.growing = !1);
        this.age++;
      }
    },
    render: function (b) {
      if (this.growing) {
        const c = this.scale;
        const d = this.radius * c;

        canvasRef.current.getContext('2d').save();

        switch (a.RENDER_MODE) {
          case 'segmented':
            canvasRef.current.getContext('2d').beginPath(),
              canvasRef.current.getContext('2d').moveTo(this.ox, this.oy),
              canvasRef.current.getContext('2d').lineTo(this.x, this.y),
              5 < d &&
                ((canvasRef.current.getContext('2d').shadowOffsetX = 1),
                (canvasRef.current.getContext('2d').shadowOffsetY = 1),
                (canvasRef.current.getContext('2d').shadowBlur = c),
                (canvasRef.current.getContext('2d').shadowColor =
                  'rgba(0,0,0,0.05)')),
              (canvasRef.current.getContext('2d').lineWidth = d + c),
              (canvasRef.current.getContext('2d').strokeStyle = '#000'),
              (canvasRef.current.getContext('2d').lineCap = 'round'),
              canvasRef.current.getContext('2d').stroke(),
              canvasRef.current.getContext('2d').closePath(),
              canvasRef.current.getContext('2d').beginPath(),
              canvasRef.current.getContext('2d').moveTo(this.ox, this.oy),
              canvasRef.current.getContext('2d').lineTo(this.x, this.y),
              (canvasRef.current.getContext('2d').lineWidth = d),
              (canvasRef.current.getContext('2d').strokeStyle = '#FFF'),
              (canvasRef.current.getContext('2d').lineCap = 'round'),
              canvasRef.current.getContext('2d').stroke(),
              canvasRef.current.getContext('2d').closePath();
        }

        canvasRef.current.getContext('2d').restore();
      }
    },
    destroy: function () {
      canvasRef.current.width = canvasRef.current.width;
    }
  };

  const m = !1,
    p = canvasRef.current;
  // n = canvasRef.current.getContext('2d');

  const init = function () {
    canvasRef.current.width = 1500;
    canvasRef.current.height = 800;
    reset();
    for (
      var c = canvasRef.current.width / 2,
        j = canvasRef.current.height / 2,
        l,
        m,
        n = 0;
      n < a.NUM_BRANCHES;
      n++
    )
      (l = (n / a.NUM_BRANCHES) * e),
        (m = a.MAX_RADIUS),
        f.push(new i(c, j, l - b, m));

    cX();
  };

  const reset = function () {
    for (let a = 0, b = f.length; a < b; a++) f[a].destroy();
    f = [];
  };
  const clear = function () {
    canvasRef.current.width = canvasRef.current.width;
  };

  const cX = () => {
    window.requestAnimationFrame(cX);

    let a, b, d;
    a = 0;
    for (b = f.length; a < b; a++)
      (d = f[a]), d.update(), d.render(canvasRef.current.getContext('2d'));
    for (a = f.length - 1; 0 <= a; a--) f[a].growing || f.splice(a, 1);
    for (a = f.length.toString(); 3 > a.length; ) a = '0' + a;
  };

  useEffect(() => {
    if (canvasRef.current) {
      if (initCanvas) {
        init();
        setInitCanvas(false);
      }
      cX();
    }
  }, []);

  // if (canvasRef.current) {
  //   console.log('entrou');
  //   init();
  // }

  return <canvas ref={canvasRef} width={1500} height={800} />;
};
