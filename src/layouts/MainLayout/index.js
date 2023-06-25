import Header from '~/layouts/components/Header';
import SideBar from './Sidebar';
import styles from './MainLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function MainLayout({ children }) {
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

export default MainLayout;
