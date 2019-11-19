document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("#reset")
    button.addEventListener("click", () => {
        let main = document.querySelector("link")
        let alt = document.createElement("link")
        alt.setAttribute("rel", "stylesheet")
        alt.setAttribute("type", "text/css")
        alt.setAttribute("href", "./alt.css")
        let parent = main.parentNode
        parent.replaceChild(alt, main)

    })   
})