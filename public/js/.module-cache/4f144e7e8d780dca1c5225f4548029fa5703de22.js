/**
 * Created by Robert on 3/7/2015.
 */
var $ = require('jquery');
var React = require('react');
var CommentBox = require('./components/CommentBox');

var data = JSON.parse($('#initial-data').text());
React.render(React.createElement(CommentBox, {data: data}), document.getElementById('mount'));