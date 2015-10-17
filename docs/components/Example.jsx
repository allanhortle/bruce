var React = require('react');

import Prism from './Prism';

module.exports = (props) => {
    return <pre key={props.id}><Prism language="css">{props.code}</Prism></pre>;
};