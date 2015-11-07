import React from 'react';
import ReactDOM from 'react-dom';
import {renderToString} from 'react-dom/server';
import {Router} from 'react-router';
import routes from './routes.jsx';

import createMemoryHistory from 'history/lib/createMemoryHistory';
import createBrowserHistory from 'history/lib/createBrowserHistory';

var sassdocs = require("!!sassdoc-loader!../bruce.scss");
var styleguide = require("!!raw!kss!sass!./styleguide.scss");
// console.log(styleguide);

function createElement(Component, props) {
    return <Component {...props} data={{docs:sassdocs, styleguide: styleguide}} />
}

// Client render (optional)
if (typeof document !== 'undefined') {

    var Styles = require('./styleguide.scss');
    var Styles = require('./scss/main.scss');

    var history = createBrowserHistory();
    var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML);
    ReactDOM.render(
        <Router history={history} createElement={createElement}>{routes}</Router>, 
        document.getElementById('app')
    );
}

module.exports = function render(locals, callback) {
    var history = createMemoryHistory(locals.path);
    callback(null, '<!DOCTYPE html>' + renderToString(
        <Router history={history} createElement={createElement}>{routes}</Router>
    ));
}