var React = require('react');
var Router = require('react-router');
var SearchContainer = require('./SearchContainer');
var MainContent = require('../common/MainContent');

var TextFilter = React.createClass({
  mixins: [ Router.State ],

  componentDidMount: function() {
    this.loadData(this.props);
  },
  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps);
  },
  loadData: function (props) {
    var text = this.getParams().text;
    if (text !== props.searchText) {
      //console.log('trigger `actions.changeText` from TextFilter.jsx');
      this.props.actions.changeText(text);
    }
  },

  render: function() {
    return (
      <MainContent className="small">

        <SearchContainer {...this.props} />

      </MainContent>
    );
  }

});

module.exports = TextFilter;