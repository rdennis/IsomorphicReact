/**
 * Created by Robert on 3/7/2015.
 */
var React = require('react');
var $ = require('jquery');
var CommentBox = require('./components/CommentBox');

var data = JSON.parse($('#initial-data').text());
React.render(React.createElement(CommentBox, {url: data.url, data: data.data}), document.getElementById('mount'));