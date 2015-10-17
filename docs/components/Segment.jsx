var React = require('react');

module.exports = (props) => {
    if(props.data && props.data.length > 0) {
        return (
            <div>
                <h3>{props.title}</h3>
                {props.data.map((data, key) => {
                	// console.log({...data, key});
                	return React.cloneElement(props.children, {...data, key: key})
                })}
            </div>
        );
    }

    return <span></span>;
};