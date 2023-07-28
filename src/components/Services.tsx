import { twMerge } from 'tailwind-merge';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Underline from './Underline';
import { services } from '../data';
import { useIntersectionObserver } from 'usehooks-ts';
import { useSetAtom } from 'jotai';
import { routeAtom } from '../jotai/atoms';

const Services = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.2,
  });
  const isVisible = !!entry?.isIntersecting;
  const setRoute = useSetAtom(routeAtom);

  useEffect(() => {
    if (isVisible) setRoute('serviços');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div
      ref={ref}
      id='serviços'
      className='bg-white px-[4rem] py-[6rem] lg:py-[12rem] lg:px-[15rem] w-full'
    >
      <h2
        className={twMerge([
          'relative text-[2.2rem] lg:text-[4rem] font-bold mb-[6rem]',
          // 'before:content-[""] before:bg-gradient before:bottom-0 before:absolute before:h-[3px] before:w-[48px]',
        ])}
      >
        Conheça nossos serviços
        <motion.div
          initial={{ height: '100%' }}
          whileInView={{ height: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeIn' }}
          viewport={{ once: true }}
          className='w-full bg-white absolute top-0 left-0'
        />
        <Underline />
      </h2>

      <p className='text-[1.5rem] md:text-[2rem] max-w-[80rem] text-gray-900 mb-[6rem]'>
        Revolucione sua presença online com nossos serviços de desenvolvimento
        web personalizados, criando um ecossistema funcional e impactante para
        cativar seu público-alvo e impulsionar o crescimento do seu negócio.
      </p>

      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10rem] mx-auto w-full'>
        {services.map((s, i) => (
          <motion.li
            key={i}
            initial={{ y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            }}
            whileHover={{
              y: -15,
            }}
            viewport={{ once: true }}
            className='duration-500 ease-out p-[2rem] group border-[1px] border-gray-300 shadow-md hover:shadow-2xl transition-all rounded-md w-full min-h-[30rem] gap-[1rem] flex flex-col items-center justify-center'
          >
            <img src={s.src} alt={s.alt} className='w-[5rem] stroke-white' />

            <h2 className='group-hover:bg-[-100%] transition-all duration-500 bg-custom bg-clip-text text-transparent bg-[linear-gradient(to_right,_rgb(17,24,39)_50%,_#10b0eb_50%,#2146e4)] text-[2.4rem] md:text-[3rem] font-bold text-gray-900 text-center'>
              {s.alt}
            </h2>

            <p className='text-gray-800 text-[1.5rem] md:text-[1.8rem] text-center'>
              {s.content}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
