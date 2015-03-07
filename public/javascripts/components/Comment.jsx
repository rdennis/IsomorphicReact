/**
 * Created by Robert on 3/7/2015.
 */
var marked = require('marked');
var React = require('react');

var Comment = React.createClass({
    render: function () {
        var rawMarkup = marked(this.props.children);
        return (
            <div>
                <h2>{this.props.author}</h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
            </div>
        );
    }
});

module.exports = Comment;