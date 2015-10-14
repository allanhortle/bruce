// components/DocItem.jsx
var React = require('react');
import Example from './Example';
import Usage from './Usage';


var DocItem = React.createClass({
    render: function () {
        console.log(this.props);
        var {
            context: {name, code, type},
            description,
            example,
            todo,
            group,
            parameter
        } = this.props;
        return (
            <div id={name} className="DocItem">
                <h2><a href={`/#${name}`}>{name} <em><small>{type}</small></em></a></h2>
                <p>{description}</p>
                <Usage {...this.props} />


                {example && example.map(data => <Example {...data}/>)}
                {todo && todo.map(data => <div>Todo: {data}</div>)}

                {this.renderParameters()}
            </div>
        )
    },
    renderParameters() {
        var {parameter} = this.props;
        if (parameter) {
            return <table className="Table">
                <thead>
                    <th className="w20">Params</th>
                    <th className="w20">Type</th>
                    <th className="">Description</th>
                </thead>
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