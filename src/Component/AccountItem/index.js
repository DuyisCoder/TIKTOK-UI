import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-1/348587330_1291033801500415_5927309239137273164_n.jpg?stp=cp6_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e1vYe9FwWo8AX9HigCu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBykpq_AzlMUXkS9G39ZBW2v5CfQVqV-wOcZShf256AjQ&oe=6495E9CE"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Minhduy</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>duyxitrum000</span>
            </div>
        </div>
    );
}

export default AccountItem;
