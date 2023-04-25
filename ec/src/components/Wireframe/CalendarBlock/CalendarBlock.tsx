import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './CalendarBlock.module.css';
import { FrameIcon2 } from './FrameIcon2.js';
import { FrameIcon3 } from './FrameIcon3.js';
import { FrameIcon4 } from './FrameIcon4.js';
import { FrameIcon } from './FrameIcon.js';
import { Rectangle3Icon2 } from './Rectangle3Icon2.js';
import { Rectangle3Icon } from './Rectangle3Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 116:258 */
export const CalendarBlock: FC<Props> = memo(function CalendarBlock(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame}>
        <div className={classes.frame600}></div>
        <div className={classes.unnamed}>Парк</div>
        <div className={classes.unnamed2}>Посадка деревьев</div>
        <div className={classes.frame2}>
          <div className={classes.unnamed3}>Зарегестрироваться</div>
          <div className={classes.frame3}>
            <FrameIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.imageRemovebgPreview121}></div>
        <div className={classes._25}>02.05</div>
      </div>
      <div className={classes.frame4}>
        <div className={classes.frame6002}>
          <div className={classes.shinyHappyStanding}></div>
          <div className={classes.imageRemovebgPreview1}></div>
        </div>
        <div className={classes.frame5}>
          <div className={classes.unnamed4}>Севкабель</div>
          <div className={classes.unnamed5}>Эко-ярмарка</div>
          <div className={classes.frame6}>
            <div className={classes.unnamed6}>Зарегестрироваться</div>
            <div className={classes.frame7}>
              <FrameIcon2 className={classes.icon2} />
            </div>
          </div>
        </div>
        <div className={classes._284304}>28.04 - 30.04 </div>
        <div className={classes.rectangle3}>
          <Rectangle3Icon className={classes.icon3} />
        </div>
        <div className={classes.unnamed7}>+ баллы</div>
      </div>
      <div className={classes.frame8}>
        <div className={classes.frame9}>
          <div className={classes.frame6003}>
            <div className={classes.rectangle32}>
              <Rectangle3Icon2 className={classes.icon4} />
            </div>
            <div className={classes.unnamed8}>+ баллы</div>
          </div>
          <div className={classes.frame10}>
            <div className={classes.unnamed9}>Зеленогорск</div>
            <div className={classes.unnamed10}>Уборка пляжей залива</div>
            <div className={classes.frame11}>
              <div className={classes.unnamed11}>Зарегестрироваться</div>
              <div className={classes.frame12}>
                <FrameIcon3 className={classes.icon5} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes._164}>16.04</div>
      </div>
      <div className={classes.frame13}>
        <div className={classes.frame6004}></div>
        <div className={classes.frame14}>
          <div className={classes.unnamed12}>Севкабель</div>
          <div className={classes.unnamed13}>Мастер-класс по изготовлению шоперов</div>
          <div className={classes.frame15}>
            <div className={classes.unnamed14}>Зарегестрироваться</div>
            <div className={classes.frame16}>
              <FrameIcon4 className={classes.icon6} />
            </div>
          </div>
        </div>
        <div className={classes._14}>01.04</div>
        <div className={classes.imageRemovebgPreview111}></div>
      </div>
      <div className={classes.unnamed15}>
        Эко-мероприятие - отличная возможность пообщаться с единомышленниками, которые разделяют вашу страсть к охране
        окружающей среды
      </div>
      <div className={classes.unnamed16}>Календарь предстоящих событий</div>
      <div className={classes.imageRemovebgPreview91}></div>
    </div>
  );
});
