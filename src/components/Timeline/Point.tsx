import React from 'react';
import { Variants, motion } from 'framer-motion';

type PointProps = {
  isActive: boolean;
  isCurrent: boolean;
};

const pointVariants: Variants = {
  inactive: {
    r: 10,
    fill: '#202020',
    stroke: '#10b0eb',
    strokeWidth: 4,
    strokeOpacity: 0.5,
  },

  active: {
    r: 10,
    fill: '#10b0eb',
    strokeWidth: 0,
    strokeOpacity: 0,
  },

  current: {
    r: 18,
    stroke: '#10b0eb',
    strokeWidth: 18,
    strokeOpacity: 0.4,
    fill: '#10b0eb',
  },
};

const Point: React.FC<PointProps> = ({ isActive, isCurrent }) => {
  return (
    <motion.svg width='80' height='80'>
      <g transform='translate(40,40)'>
        <motion.circle
          initial='inactive'
          animate={isCurrent ? 'current' : isActive ? 'active' : 'inactive'}
          variants={pointVariants}
          cx={0}
          cy={0}
        />
      </g>
    </motion.svg>
  );
};

export default Point;
