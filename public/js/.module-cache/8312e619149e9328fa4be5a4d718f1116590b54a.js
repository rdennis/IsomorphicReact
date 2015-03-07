/**
 * Created by Robert on 3/7/2015.
 */
var React = require('react');

var CommentForm = React.createClass({displayName: "CommentForm",
    submit: function(e){
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if(!author || !text) return;
        this.props.onSubmit({author: author, text: text});
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
    },
    render: function () {
        return (
            React.createElement("form", {onSubmit: this.submit, action: "/data", method: "post"}, 
                React.createElement("input", {type: "text", placeholder: "Your name", name: "author", ref: "author"}), 
                React.createElement("br", null), 
                React.createElement("textarea", {placeholder: "Say something...", name: "text", ref: "text"}), 
                React.createElement("br", null), 
                React.createElement("button", {type: "submit"}, "Post")
            )
        );
    }
});

module.exports = CommentForm;