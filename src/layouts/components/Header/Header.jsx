import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveStudioIcon,
    LogOutIcon,
    MenuIcon,
    PlusIcon,
    QuestionIcon,
    MessageIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Avatar from '~/components/Avatar';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
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
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

//==user login menu===
const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/@username',
    },
    {
        icon: <CoinIcon />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <LiveStudioIcon />,
        title: 'LIVE Studio',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting',
    },

    ...MENU_ITEMS,

    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const avatarRef = useRef();

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userLogin = true;

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                {/* logo */}
                <section className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </section>

                {/* search */}
                <Search />

                {/* Actions */}
                <section className={cx('actions')}>
                    <Button
                        to={config.routes.upload}
                        className={cx('upload')}
                        leftIcon={<PlusIcon />}
                    >
                        Upload
                    </Button>
                    {userLogin ? (
                        //using a wrapper <div> tag around the reference element solves tippy error
                        <div>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <Link
                                    to={config.routes.message}
                                    className={cx('action-btn')}
                                >
                                    <MessageIcon />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <Button primary>Log in</Button>
                    )}

                    <Menu
                        items={userLogin ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {userLogin ? (
                            <Avatar
                                ref={avatarRef}
                                className={cx('user-avatar')}
                                size={32}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7158034197800550405~c5_720x720.jpeg?x-expires=1668589200&x-signature=dObVbKBGKgxk3cNsBgKV8Pcdcj0%3D"
                                alt="user-name"
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <MenuIcon />
                            </button>
                        )}
                    </Menu>
                </section>
            </div>
        </header>
    );
}

export default Header;
