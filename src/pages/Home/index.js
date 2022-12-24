import classNames from 'classnames/bind';

import Video from '~/components/Video';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const TYPE_VIDEO = 'for-you';

function Home() {
    return (
        <section className={cx('main-container')}>
            <Video data type={TYPE_VIDEO} />
        </section>
    );
    //thay doi layout
}

export default Home;
