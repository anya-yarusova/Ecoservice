import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SampleLogo.module.css';
import { UnionIcon2 } from './UnionIcon2.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    union?: boolean;
    union2?: boolean;
  };
  text?: {
    photo?: ReactNode;
  };
}
/* @figmaId 0:422 */
export const SampleLogo: FC<Props> = memo(function SampleLogo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.photo != null ? props.text?.photo : <div className={classes.photo}>photo</div>}
      {!props.hide?.union && (
        <div className={classes.union}>
          <UnionIcon className={classes.icon} />
        </div>
      )}
      {!props.hide?.union2 && (
        <div className={classes.union2}>
          <UnionIcon2 className={classes.icon2} />
        </div>
      )}
    </div>
  );
});
