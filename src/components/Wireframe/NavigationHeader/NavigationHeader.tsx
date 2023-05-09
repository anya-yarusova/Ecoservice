import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './NavigationHeader.module.css';
import classes2 from '../Wireframe.module.css';

interface Props {
    className?: string;
}
export const NavigationHeader: FC<Props> = memo(function Block01(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.logoHeader}>
                <div className={classes2.logoFrame}>
                    <div className={classes2.logoText}>Эк</div>
                    <div className={classes2.logo}></div>
                    <div className={classes2.logoText}>Божьи коровки</div>
                </div>
            </div>
            <div className={classes.navigationLinks} >
                <div className={classes.navigation}>О нас</div>
                <div className={classes.navigation}>Новости</div>
                <div className={classes.navigation}>Мероприятия</div>
                <div className={classes.navigation}>Помощь в сортировке</div>
                <div className={classes.navigation}>Ресурсы</div>
            </div>
        </div>
    );
});