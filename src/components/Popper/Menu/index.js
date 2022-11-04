import { useState } from 'react';
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles)
const defaultFunc = () => { }

function Menu({ children, items = [], onChange = defaultFunc }) {
    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {

            return <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (item.children) {
                        setHistory(prev => [...prev, item.children])
                    } else {
                        onChange(item)
                    }
                }}
            />
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 650]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory(prev => prev.slice(0, prev.length - 1))
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;