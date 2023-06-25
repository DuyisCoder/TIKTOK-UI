import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadLessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';

import * as searchServices from '~/service/searchService';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import AccountItem from '~/Component/AccountItem';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500); // viết ra hàm useDebounce và sử dụng
    // Nhằm mục đích để nó res kết quả cuối cùng của API để tối ưu không cần res nhiều lần
    //  trong mỗi lần nhập

    useEffect(() => {
        // fix lỗi khi lần đầu searchValue là 1 chuỗi rỗng
        if (!debounce.trim()) {
            // khi xóa sẽ trở thành mảng rỗng
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
        //API
    }, [debounce]); // mỗi khi ng dùng nhập searchValue thay đổi-> gọi callback

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        // Nếu ko bắt đầu với dấu cách
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleSubmit = (e) => {
        // Dùng để khi click vào iconSearch sẽ ko focus ô input bằng onMouseDown
        e.preventDefault();
    };
    return (
        // Sử dụng <div></div> để wrapper lại thẻ tippy tránh warning
        <div>
            <HeadLessTippy
                interactive
                visible={showResult && searchResult.length > 0} // nếu có kết quả tìm kiếm thì hiện ra
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;
