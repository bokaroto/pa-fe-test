'use client';
import React from 'react';
import logo from '../../../../public/assets/icons/logo.svg';
import Image from 'next/image';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <nav className="flex sticky top-2 md:top-4 z-50 p-4 justify-between items-center blur-class">
      <Image
        src={logo}
        className="cursor-pointer hover:scale-105 transition-all ease-in "
        alt="myLogo"
      />

      <div className="hidden md:flex justify-center items-center">
        <NavigationLink dataReplace="Home" spanContent="Home" />
        <span className="small text-white px-1">|</span>
        <NavigationLink
          dataReplace="Documentation"
          spanContent="Documentation"
        />
      </div>
    </nav>
  );
}
