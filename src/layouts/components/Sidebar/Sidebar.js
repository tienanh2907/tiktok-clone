import classNames from 'classnames/bind';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import NavAccounts from '~/components/NavAccounts';
import config from '~/config';
import Navbar, { NavbarItem } from './Navbar';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('container')}>
            <Navbar>
                <NavbarItem
                    title="For You"
                    to={config.routes.home}
                    icon={{
                        default: <HomeIcon />,
                        active: <HomeActiveIcon />,
                    }}
                />
                <NavbarItem
                    title="Following"
                    to={config.routes.following}
                    icon={{
                        default: <FollowingIcon />,
                        active: <FollowingActiveIcon />,
                    }}
                />
                <NavbarItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={{
                        default: <LiveIcon />,
                        active: <LiveActiveIcon />,
                    }}
                />
            </Navbar>
            <NavAccounts label="Suggested accounts" />
        </aside>
    );
}

export default Sidebar;
