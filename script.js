
function showHint() {

    const hintBox = document.getElementById("hintBox");

    if (hintBox.style.display === "block") {

        hintBox.style.display = "none";

    } else {

        hintBox.style.display = "block";

        console.log(
            "[HINT] The final piece is closer to the code that makes this page react."
        );
    }
}


// Interactive layer

const systemLog = {
    status: "online",
    module: "interactive-layer"
};


// PART 3 : "e_WEb3B5}"

console.log("[DEBUG] Interactive module loaded.");

