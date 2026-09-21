
const hint = document.getElementById("hint");

function showHint() {

    if (hint.style.display === "block") {

        hint.style.display = "none";

    } else {

        hint.style.display = "block";

        console.log(
            "%c[HINT]%c Machines are sometimes given their own instructions.",
            "color:#00ff66;font-weight:bold;",
            "color:white;"
        );

        console.log(
            "%c[DEBUG]%c Nothing interesting here... probably.",
            "color:#ffaa00;",
            "color:#777;"
        );
    }
}


// Fake configuration

const config = {
    environment: "production",
    debug: false,
    version: "3.5.7"
};


// Decoy

const oldFlag =
    "innovix{NOT_THE_REAL_FLAG}";


// Another decoy

const backup =
    "innovix{KEEP_LOOKING}";


console.log("[SYSTEM] Interactive module loaded.");

