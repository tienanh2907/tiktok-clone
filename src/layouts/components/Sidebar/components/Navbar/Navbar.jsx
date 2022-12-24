import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

function Navbar({ children }) {
    return <nav className={classNames(styles.navbar)}>{children}</nav>;
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Navbar;
