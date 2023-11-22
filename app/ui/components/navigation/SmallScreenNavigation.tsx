'use client';
import { useState, useRef } from 'react';
import { HomeIcon, ClipboardDocumentIcon } from '@heroicons/react/24/solid';

export default function SmallScreenNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-2 flex justify-start items-center mb-2 ml-2 md:hidden z-50">
      <div className="blur-class rounded-full">
        <button
          onClick={handleClick}
          className={` rounded-full bg-lemonGreen  left-2 z-50 flex items-center justify-center hover:scale-95 transition-all ease-in-out ${
            isActive ? 'w-14 h-14' : 'w-12 h-12'
          }`}
        >
          <svg
            className={`ham hamRotate ham8 ${isActive ? 'active' : ''}`}
            viewBox="0 0 100 100"
            width="80"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </button>
      </div>
      <div
        ref={divRef}
        className={`flex justify-around items-center pl-2 ${
          isVisible
            ? ' translate-y-0 ease-in-out duration-500'
            : ' translate-y-20 ease-in-out duration-300'
        }`}
      >
        <div className="blur-class rounded-full">
          <HomeIcon
            className={`block w-12 h-12 rounded-full bg-lemonGreen text-black p-2 hover:scale-95  ${
              isVisible
                ? ' translate-y-0 ease-in-out duration-200'
                : ' translate-y-12 ease-in-out duration-500'
            }`}
            aria-hidden="true"
          />
        </div>
        <div className="blur-class rounded-full">
          <ClipboardDocumentIcon
            className={`block w-12 h-12 rounded-full bg-lemonGreen text-black p-2 hover:scale-95   ${
              isVisible
                ? ' translate-y-0 ease-in-out duration-500'
                : ' translate-y-12 ease-in-out duration-200'
            }`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
