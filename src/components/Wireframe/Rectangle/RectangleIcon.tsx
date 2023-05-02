import { memo, SVGProps } from 'react';

const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 840 960' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H840V960H0V0Z' fill='#E5E5E5' />
    <path d='M0 0H840M0 0V960M0 0L840 960M840 0V960M840 0L0 960M840 960H0' stroke='black' strokeOpacity={0.3} />
  </svg>
);
const Memo = memo(RectangleIcon);
export { Memo as RectangleIcon };
