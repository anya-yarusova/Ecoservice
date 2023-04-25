import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.8464 0.962961H8.09871e-06L6.67216 7.63511H22.5185L15.8464 0.962961ZM6.67215 7.63512V23.4815L-4.84361e-07 16.8093V0.962965L6.67215 7.63512Z'
      fill='#CCCCCC'
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
