import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TheLargestCommunityOfPhotoEnth.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    theLargestCommunityOfPhotoEnth?: ReactNode;
  };
}
/* @figmaId 0:450 */
export const TheLargestCommunityOfPhotoEnth: FC<Props> = memo(function TheLargestCommunityOfPhotoEnth(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.theLargestCommunityOfPhotoEnth != null ? (
        props.text?.theLargestCommunityOfPhotoEnth
      ) : (
        <div className={classes.theLargestCommunityOfPhotoEnth}>The largest community of photo enthusiasts</div>
      )}
    </div>
  );
});
