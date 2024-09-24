import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Typewriter } from './Typewriter/Typewriter';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import Underline from './Underline';
import { texts } from '../data';
import { useIntersectionObserver } from 'usehooks-ts';
import { useSetAtom } from 'jotai';
import { routeAtom } from '../jotai/atoms';
// import FloatingWhatsappButton from './Whatsapp/WhatsappButton';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.9,
  });
  const isVisible = !!entry?.isIntersecting;
  const setRoute = useSetAtom(routeAtom);

  useEffect(() => {
    if (isVisible) setRoute('sobre');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div
      ref={ref}
      id='sobre'
      className='pointer-events-none select-none relative bg-transparent px-[4rem] lg:px-[15rem] h-screen w-full flex flex-col gap-10 lg:flex-row'
    >
      <div className='z-2 font-neutra w-full bg-transparent justify-center h-1/2 mt-[12rem] pb-[5vh] md:mt-[12rem] lg:mt-[16rem] flex flex-col gap-6'>
        <div className='overflow-hidden h-fit w-fit'>
          <motion.h1
            className={twMerge([
              'text-white relative font-light text-[2rem] md:text-[2.6rem] lg:text-[3.2rem]',
              isMobile && 'text-[1.8rem]',
            ])}
          >
            Nós somos uma agência de
            <Underline />
          </motion.h1>
        </div>

        <div>
          <Typewriter
            initialDelay={3000}
            texts={texts}
            className={twMerge([
              'text-[3.1rem] w-full md:text-[6rem] lg:text-[6.5rem] xl:text-[9rem] leading-[6rem] lg:leading-[10rem] uppercase text-white font-bold',
              isMobile && 'text-[2.2rem]',
            ])}
          />
        </div>

        {/* <FloatingWhatsappButton phoneNumber='233' accountName='dasdas' /> */}
      </div>
    </div>
  );
};

export default Hero;
