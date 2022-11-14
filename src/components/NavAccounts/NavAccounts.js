import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavAccounts.module.scss';
import AccountLink from './AccountLink';

const cx = classNames.bind(styles);

const accounts = [
    {
        username: 'theanh28entertainment',
        name: 'Theanh28 Entertainment',
        check: true,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668528000&x-signature=Zn4bbiOfVctBR%2B4XeZC0Oa0V7YQ%3D',
        follower: 7900000,
        like: 573.4e6,
    },
    {
        username: 'theanh28entertainment',
        name: 'Theanh28 Entertainment',
        check: true,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668528000&x-signature=Zn4bbiOfVctBR%2B4XeZC0Oa0V7YQ%3D',
        follower: 7900000,
        like: 573.4e6,
    },
    {
        username: 'theanh28entertainment',
        name: 'Theanh28 Entertainment',
        check: true,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668528000&x-signature=Zn4bbiOfVctBR%2B4XeZC0Oa0V7YQ%3D',
        follower: 7900000,
        like: 573.4e6,
    },
    {
        username: 'theanh28entertainment',
        name: 'Theanh28 Entertainment',
        check: true,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668528000&x-signature=Zn4bbiOfVctBR%2B4XeZC0Oa0V7YQ%3D',
        follower: 7900000,
        like: 573.4e6,
    },
];

function NavAccounts({ label }) {
    return (
        <section className={cx('container')}>
            <p className={cx('label')}>{label}</p>

            {accounts.length ? (
                accounts.map((account, index) => (
                    <AccountLink key={index} data={account} />
                ))
            ) : (
                <p>Accounts you follow will appear here</p>
            )}

            <p className={cx('more-btn')}>See all</p>
        </section>
    );
}

NavAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default NavAccounts;
