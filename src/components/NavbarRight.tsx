import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useRef, useState, useMemo } from "react";

const useElementOnScreen = (options: any) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef, options]);

  return [targetRef, isVisible];
};

const NavbarRight = () => {
  const [toggle, setToggle] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.35,
    };
  }, []);

  const [homeRef, homeIsVisible]: any = useElementOnScreen(options);
  const [isTransitionEnded, setTransitionEnded] = useState(0);

  const handleTransition = (value: any) => {
    setTransitionEnded(value);
    if (!homeIsVisible) setTransitionEnded(0);
  };

  return (
    <div ref={homeRef}>
      <ul
        className="list-none sm:flex hidden justify-center 
    relative items-center"
      >
        <li
          key="1"
          className={`text-black font-normal bg-white cursor-pointer text-6xl 
       font-teko  relative z-[6]   navbarR1
       ${
         homeIsVisible
           ? `
       delay-[1.5s] translate-x-[30%] ease-[cubic-bezier(1,0,0,1)] 
       transition-transform duration-[750ms] 
       `
           : ``
       }`}
        >
          <a className="relative ml-8 mr-11" href={`/#Home`}>
            Home
          </a>
        </li>

        <li
          key="2"
          className={`text-black font-normal bg-orange-600 cursor-pointer text-6xl 
       font-teko  relative z-[4] right-3 navbarR2 transition-all
       ${
         homeIsVisible
           ? `
       delay-[1s] translate-x-[30%] ease-[cubic-bezier(1,0,0,1)]
        transition-transform duration-[750ms]
       `
           : ``
       }
       ${isTransitionEnded ? '' : ''}
       `}
        >
          <a className="relative ml-8 mr-4 z-[4]" href={`/#Features`}>
            Features
          </a>
        </li>

        <li
          key="3"
          className={`text-black font-normal bg-white cursor-pointer text-6xl z-[2]
       font-teko  relative  right-[30px] navbarR3 transition-all
       ${
         homeIsVisible
           ? `
       delay-500 translate-x-[30%] ease-[cubic-bezier(1,0,0,1)]
        transition-transform duration-[750ms]
       `
           : `

       `
       }`}
        >
          <a className="relative ml-8 mr-12 z-[2]" href={`/#products`}>
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarRight;
