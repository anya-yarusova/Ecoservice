import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LinksFooter.module.css';
import classes2 from '../Wireframe.module.css';

interface Props {
    className?: string;
}
export const LinksFooter: FC<Props> = memo(function Footer(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <hr/>
            <div className={classes.logoFooter}>
                <div className={classes2.logoFrame}>
                    <div className={classes2.logoText}>Эк</div>
                    <div className={classes2.logo}></div>
                    <div className={classes2.logoText}>сервис</div>
                </div>
            </div>
            <div className={classes.socialLinks}>
                <div className={classes.socialIcon}><div className={classes.tgIcon}></div></div>
                <div className={classes.socialIcon}><div className={classes.instaIcon}></div></div>
                <div className={classes.socialIcon}><div className={classes.vkIcon}></div></div>
            </div>
        </div>
    );
});