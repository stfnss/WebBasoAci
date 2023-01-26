let letter = 0;
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit minus dolor qui in necessitatibus temporibus delectus voluptates! Consectetur assumenda molestias vitae laudantium rem maxime, provident ullam inventore numquam labore rerum veniam quae non a similique, perspiciatis saepe eius cum doloremque error necessitatibus soluta? Eius sint magnam illo eaque porro non vel eligendi nostrum, facere voluptatem sit in laborum ipsam vero possimus tempora autem minima officiis ipsa nobis ea id voluptates quae corporis. Totam, ad?";
function typeText() {
    if (letter < text.length) {
        document.getElementById("content-text").innerHTML += text.charAt(letter);
        letter++;
        let speed = Math.floor(Math.random() + 20) + 10;
         setTimeout(typeText, speed);
    }
}
typeText();