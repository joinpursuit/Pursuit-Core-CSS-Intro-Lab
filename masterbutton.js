document.addEventListener("DOMContentLoaded", () => {
    let remove = document.createElement("button")
    remove.innerText = "Press to remove style"
    document.body.appendChild(remove)
    remove.addEventListener("click", () => {
        let link = document.querySelector("#link")
        document.querySelector("head").removeChild(link)
    })
    
    let remove = document.createElement("button")
    remove.innerText = "Press to remove style"
    document.body.appendChild(remove)
    
    const replace = () => {
        let link = document.querySelector("#link")
        if(link){
            remove.addEventListener("click", () => {
            document.querySelector("head").removeChild(link)
        }
    })

}