import { useEffect } from 'react';

export function useCustomCursor(): void {
  useEffect(() => {
    const dot = document.querySelector<HTMLDivElement>('.cursor-dot');
    const ring = document.querySelector<HTMLDivElement>('.cursor-ring');
    if (!dot || !ring) return;

    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
    };

    const follow = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(follow);
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, .hoverable, input, textarea, [data-hover]')) {
        document.body.classList.add('cursor-hover');
      }
    };

    const onOut = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, .hoverable, input, textarea, [data-hover]')) {
        document.body.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    follow();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);
}
