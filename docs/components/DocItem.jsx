// components/DocItem.jsx
import React from 'react';
import Example from './Example';
import Usage from './Usage';
import Segment from './Segment';
import Require from './Require';
import UsedBy from './UsedBy';
import CodeExample from './CodeExample';
import Markdown from './Markdown';


var DocItem = React.createClass({
    render: function () {
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
                <h2 className="DocItem_heading"><a href={`/#${name}`}>{name} <em><small>{type}</small></em></a></h2>
                <Markdown data={description}/>
                <Usage {...this.props} />

                <Segment title="Examples" data={example}><Example /></Segment>
                <CodeExample {...this.props.context} />
                <Segment title="Uses" data={this.props.require}><Require /></Segment>
                <Segment title="Used By" data={this.props.usedBy}><UsedBy /></Segment>
                {todo && todo.map((data, key) => <div key={key}>Todo: {data}</div>)}

            </div>
        )
    }
})

module.exports = DocItem