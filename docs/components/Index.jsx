// components/Index.jsx
var React = require('react');
import DocItem from './DocItem.jsx';
import Navigation from './Navigation';

var Index = React.createClass({
    render: function () {
        return (
            <main className="wrapper">
				<Navigation {...this.props.data}/>
            	<div className="Content">
                    <h1>Bruce</h1>
	                {this.props.data.map((item, key) => <DocItem key={key} {...item}/>)}
            	</div>
            </main>
        )
    }
})

module.exports = Index