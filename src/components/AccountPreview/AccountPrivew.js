import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import Avatar from '~/components/Avatar';
import { Link } from 'react-router-dom';
import convertNumber from '~/utils/convertNumber';

const cx = classNames.bind(styles);

function AccountPreview({ data, type = 'less' }) {
    return (
        <div className={cx('container')}>
            <header className={cx('preview-header')}>
                <Link to={`/@${data.username}`}>
                    <Avatar
                        src={data.avatar}
                        alt={data.username}
                        className={cx('avatar')}
                        size={44}
                    />
                </Link>
                <Button primary className={cx('account-card-follow')}>
                    Follow
                </Button>
            </header>
            <div className={cx('info')}>
                <Link to={`/@${data.username}`}>
                    <h4 className={cx('username')}>
                        {data.username}
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                </Link>
                <Link to={`/@${data.username}`}>
                    <p className={cx('name')}>{data.name}</p>
                </Link>
            </div>
            <p className={cx('account-stat')}>
                <strong className={cx('value')}>{convertNumber(data.follower)}</strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{convertNumber(data.like)}</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.bool,
};

export default AccountPreview;
