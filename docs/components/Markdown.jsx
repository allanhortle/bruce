import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default (props) => {
	return (
		<div className="Markdown" dangerouslySetInnerHTML={{__html: marked(props.data)}}></div>
	);
};