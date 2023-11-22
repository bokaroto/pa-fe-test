'use client';
import logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';
import NavigationLink from '../components/navigation/NavigationLink';
import ImageHoveringAnimation from '../components/ImageHoveringAnimation';

import stackOverflowIcon from '@/public/assets/icons/stackOverflow.svg';
import gitHubIcon from '@/public/assets/icons/gitHub.svg';
import discordIcon from '@/public/assets/icons/discord.svg';
import redditIcon from '@/public/assets/icons/reddit.svg';
import youtubeIcon from '@/public/assets/icons/youtube.svg';
import quoraIcon from '@/public/assets/icons/quora.svg';
import nutGroup5x5black from '@/public/assets/shapes/nutGroup5x5black.svg';

const socials = [
  { name: 'GitHub', href: '#', icon: gitHubIcon },
  { name: 'Discord', href: '#', icon: discordIcon },
  { name: 'StackOverflow', href: '#', icon: stackOverflowIcon },
  { name: 'Reddit', href: '#', icon: redditIcon },
  { name: 'Quora', href: '#', icon: quoraIcon },
  { name: 'Youtube', href: '#', icon: youtubeIcon },
];

export default function FooterSection() {
  return (
    <div className="w-full text-left  px-4 overflow-hidden md:px-10 mx-auto lg:px-24">
      <div className="w-full relative z-50 flex flex-col justify-between items-start sm:flex-row gap-4 sm:w-2/3 pb-40">
        <div>
          <Image
            src={logo}
            className="cursor-pointer hover:scale-105 transition-all ease-in "
            alt="myLogo"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <NavigationLink dataReplace="Home" spanContent="Home" />
          <NavigationLink
            dataReplace="Documentation"
            spanContent="Documentation"
          />
          <NavigationLink dataReplace="Start today" spanContent="Start today" />
        </div>
        <div>
          <ul className="grid grid-cols-3 sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.href}>
                  <Image
                    src={social.icon}
                    className="cursor-pointer hover:scale-105 transition-all ease-in "
                    alt="myLogo"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full  relative bg-red-500">
        <div className="w-[180px] h-[160px] md:w-[350px] md:h-[330px] absolute bottom-0 right-0">
          <ImageHoveringAnimation
            src={nutGroup5x5black}
            alt="nutGroup5x5black"
          />
        </div>
      </div>
    </div>
  );
}
