/** @jsx React.DOM */
/**
 * Created by Robert on 3/7/2015.
 */
var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({displayName: "CommentList",
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                React.createElement(Comment, {author: comment.author}, 
                    comment.text
                )
            );
        });
        return (
            React.createElement("div", null, 
                commentNodes
            )
        );
    }
});

module.exports = CommentList;
