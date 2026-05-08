import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';
import { portfolioData } from '@/data';

const iconMap: { [key: string]: any } = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  instagram: FiInstagram,
  email: FiMail,
};

const SocialLinks = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {portfolioData.socials.map((social) => {
        const Icon = iconMap[social.icon] || FiGithub;
        const isEmail = social.icon === 'email' || social.link.startsWith('mailto:');
        return (
          <li key={social.name} className="mr-5 text-xs">
            <a
              className="block hover:text-lightest-slate transition-colors"
              href={social.link}
              {...(!isEmail ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              aria-label={isEmail ? `${social.name}` : `${social.name} (opens in a new tab)`}
            >
              <span className="sr-only">{social.name}</span>
              <Icon className="h-6 w-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
