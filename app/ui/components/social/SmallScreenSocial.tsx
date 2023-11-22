'use client';
import { useState, useRef } from 'react';

export default function SmallScreenSocial() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setIsActive(!isActive);
  };

  return (
    <div className="fixed bottom-2 right-2 top-20 flex flex-col justify-end items-center mb-2 ml-2 md:hidden z-50">
      <div
        ref={divRef}
        className={`blur-class pl-2 ${
          isVisible
            ? ' translate-x-0 ease-in-out duration-500'
            : ' translate-x-20 ease-in-out duration-300'
        }`}
      >
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden mb-6 border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
            />
          </svg>
        </a>
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden mb-6 border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.25799 1.26797C9.07533 0.846834 8.86934 0.436198 8.64099 0.0379736C8.63325 0.0243563 8.62154 0.0134234 8.60743 0.00663373C8.59331 -0.000155898 8.57746 -0.00247938 8.56199 -2.64894e-05C6.84799 0.289973 5.20799 0.799974 3.67699 1.49097C3.66382 1.4965 3.65265 1.50592 3.64499 1.51797C0.532992 6.09297 -0.320008 10.555 0.0989923 14.961C0.100158 14.9718 0.103508 14.9822 0.108837 14.9917C0.114167 15.0011 0.121364 15.0094 0.129992 15.016C1.94638 16.3384 3.97233 17.3458 6.12299 17.996C6.13798 18.0006 6.15402 18.0006 6.16901 17.9959C6.18399 17.9913 6.19723 17.9823 6.20699 17.97C6.66979 17.351 7.07989 16.6944 7.43299 16.007C7.43789 15.9976 7.44072 15.9872 7.44127 15.9766C7.44183 15.9661 7.44011 15.9555 7.43622 15.9456C7.43233 15.9358 7.42637 15.9268 7.41874 15.9195C7.41111 15.9121 7.40199 15.9065 7.39199 15.903C6.746 15.6597 6.12008 15.3661 5.51999 15.025C5.50921 15.0188 5.50012 15.0101 5.49355 14.9995C5.48698 14.989 5.48312 14.977 5.48233 14.9646C5.48153 14.9522 5.48383 14.9398 5.48901 14.9286C5.49418 14.9173 5.50208 14.9075 5.51199 14.9C5.63799 14.807 5.76399 14.71 5.88399 14.613C5.89479 14.6043 5.9078 14.5987 5.92158 14.5969C5.93535 14.5952 5.94934 14.5973 5.96199 14.603C9.88899 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0173 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8923 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3413 1.50723 20.3303 1.49729 20.317 1.49197ZM8.01999 12.278C6.83799 12.278 5.86299 11.209 5.86299 9.89797C5.86299 8.58597 6.81899 7.51797 8.01999 7.51797C9.22999 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.22099 12.278 8.01999 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden mb-6 border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path d="M2.57143 0C1.15179 0 0 1.16906 0 2.61V21.75C0 23.1909 1.15179 24.36 2.57143 24.36H21.4286C22.8482 24.36 24 23.1909 24 21.75V2.61C24 1.16906 22.8482 0 21.4286 0H2.57143ZM14.6822 3.48L19.2353 9.70866L18.008 10.6329L13.4551 4.40421L14.6822 3.48ZM11.8517 5.97157L17.7309 10.9343L16.7607 12.1198L10.8817 7.15667L11.8517 5.97157ZM9.59491 9.18628L16.5235 12.4812L15.8901 13.8877L8.9617 10.6128L9.59491 9.18628ZM8.28857 12.7025L15.7711 14.2895L15.4543 15.8169L7.97196 14.2294L8.28857 12.7024V12.7025ZM4.76464 14.6715H6.28929V19.3331H16.9985V14.6714H18.5226V20.88H4.76464V14.6714V14.6715ZM7.81334 16.2188H15.4542V17.7657H7.81339V16.2188H7.81334Z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden mb-6 border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 12.3599C24 18.9869 18.627 24.3599 12 24.3599C5.373 24.3599 0 18.9869 0 12.3599C0 5.73286 5.373 0.359863 12 0.359863C18.627 0.359863 24 5.73286 24 12.3599ZM19.688 11.4179C19.882 11.6949 19.992 12.0219 20.004 12.3599C20.0092 12.6905 19.9207 13.0159 19.7487 13.2984C19.5767 13.5808 19.3282 13.8088 19.032 13.9559C19.046 14.1319 19.046 14.3079 19.032 14.4839C19.032 17.1719 15.9 19.3559 12.036 19.3559C8.172 19.3559 5.04 17.1719 5.04 14.4839C5.02649 14.3081 5.02649 14.1316 5.04 13.9559C4.81117 13.8487 4.60825 13.6933 4.44519 13.5004C4.28213 13.3074 4.16279 13.0813 4.09537 12.8378C4.02796 12.5943 4.01408 12.3391 4.05467 12.0898C4.09526 11.8404 4.18937 11.6028 4.33053 11.3932C4.47169 11.1837 4.65656 11.0072 4.87241 10.8758C5.08826 10.7445 5.32999 10.6615 5.58098 10.6325C5.83197 10.6035 6.08626 10.6292 6.32638 10.7078C6.5665 10.7864 6.78676 10.916 6.972 11.0879C8.35473 10.1501 9.98146 9.63705 11.652 9.61186L12.54 5.44786C12.55 5.39966 12.5694 5.35391 12.5972 5.31327C12.625 5.27264 12.6605 5.23792 12.7018 5.21113C12.7431 5.18434 12.7894 5.16601 12.8378 5.15721C12.8862 5.14841 12.9359 5.14932 12.984 5.15986L15.924 5.74786C16.0676 5.50119 16.2944 5.31377 16.5637 5.21924C16.833 5.12471 17.1272 5.12926 17.3934 5.23209C17.6597 5.33491 17.8806 5.52927 18.0164 5.78027C18.1523 6.03127 18.1943 6.32248 18.1348 6.60163C18.0753 6.88078 17.9182 7.12958 17.6918 7.30338C17.4654 7.47718 17.1845 7.56459 16.8995 7.54993C16.6144 7.53526 16.3439 7.41948 16.1366 7.22336C15.9292 7.02725 15.7985 6.76364 15.768 6.47986L13.2 5.93986L12.42 9.68386C14.0702 9.71926 15.6749 10.2319 17.04 11.1599C17.2222 10.9847 17.4402 10.851 17.679 10.768C17.9178 10.6851 18.1718 10.6548 18.4234 10.6793C18.675 10.7039 18.9183 10.7826 19.1366 10.91C19.3549 11.0375 19.543 11.2108 19.688 11.4179ZM8.206 12.8929C8.11841 13.0239 8.05749 13.171 8.02672 13.3256C7.99595 13.4802 7.99593 13.6393 8.02667 13.7939C8.08874 14.1062 8.27231 14.381 8.537 14.5579C8.80169 14.7348 9.1258 14.7993 9.43805 14.7372C9.59266 14.7065 9.7397 14.6456 9.87078 14.558C10.0019 14.4704 10.1144 14.3579 10.202 14.2269C10.3789 13.9622 10.4434 13.6381 10.3813 13.3258C10.3193 13.0136 10.1357 12.7388 9.871 12.5619C9.60631 12.385 9.2822 12.3205 8.96995 12.3825C8.6577 12.4446 8.3829 12.6282 8.206 12.8929ZM12.012 17.7839C13.077 17.8279 14.125 17.5499 14.976 16.9079C15.0397 16.8458 15.076 16.761 15.0772 16.6721C15.0783 16.5832 15.0441 16.4975 14.982 16.4339C14.9513 16.4023 14.9146 16.3772 14.8742 16.3598C14.8337 16.3425 14.7903 16.3333 14.7462 16.3327C14.6574 16.3316 14.5717 16.3658 14.508 16.4279C13.7797 16.9503 12.895 17.2085 12 17.1599C11.1061 17.1998 10.2255 16.9331 9.504 16.4039C9.44182 16.3528 9.36289 16.3268 9.28256 16.3307C9.20222 16.3346 9.12622 16.3683 9.06935 16.4252C9.01247 16.4821 8.97879 16.5581 8.97484 16.6384C8.97089 16.7188 8.99697 16.7977 9.048 16.8599C9.89937 17.5014 10.9469 17.828 12.012 17.7839ZM14.093 14.6059C14.291 14.7379 14.511 14.8559 14.748 14.8559C14.9108 14.8578 15.0722 14.8265 15.2225 14.764C15.3728 14.7015 15.5087 14.609 15.6221 14.4923C15.7355 14.3755 15.824 14.2369 15.8821 14.0848C15.9401 13.9328 15.9667 13.7705 15.96 13.6079C15.9599 13.4006 15.9062 13.1969 15.8039 13.0165C15.7017 12.8362 15.5545 12.6854 15.3767 12.5789C15.1989 12.4724 14.9965 12.4137 14.7893 12.4087C14.5821 12.4036 14.3771 12.4523 14.1943 12.55C14.0115 12.6477 13.8571 12.7911 13.7462 12.9663C13.6353 13.1414 13.5717 13.3422 13.5615 13.5493C13.5513 13.7563 13.5949 13.9624 13.688 14.1476C13.7812 14.3328 13.9207 14.4907 14.093 14.6059Z"
            />
          </svg>
        </a>
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden mb-6 border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path d="M13.095 19.0739C12.264 17.4374 11.289 15.7844 9.3855 15.7844C9.0225 15.7844 8.6595 15.8444 8.325 15.9974L7.68 14.7029C8.4675 14.0279 9.7395 13.4909 11.376 13.4909C13.9215 13.4909 15.228 14.7179 16.266 16.2809C16.881 14.9459 17.1735 13.1414 17.1735 10.9049C17.1735 5.31886 15.426 2.45086 11.346 2.45086C7.326 2.45086 5.5875 5.31886 5.5875 10.9049C5.5875 16.4609 7.326 19.2989 11.3475 19.2989C11.985 19.2989 12.564 19.2299 13.0965 19.0739H13.095ZM14.0925 21.0239C13.1972 21.2644 12.2745 21.3874 11.3475 21.3899C5.991 21.3899 0.75 17.1179 0.75 10.9049C0.75 4.63336 5.9925 0.359863 11.346 0.359863C16.791 0.359863 21.981 4.60186 21.981 10.9049C21.981 14.4104 20.346 17.2589 17.9685 19.1009C18.7365 20.2514 19.5285 21.0164 20.628 21.0164C21.831 21.0164 22.3155 20.0864 22.3965 19.3589H23.961C24.0525 20.3294 23.568 24.3599 19.194 24.3599C16.5435 24.3599 15.144 22.8239 14.094 21.0239H14.0925Z" />
          </svg>
        </a>
        <a
          href="#"
          className="bg-purple rounded-full flex items-center justify-center w-10 h-10 overflow-hidden border-2 border-purple hover:border-lemonGreen hover:shadow-on-hover transition-all ease-in-out hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white hover:fill-current hover:text-lemonGreen"
          >
            <path d="M23.4999 2.86645C23.364 2.38168 23.0993 1.9428 22.7339 1.59645C22.3582 1.23945 21.8977 0.984087 21.3959 0.854451C19.5179 0.359451 11.9939 0.359451 11.9939 0.359451C8.85721 0.323764 5.72131 0.480726 2.60388 0.829451C2.10208 0.968664 1.64245 1.22974 1.26588 1.58945C0.895885 1.94545 0.627885 2.38445 0.487885 2.86545C0.151578 4.6772 -0.0118232 6.5168 -0.000115239 8.35945C-0.0121152 10.2005 0.150885 12.0395 0.487885 13.8535C0.624885 14.3325 0.891885 14.7695 1.26288 15.1225C1.63388 15.4755 2.09588 15.7305 2.60388 15.8655C4.50689 16.3595 11.9939 16.3595 11.9939 16.3595C15.1345 16.3952 18.2744 16.2382 21.3959 15.8895C21.8977 15.7598 22.3582 15.5044 22.7339 15.1475C23.0991 14.8012 23.3636 14.3622 23.4989 13.8775C23.844 12.0664 24.0118 10.226 23.9999 8.38245C24.0258 6.53106 23.8583 4.68202 23.4999 2.86545V2.86645ZM9.60188 11.7835V4.93645L15.8619 8.36045L9.60188 11.7835Z" />
          </svg>
        </a>
      </div>
      <div className="blur-class rounded-full">
        <button
          onClick={handleClick}
          className={` rounded-full bg-lemonGreen left-2 z-50 flex items-center justify-center hover:scale-95 transition-all ease-in-out ${
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
    </div>
  );
}
