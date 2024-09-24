import { useIntersectionObserver, useMediaQuery } from 'usehooks-ts';
import Forms from './Forms';
import { Variants, motion } from 'framer-motion';
import SocialMediaIcons from './SocialMidiaIcons';
import { useEffect, useRef } from 'react';
import { useSetAtom } from 'jotai';
import { routeAtom } from '../jotai/atoms';
// import ReactWhatsapp from 'react-whatsapp';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { y: 140, skewY: 40 },
  show: {
    y: 0,
    skewY: 0,
    transition: {
      ease: 'easeOut',
    },
  },
};

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.2,
  });
  const isVisible = !!entry?.isIntersecting;
  const setRoute = useSetAtom(routeAtom);

  useEffect(() => {
    if (isVisible) setRoute('contato');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const f = 'tem uma ideia em mente?'.split('');

  const large = useMediaQuery('(min-width: 1024px)');
  const medium = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const spanOneWidth = large ? '12rem' : medium ? '9.6rem' : '4.3rem';

  return (
    <div
      ref={ref}
      id='contato'
      className='bg-black w-full max-h-[100rem] p-[6rem_4rem_0rem_4rem] lg:p-[12rem_15rem_4rem_15rem]'
    >
      <div className='h-fit mb-[2rem] relative overflow-hidden font-montserrat text-white leading-[200%] text-[1.7rem] md:text-[3.8rem] lg:text-[4.6rem] font-bold'>
        <motion.div
          initial='hidden'
          whileInView='show'
          variants={container}
          viewport={{ once: true }}
          className='overflow-hidden'
        >
          {f.map((l, i) => (
            <motion.div
              key={i}
              variants={item}
              transition={{ duration: 0.6, ease: 'anticipate' }}
              viewport={{ once: true }}
              className='inline-block'
            >
              {l === ' ' ? <span>&nbsp;</span> : l}
            </motion.div>
          ))}{' '}
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: spanOneWidth }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'anticipate' }}
          className='h-[5px] md:h-[10px] absolute bg-primary top-[2.8rem] left-[8.4rem] md:top-[6.3rem] md:left-[19.1rem] lg:top-[7.3rem] lg:left-[23rem]'
        />

        <div className='flex h-fit overflow-hidden'>
          <div className='relative'>
            <motion.div
              initial={{ height: '100%' }}
              whileInView={{ height: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='w-full bg-black absolute top-0 left-0'
            />
            vamos criá-la ;)
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-[10rem]'>
        <div className='w-full'>
          <Forms />
        </div>

        <div className='text-[1.4rem] md:text-[2rem] mx-auto w-full h-full flex flex-col gap-20 justify-between p-[1rem_0_1rem_0rem] 2xl:p-[10rem_0_10rem_10rem]'>
          <div className='flex  flex-col relative h-[7rem]'>
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'anticipate' }}
              className='absolute left-0 bottom-0 w-[2px] rounded-[3px] h-full bg-white'
            />

            <div className='absolute h-full justify-between top-0 flex flex-col gap-4 ml-[2rem] text-white '>
              <div className='overflow-hidden'>
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'anticipate', delay: 0.05 }}
                >
                  São Paulo, Brasil
                </motion.div>
              </div>
              <div className='overflow-hidden'>
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'anticipate', delay: 0.1 }}
                >
                  Rua Keisuke Koza, 172 - Jardim Trussardi
                </motion.div>
              </div>
            </div>
          </div>

          <div className='flex flex-col relative h-[7rem]'>
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'anticipate' }}
              className='absolute left-0 bottom-0 w-[2px] rounded-[3px] h-full bg-white'
            />

            <div className='absolute h-full justify-between top-0 flex flex-col gap-4 ml-[2rem] text-white'>
              <div className='overflow-hidden'>
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'anticipate', delay: 0.2 }}
                >
                  (11) 91127-2487
                </motion.div>
              </div>

              <div className='overflow-hidden'>
                <motion.div
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'anticipate', delay: 0.25 }}
                >
                  agenciaconnectingpeople@gmail.com
                </motion.div>
              </div>
            </div>
          </div>

          <SocialMediaIcons />

          {/* <ReactWhatsapp
            number='+5511911272487'
            message='cu'
            // element={<div>cu</div>}
          /> */}
        </div>
      </div>

      <div className=' text-white text-[.7rem] md:text-[1.4rem] pt-[5rem] pb-[1rem] w-full h-full flex items-center justify-center'>
        Feito com <span className='text-primary'>&nbsp;&#10084;&nbsp;</span>pela
        Agência Connecting People &#169; Todos os direitos reservados, 2023.
      </div>
    </div>
  );
};

export default Contact;
