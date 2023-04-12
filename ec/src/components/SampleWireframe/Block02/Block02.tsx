import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Block02.module.css';
import { EllipseIcon2 } from './EllipseIcon2.js';
import { EllipseIcon } from './EllipseIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 112:294 */
export const Block02: FC<Props> = memo(function Block02(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse}>
        <EllipseIcon className={classes.icon} />
      </div>
      <div className={classes.ellipse2}>
        <EllipseIcon2 className={classes.icon2} />
      </div>
      <div className={classes.frame}></div>
      <div className={classes.imageRemovebgPreview11}></div>
      <div className={classes.imageRemovebgPreview61}></div>
    </div>
  );
});
