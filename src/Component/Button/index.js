import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    disable = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    children,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps, // sử dụng để chuyển tag mới bằng target='_blank'
    };
    // Nếu nó là link nội bộ thì set Component =LINK
    // Ngược lại nếu n ó có href thì set nó là thẻ a
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    //Nếu có disable thì
    if (disable) {
        Object.keys(props).forEach((key) => {
            // nếu bắt đầu bằng chữ on và kiểu dữ liệu của props key là 1 hàm
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className, // để custom css riêng khi sài sẽ ghi vào props className={cx(....)}
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded, // làm btn tròn bo góc
        leftIcon, // KHI SỬ DỤNG leftIcon={<FontAwesomeIcon icon={faSignIn} />}
        rightIcon,
    });
    return (
        <div>
            <Component className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        </div>
    );
}

export default Button;
