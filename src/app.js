import React, { Component } from 'react';
import bem from 'bem-classnames-maker';

import './app.less';

const cx = bem('app');

class App extends Component {
    render() {
        return (
            <div className={cx()}>
                <div className={cx('logo')}>
                    <img src={require('./images/logo.png')} />
                </div>
                <h1 className={cx('title')}>
                    <span>React App Template</span>
                </h1>
            </div>
        );
    }
}

export default App;
