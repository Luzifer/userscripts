// ==UserScript==
// @name         Twitter show all (sensitive) media
// @namespace    http://luzifer.io/
// @version      0.1.1
// @description  adds a button to show all hidden media
// @author       Knut Ahlers <knut@luzifer.io>
// @homepage     https://github.com/Luzifer/userscripts
// @supportURL   https://github.com/Luzifer/userscripts/issues
// @match        https://twitter.com/*
// @icon         https://abs.twimg.com/a/1465528353/img/t1/favicon.svg
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    var btn = $('<button type="button" class="btn"><span class="button-text">Show media</span></button>');
    btn.bind('click', function(){
        $('button.display-this-media').trigger('click');
    });

    btn.appendTo($('.UserActions'));
})();
