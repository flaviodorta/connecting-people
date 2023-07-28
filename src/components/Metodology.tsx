import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline/Timeline';
import { useIntersectionObserver } from 'usehooks-ts';
import { useSetAtom } from 'jotai';
import { routeAtom } from '../jotai/atoms';

const Metodology = () => {
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
      className='relative gap-[9rem] flex-col min-h-[2400px] bg-[#202020] flex items-center'
    >
      <h3 className='relative h-fit block mb-[8.75rem] pt-[9rem] text-[3rem] lg:text-[4rem] text-white font-bold'>
        Nossa metodologia
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: '66%' }}
          transition={{ duration: 1, ease: 'anticipate' }}
          viewport={{ once: true }}
          className='h-[10px] w-2  -bottom-2 absolute left-[34%] bg-primary'
        />
      </h3>

      <Timeline />
    </div>
  );
};

export default Metodology;
