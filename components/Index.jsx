// components/Index.jsx
var React = require('react');
import {groupBy} from 'lodash';
import DocItem from './DocItem.jsx';
import Navigation from './Navigation';
import Styleguide from './Styleguide';

var Index = React.createClass({
    render: function () {
        var {styleguide, docs} = this.props;
        var styles = groupBy(styleguide.sections, (ii) => ii.reference.split('.')[0]);
        return (
            <main className="wrapper">
				<Navigation docs={docs} styleguide={styleguide}/>
            	<div className="Content">
                    <h1>Bruce</h1>
                    {styleguide.sections.map((item, key) => <Styleguide key={'styleguide-' + key} {...item} />)}
	                {docs.map((item, key) => <DocItem key={key} {...item} styleguide={styles[item.context.name]}/>)}
            	</div>
            </main>
        )
    }
})

module.exports = Index