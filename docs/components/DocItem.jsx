// components/DocItem.jsx
var React = require('react');

var DocItem = React.createClass({
    render: function () {
        console.log(this.props);
        var {context: {name, code}} = this.props;
        return (
            <div>
                <h2>{name}</h2>

                <pre>{code}</pre>
            </div>
        )
    }
})

module.exports = DocItem