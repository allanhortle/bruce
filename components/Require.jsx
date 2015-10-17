import React from 'react';
import Type from '../utils/Type';

export default (props) => {
	return <div key={props.id}>
		<a className="Link" href={`#${props.name}`}>{Type(props)}</a>
	</div>;
};