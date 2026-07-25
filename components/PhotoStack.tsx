// components/PhotoStack.tsx
'use client';

import { useState, type CSSProperties } from 'react';
import Image from 'next/image';
import type { ProjectScreenshot } from '@/lib/content';

interface PhotoStackProps {
  screenshots: ProjectScreenshot[];
  cycleLabel: string;
}

const TILE_OFFSETS = [
  { top: 0, left: 0, rotate: -1.5, z: 3 },
  { top: 12, left: 14, rotate: 3.5, z: 2 },
  { top: 24, left: 28, rotate: -5, z: 1 },
];

function tileStyle(position: number): CSSProperties {
  const offset = TILE_OFFSETS[position] ?? TILE_OFFSETS[TILE_OFFSETS.length - 1];
  return {
    top: offset.top,
    left: offset.left,
    transform: `rotate(${offset.rotate}deg)`,
    zIndex: offset.z,
    opacity: 1,
  };
}

const LEAVING_STYLE: CSSProperties = {
  transform: 'translateY(-34px) rotate(11deg) scale(0.92)',
  opacity: 0,
  zIndex: 5,
};

const TILE_CLASS =
  'absolute h-[108px] w-[172px] overflow-hidden rounded-md border border-[var(--color-border)] shadow-[0_6px_16px_rgba(30,18,8,0.35)] transition-[transform,opacity] duration-[280ms] ease-[cubic-bezier(0.23,1,0.32,1)]';

export function PhotoStack({ screenshots, cycleLabel }: PhotoStackProps) {
  const [order, setOrder] = useState<number[]>(() => screenshots.map((_, i) => i));
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const [cycling, setCycling] = useState(false);

  if (screenshots.length === 0) {
    return (
      <div className="flex h-[108px] w-[172px] flex-shrink-0 items-center justify-center rounded-md border border-dashed border-[var(--color-border)]">
        <span className="font-mono-tag text-[11px] text-[var(--color-text-muted)]">sin captura</span>
      </div>
    );
  }

  if (screenshots.length === 1) {
    const shot = screenshots[0];
    return (
      <div className="relative h-[108px] w-[172px] flex-shrink-0 overflow-hidden rounded-md border border-[var(--color-border)] shadow-[0_6px_16px_rgba(30,18,8,0.35)]">
        <Image src={shot.src} alt={shot.alt} fill sizes="172px" className="object-cover" />
      </div>
    );
  }

  const handleClick = () => {
    if (cycling) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const frontIndex = order[0];

    if (reduceMotion) {
      setOrder((current) => [...current.slice(1), current[0]]);
      return;
    }

    setCycling(true);
    setLeavingIndex(frontIndex);
    window.setTimeout(() => {
      setOrder((current) => [...current.slice(1), current[0]]);
      setLeavingIndex(null);
      setCycling(false);
    }, 280);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={cycleLabel}
      className="relative h-[142px] w-[208px] flex-shrink-0 cursor-pointer border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4"
    >
      {order.map((shotIndex, position) => {
        const shot = screenshots[shotIndex];
        return (
          <div
            key={shotIndex}
            className={TILE_CLASS}
            style={shotIndex === leavingIndex ? LEAVING_STYLE : tileStyle(position)}
          >
            <Image src={shot.src} alt={shot.alt} fill sizes="172px" className="object-cover" />
          </div>
        );
      })}
      <span className="font-mono-tag pointer-events-none absolute -bottom-2.5 right-1 z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-raised)] px-[7px] py-[2px] text-[10.5px] text-[var(--color-wood)]">
        1/{screenshots.length}
      </span>
    </button>
  );
}
