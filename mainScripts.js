"use strict";

window.onload = init;
var survString;
var killString;
var survPics = new Map();
var killPics = new Map();

function init() {
    survString = createSurvTable();
    killString = createKillTable();
}

function runSPerks() {
    document.getElementById("mainBody").innerHTML = survString;
    document.getElementById("mainBody").style.height = "1700px";
    document.getElementById("mainBody").style.width = "1100px";
}

function runKPerks() {
    document.getElementById("mainBody").innerHTML = killString;
    document.getElementById("mainBody").style.height = "1500px";
    document.getElementById("mainBody").style.width = "1100px";
}

function createSurvTable() {
    var htmlString = "<table id='survTable'>";
    for (var i = 0; i < allSurvs.length; i++) {
        if (i % 3 === 0) {
            if (i > 0) {
                htmlString += "</tr>";
            }
            htmlString += "<tr>";
        }
        htmlString += "<td><img src='" + allSurvs[i].icon.preview_portrait + "' /></td><td>"
        htmlString += "<table class='perkTable'>";
        for (var j = 0; j < 3; j++) {
            var temp = allSurvs[i].perks[j];
            var perkImage = findPerkLink(temp);
            htmlString += "<tr class='perkRow'><td class='perkName'><img id='perkImage' src='" + perkImage + "' />" + temp + "</td></tr>";
            survPics.set(allSurvs[i].name, perkImage);
        }
        htmlString += "</table></td>";
    }
    
    htmlString += "</table>";
    return htmlString;
}

function createKillTable() {
    var htmlString = "<table id='killTable'>";
    for (var i = 0; i < allKills.length; i++) {
        if (i % 3 === 0) {
            if (i > 0) {
                htmlString += "</tr>";
            }
            htmlString += "<tr>";
        }
        htmlString += "<td><img src='" + allKills[i].icon.preview_portrait + "' /></td><td>"
        htmlString += "<table class='perkTable'>";
        for (var j = 0; j < 3; j++) {
            var temp = allKills[i].perks[j];
            var perkImage = findPerkLink(temp);
            htmlString += "<tr class='perkRow'><td class='perkName'><img id='perkImage' src='" + perkImage + "' />" + temp + "</td></tr>";
            killPics.set(allKills[i].name, perkImage);
        }
        htmlString += "</table></td>";
    }
    
    htmlString += "</table>";
    return htmlString;
}

function findPerkLink(temp) {
    for (var i = 0; i < allPerks.length; i++) {
        if (allPerks[i].perk_tag === temp) {
            return allPerks[i].icon;
        }
    }
}