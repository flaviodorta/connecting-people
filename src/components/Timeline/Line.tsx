import { MotionValue, motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type LineProps = {
  height: number;
  scrolledHeight: number;
};

const Line: React.FC<LineProps> = (props) => {
  // const animationControls = useAnimation();

  // useEffect(() => {
  //   animationControls.start({ scaleY: props.scrolledHeight / props.height });
  // }, [props.scrolledHeight]);

  return (
    <motion.svg className='h-full w-[6px] flex justify-center'>
      <g transform={`translate(3, 0)`}>
        <motion.line
          stroke='#10b0eb'
          strokeWidth='4'
          initial={{
            x1: 0,
            y1: 0,
            x2: 0,
          }}
          animate={{
            y2: props.scrolledHeight,
          }}
          opacity='1'
          transition={{
            type: 'tween',
            duration: 0.6,
          }}
          strokeLinecap='round'
        />
        <motion.line
          stroke='#10b0eb'
          strokeWidth='4'
          initial={{
            x1: 0,
            x2: 0,
            y2: props.height,
          }}
          animate={{
            y1: props.scrolledHeight,
          }}
          strokeDasharray='15'
          opacity='0.5'
          transition={{
            type: 'tween',
            duration: 0.6,
          }}
          strokeLinecap='round'
        />
      </g>
    </motion.svg>
  );
};

export default Line;
