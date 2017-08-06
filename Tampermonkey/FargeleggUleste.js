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
})();
