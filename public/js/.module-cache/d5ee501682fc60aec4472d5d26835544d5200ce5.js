/**
 * Created by Robert on 3/7/2015.
 */
var $ = require('jquery');
var React = require('react');
var CommentBox = require('./components/CommentBox');

var data = $('#initial-data').text();
console.log('data: ', data);
React.render(React.createElement(CommentBox, null), document.getElementById('mount'));