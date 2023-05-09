import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './StartBlock.module.css';
import { EllipseIcon2 } from './EllipseIcon2.js';
import { EllipseIcon } from './EllipseIcon.js';

interface Props {
  className?: string;
}

export const StartBlock: FC<Props> = memo(function Block02(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse}>
        <EllipseIcon/>
      </div>
      <div className={classes.ellipse2}>
        <EllipseIcon2 />
      </div>
      <div className={classes.imageLovePlanet}></div>
      <div className={classes.imageZeroWaste}></div>
    </div>
  );
});
