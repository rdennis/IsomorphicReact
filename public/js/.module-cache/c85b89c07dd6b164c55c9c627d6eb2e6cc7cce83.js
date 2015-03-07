/**
 * Created by Robert on 3/7/2015.
 */
require('node-jsx').install({extension: '.jsx'});
var React = require('react');
var CommentBox = require('./components/CommentBox');

React.render(React.createElement(CommentBox, null), document.getElementById('mount-node'));