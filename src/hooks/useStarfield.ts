import { useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  twSpeed: number;
  hue: 'gold' | 'blue' | 'violet';
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export function useStarfield(canvasId = 'starfield'): void {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    let scrollY = 0;
    let rafId = 0;
    let shootingTimer = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const count = Math.floor((window.innerWidth * window.innerHeight) / 4500);
      stars = Array.from({ length: count }, () => {
        const r = Math.random();
        const hue: Star['hue'] = r < 0.85 ? 'gold' : r < 0.925 ? 'blue' : 'violet';
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random() * 0.8 + 0.2,
          r: Math.random() * 1.2 + 0.2,
          tw: Math.random() * Math.PI * 2,
          twSpeed: 0.005 + Math.random() * 0.02,
          hue,
        };
      });
    };

    const onScroll = () => { scrollY = window.scrollY; };

    const spawnShooting = () => {
      if (Math.random() < 0.3) {
        shootingStars.push({
          x: Math.random() * w * 0.6,
          y: Math.random() * h * 0.4,
          vx: (3 + Math.random() * 4) * dpr,
          vy: (1 + Math.random() * 2) * dpr,
          life: 1,
        });
      }
      shootingTimer = window.setTimeout(spawnShooting, 4000 + Math.random() * 8000);
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const isLight = document.documentElement.dataset.mode === 'light';
      const vibe = document.body.dataset.vibe;
      const goldRGB = vibe === 'terminal' ? '125,211,160' : isLight ? '138,90,42' : '212,165,116';

      const off = scrollY * 0.15 * dpr;

      for (const s of stars) {
        s.tw += s.twSpeed;
        const tw = (Math.sin(s.tw) + 1) / 2;
        const alpha = (0.15 + tw * 0.55) * s.z;
        let color: string;
        if (s.hue === 'gold') color = `rgba(${goldRGB},${alpha})`;
        else if (s.hue === 'blue') color = `rgba(140,170,255,${alpha * 0.7})`;
        else color = `rgba(180,140,255,${alpha * 0.7})`;
        ctx.fillStyle = color;
        const yy = (s.y - off * s.z) % h;
        const yyy = yy < 0 ? yy + h : yy;
        ctx.beginPath();
        ctx.arc(s.x, yyy, s.r * s.z * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
        grad.addColorStop(0, `rgba(${goldRGB},${s.life})`);
        grad.addColorStop(1, `rgba(${goldRGB},0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5 * dpr;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12);
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.012;
        if (s.life <= 0 || s.x > w || s.y > h) shootingStars.splice(i, 1);
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll);
    resize();
    spawnShooting();
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(shootingTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [canvasId]);
}
