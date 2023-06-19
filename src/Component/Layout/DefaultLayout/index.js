import Header from '~/Component/Layout/components/Header';
import SideBar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <SideBar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
