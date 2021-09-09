import React from "react";
import { Logo } from "./Logo";
import { FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />

      <div className="flex gap-2 items-center">
        <SocialButtons />
      </div>
    </div>
  );
};

const SocialButtons = () => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/oxylearn" },
    { icon: FaTwitter, link: "https://twitter.com/oxylearn" },
    { icon: FaDiscord, link: "https://discord.gg/cZZxcCfh4v" },
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
            <social.icon className="h-5 w-5" />
          </a>
        );
      })}
    </>
  );
};

export default Navbar;
