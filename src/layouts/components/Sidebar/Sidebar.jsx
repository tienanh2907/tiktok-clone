import classNames from 'classnames/bind';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons';
import config from '~/configs';
import NavAccounts from './components/NavAccounts';
import Navbar, { NavbarItem } from './components/Navbar';
import Discover from './components/Discover';
import styles from './Sidebar.module.scss';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
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
                <NavAccounts label="Following accounts" />
                <Discover />
                <Footer />
            </aside>
        </div>
    );
}

export default Sidebar;
