import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import AuthRoot from './components/Authmf';

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: AuthRoot,
    errorBoundary(err, info, props) {
        // Простая обработка ошибок
        return null;
    }
});

export const { bootstrap, mount, unmount } = lifecycles;







