import React from 'react';
import Prism from './Prism';

function makeArray(data) {
    return (typeof data === 'string') ? [data] : data;
}

export default (props) => {
    var newData = makeArray(props.data);
    if(props.data && newData.length > 0) {
        return (
            <div>
                <h3>{props.title}</h3>
                {newData.map((data, key) => {
                    return <pre key={key}><Prism language="css">{data}</Prism></pre>
                })}
            </div>
        );
    }

    return <span></span>;
};