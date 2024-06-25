let defaultval = 200;
document.getElementById("imageWidth").textContent = defaultval + "px";
document.getElementById("image").style.width = defaultval + "px";

function decrease_width() {

    if (defaultval > 100) {
        defaultval -= 5;
        document.getElementById("warningMessage").textContent = "";
        document.getElementById("image").style.width = defaultval + "px";
        document.getElementById("imageWidth").textContent = defaultval + "px";
    } else if (defaultval <= 100) {
        document.getElementById("warningMessage").textContent = "Con't Visible.Increase width of the image";
        document.getElementById("warningMessage").style.color = "red";
    }
}

function Increase_width() {

    if (defaultval < 300) {
        defaultval += 5;
        document.getElementById("warningMessage").textContent = "";
        document.getElementById("image").style.width = defaultval + "px";
        document.getElementById("imageWidth").textContent = defaultval + "px";
    } else if (defaultval >= 300) {
        document.getElementById("warningMessage").textContent = "Too big.Decrease width of the image";
        document.getElementById("warningMessage").style.color = "red";
    }
}