/** @jsx React.DOM */
/**
 * Created by Robert on 3/7/2015.
 */
var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment key={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div>
                {commentNodes}
            </div>
        );
    }
});

module.exports = CommentList;
