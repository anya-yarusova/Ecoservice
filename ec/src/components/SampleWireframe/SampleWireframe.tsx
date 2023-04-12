import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Block02 } from './Block02/Block02';
import { Block19 } from './Block19/Block19';
import { Block26 } from './Block26/Block26';
import { Button2 } from './Button2/Button2';
import { Ellipse } from './Ellipse/Ellipse';
import { Rectangle } from './Rectangle/Rectangle';
import { SampleLogo } from './SampleLogo/SampleLogo';
import classes from './SampleWireframe.module.css';
import { TheLargestCommunityOfPhotoEnth } from './TheLargestCommunityOfPhotoEnth/TheLargestCommunityOfPhotoEnth';

interface Props {
  className?: string;
  hide?: {
    ellipse?: boolean;
    union?: boolean;
    union2?: boolean;
  };
}
/* @figmaId 0:817 */
export const SampleWireframe: FC<Props> = memo(function SampleWireframe(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.footerC}>
        <div className={classes.PhotoInc2019WeLoveOurUsers}>© Photo, Inc. 2019. We love our users!</div>
        <Ellipse
          className={classes.ellipse}
          hide={{
            ellipse: true,
          }}
        />
        <div className={classes._69bbc51c918f70d3c0a485e8e5e1fd}></div>
        <div className={classes._8e3ad14f128756f074046f1d3633dc}></div>
        <div className={classes.frame601}>
          <div className={classes.unnamed}>Эк</div>
          <div className={classes.logo}></div>
          <div className={classes.unnamed2}>сервис</div>
        </div>
        <div className={classes.rectangle}></div>
        <div className={classes._74b56a833667a6f88689ea5092e299}></div>
      </div>
      <div className={classes.bodyE}>
        <Block26 />
      </div>
      <div className={classes.bodyB}>
        <Block19 />
        <div className={classes.stock_vector_abstract_blue_smo}></div>
        <div className={classes.stock_vector_abstract_blue_smo2}></div>
      </div>
      <div className={classes.heroE}>
        <Block02 />
        <TheLargestCommunityOfPhotoEnth
          className={classes.theLargestCommunityOfPhotoEnth2}
          text={{
            theLargestCommunityOfPhotoEnth: (
              <div className={classes.theLargestCommunityOfPhotoEnth}>
                Присоединяйтесь к нашей миссии по спасению планеты
              </div>
            ),
          }}
        />
        <Button2
          className={classes.button}
          text={{
            register: <div className={classes.joinToday}>Присоединиться</div>,
          }}
        />
      </div>
      <div className={classes.navigationD}>
        <div className={classes.unnamed3}>О нас</div>
        <div className={classes.unnamed4}>Новости</div>
        <div className={classes.unnamed5}>Мероприятия</div>
        <div className={classes.unnamed6}>Помощь в сортировке</div>
        <div className={classes.unnamed7}>Ресурсы</div>
        <div className={classes.frame602}>
          <SampleLogo
            className={classes.sampleLogo}
            hide={{
              union: true,
              union2: true,
            }}
            text={{
              photo: <div className={classes.photo}>Эк</div>,
            }}
          />
          <div className={classes.logo2}></div>
          <div className={classes.unnamed8}>сервис</div>
        </div>
      </div>
    </div>
  );
});
