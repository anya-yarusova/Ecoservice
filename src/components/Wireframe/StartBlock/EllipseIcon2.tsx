import { memo, SVGProps } from 'react';

const EllipseIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 648 648' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={324} cy={324} r={324} fill='url(#paint0_linear_127_272)' stroke='white' strokeWidth={16} />
    <defs>
      <linearGradient id='paint0_linear_127_272' x1={324} y1={0} x2={324} y2={648} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#CFF4C2' />
        <stop offset={1} stopColor='#FFEDED' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(EllipseIcon2);
export { Memo as EllipseIcon2 };
