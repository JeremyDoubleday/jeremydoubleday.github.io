"use strict";

window.onload = init;


function init() {
    
}

function runSPerks() {
    document.getElementById("mainBody").innerHTML = createSurvTable();
}

function runKPerks() {
    console.log(allKills);
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
            htmlString += "<tr><td><img id='perkImage' src='" + perkImage + "' />" + temp + "</td></tr>";
        }
        htmlString += "</table>";
    }
    
    htmlString += "</table></td>";
    document.getElementById("mainBody").style.height = "1750px";
    document.getElementById("mainBody").style.width = "1050px";
    return htmlString;
}

function findPerkLink(temp) {
    for (var i = 0; i < allPerks.length; i++) {
        if (allPerks[i].perk_tag === temp) {
            return allPerks[i].icon;
        }
    }
}