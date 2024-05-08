import React from "react";
import classNames from "classnames/bind";
import styles from "styles/base.scss"

const cx = classNames.bind(styles);

const AppHeader = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('logo-wrapper')}>
                <span className={cx('logo')}></span>
            </div>
        </header>
    )
}

export default AppHeader;