import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ProfileRoot from './components/Profilemf';

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: ProfileRoot,
    errorBoundary(err, info, props) {
        // Простая обработка ошибок
        return null;
    }
});

export const { bootstrap, mount, unmount } = lifecycles;







