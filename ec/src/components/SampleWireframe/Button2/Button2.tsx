import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    register?: ReactNode;
  };
}
/* @figmaId 0:436 */
export const Button2: FC<Props> = memo(function Button2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      {props.text?.register != null ? props.text?.register : <div className={classes.register}>Register</div>}
    </div>
  );
});
