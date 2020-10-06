"use strict";

window.onload = init;
var survString;
var killString;
var survTags = new Array();
var killTags = new Array();

function init() {
}

/*
    This function runs the survivor table and sets up the main window to an appropriate size
*/
function runSPerks() {
    survString = createSurvTable();
    document.getElementById("mainBody").innerHTML = survString;
    document.getElementById("mainBody").style.height = "1950px";
    document.getElementById("mainBody").style.width = "1200px";
}

/*
    This function runs the killer table and sets up the main window to an appropriate size
*/
function runKPerks() {
    killString = createKillTable();
    document.getElementById("mainBody").innerHTML = killString;
    document.getElementById("mainBody").style.height = "1750px";
    document.getElementById("mainBody").style.width = "1200px";
}

/*
    This function sets up the table for the survivor perks and images
*/
function createSurvTable() {
    var htmlString = "<h3 class='tableHead'>Survivors</h3><table id='survTable'>";
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
            htmlString += "<tr class='perkRow'><td class='perkName'><img class='perkImage' src='" + perkImage + "' />" + temp + "</td></tr>";
        }
        htmlString += "</table></td>";
        survTags.push(allSurvs[i]);
    }
    
    htmlString += "</table>";
    return htmlString;
}

/*
    This function sets up the table for the killer perks and images
*/
function createKillTable() {
    var htmlString = "<h3 class='tableHead'>Killers</h3><table id='killTable'>";
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
            htmlString += "<tr class='perkRow'><td class='perkName'><img class='perkImage' src='" + perkImage + "' />" + temp + "</td></tr>";
        }
        htmlString += "</table></td>";
        killTags.push(allKills[i]);
    }
    
    htmlString += "</table>";
    return htmlString;
}

/*
    This function finds the link to a perk so the image can be used must pass perk_tag
*/
function findPerkLink(temp) {
    for (var i = 0; i < allPerks.length; i++) {
        if (allPerks[i].perk_tag === temp) {
            return allPerks[i].icon;
        }
    }
}