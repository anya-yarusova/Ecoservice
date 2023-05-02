import { memo, SVGProps } from 'react';

const Rectangle3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 101 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H93C97.4183 0 101 3.58172 101 8V35C101 39.4183 97.4183 43 93 43H8C3.58172 43 0 39.4183 0 35V8Z'
      fill='#B9F1FE'
    />
  </svg>
);
const Memo = memo(Rectangle3Icon2);
export { Memo as Rectangle3Icon2 };
