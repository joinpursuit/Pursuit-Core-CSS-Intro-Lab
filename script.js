let head = document.querySelector("head");
head.setAttribute("id", "head");
console.dir(head.children[2].outerHTML);

let cssBtn = document.querySelector("#change-css");
// let styleSheet = head.children[2].cloneNode();
let styleSheet = head.children;

let toggle = true;

cssBtn.addEventListener("click", () => {
    if (toggle) {
        head.children[2].attributes.href.nodeValue = "";
        toggle = false;
    } else {
        head.children[2].attributes.href.nodeValue = 'style.css';
        toggle = true;
    }
})
console.dir(cssBtn);
console.dir(styleSheet);