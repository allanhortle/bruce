// components/Index.jsx
var React = require('react');
import DocItem from './DocItem.jsx';

var Index = React.createClass({
    render: function () {
        return (
            <main className="wrapper">
                {this.props.data.map((item, key) => <DocItem key={key} {...item}/>)}
            </main>
        )
    }
})

module.exports = Index