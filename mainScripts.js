"use strict";

window.onload = init;
var jasonSurvs = null;


function init() {
    loadSurvs(function(response) {
        jasonSurvs = JSON.parse(response);
    });
    console.log(jasonSurvs);
}

function loadSurvs(callback) {
    var obj = new XMLHttpRequest();
    obj.overrideMimeType("application/json");
    obj.open('GET', 'allSurvs.json', true);
    obj.onreadystatechange = function () {
        if (obj.readyState == 4 && obj.status == "200") {
            callback(obj.responseText);
        }
    };
    obj.send(null);
}