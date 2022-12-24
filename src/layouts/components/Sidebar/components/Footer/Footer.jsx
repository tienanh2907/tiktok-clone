import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <section className={cx('container')}>
            <div className={cx('link-wrapper')}>
                <a
                    href="https://www.tiktok.com/about?lang=en"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    About
                </a>
                <a
                    href="https://www.tiktok.com/about/contact?lang=en"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Contact
                </a>
                <a
                    href="https://careers.tiktok.com"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Careers
                </a>
                <a
                    href="https://developers.tiktok.com/?refer=tiktok_web"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Developers
                </a>
                <a
                    href="https://support.tiktok.com/en"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Help
                </a>
                <a
                    href="https://www.tiktok.com/legal/privacy-policy-row?lang=en"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Privacy
                </a>
                <a
                    href="https://www.tiktok.com/community-guidelines?lang=en"
                    className={cx('footer-element', 'external-link')}
                    target="_blank"
                    rel="noopened noreferrer"
                >
                    Community Guidelines
                </a>
            </div>
            <span className={cx('footer-element')}>© TikTok Clone</span>
        </section>
    );
}

export default Footer;
