"use strict";

window.onload = init;

var neaPerks = new Array();
var deathPerks = new Array();  

function init() {
    getFavePerks();
}

function getFavePerks() {
    for (var i = 0; i < allPerks.length; i++) {
        var temp = allPerks[i];
        if (temp.name_tag === "NK") {
            neaPerks.push(temp);
        } else if (temp.name_tag === "UK") {
            deathPerks.push(temp);
        }
    }
}

function runFaves() {
    

    var htmlString = "<h2>My favorite Survivor: " + nea.name + "</h2>";
    htmlString += "<img src='" + nea.icon.portrait + "' class='faveImage' />";
    htmlString += "<p class='faveText'><span class='faveSpan'>Overview:</span> " + nea.overview + "</p>";
    htmlString += "<p class='faveText'><span class='faveSpan'>Lore:</span> " + nea.lore + "</p>";
    htmlString += "<h3 class='faveHeading'>Perks</h3>";
    htmlString += "<p class ='faveText'>";
    
    for (var i = 0; i < neaPerks.length; i++) {
        var temp = neaPerks[i];
        htmlString += "<img class='favePerkImage' src='" + temp.icon + "' />";
        htmlString += "<span class='faveSpan'>" + temp.perk_name + "<br /></span>";
        htmlString += "<p class='faveText'>" + temp.description + "</p><hr />";
    }
    htmlString += "</p>";

    
    htmlString += "<h2>My favorite Killer: " + deathslinger.full_name + " AKA: " + deathslinger.name + "</h2>";
    htmlString += "<img src='" + deathslinger.icon.portrait + "' class='faveImage' />";
    htmlString += "<p class='faveText'><span class='faveSpan'>Overview:</span> " + deathslinger.overview + "</p>";
    htmlString += "<p class='faveText'><span class='faveSpan'>Lore:</span> " + deathslinger.lore + "</p>";
    htmlString += "<h3 class='faveHeading'>Perks</h3>";
    htmlString += "<p class ='faveText'>";
    
    for (var i = 0; i < deathPerks.length; i++) {
        var temp = deathPerks[i];
        htmlString += "<img class='favePerkImage' src='" + temp.icon + "' />";
        htmlString += "<span class='faveSpan'>" + temp.perk_name + "<br /></span>";
        htmlString += "<p class='faveText'>" + temp.description + "</p><hr />";
    }
    htmlString += "</p>";
    
    
    document.getElementById("mainBody").innerHTML = htmlString;
    document.getElementById("mainBody").style.height = "1900px";
    document.getElementById("mainBody").style.width = "1200px";
}

var deathslinger = {
    "_id": "5f47fdbad80cf12dc4ac06d3",
    "name": "Deathslinger",
    "name_tag": "UK",
    "full_name": "Caleb Quinn",
    "alias": "",
    "gender": "Male",
    "nationality": "American",
    "realm": "Grave of Glenvale",
    "power": "The Redeemer",
    "weapon": "Death to Bayshore",
    "speed": "110 % | 4.4 m/s",
    "terror_radius": "24",
    "height": "Tall",
    "voice_actor": "Unknown",
    "difficulty": "Intermediate",
    "overview": "The Deathslinger is a vengeful Killer, able to spear Survivors from a distance and reel them in using his Power, The Redeemer.\n\nHis personal Perks, Gearhead, Dead Man's Switch, and Hex: Retribution allow him to locate and impede Survivor objectives, and punish Survivors for destroying Totems.",
    "lore": "Born in the dust-ridden badlands of the American Midwest, Caleb Quinn was son to struggling Irish immigrants. On the edge of the frontier, sickness, famine, and death were common sights, and pioneers contended for whatever scraps they could claim while tycoons feasted. Caleb's father, once an engineer, had few options to ply his trade as businesses posted a common sign: No Irish Need Apply. His antiquated tools laid untouched for years until Caleb uncovered them. Noticing his son's interest in the trade, he gifted him his old wrench.\n\nThe devices Caleb made under his father's guidance had quaint applications, but when his father was away, they took a grim turn. He hid plans for a mask that would gouge barbed needles into a human's eyes and rip them from their sockets, complete with sketches of it fitted on boys who bullied him.\n\nWith age, Caleb's engineering abilities became marketable and employers put their discrimination aside. Henry Bayshore, the owner of United West Rail, hired him.\n\nCaleb first invented a gun that shot railroad spikes into the ground. Next, he made a steam-powered tunnelling drill. But as Bayshore feigned indifference, the devices began turning up at other companies, the patents stolen from Caleb and sold.\n\nA familiar sensation coursed through Caleb's blood, feeding the sharp pain in his heart. Rage overwhelming him, he burst into Bayshore's office and smashed his face into a bloody stew. As he was pulled away, he pushed his specialised gun to his boss' gut and squeezed the trigger. A railroad spike plowed through skin and viscera, nailing Bayshore to his desk.\n\nThe only thing that saved Caleb from hanging was Bayshore's unlikely survival. For fifteen years, Caleb was confined to Hellshire Penitentiary, the nation's first private prison. In a fortress of illiterate convicts, he found an unlikely friend in the educated prison warden. He designed torture devices for him and in return received extra meals. After a time, the warden offered to commute his sentence. He spoke of something greater than monetary wealth — political capital — and that his connections could have Bayshore framed and rotting behind bars for life. He had only one request: make him rich. Fill the prison. Use ingenuity to bring outlaws in alive.\n\nCaleb returned to his workshop, and with a few modifications emerged with something new — the speargun. The first trial occurred when a thief robbed a Chinese laundry. Seizing on the opportunity, Caleb unleashed his prototype. Metal joints screeched as the spike shot forward, gouging into the target's abdomen. But as the spear tugged, it caught the thief's intestines, and, with an ungodly sound, yanked them onto the dusty road. After several iterations, the disembowelments dwindled, but Caleb had already earned his new nickname: The Deathslinger.\n\nLooking to protect his asset, the prison warden pulled strings and released Irish inmates to form Caleb's posse. The Hellshire Gang was born. For six years, they roamed the country collecting wanted outlaws for the prison, fulfilling their end of the bargain. After a bloody battle at Glenvale, Caleb caught notice of a newspaper headline: Henry Bayshore Purchases Hellshire Penitentiary. In the picture, a disfigured Bayshore proudly shook the warden's hand. Caleb's heart pounded with rage, blood swelling as if it would burst from his veins. He'd been sold out, a pawn in a rich man's game.\n\nThe Hellshire Gang pledged their loyalty to Caleb and called for the warden's head. In a thundering gallop, they smashed through the prison entrance, shrieking like bloodthirsty marauders. A guard raised his pistol, but hesitated. A spear punctured his chest. Caleb grabbed the man's head and slammed it against a prison cell until it spilled through the bars.\n\nReaching the warden's office, Caleb kicked the door and was met with a fortunate sight — it wasn't only the prison warden who cowered in a corner, but Henry Bayshore. Overpowered with rage, Caleb rushed to Bayshore, beating, bludgeoning, tearing at his flesh. The man's blood dripped from his face, crimson pooling at his feet. The Hellshire Gang swarmed the warden, snapping bones with each kick.\n\nWith the two men broken and begging for death, the posse dragged them to the commons, where they were left to the growing crowd of prisoners.\n\nSoaked in blood and sweat, Caleb hobbled to his old cell, hardly paying notice to Bayshore's screams. He sat on the bed's edge as drops of blood ran from his fingertips. A thick, unnatural fog streamed through the barred window. He pulled out his old wrench, cracked and rusted, and ran a thumb along the metal, regarding it with faded eyes. He couldn't remember when it came into his possession. He didn't care to remember. At his feet, he saw a dusty path, and, at its end, silhouettes of all who had done him wrong: the boys who bullied him, the executives who took advantage of him, and, again... Henry Bayshore. Emerging from a fog were the tools to dispose of them — unforgiving steel hooks, brilliant and beautiful in their simplicity. Pain tore through his leg as he stood, but he endured, pushing onwards, walking the dusty path, leaving a trail of blood flowing behind him.",
    "dlc": "Chains of Hate",
    "dlc_id": 1251000,
    "is_free": false,
    "is_ptb": false,
    "lang": "en",
    "icon": {
        "portrait": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Killers/Portrait/UK.png",
        "preview_portrait": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Killers/PreviewPortrait/UK.png",
        "shop_background": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Killers/ShopBG/UK.png"
    },
    "perks": [
        "GearHead",
        "DeadMansSwitch",
        "HexRetribution"
    ]
};

var nea = {
    "_id": "5f47fd6ed80cf12dc4ac06ae",
    "name": "Nea Karlsson",
    "full_name": "",
    "name_tag": "NK",
    "gender": "Female",
    "role": "Urban Artist",
    "nationality": "Swedish",
    "voice_actor": "Morgane Ravasi",
    "overview": "Nea Karlsson is an Urban Artist, able to easily escape and hide.\n\nHer personal Perks, Balanced Landing, Urban Evasion, and Streetwise, make her well suited to completing Objectives and rapid evasion.\n\nShe is focused around movement - making her faster, more balanced, and better at evading the Killer.",
    "lore": "Nea is of Swedish descent, a tagger and a bit of a troublemaker. She started rebelling when she was 16, she dyed her hair black and cut it in a way she liked it. In her early teens, her parents thought she lacked that thing that makes everyone else \"normal\". She may have gone too far when her friends, not thinking well, dared her to tag the old asylum. She was never seen again, and now tries her best to survive the Entity's dangers.\n\nNea grew up in the small town of Hjo in Sweden. She had a happy childhood even though her mom and dad worked hard. As the opportunity to move to the US became a reality she started acting out. Her parents didn’t really pick up on this as a reaction to their move. Nea was forced to leave her friends and life behind. Nea shied away from what her parents considered “normal”. Instead she took refuge in skate parks, and her tag “Mashtyx” was seen more or less all over her new hometown, and Nea made a sport out of tagging government buildings. Finally Nea’s parents became used to Nea disappearing for a few days on end. As she’s nimble and almost catlike, she’s able to evade deadly dangers. Years on skateboards has proven worthy training. And keeping her head down, avoiding the fuzz can be applied to all dangers. The only question is whether she has some interest in not giving up.",
    "difficulty": "Intermediate",
    "dlc": "The Last Breath Chapter",
    "dlc_id": 509060,
    "is_free": true,
    "is_ptb": false,
    "lang": "en",
    "icon": {
        "portrait": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Survivors/Portrait/NK.png",
        "preview_portrait": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Survivors/PreviewPortrait/NK.png",
        "shop_background": "https://raw.githubusercontent.com/dearvoodoo/dbd/master/Survivors/ShopBG/NK.png"
    },
    "perks": [
        "BalancedLanding",
        "UrbanEvasion",
        "Streetwise"
    ]
};