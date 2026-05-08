import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
      <p>
        Designed and engineered by Man Gajjar, AI/ML Engineer. Built with{' '}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-light hover:text-teal focus-visible:text-teal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-light hover:text-teal focus-visible:text-teal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-light hover:text-teal focus-visible:text-teal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-light hover:text-teal focus-visible:text-teal"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inter
        </a>{' '}
        typeface.
      </p>
      <div className="mt-16 text-center text-sm text-slate/70 pb-8">
        &copy; 2026 Man Gajjar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
