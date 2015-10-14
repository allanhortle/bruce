var React = require('react');
import Prism from './Prism';


function renderParams(parameter) {
	if(!parameter) {
		return '';
	}
	return parameter.map(ii => `$${ii.name}: ${ii.type}`).join(', ');
}

module.exports = (props) => {
	var {context: {type, name}, parameter,} = props;
	var code = '';
	switch (type) {
		case 'function':
			code = `${name}(${renderParams(parameter)});`;
			break;
		case 'mixin':
			code = `@include ${name}(${renderParams(parameter)});`;
			break;
		case 'variable':
			code = `$${name}: ;`;
			break;
	}

	return <pre><Prism language="css">{code}</Prism></pre>
};