import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { StartBlock } from './StartBlock/StartBlock';
import { ResourcesBlock } from './ResourcesBlock/ResourcesBlock';
import { CalendarBlock } from './CalendarBlock/CalendarBlock';
import { JoinButton } from './JoinButton/JoinButton';
import { Ellipse } from './Ellipse/Ellipse';
import classes from './Wireframe.module.css';
import {NavigationHeader} from "./NavigationHeader/NavigationHeader";

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

        <div className={classes.footerC}>
        <Ellipse
          className={classes.ellipse}
          hide={{
            ellipse: true,
          }}
        />
        <div className={classes._69bbc51c918f70d3c0a485e8e5e1fd}></div>
        <div className={classes._8e3ad14f128756f074046f1d3633dc}></div>
        <div className={classes.logoFooter}>
            <div className={classes.logoFrame}>
                <div className={classes.logoText}>Эк</div>
                <div className={classes.logo}></div>
                <div className={classes.logoText}>Божьи коровки</div>
            </div>
        </div>
        <div className={classes.rectangle}></div>
        <div className={classes._74b56a833667a6f88689ea5092e299}></div>
      </div>
      <div className={classes.bodyE}>
        <CalendarBlock />
      </div>
      <div className={classes.bodyB}>
        <ResourcesBlock />
        <div className={classes.stock_vector_abstract_blue_smo}></div>
        <div className={classes.stock_vector_abstract_blue_smo2}></div>
      </div>

    </div>
  );
});
