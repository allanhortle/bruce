import React from 'react';
import Type from '../utils/Type';

export default (props) => {
	return <div key={props.context.name}>
		<a className="Link" href={`#${props.context.name}`}>{Type(props.context)}</a>
	</div>;
};