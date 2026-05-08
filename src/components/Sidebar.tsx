import React from 'react';
import { portfolioData } from '@/data';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          <a href="/">{portfolioData.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-lightest sm:text-xl">
          {portfolioData.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">
          {portfolioData.tagline}
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </header>
  );
};

export default Sidebar;
