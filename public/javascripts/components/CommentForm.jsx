/**
 * Created by Robert on 3/7/2015.
 */
var uuid = require('node-uuid');
var React = require('react');

var CommentForm = React.createClass({
    submit: function(e){
        e.preventDefault();
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if(!author || !text) return;
        this.props.onSubmit({ id: uuid.v4(), author: author, text: text });
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
    },
    render: function () {
        return (
            <form onSubmit={this.submit} action="/data" method="post">
                <input type="text" placeholder="Your name" name="author" ref="author"/>
                <br/>
                <textarea placeholder="Say something..." name="text" ref="text"/>
                <br/>
                <button type="submit">Post</button>
            </form>
        );
    }
});

module.exports = CommentForm;