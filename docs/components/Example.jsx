var React = require('react');

import Prism from './Prism';

module.exports = (props) => {
    return (
    	<div>    		
    		<pre key={props.id}>
    			<span className="type">{props.type}</span>
    			<Prism language="css">{props.code}</Prism>
    		</pre>
    	</div>
	);
};