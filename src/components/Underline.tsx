import { useMediaQuery } from 'usehooks-ts';
import { motion } from 'framer-motion';

const Underline = () => {
  const large = useMediaQuery('(min-width: 1024px)');
  const medium = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  // const small = useMediaQuery('(max-width: 767px)');
  const spanWidth = large ? 58 : medium ? 48 : 32;

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: spanWidth }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'anticipate' }}
      className='underline -bottom-1 md:bottom-0 left-0 absolute h-[5px] z-10'
    />
  );
};

export default Underline;
