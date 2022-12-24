import classNames from 'classnames/bind';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

const discovers = [
    {
        type: 1,
        title: 'suthatla',
    },
    {
        type: 1,
        title: 'mackedoi',
    },
    {
        type: 2,
        title: 'genzlife',
    },
];

function Discover() {
    return (
        <section className={cx('container')}>
            <p className={cx('label')}>Discover</p>
            {discovers.map((discover, index) => (
                <div key={index} className={cx('discover')}>
                    <i className={cx('icon')} />
                    <p className={cx('title')}>{discover.title}</p>
                </div>
            ))}
        </section>
    );
}

export default Discover;
