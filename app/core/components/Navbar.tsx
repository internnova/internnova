import React from 'react';
import { Logo } from './Logo';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="/" passHref={true}>
        <a>
          <Logo />
        </a>
      </Link>

      <div className="flex gap-2 items-center">
        <SocialButtons />
      </div>
    </div>
  );
};

const SocialButtons = () => {
  const socials = [
    { icon: FaTwitter, link: 'https://twitter.com/_internhigh_' },
    { icon: FaDiscord, link: 'dsc.gg/intern' },
  ];

  return (
    <>
      {socials.map((social, i) => {
        return (
          <a
            key={i}
            className="rounded-md bg-variant-1 h-10 w-10 grid place-items-center cursor-pointer"
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            {/* @ts-ignore*/}
            <social.icon className="h-5 w-5" />
          </a>
        );
      })}
    </>
  );
};

export default Navbar;
