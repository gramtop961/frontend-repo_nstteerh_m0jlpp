import React from 'react';

const posts = [
  {
    id: 1,
    title: 'The Power of Restraint in Visual Identity',
    excerpt: 'How fewer elements can communicate more effectively and scale across mediums.',
    date: 'Sep 24, 2025',
  },
  {
    id: 2,
    title: 'Typesetting for Modern Product Teams',
    excerpt: 'A practical guide to pairing families, weights, and sizes with intent.',
    date: 'Sep 10, 2025',
  },
  {
    id: 3,
    title: 'Design Systems as Brand Strategy',
    excerpt: 'System thinking turns brand values into reusable components.',
    date: 'Aug 29, 2025',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">From the journal</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">Thinking and process behind our work.</p>
          </div>
          <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80 dark:text-white">View all</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
              <time className="text-xs text-neutral-500 dark:text-neutral-400">{p.date}</time>
              <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-neutral-900 group-hover:underline dark:text-white">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4 dark:text-white">Read</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
