import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle.module.css';
import { RectangleIcon } from './RectangleIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 0:448 */
export const Rectangle: FC<Props> = memo(function Rectangle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon} />
      </div>
    </div>
  );
});
