import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 627 627' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={313.5} cy={313.5} r={313.5} fill='url(#paint0_linear_127_271)' stroke='white' strokeWidth={16} />
    <defs>
      <linearGradient id='paint0_linear_127_271' x1={313.5} y1={0} x2={313.5} y2={627} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#DFF5D4' />
        <stop offset={1} stopColor='#FFEDED' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
