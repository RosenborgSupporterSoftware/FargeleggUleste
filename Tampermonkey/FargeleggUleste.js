// ==UserScript==
// @name         Fargelegg uleste tråder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Farger forum og tråder med uleste meldinger med en definert farge
// @author       Rune Jacobsen
// @match        http://www.rbkweb.no/forum/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    var farge = 'gold';

    $('tr td.row1 img[alt="New posts"]').each(function(idx, elt) {
        var $base = $(this).parent();
        $base.css('background-color', farge);
        $base.siblings().css('background-color', farge);
    });
    $('tr td > span a img[alt="View newest post"]').each(function(idx, elt) {
        var $link = $(this).parent();
        var $titlelink = $link.parent().children(1);
        $titlelink.attr("href", $link.attr("href"));
    });
})();
