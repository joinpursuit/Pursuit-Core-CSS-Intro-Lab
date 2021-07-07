document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    button.id="clearBtn";
    button.innerText = "Clear CSS";
    document.body.appendChild(button);
    let link = document.querySelector("link");

    if(reference === "./master.css"){
        button.addEventListener("click", () => {
            link.href = "./clear.css";
        })
    }
    else {
        button.addEventListener("click", () => {
            link.href = "./master.css";
        })
    }
})

// const clickEvent = () => {
//     if(link.href === "./master.css"){
//         link.href = "./clear.css";
//     }else{
//         link.href === "./master.css";
//     }
// }