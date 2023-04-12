import { memo, SVGProps } from 'react';

const UnionIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.67216 23.4815L22.5185 23.4815L15.8464 16.8093L1.90735e-06 16.8093L6.67216 23.4815ZM15.8464 16.8093L15.8464 0.962959L22.5185 7.63511L22.5185 23.4815L15.8464 16.8093Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(UnionIcon2);
export { Memo as UnionIcon2 };
