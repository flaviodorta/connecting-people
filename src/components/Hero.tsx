import { twMerge } from 'tailwind-merge';
import { Typewriter } from './Typewriter/Typewriter';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import Underline from './Underline';

const Hero = () => {
  const texts = ['Marketing Digital', 'Desenvolvimento Web', 'Design Criativo'];

  return (
    <main
      id='about'
      className='pointer-events-none select-none relative bg-transparent px-[4rem] lg:px-[15rem] h-full w-full flex flex-col gap-10 lg:flex-row'
    >
      <div className='z-2 font-neutra w-full bg-transparent justify-center h-1/2 mt-[12rem] pb-[5vh] md:mt-[12rem] lg:mt-[16rem] flex flex-col gap-6'>
        <div className='overflow-hidden h-fit w-fit'>
          <motion.h1
            // initial={{ y: 50, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, ease: 'circOut', delay: 1 }}
            // viewport={{ once: true }}
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
      </div>
    </main>
  );
};

export default Hero;