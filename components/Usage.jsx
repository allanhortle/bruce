import React from 'react';
import Prism from './Prism';
import Type from '../utils/Type';

export default (props) => {
	var {context: {type, name}, parameter} = props;
	return (
		<pre>
			<Prism language="css">{Type({...props, name, type, parameter})}</Prism>
		</pre>
	);
};