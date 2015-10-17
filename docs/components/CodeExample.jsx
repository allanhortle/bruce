var React = require('react');
import Prism from './Prism';

module.exports = (props) => {
	var {code, type, line: {start, end}} = props;
	var codeString = props.code || '';
	if(code && type === 'mixin' && end - start < 10) {
		return <div>
			<h3>Content</h3>
			<pre><Prism language="css">{codeString.replace('\n', '').replace(/^ {4}/gm, '') || ''}</Prism></pre>
		</div>
	}
	return <span></span>;
};