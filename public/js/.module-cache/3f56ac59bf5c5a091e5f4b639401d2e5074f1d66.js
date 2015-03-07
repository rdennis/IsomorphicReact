/** @jsx React.DOM */
/**
 * Created by Robert on 3/7/2015.
 */
var $ = require('jquery');
var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({displayName: "CommentBox",
    loadComments: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    submitComment: function(comment){
        var comments = this.state.data;
        var newComments = comments.concat(comment);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            type: 'post',
            dataType: 'json',
            data: comment,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function(){
        return {data: this.props.data || []};
    },
    componentDidMount: function(){
        this.loadComments();
        setInterval(this.loadComments, this.props.pollInterval || 2000);
    },
   render: function(){
       return (
           React.createElement("div", null, 
               React.createElement("h1", null, "Comments"), 
               React.createElement(CommentList, {data: this.state.data}), 
               React.createElement(CommentForm, {onSubmit: this.submitComment})
           )
       );
   }
});

module.exports = CommentBox;
