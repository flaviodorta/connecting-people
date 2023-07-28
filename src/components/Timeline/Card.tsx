import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { position } from '@chakra-ui/react';

type CardProps = React.PropsWithChildren &
  React.ComponentPropsWithoutRef<'div'> & {
    isActive: boolean;
    position: 'left' | 'right' | 'bottom';
  };

function Card(props: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const initial = isMobile ? { opacity: 0, x: 30 } : { opacity: 0, x: -30 };
  const animate = props.isActive
    ? {
        opacity: 1,
        x: 0,
      }
    : {};
  const style = isMobile
    ? {
        left: '50%',
        translateX: '-50%',
      }
    : props.position === 'left'
    ? { left: '-45rem' }
    : props.position === 'bottom'
    ? { top: '9rem', translateX: '-19rem' }
    : { right: '-45rem' };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      style={style}
      transition={{ duration: 0.5 }}
      className='shadow-lg px-6 py-4 lg:px-8 lg:py-6 absolute top-0 bg-[#303030] rounded-md w-[28rem] lg:w-[44rem] h-fit'
    >
      {props.children}

      <div
        style={{}}
        className={twMerge([
          'w-5 h-5 absolute -translate-y-1/2 top-[40px] rotate-45 bg-[#303030]',
          props.position === 'bottom'
            ? 'left-1/2 top-0'
            : props.position === 'left'
            ? 'right-0 translate-x-1/2'
            : 'left-0 -translate-x-1/2',
        ])}
      />
    </motion.div>
  );
}

Card.Title = (props: React.PropsWithChildren) => {
  return (
    <div className='text-[1.8rem] lg:text-[3rem] mb-[1.5rem] text-white font-bold text-center'>
      {props.children}
    </div>
  );
};

Card.Description = (props: React.PropsWithChildren) => {
  return (
    <p className='text-white text-[1.3rem] lg:text-[1.6rem]'>
      {props.children}
    </p>
  );
};

export default Card;
