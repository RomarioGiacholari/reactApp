var React = require('react');
var App = React.createClass({
  render: function () {
    return <div className="main">
        <h1>Hello {this.props.name}</h1>
       </div>;
  }
});

// ReactDOM.render goes here:

module.exports = App;