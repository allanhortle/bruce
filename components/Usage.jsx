var React = require('react');

function renderParams(parameter) {
	if(!parameter) {
		return '';
	}
	return parameter.map(ii => `$${ii.name}: ${ii.type}`).join(', ');
}

module.exports = (props) => {
	var {context: {type, name}, parameter,} = props;
	console.log(type);
	switch (type) {
		case 'function':
			return <pre>{`${name}(${renderParams(parameter)});`}</pre>;
		case 'mixin':
			return <pre>{`@include ${name}(${renderParams(parameter)});`}</pre>;
		case 'variable':
			return <pre>{`$${name}: ;`}</pre>;
		default:
			return <span></span>;
	}
};