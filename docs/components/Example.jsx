var React = require('react');

import Prism from './Prism';

module.exports = (props) => {
    return <pre><Prism language="css">{props.code}</Prism></pre>;
};