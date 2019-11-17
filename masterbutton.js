document.addEventListener("DOMContentLoaded", () => {
    let reset = document.createElement("button")
    reset.innerText = "Press to reset style"
    document.body.appendChild(reset)

    reset.addEventListener("click",()=>{
        let style = document.querySelector("#style") 
        if(style){
            document.querySelector("head").removeChild(style)
        }else{
            let style = document.createElement("link")
            style.rel="stylesheet"
            style.id="style"
            style.href="./master.css"
            document.querySelector("head").appendChild(style)
            }
        })
})

    
