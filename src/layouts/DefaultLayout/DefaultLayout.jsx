import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    let pageContent = children;
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body-container')}>
                <Sidebar />

                {pageContent}
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
