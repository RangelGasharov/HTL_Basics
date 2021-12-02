var people = [{
        "firstname": "Rangel",
        "lastname": "Gasharov",
        "height": 184,
        "image": "image",
    },
    {
        "firstname": "Berhard",
        "lastname": "Conrad",
        "height": 189,
        "image": "image",
    },
    {
        "firstname": "Marie",
        "lastname": "Willhelm",
        "height": 178,
        "image": "image",
    }
];

var html = "";

for (i = 0; i < people.length; i++) {
    html += "<div class='card'>";
    html += "<div class='main'><ul><li>" + people[i].firstname + "</li><li>" + people[i].lastname + "</li></ul></div>";
    html += "<div class='image'>image</div>";
    html += "<div class='sideinfo'>" + people[i].height + "</div>";
    html += "</div>";
}

document.getElementById("container").innerHTML = html;