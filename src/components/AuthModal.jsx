import React, { useState } from 'react';

const AuthModal = ({ open, onClose }) => {
  const [mode, setMode] = useState('signin');
  const [loading, setLoading] = useState(false);
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input type="email" required className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-800" />
          </div>
          <div>
            <label className="mb-1 block text-sm">Password</label>
            <input type="password" required className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-neutral-900/10 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-800" />
          </div>
          <button disabled={loading} className="w-full rounded-full bg-neutral-900 py-2.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-neutral-900">
            {loading ? 'Please wait…' : (mode === 'signin' ? 'Sign in' : 'Create account')}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
          {mode === 'signin' ? (
            <>
              New here?{' '}
              <button onClick={() => setMode('signup')} className="font-medium underline underline-offset-4">Create an account</button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setMode('signin')} className="font-medium underline underline-offset-4">Sign in</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
