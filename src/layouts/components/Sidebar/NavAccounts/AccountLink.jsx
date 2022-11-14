import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import Avatar from '~/components/Avatar';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/AccountPreview';
import styles from './NavAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const handleRenderTooltip = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper className={cx('preview-wrapper')}>
                <AccountPreview data={data} type="less" />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <HeadlessTippy
                interactive
                delay={[500, 0]}
                offset={[-20, 0]}
                placement="bottom"
                render={handleRenderTooltip}
            >
                <Link to={`/@${data.username}`} className={cx('account-link')}>
                    <Avatar
                        src={data.avatar}
                        alt={data.username}
                        className={cx('avatar')}
                        size={32}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            {data.username}
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <p className={cx('name')}>{data.name}</p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
