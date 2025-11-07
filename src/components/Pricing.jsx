import React from 'react';

const tiers = [
  {
    name: 'Essential',
    price: '$1,200',
    cadence: 'per project',
    tagline: 'Clean, fast, foundational identity.' ,
    features: [
      'Discovery + moodboard',
      'Logo system (2 routes)',
      'Basic brand kit',
      'Social + pitch assets',
      '2 revisions',
    ],
    cta: 'Start Essential',
  },
  {
    name: 'Signature',
    price: '$3,800',
    cadence: 'per project',
    tagline: 'Deeper strategy and polished rollout.',
    features: [
      'Brand strategy intensive',
      'Logo + typography + color',
      'Design system + components',
      'Web landing (1 page)',
      'Launch toolkit',
      'Priority timeline',
    ],
    cta: 'Start Signature',
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Transparent pricing</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400">Two simple packages crafted for clarity. No hourly billing, no surprises.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-8 transition ${t.highlight ? 'border-transparent bg-neutral-900 text-white shadow-xl shadow-black/20 dark:bg-white dark:text-neutral-900' : 'border-neutral-200 dark:border-neutral-800'}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <span className="text-sm opacity-70">{t.cadence}</span>
              </div>
              <p className="mt-2 text-sm opacity-80">{t.tagline}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold">{t.price}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${t.highlight ? 'bg-neutral-800 text-white hover:opacity-90 dark:bg-neutral-900 dark:text-white' : 'bg-neutral-900 text-white hover:opacity-90 dark:bg-white dark:text-neutral-900'}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
