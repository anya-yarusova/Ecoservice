import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './JoinButton.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const JoinButton: FC<Props> = memo(function JoinButton(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button className={classes.joinTodayButton}>Присоединиться</button>
    </div>
  );
});
