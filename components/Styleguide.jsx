import React from 'react';
import Prism from './Prism';
import Markdown from './Markdown';

function renderDescription(description) {
	var arr = description.split('\n');
	if(arr.length > 1) {
		return <div>
			<Markdown data={arr[0]}/>
			<pre><Prism language="css">{arr.slice(1, arr.length-1).join('\n')}</Prism></pre>
		</div>;
	} else {
		return <pre><Prism language="css">{arr[0]}</Prism></pre>
	}

}
export default (props) => {
	var {header, markup, description} = props;
	var descriptionArray = props.description.split('\n');
	return <div id={header} className="DocItem">
		<h2>{header}</h2>
		{renderDescription(description)}	
		<pre><Prism language="html">{markup}</Prism></pre>
		<div className="Example" dangerouslySetInnerHTML={{__html: markup}}></div>
	</div>;
};