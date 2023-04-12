import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.1825 6.18348C10.2406 6.12527 10.3095 6.07909 10.3855 6.04758C10.4614 6.01608 10.5428 5.99986 10.625 5.99986C10.7072 5.99986 10.7886 6.01608 10.8645 6.04758C10.9405 6.07909 11.0094 6.12527 11.0675 6.18348L14.8175 9.93348C14.8757 9.99153 14.9219 10.0605 14.9534 10.1364C14.9849 10.2124 15.0011 10.2938 15.0011 10.376C15.0011 10.4582 14.9849 10.5396 14.9534 10.6155C14.9219 10.6914 14.8757 10.7604 14.8175 10.8185L11.0675 14.5685C10.9501 14.6858 10.791 14.7518 10.625 14.7518C10.459 14.7518 10.2999 14.6858 10.1825 14.5685C10.0651 14.4511 9.99921 14.2919 9.99921 14.126C9.99921 13.96 10.0651 13.8008 10.1825 13.6835L13.4913 10.376L10.1825 7.06848C10.1243 7.01042 10.0781 6.94145 10.0466 6.86552C10.0151 6.78959 9.99889 6.70818 9.99889 6.62598C9.99889 6.54377 10.0151 6.46237 10.0466 6.38643C10.0781 6.3105 10.1243 6.24153 10.1825 6.18348Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5 10.376C5 10.2102 5.06585 10.0512 5.18306 9.93403C5.30027 9.81682 5.45924 9.75098 5.625 9.75098H13.75C13.9158 9.75098 14.0747 9.81682 14.1919 9.93403C14.3092 10.0512 14.375 10.2102 14.375 10.376C14.375 10.5417 14.3092 10.7007 14.1919 10.8179C14.0747 10.9351 13.9158 11.001 13.75 11.001H5.625C5.45924 11.001 5.30027 10.9351 5.18306 10.8179C5.06585 10.7007 5 10.5417 5 10.376Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
