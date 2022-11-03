
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { CoinIcon, InboxIcon, KeyboardIcon, LanguageIcon, LiveIcon, LogOutIcon, MenuIcon, PlusIcon, QuestionIcon, MessageIcon, SettingIcon, UserIcon } from '~/components/Icons'
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)

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
            ]
        }
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts'
    }
]

//==user login menu===
const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/@username'
    },
    {
        icon: <CoinIcon />,
        title: 'Get Coins',
        to: '/coin'
    },
    {
        icon: <LiveIcon />,
        title: 'LIVE Studio',
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: '/setting'
    },

    ...MENU_ITEMS,

    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true
    },
]


function Header() {


    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }

    const userLogin = true

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt='tiktok' />
                    </Link>
                </div>

                {/* search */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    <Button
                        to='/upload'
                        className={cx('upload')}
                        leftIcon={<PlusIcon />}
                    >
                        Upload
                    </Button>
                    {userLogin ? (
                        <>
                            <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                                <Link to='/message' className={cx('action-btn')}>
                                    <MessageIcon />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={userLogin ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {userLogin ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/efc7a898687c3447746a365097dc0482~c5_100x100.jpeg?x-expires=1667379600&x-signature=SYB3%2FkFyoHiV%2FF%2FEN0UUVxfpM98%3D"
                                alt='user-name'
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <MenuIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header >
    );
}

export default Header;