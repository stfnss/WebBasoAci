let letter = 0;
const text = "Baso Aci";
function typeText() {
    if (letter < text.length) {
        document.getElementById("text1").innerHTML += text.charAt(letter);
        letter++;
        let speed = Math.floor(Math.random() + 350) + 150;
         setTimeout(typeText, speed);
    }
}
typeText();
let letter2 = 0;
const text2 = "Pertigaan";
function typeText2() {
    if (letter2 < text2.length) {
        document.getElementById("text2").innerHTML += 
        text2.charAt(letter2);
        letter2++;
        let speed = Math.floor(Math.random() + 200) + 150;
         setTimeout(typeText2, speed);
    }
}
typeText2();