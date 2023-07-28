import { motion, useInView } from 'framer-motion';
import Point from './Point';
import { IStep } from './Timeline';
import React from 'react';
import { useEffect } from 'react';
import Card from './Card';
import { cards } from './Timeline';

type StepProps = React.ComponentPropsWithoutRef<'div'> & {
  step: IStep;
  isActive: boolean;
  isCurrent: boolean;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Step: React.FC<StepProps> = (props) => {
  const { isActive, isCurrent, setActiveIndex, step, activeIndex } = props;

  const ref = React.useRef<HTMLDivElement>(null!);
  const isVisible = useInView(ref, {
    margin: '0px 0px -340px 0px',
    once: true,
  });

  useEffect(() => {
    if (isVisible && step.state > activeIndex) setActiveIndex(step.state);
    if (isVisible && step.state === activeIndex + 1) setActiveIndex(step.state);
    if (!isVisible && step.state === activeIndex)
      setActiveIndex(step.state - 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div ref={ref} className='relative'>
      <Point isActive={isActive} isCurrent={isCurrent} />

      {isCurrent && (
        <motion.span
          initial={{
            scale: 0,
          }}
          animate={isCurrent && { scale: 1 }}
          className='text-white text-3xl absolute top-[calc(50%-10.25px)] -translate-y-full left-[calc(50%-10.25px)] -translate-x-full'
        >
          {step.icon}
        </motion.span>
      )}

      <Card
        isActive={isActive}
        position={
          step.state === 4 ? 'bottom' : step.state % 2 === 0 ? 'left' : 'right'
        }
      >
        <Card.Title>{cards[step.state].title}</Card.Title>
        <Card.Description>{cards[step.state].description}</Card.Description>
      </Card>
    </div>
  );
};

export default Step;
