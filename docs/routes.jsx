// Routes.jsx
var React = require('react')
var {Route, IndexRoute} = require('react-router');
var Root = require('./components/Root.jsx');
var Index = require('./components/Index.jsx');

var Routes = (
  <Route component={Root} path='/'>
    <IndexRoute component={Index} />
  </Route>
)

module.exports = Routes