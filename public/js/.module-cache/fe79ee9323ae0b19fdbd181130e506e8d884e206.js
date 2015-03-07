/**
 * Created by Robert on 3/7/2015.
 */
var Showdown = require('showdown');
var React = require('react');

var converter = new Showdown.converter();

var Comment = React.createClass({displayName: "Comment",
    render: function () {
        var rawMarkup = converter.makeHtml(this.props.children);
        return (
            React.createElement("div", null, 
                React.createElement("h2", null, this.props.author), 
                React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
            )
        );
    }
});

module.exports = Comment;