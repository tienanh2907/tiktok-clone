import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Avatar.module.scss';

const Avatar = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            size,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                ref={ref}
                src={fallback || src}
                alt={alt}
                className={classNames(styles.container, className)}
                style={{ width: size, height: size }}
                onError={handleError}
            />
        );
    },
);

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Avatar;
