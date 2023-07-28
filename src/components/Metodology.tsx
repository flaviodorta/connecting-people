import { motion } from 'framer-motion';
import Timeline from './Timeline/Timeline';

const Metodology = () => {
  return (
    <section className='relative gap-[9rem] flex-col min-h-[2400px] bg-[#202020] flex items-center'>
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
    </section>
  );
};

export default Metodology;
