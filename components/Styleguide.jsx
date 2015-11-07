import React from 'react';
import Prism from './Prism';

export default (props) => {
	var {header, markup} = props;
	return <div>
		<h3>{header}</h3>
		<pre><Prism language="css">{props.description}</Prism></pre>
		<pre><Prism language="html">{markup}</Prism></pre>
		<div className="Example" dangerouslySetInnerHTML={{__html: markup}}></div>
	</div>;
};