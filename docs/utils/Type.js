function render(props) {
	var {name, type, parameter} = props;
	var returns = (props.return) ? props.return.type : '';
	var code = '';
	switch (type) {
		case 'function':
			code = `${name}(${renderParams(parameter)})${renderReturns(returns)}`;
			break;
		case 'mixin':
			code = `@include ${name}(${renderParams(parameter)});`;
			break;
		case 'variable':
			code = `$${name};`;
			break;
	}

	return code;
}

function renderReturns(returns) {
	if (returns) {
		return `: <${returns}>`;		
	}
	return '';
}

function renderParams(parameter) {
	if(!parameter) {
		return '';
	}
	return parameter.map(ii => `$${ii.name}:${ii.default || ''} <${ii.type}>`).join(', ');
}

export default render;