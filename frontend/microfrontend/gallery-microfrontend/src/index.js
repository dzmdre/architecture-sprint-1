import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import GalleryRoot from './components/Gallerymf';

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: GalleryRoot,
    errorBoundary(err, info, props) {
        // Простая обработка ошибок
        return null;
    }
});

export const { bootstrap, mount, unmount } = lifecycles;







