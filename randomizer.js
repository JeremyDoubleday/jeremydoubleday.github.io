"use strict";

window.onload = init;
var survCommon = new Array();
var killCommon = new Array();
var selectedSurvs = new Map();
//var selectedKills = killTags.slice();
var perkArray = new Array();
var randomPerks = new Array();
var checkBoxClicked = false;

function init () {
    getPerks();
}

function getPerks() {
    for (var i = 0; i < allPerks.length; i++) {
        var temp = allPerks[i];
        if (temp.name_tag === "All") {
            if (temp.role === "Killer") {
                killCommon.push(temp.perk_tag);
            } else {
                survCommon.push(temp.perk_tag);
            }
        }
    }
}

function checkbox() {
    if (checkBoxClicked) {
        checkBoxClicked = false;
    } else {
        checkBoxClicked = true;
    }
}

function runSRand() {
    var htmlString = "<h3 class='tableHead'>Survivors</h3>";
    
    
   // finish setting up form here

    htmlString +="<input id='checker' type='checkbox' onclick='checkbox()' id='uniqueBox name='uniqueBox' /><label for='uniqueBox'>" + 
        "Click here to remove common perks from the pool</label>";
    htmlString += "<br /><br /><input type='submit' id='submit' name='submit' onclick='submittedSurv()' /><label for='submit'>" +
        "Click here to submit and get your random perks!";
    
    
    htmlString += "<table id='randTable'>";
    htmlString += "<p id='tableHead'>Click the portrait to deselect and remove that survivor's perks from the pool</p>";
    for (var i = 0; i < allSurvs.length; i++) {
        var temp = allSurvs[i];
        selectedSurvs.set(allSurvs[i].name_tag, true);
        if (i % 5 === 0) {
            if (i > 0) {
                htmlString += "</tr>";
            }
            htmlString += "<tr>";
        }
        htmlString += "<td><input bordercolor='green' class='portraits' id='" + temp.name_tag + "' type='image' src='" 
            + temp.icon.preview_portrait + "' onclick='portraitClickedSurv(this.id)'  /></td>";
        if (i === allSurvs.length - 1) {
            htmlString += "</tr>";
        }
    }
    
    htmlString += "</table>";
    document.getElementById("mainBody").innerHTML = htmlString;
    document.getElementById("mainBody").style.width = "1100px";
    document.getElementById("mainBody").style.height = "1600px";
}

function portraitClickedSurv(id) {
    if (document.getElementById(id).style.borderColor === "rgb(255, 0, 0)") {
        document.getElementById(id).style.borderColor = "rgb(0, 255, 0)";
        selectedSurvs.set(id, true);
    } else {
        document.getElementById(id).style.borderColor = "rgb(255, 0, 0)";
        selectedSurvs.set(id, false);
    } 
}

function submittedSurv() {
    if (allSurvs.length === 1 && checkBoxClicked) {
        alert("Can't run with only one selection and common perks off");
        return;
    }
    for (var i = 0; i < allSurvs.length; i++) {
        var temp = allSurvs[i];
        console.log("Selected surv: " + temp.name_tag);
        if (selectedSurvs.get(temp.name_tag)) {
            for (var j = 0; j < 3; j++) {
                perkArray.push(temp.perks[j]);
            }
        }
    }
    
    if (!checkBoxClicked) {
        for (var i = 0; i < survCommon.length; i++) {
            perkArray.push(survCommon[i]);
        }
    }

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * perkArray.length);
        if (randomPerks.includes(perkArray[random])) {
            i--;
        } else {
            randomPerks.push(perkArray[random]);
        }
    }
    sPerksHTML();
}

function sPerksHTML() {
    var htmlString = "<h2 class='perkHead'>Survivor Random Perks!</h2><ol>";
    for (var i = 0; i < 4; i++) {
        htmlString += "<li class='perkList'>" + randomPerks[i] + "</li>";
    }
    htmlString += "</ol><button type='button' onclick='runSRand()' id='returnPerks' name='returnPerks'>";
    htmlString += "Click to return</button>";
    //htmlString += "<label for='returnPerks'>Click to return</label>";
    document.getElementById("mainBody").innerHTML = htmlString;
    document.getElementById("mainBody").style.width = "900px";
    document.getElementById("mainBody").style.height = "900px";
}

function runKRand() {

}