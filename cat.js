
function switchOff() {

document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("switchStatus").textContent = "Switch Off";
document.getElementById("offButton").style.backgroundColor = "#cbd2d9";
document.getElementById("onButton").style.backgroundColor = "#22c559";

}


function switchOn() {
    
    document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switch On";
    document.getElementById("offButton").style.backgroundColor = "#e12d39";
    document.getElementById("onButton").style.backgroundColor = "#cbd2d9";
    
    }