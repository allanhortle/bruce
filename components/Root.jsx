var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;



var Root = React.createClass({
    render: function () {
        var initialProps = {
            __html: safeStringify(this.props.data)
        }

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link href='https://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'/>
                </head>
                <body>
                    <div id="app">
                        {React.cloneElement(this.props.children, this.props.data)}
                    </div>
                    <script id='initial-props' type='application/json' dangerouslySetInnerHTML={initialProps} />
                    <script src='main.bundle.js' />
                </body>
            </html>
        )
    }
});

function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root