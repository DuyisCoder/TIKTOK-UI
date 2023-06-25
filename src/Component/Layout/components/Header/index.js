import { useState, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import routesConfig from '~/config/routes';

import Button from '~/Component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/Component/Popper/Menu';
import { UploadIcon } from '~/Component/Icons';
import { UploadIconMessage } from '~/Component/Icons/message';
import Image from '~/Component/Image';
import Search from '../Search';

const cx = classNames.bind(styles); // để có thể sài dấu ' - ' .post-iteam

const Menu_Items = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            // sub-menu
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    // Handle Logic
    const handleMenuOnChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
            //breakl
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...Menu_Items,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'LogOut',
            to: '/',
            separate: true, // đường line top
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIconMessage />
                                </button>
                            </Tippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </Fragment>
                    )}
                    <Menu items={currentUser ? userMenu : Menu_Items} onChange={handleMenuOnChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/348587330_1291033801500415_5927309239137273164_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e1vYe9FwWo8AX9HigCu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBykpq_AzlMUXkS9G39ZBW2v5CfQVqV-wOcZShf256AjQ&oe=6495E9CE"
                                // fallback=" https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/348587330_1291033801500415_5927309239137273164_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e1vYe9FwWo8AX9HigCu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBykpq_AzlMUXkS9G39ZBW2v5CfQVqV-wOcZShf256AjQ&oe=6495E9CE"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
