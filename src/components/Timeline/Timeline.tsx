import {
  FaArrowsSpin,
  FaBullseye,
  FaDollarSign,
  FaLightbulb,
  FaMagnifyingGlassChart,
} from 'react-icons/fa6';
import Line from './Line';
import { useRef, useState, useEffect, useCallback } from 'react';
import Step from './Step';
import { IStep } from '../../types';

const steps: IStep[] = [
  { state: 0, icon: <FaMagnifyingGlassChart /> },
  { state: 1, icon: <FaLightbulb /> },
  { state: 2, icon: <FaArrowsSpin /> },
  { state: 3, icon: <FaBullseye /> },
  { state: 4, icon: <FaDollarSign /> },
];

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const [scrolledHeight, setScrolledHeight] = useState(0);

  const [activeIndex, setActiveIndex] = useState(-1);

  const setActiveIndexCb = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const height = 1600;

  useEffect(() => {
    if (activeIndex !== 0)
      setScrolledHeight((height * activeIndex) / (steps.length - 1));
  }, [activeIndex]);

  return (
    <div ref={ref} style={{ height: height }} className='relative h-[2000px]'>
      <Line height={height} scrolledHeight={scrolledHeight} />

      {steps.map((step, idx) => (
        <div
          style={{ top: (100 * idx) / (steps.length - 1) + '%' }}
          className='absolute left-1/2 -translate-x-1/2 -translate-y-[40px]'
        >
          <Step
            step={step}
            isCurrent={idx === activeIndex}
            isActive={idx <= activeIndex}
            setActiveIndex={setActiveIndexCb}
            activeIndex={activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
