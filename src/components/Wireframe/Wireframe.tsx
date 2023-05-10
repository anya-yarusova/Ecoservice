import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { StartBlock } from './StartBlock/StartBlock';
import { ResourcesBlock } from './ResourcesBlock/ResourcesBlock';
import { CalendarBlock } from './CalendarBlock/CalendarBlock';
import { JoinButton } from './JoinButton/JoinButton';
import classes from './Wireframe.module.css';
import {NavigationHeader} from "./NavigationHeader/NavigationHeader";
import {LinksFooter} from "./LinksFooter/LinksFooter";

interface Props {
  className?: string;
  hide?: {
    ellipse?: boolean;
    union?: boolean;
    union2?: boolean;
  };
}

export const Wireframe: FC<Props> = memo(function Wireframe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.navigationHeader}>
            <NavigationHeader />
        </div>
        <div className={classes.followBlock}>
            <StartBlock />
            <div className={classes.followText}>Присоединяйтесь к нашей миссии по спасению планеты</div>
            <JoinButton
                className={classes.button}
            />
        </div>
        <div className={classes.platformBlock}>
            <div className={classes.spiral}></div>
            <div className={classes.spiral2}></div>
            <ResourcesBlock />
        </div>
        {/*
        <div className={classes.bodyE}>
            <CalendarBlock />
        </div>
        */}
        <div className={classes.linksFooter}>
            <LinksFooter />
        </div>
    </div>
  );
});
