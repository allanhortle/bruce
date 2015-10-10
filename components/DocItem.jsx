// components/DocItem.jsx
var React = require('react');

var DocItem = React.createClass({
    render: function () {
        // console.log(this.props);
        var {
            context: {name, code, type},
            description,
            group,
            parameter
        } = this.props;
        return (
            <div>
                <h2>{name} <em>{type}</em></h2>
                <h3>{group.join(',')}</h3>
                <p>{description}</p>
                <pre><code>{code}</code></pre>

                {this.renderParameters()}
            </div>
        )
    },
    renderParameters() {
        var {parameter} = this.props;
        if (parameter) {
            return <table>
                <tbody>{parameter.map(this.renderParameterRows)}</tbody>
            </table>;
        }
    },
    renderParameterRows(row, key) {
        return <tr key={key}>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>{row.description}</td>
        </tr>
    }
})

module.exports = DocItem