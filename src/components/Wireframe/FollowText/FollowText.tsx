import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './FollowText.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    followText?: ReactNode;
  };
}
/* @figmaId 0:450 */
export const FollowText: FC<Props> = memo(function FollowText(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.followText != null ? (
        props.text?.followText
      ) : (
        <div className={classes.followText}></div>
      )}
    </div>
  );
});
