import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = ({ onOpenAuth }) => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-neutral-950 text-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.25),transparent_40%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <h1 className="text-balance font-[800] tracking-tight text-white/90 drop-shadow-sm [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
          Minimalist Design Studio for Bold Brands
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
          We craft clean, timeless visuals across brand, web, and product. Two curated tiers, one clear outcome: sharper presence.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAuth}
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10 transition hover:scale-[1.02] hover:shadow-white/20 focus:outline-none"
          >
            Sign in / Create account
          </button>
          <a
            href="#pricing"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
