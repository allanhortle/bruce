// components/DocItem.jsx
import React from 'react';
import Example from './Example';
import Usage from './Usage';
import Segment from './Segment';
import CodeSegment from './CodeSegment';
import Require from './Require';
import UsedBy from './UsedBy';
import OutputExample from './OutputExample';
import Markdown from './Markdown';



var DocItem = React.createClass({
    render: function () {
        // console.log(context);
        var {
            context: {name, code, type, value},
            description,
            example,
            todo,
            group,
            parameter,
            styleguide
        } = this.props;
        return (
            <div id={name} className="DocItem">
                <h2 className="DocItem_heading"><a href={`/#${name}`}>{name} <em><small>{type}</small></em></a></h2>
                <Markdown data={description}/>
                <Usage {...this.props} />

                <Segment title="Example" data={example}><Example /></Segment>
                <CodeSegment title="Default" data={value} />
                <OutputExample {...this.props} />

                <Segment title="Uses" data={this.props.require}><Require /></Segment>
                <Segment title="Used By" data={this.props.usedBy}><UsedBy /></Segment>
                <div className="t-muted">
                    {todo && todo.map((data, key) => <div key={key}>Todo: {data}</div>)}
                </div>

            </div>
        )
    }
})

module.exports = DocItem
