import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    rounded = false,
    size = 'medium',
    disabled = false,
    leftIcon,
    rightIcon,
    className,
    ...props
}) {
    let Component = 'button'
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        disabled,
        [size]: size
    })

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}
export default Button;