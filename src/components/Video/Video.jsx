import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FaPlay } from 'react-icons/fa';
import { MdPause } from 'react-icons/md';
import { BsFillChatDotsFill, BsFillHeartFill } from 'react-icons/bs';
import { IoIosShareAlt } from 'react-icons/io';

import { VolumeIcon, VolumeOffIcon } from '../Icons';
import styles from './Video.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const VideoInfo = ({ data }) => {
    return (
        <div className={cx('info-wrapper')}>
            <div className={cx('author-info')}>
                <h3 className={cx('author-username')}>username</h3>
                <h4 className={cx('author-nickname')}>nickname</h4>
            </div>
            <div className={cx('desc')}>
                Noi dung description #noidung1 #tagname #mota
            </div>
            <div className={cx('music')}>tenbaihat- tacgia </div>
        </div>
    );
};

const VideoContent = ({ data }) => {
    const [playing, setPlaying] = useState(false);
    // const [volume, setVolume] = useState();
    // const [volumeValue, setVolumeValue] = useState();
    const [muted, setMuted] = useState(
        () => JSON.parse(localStorage.getItem('muted')) ?? true,
    );
    //muted, progress, report

    const videoRef = useRef();
    //handle Events
    const handlePlay = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying((prev) => !prev);
        } else {
            videoRef.current.play();
            setPlaying((prev) => !prev);
        }
    };

    const handleMuted = () => {
        setMuted((prev) => {
            localStorage.setItem('muted', JSON.stringify(!prev));
            return !prev;
        });
    };

    // const handleVolumnChange = () => {
    //     setVolume(videoRef.current.volume);
    //     videoRef.current.volume = volume;
    // };

    const handleHeart = () => {};

    const handleVideoDetails = () => {};
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-player')}>
                <video
                    ref={videoRef}
                    className={cx('video')}
                    onClick={handleVideoDetails}
                    poster="https://files.fullstack.edu.vn/f8-tiktok/videos/840-63723a61b9375.jpg"
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/840-63723a60f27a2.mp4"
                    muted={muted}
                    loop
                />
                <div className={cx('video-control')}>
                    <button onClick={handlePlay}>
                        {playing ? (
                            <MdPause className={cx('play')} />
                        ) : (
                            <FaPlay className={cx('play')} />
                        )}
                    </button>
                    <button onClick={handleMuted}>
                        {muted ? (
                            <VolumeIcon className={cx('volume')} />
                        ) : (
                            <VolumeOffIcon className={cx('volume')} />
                        )}
                    </button>
                    <div className={cx('time')}>
                        <p className={cx('time--value')}>0:00</p>
                        <span className={cx('time--progressbar')}></span>
                        <p className={cx('time--value')}>0:35</p>
                    </div>
                </div>
            </div>

            <div className={cx('action-container')}>
                <button className={cx('action-item')}>
                    <div className={cx('icon-wrapper')} onClick={handleHeart}>
                        <BsFillHeartFill className={cx('action-icon')} />
                    </div>
                    <span className={cx('item__count')}>236</span>
                </button>
                <button className={cx('action-item')}>
                    <div className={cx('icon-wrapper')} onClick={handleVideoDetails}>
                        <BsFillChatDotsFill className={cx('action-icon')} />
                    </div>
                    <span className={cx('item__count')}>236</span>
                </button>
                <button className={cx('action-item')}>
                    <div className={cx('icon-wrapper')}>
                        {/* tooltip share */}
                        <IoIosShareAlt className={cx('action-icon')} />
                    </div>
                    <span className={cx('item__count')}>236</span>
                </button>
            </div>
        </div>
    );
};

function Video({ data = [], type }) {
    return (
        <article className={cx('container')}>
            <Link to={`/@username`} className={cx('avatar-author')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f987a024a57f762867f2e560c66efb76~c5_100x100.jpeg?x-expires=1671375600&x-signature=364hqa06k5hvKbtAy2VeeOoqUY8%3D"
                    alt="avatar author"
                    className={cx('image-avatar')}
                />
            </Link>
            <div className={cx('content')}>
                <VideoInfo {...data} />
                <VideoContent {...data} />
            </div>
        </article>
    );
}

export default Video;
