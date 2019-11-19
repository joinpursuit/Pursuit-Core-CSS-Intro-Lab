document.addEventListener("DOMContentLoaded", () => {
    let button = document.createElement("button");
    button.id="clearBtn";
    button.innerText = "Clear CSS";
    document.body.appendChild(button);
    button.addEventListener("click", () => {
        let link = document.querySelector("#cssLink");
        if(link.disabled){
            // link.href = "./clear.css";
            link.disabled = false;
        } else {
            // link.href = "./master.css";
            link.disabled = true;
        }
    })
})
