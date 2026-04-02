'use client';
import { useEffect } from 'react';

export default function MotionEffects() {
  useEffect(() => {
    const heroName = document.querySelector('[data-hero-name]') as HTMLElement | null;
    let rafId: number;

    if (heroName) {
      const STIFFNESS = 0.10;
      const DAMPING = 0.72;
      const PARALLAX_FACTOR = 0.28;
      const MAX_OFFSET = 28;
      let currentY = 0, targetY = 0, velocity = 0;
      heroName.style.willChange = 'transform';

      const onScroll = () => {
        targetY = Math.min(window.scrollY * PARALLAX_FACTOR, MAX_OFFSET);
      };

      const springLoop = () => {
        const delta = targetY - currentY;
        velocity = (velocity + delta * STIFFNESS) * DAMPING;
        currentY += velocity;
        if (Math.abs(velocity) > 0.005 || Math.abs(delta) > 0.005) {
          heroName.style.transform = `translateY(${currentY.toFixed(3)}px)`;
        }
        rafId = requestAnimationFrame(springLoop);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      rafId = requestAnimationFrame(springLoop);
    }

    const cards = document.querySelectorAll<HTMLElement>('[data-card]');
    cards.forEach(card => {
      let animating = false;
      let targetRX = 0, targetRY = 0, currentRX = 0, currentRY = 0;
      card.style.transformOrigin = 'center center';

      const loop = () => {
        currentRX += (targetRX - currentRX) * 0.12;
        currentRY += (targetRY - currentRY) * 0.12;
        card.style.transform = `perspective(800px) rotateX(${currentRX.toFixed(2)}deg) rotateY(${currentRY.toFixed(2)}deg)`;
        if (Math.abs(targetRX - currentRX) > 0.01 || Math.abs(targetRY - currentRY) > 0.01) {
          requestAnimationFrame(loop);
        } else {
          animating = false;
          card.style.transform = '';
        }
      };

      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        targetRY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
        targetRX = -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 4;
        if (!animating) { animating = true; requestAnimationFrame(loop); }
      });

      card.addEventListener('mouseleave', () => {
        targetRX = 0; targetRY = 0;
        if (!animating) { animating = true; requestAnimationFrame(loop); }
      });
    });

    document.querySelectorAll<HTMLElement>('.nav-link').forEach(link => {
      link.addEventListener('mouseenter', (e: MouseEvent) => {
        const rect = link.getBoundingClientRect();
        link.style.setProperty('--underline-origin', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      });
    });

    return () => { cancelAnimationFrame(rafId); };
  }, []);

  return null;
}
