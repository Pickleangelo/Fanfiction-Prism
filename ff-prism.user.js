// ==UserScript==
// @name         Fanfiction Prism Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fanfiction.net/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fanfiction.net
// @grant        none
// ==/UserScript==

(function() {
if($.trim($('#profile_top span').children('img').attr('src')) != "")
{
var src = $('#profile_top span').children('img').attr('src');
$('body').prepend("<div id='cover'></div>");
$('body #cover').prepend("<div id='bg'></div>");
$('body #cover #bg').css('background-image', 'url(' + src + '');
}else{
$('body').prepend("<div id='cover'></div>");
$('body #cover').prepend("<div id='bg'></div>");
}

})();
