document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    button.id="clearBtn";
    button.innerText = "Clear CSS";
    document.body.appendChild(button);
    button.addEventListener("click", () => {
        let link = document.querySelector("#cssLink");
        if(link.href === "file:///Users/kevinwong/Desktop/Pursuit/Assignments/Unit%202%20-%20Labs/Pursuit-Core-CSS-Intro-Lab/master.css"){
            link.href = "./clear.css"
        } else {
            link.href = "./master.css";
        }
    })
})

// const clickEvent = () => {
//     if(link.href === "./master.css"){
//         link.href = "./clear.css";
//     }else{
//         link.href === "./master.css";
//     }
// }