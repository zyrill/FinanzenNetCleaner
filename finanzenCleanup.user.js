// ==UserScript==
// @name         Finanzen.net Cleanup & Adblock
// @namespace    https://github.com/zyrill/FinanzenNetCleaner
// @version      0.1
// @description  Cleanup Finanzen.net and remove some ads
// @author       zyrill
// @match        http://www.finanzen.net/
// @match        https://www.finanzen.net/
// @grant        none
// ==/UserScript==

try { var nodeList = document.getElementById("sky-container"); nodeList.parentNode.removeChild(nodeList); }
catch (err) { console.log(err.message); }

try { var nodeList = document.getElementById("hd_pi_rt_flatex"); nodeList.parentNode.removeChild(nodeList); }
catch (err) { console.log(err.message); }

try { var nodeList = document.getElementById("collapseExample"); nodeList.parentNode.removeChild(nodeList); }
catch (err) { console.log(err.message); }

try { var nodeList = document.getElementsByClassName("col-xs-12"); nodeList[0].parentNode.removeChild(nodeList[0]); }
catch (err) { console.log(err.message); }

try { var nodeList = document.getElementsByClassName("bs-wrapper"); nodeList[0].parentNode.removeChild(nodeList[0]); }
catch (err) { console.log(err.message); }

try { var nodeList = document.getElementsByClassName("header-nav-1"); nodeList[0].parentNode.removeChild(nodeList[0]); }
catch (err) { console.log(err.message); }

var target = document.getElementsByTagName("BODY")[0];

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes !== null) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                mutation.addedNodes[i].remove();
            }
        }
    });
});

var config = { attributes: true, childList: true, characterData: true };
if (target !== null && typeof target === 'object') {
    observer.observe(target, config);
}
