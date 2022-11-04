import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Layout/AccountItem';
import styles from './Search.module.scss';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const searchRef = useRef();

    const debounced = useDebounce(searchValue, 700);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        (async () => {
            setLoading(true);
            try {
                const result = await searchServices.search(debounced);
                setSearchResult(result);
            } catch (error) {
                console.log('Header fetch api error: '+ error);
            } finally {
                setLoading(false);
            }
        })();
    }, [debounced]);

    const handleInputValue = (e) => {
        if (/^\s/.test(e.target.value)) {
            console.log('handle input value');
            searchRef.current.value = '';
        } else {
            setSearchValue(e.target.value);
        }
    };

    const handleClearInput = (e) => {
        setSearchValue('');
        setSearchResult([]);
        searchRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('search-title')}>Accounts</div>
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
                        ref={searchRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleInputValue}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-input')} onClick={handleClearInput}>
                            <ClearIcon />
                        </button>
                    )}

                    {/* loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    {/* search button */}
                    <span className={cx('span-spliter')}></span>
                    <button className={cx('search-button')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
