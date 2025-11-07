import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setLoading(true);
    try {
      // Backend endpoint can be connected later; for now simulate
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Your message has been sent. We\'ll reply within 1–2 days.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let\'s collaborate</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">Tell us about your project. We\'ll get back with a simple plan and timeline.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm">Name</label>
              <input name="name" required className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Email</label>
              <input name="email" type="email" required className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm">Budget</label>
            <select name="budget" className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900">
              <option>Under $2k</option>
              <option>$2k – $5k</option>
              <option>$5k – $10k</option>
              <option>$10k+</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Message</label>
            <textarea name="message" rows="5" required className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-900" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-neutral-900"
          >
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </form>

        {status && (
          <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
