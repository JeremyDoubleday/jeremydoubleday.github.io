"use strict";

window.onload = init;
var survCommon = new Array();
var killCommon = new Array();
var selectedSurvs = survPics;
var selectedKills = killPics;

function init () {
    getPerks();
}

function runSRand() {
    var htmlString = "<h3 class='tableHead'>Survivors</h3><table id='randTable'>";
    htmlString += "<p>Click the portrait to deselect and remove that survivor's perks from the pool</p>";
    for (var i = 0; i < allSurvs.length; i++) {
        var temp = allSurvs[i];
        if (i % 5 === 0) {
            if (i > 0) {
                htmlString += "</tr>";
            }
            htmlString += "<tr>";
        }
        htmlString += "<td><input class='portraits' onclick='portraitClicked(this.id);' id='" + temp.name_tag + 
        "' type='image' src='" + temp.icon.preview_portrait + "' /></td>";
    }
    
    htmlString += "</table>";
    document.getElementById("mainBody").innerHTML = htmlString;
    document.getElementById("mainBody").style.width = "1000px";
    document.getElementById("mainBody").style.height = "1300px";
}

function runKRand() {

}

function getPerks() {
    for (var i = 0; i < allPerks.length; i++) {
        var temp = allPerks[i];
        if (temp.name_tag === "All") {
            if (temp.role === "Killer") {
                killCommon.push(temp);
            } else {
                survCommon.push(temp);
            }
        }
    }
}

function portraitClicked(id) {
    if (document.getElementById(id).style.borderColor === "rgb(0, 255, 0)") {
        document.getElementById(id).style.borderColor = "rgb(255, 0, 0)";
    } else {
        document.getElementById(id).style.borderColor = "rgb(0, 255, 0)";
    }
}