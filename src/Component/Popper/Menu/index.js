import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ hideOnClick = false, children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]); // truyền vào object vì nó đại diện dữ liệu
    const current = history[history.length - 1]; // lấy ra pt cuối mảng
    // Render ra List Item
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            hideOnClick={hideOnClick} // để khi click vào avt thì ko bị ẩn
            // visible
            delay={[0, 700]} // 0 là time hiện, khi ẩn thì bỏ chuột ra 5s thì ẩn
            interactive
            offset={[30, 8]} // chiều ngang-cao
            placement="bottom-end" // để thẻ hiện ở dưới bottom khi hover do Tippy hổ trợ
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Languege'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}

                        <div className={cx('menu-scroll')}> {renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => {
                setHistory((prev) => prev.slice(0, 1));
            }} // trả về menu đầu tiên của Language
        >
            {children}
        </Tippy>
    );
}

export default Menu;
