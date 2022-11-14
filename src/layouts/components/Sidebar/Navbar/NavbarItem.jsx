import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function NavbarItem({ to, title, icon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            end
        >
            <span className={cx('icon')}>{icon.default}</span>
            <span className={cx('active-icon')}>{icon.active}</span>
            <h3 className={cx('title')}>{title}</h3>
        </NavLink>
    );
}

NavbarItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default NavbarItem;
