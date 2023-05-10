import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ResourcesBlock.module.css';

interface Props {
  className?: string;
}

export const ResourcesBlock: FC<Props> = memo(function Block03(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.platformText}>
            <div className={classes.platformFor}>Платформа для тех, кто хочет заботиться о природе и будущем</div>
            <div className={classes.weOffer}>Мы предлагаем множество ресурсов, инструментов и событий, которые помогут вам жить более экологически чисто</div>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
              <div className={classes.cardIcon}>📩</div>
              <div className={classes.cardTitle}>Новости</div>
              <div className={classes.cardDefinition}>Посмотрите последние эко-новости</div>
              <button className={classes.learnMoreButton}>Узнать больше</button>
          </div>
          <div className={classes.card}>
              <div className={classes.cardIcon}>📢</div>
              <div className={classes.cardTitle}>Мероприятия</div>
              <div className={classes.cardDefinition}>Зарегистрируйтесь на предстоящие мероприятия </div>
              <button className={classes.learnMoreButton}>Узнать больше</button>
          </div>
          <div className={classes.card}>
              <div className={classes.cardIcon}>♻️</div>
              <div className={classes.cardTitle}>Помощь в сортировке</div>
              <div className={classes.cardDefinition}>Узнайте о том, как правильно сортировать отходы</div>
              <button className={classes.learnMoreButton}>Узнать больше</button>
          </div>
      </div>
    </div>
  );
});
