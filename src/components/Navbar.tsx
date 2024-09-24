import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Logo from '../assets/logo.png';
import HamburgerMenu from './HamburgerMenu';
import { Link as ScrollLink } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import SocialMediaIcons from './SocialMidiaIcons';
import { useAtomValue } from 'jotai';
import { routeAtom as routeAtom } from '../jotai/atoms';
import { pages } from '../data';

const Link = ({
  children,
  link,
  duration,
  isActive,
}: {
  children: React.ReactNode;
  link: string;
  duration: number;
  isActive: boolean;
}) => {
  const [, setEnter] = useState(true);

  return (
    <ScrollLink
      onMouseLeave={() => setEnter(false)}
      onMouseEnter={() => setEnter(true)}
      to={link}
      spy={true}
      smooth={true}
      offset={50}
      duration={duration}
      className={twMerge([
        'group flex-center select-none relative uppercase text-2xl cursor-pointer font-neue text-white font-bold',
        // 'before:content-[""] before:duration-200 before:absolute before:-bottom-2 before:left-1/2 before:w-0 before:ease-[var(--ease-out)] before:transition-all hover:before:w-1/2 before:h-[2px] before:bg-primary',
        // 'after:content-[""] after:duration-200 after:absolute after:-bottom-2 after:right-1/2 after:w-0 after:ease-[var(--ease-out)] after:transition-all hover:after:w-1/2 after:h-[2px] after:bg-primary',
      ])}
    >
      <span
        className={twMerge([
          'group-hover:navbar-text group-hover:opacity-100 transition-all ease-out duration-400',
          isActive ? 'navbar-text' : 'opacity-50',
        ])}
      >
        {children}
      </span>
    </ScrollLink>
  );
};

const Navbar = () => {
  const route = useAtomValue(routeAtom);

  return (
    // <motion.nav
    //   initial={{ y: -100, opacity: 1 }}
    //   whileInView={{
    //     y: 0,
    //     opacity: 1,
    //     transition: { delay: 1.5, duration: 0.8 },
    //   }}
    //   animate={
    //     visible
    //       ? {
    //           translateY: 0,
    //           transition: {
    //             duration: 0.4,
    //           },
    //         }
    //       : {
    //           translateY: -400,
    //           transition: {
    //             duration: 0.4,
    //           },
    //         }
    //   }
    //   viewport={{ once: true }}
    //   transition={{ ease: 'easeOut' }}
    //   className={twMerge([
    //     'fixed w-[calc(100%)] left-0 top-[-2px] backdrop-blur-md bg-[#202020] z-[1000] flex px-[1rem] lg:px-[4rem] py-8 justify-between items-center',
    //   ])}
    // >
    <nav
      className={twMerge([
        'fixed w-[calc(100%)] left-0 top-[-2px] backdrop-blur-md bg-[#202020] z-[1000] flex px-[1rem] lg:px-[4rem] py-8 justify-between items-center',
      ])}
    >
      <img
        src={Logo}
        alt='Logo'
        className={twMerge(
          ['w-[20rem] xl:w-[30rem] h-auto'],
          isMobile && 'w-[16rem]'
        )}
      />

      <ul className='flex gap-12'>
        {pages.map((page) => (
          <Link link={page} isActive={page === route} duration={500}>
            {page}
          </Link>
        ))}
      </ul>

      <div className='block xl:hidden ml-auto'>
        <HamburgerMenu />
      </div>

      <div className='hidden xl:block'>
        <SocialMediaIcons />
      </div>

      {/* <ScrollLink
        to='contact'
        spy={true}
        smooth={true}
        offset={50}
        duration={2500}
      >
        <button className='hidden xl:block btn' role='button'>
          Comece seu projeto
        </button>
      </ScrollLink> */}
    </nav>
  );
};

export default Navbar;
