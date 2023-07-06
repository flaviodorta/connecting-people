import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useEventListener, useIsFirstRender, useMediaQuery } from 'usehooks-ts';
import { useAtom } from 'jotai';
import { scrollYAtom, topAtom } from '../jotai/atoms';

const Timeline = () => {
  const ref2 = useRef<HTMLDivElement>(null!);
  const [scrollY] = useAtom(scrollYAtom);
  const [h, sH] = useState(() => {
    if (scrollY > 3140) return 981;
    else return 0;
  });

  const [top] = useAtom(topAtom);

  const matches = useMediaQuery('(max-width: 1024px)');

  const isMobile = matches;

  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);

  const isFirstRender = useIsFirstRender();

  useEventListener('scroll', () => {
    if (isFirstRender) return;

    if (h <= 980) {
      // if (h > 980) sH(981);
      sH(window.scrollY - top + 300);
    }
    if (h > 980) sH(981);

    if (h >= 0) setC1(true);
    else setC1(false);

    if (h >= 350) setC2(true);
    else setC2(false);

    if (h >= 650) setC3(true);
    else setC3(false);

    if (h >= 950) setC4(true);
    else setC4(false);
  });

  return (
    <section className='relative min-h-[1700px] bg-[#202020] flex justify-center'>
      <h3 className='relative h-fit block pt-[6rem] text-[3rem] lg:text-[4rem] text-white font-bold'>
        Nossa metodologia
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '66%' }}
          transition={{ duration: 1, ease: 'anticipate' }}
          viewport={{ once: true }}
          className='h-[10px] w-2  -bottom-2 absolute left-[34%] bg-primary'
        />
      </h3>

      {/* timeline bar */}
      <div>
        <motion.div
          ref={ref2}
          animate={{ height: c1 ? h : 0 }}
          transition={c2 ? { duration: 0.5 } : { duration: 0 }}
          className='absolute w-[5px] max-h-[980px] bg-primary left-[calc(50%-15.5rem)] lg:left-1/2 lg:-translate-x-[2.5px] top-[35rem]'
        />

        {/* first card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={c1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0 }}
          className='w-[19px] h-[19px] rounded-full bg-primary absolute top-[35rem] left-[calc(50%-15.5rem)] lg:left-1/2 -translate-x-[7px] lg:-translate-x-1/2'
        />

        <motion.div
          initial={isMobile ? { opacity: 0, x: 30 } : { opacity: 0, x: -30 }}
          animate={
            c1
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {}
          }
          style={
            isMobile
              ? {
                  left: '50%',
                  translateX: '-50%',
                }
              : { left: '50%', translateX: '-45rem' }
          }
          transition={{ duration: 0.5 }}
          className='shadow-lg px-6 py-4 lg:px-8 lg:py-6 absolute top-[calc(35rem-10rem)] bg-[#303030] rounded-md w-[25rem] lg:w-[40rem] h-fit'
        >
          <h4 className='text-[1.8rem] lg:text-[3rem] mb-[1.5rem] text-white font-bold text-center'>
            1. Compreensão
          </h4>

          <p className='text-white text-[1.3rem] lg:text-[1.6rem]'>
            A compreensão do problema é uma etapa crucial no processo de design,
            pois estabelece as bases para a criação de soluções eficazes e
            relevantes. É o ponto de partida para entender as necessidades e
            desafios que um projeto de design busca abordar.
          </p>
        </motion.div>

        {/* second card */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={c2 ? { opacity: 1 } : { opacity: 0 }}
          transition={c2 ? { duration: 0.5 } : { duration: 0 }}
          className='w-[19px] h-[19px] rounded-full bg-primary absolute top-[65rem] left-[calc(50%-15.5rem)] lg:left-1/2 -translate-x-[7px] lg:-translate-x-1/2'
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={c2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          style={
            isMobile
              ? {
                  left: '50%',
                  translateX: '-50%',
                }
              : { right: '50%', translateX: '45rem' }
          }
          className='shadow-lg px-6 py-4 lg:px-8 lg:py-6 absolute top-[calc(65rem-10rem)]  bg-[#303030] rounded-md w-[25rem] lg:w-[40rem] h-fit'
        >
          <h4 className='text-[1.8rem] lg:text-[3rem] mb-[3rem] text-white font-bold text-center'>
            2. Planejamento
          </h4>

          <p className='text-white text-[1.3rem] lg:text-[1.6rem]'>
            O planejamento desempenha um papel fundamental no processo de
            design, pois estabelece as bases para o sucesso do projeto. É nessa
            fase que os objetivos são definidos, os requisitos são analisados e
            as estratégias são traçadas para alcançar o resultado desejado.
          </p>
        </motion.div>

        {/* third card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={c3 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0 }}
          className='w-[19px] h-[19px] rounded-full bg-primary absolute top-[95rem] left-[calc(50%-15.5rem)] lg:left-1/2 -translate-x-[7px] lg:-translate-x-1/2'
        />

        <motion.div
          initial={{ opacity: 0, x: isMobile ? 30 : -30 }}
          animate={
            c3 ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile ? 30 : -30 }
          }
          style={
            isMobile
              ? {
                  left: '50%',
                  translateX: '-50%',
                }
              : { left: '50%', translateX: '-45rem' }
          }
          transition={{ duration: 0.5 }}
          className='shadow-lg px-6 py-4 lg:px-8 lg:py-6 absolute top-[calc(95rem-10rem)] left-[10rem] lg:left-[calc(50%-45rem)] bg-[#303030] rounded-md w-[25rem] lg:w-[40rem] h-fit'
        >
          <h4 className='text-[1.8rem] lg:text-[3rem] mb-[1.5rem] text-white font-bold text-center'>
            3. Desenvolvimento
          </h4>

          <p className='text-white text-[1.3rem] lg:text-[1.6rem]'>
            O desenvolvimento do processo de design envolve uma série de etapas
            interconectadas que visam transformar conceitos em realidade. Essas
            etapas podem incluir a criação de wireframes, protótipos, design
            visual, desenvolvimento de código, testes e iterações.
          </p>
        </motion.div>

        {/* four card */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={c4 ? { opacity: 1 } : { opacity: 0 }}
          transition={c4 ? { duration: 0.5 } : { duration: 0 }}
          className='w-[19px] h-[19px] rounded-full bg-primary absolute top-[125rem] left-[calc(50%-15.5rem)] lg:left-1/2 -translate-x-[7px] lg:-translate-x-1/2'
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={c4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5 }}
          style={
            isMobile
              ? {
                  left: '50%',
                  translateX: '-50%',
                }
              : { right: '50%', translateX: '45rem' }
          }
          className='shadow-lg px-6 py-4 lg:px-8 lg:py-6 absolute top-[calc(125rem-10rem)] bg-[#303030] rounded-md w-[25rem] lg:w-[40rem] h-fit'
        >
          <h4 className='text-[1.8rem] lg:text-[3rem] mb-[3rem] text-white font-bold text-center'>
            4. Entrega
          </h4>

          <p className='text-white text-[1.3rem] lg:text-[1.6rem]'>
            Durante a entrega de um projeto de design, é importante garantir que
            todos os elementos estejam funcionando corretamente e atendendo aos
            requisitos estabelecidos. Isso inclui a revisão final de todos os
            aspectos do design, desde a usabilidade e experiência do usuário até
            a consistência visual e funcionalidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
