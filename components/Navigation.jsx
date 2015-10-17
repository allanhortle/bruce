import React from 'react';
import {groupBy} from 'lodash';
import {map} from 'lodash';
import DocItem from './DocItem.jsx';
import Navigation from './Navigation';

function renderGroup(group, key) {
	return <li key={key}>
		<strong><a href={`#${key}`}>{key}</a></strong>
		<ul>{map(group, renderItem)}</ul>
	</li>
}

function renderItem(item, key) {
	return <li key={key}><a href={`#${item.context.name}`}>{item.context.name}</a></li>
}


export default (props) => {
	var groups = groupBy(props, 'group[0]');
    return (
        <ul className="Navigation left">
        	{map(groups, renderGroup)}
        </ul>
    )
}