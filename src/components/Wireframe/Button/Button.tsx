import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    logIn?: ReactNode;
  };
}
/* @figmaId 0:558 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      {props.text?.logIn != null ? props.text?.logIn : <div className={classes.logIn}>Log in</div>}
    </div>
  );
});
