import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Ellipse.module.css';
import { EllipseIcon } from './EllipseIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    ellipse?: boolean;
  };
}
/* @figmaId 0:571 */
export const Ellipse: FC<Props> = memo(function Ellipse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.ellipse && (
        <div className={classes.ellipse}>
          <EllipseIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});
