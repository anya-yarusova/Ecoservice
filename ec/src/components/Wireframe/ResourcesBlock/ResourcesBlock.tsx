import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Button } from '../Button/Button';
import classes from './ResourcesBlock.module.css';

interface Props {
  className?: string;
}
/* @figmaId 113:271 */
export const ResourcesBlock: FC<Props> = memo(function Block19(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.frame}>
        <div className={classes.frame2}>
          <div className={classes.unnamed}>♻️</div>
          <div className={classes.unnamed2}>Помощь в сортировке</div>
          <div className={classes.unnamed3}>Узнайте о том, как правильно сортировать отходы</div>
        </div>
        <Button
          className={classes.button}
          text={{
            logIn: <div className={classes.learnMore}>Узнать больше</div>,
          }}
        />
      </div>
      <div className={classes.frame3}>
        <div className={classes.frame4}>
          <div className={classes.unnamed4}>📢</div>
          <div className={classes.unnamed5}>Мероприятия</div>
          <div className={classes.unnamed6}>Зарегистрируйтесь на предстоящие мероприятия </div>
        </div>
        <Button
          className={classes.button2}
          text={{
            logIn: <div className={classes.learnMore2}>Узнать больше</div>,
          }}
        />
      </div>
      <div className={classes.frame5}>
        <div className={classes.rectangle}></div>
        <div className={classes.frame6}>
          <div className={classes.unnamed7}>📩</div>
          <div className={classes.unnamed8}>Новости</div>
          <div className={classes.unnamed9}>Посмотрите последние эко-новости</div>
        </div>
        <Button
          className={classes.button3}
          text={{
            logIn: <div className={classes.learnMore3}>Узнать больше</div>,
          }}
        />
      </div>
      <div className={classes.frame603}>
        <div className={classes.rectangle2}></div>
        <div className={classes.unnamed10}>
          Мы предлагаем множество ресурсов, инструментов и событий, которые помогут вам жить более экологически чисто
        </div>
        <div className={classes.frame1}></div>
        <div className={classes.unnamed11}>Платформа для тех, кто хочет заботиться о природе и будущем</div>
      </div>
    </div>
  );
});
