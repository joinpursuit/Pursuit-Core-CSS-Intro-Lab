const changeCss = () =>{
        var oldlink = document.querySelector("link")
        if(oldlink.id === "ogLink"){
            oldlink.href = "./css_button_remove.css"
            oldlink.id = "newLink"
        } else {
            oldlink.href = "./css_intro.css"
            oldlink.id = "ogLink"
        }
        

}