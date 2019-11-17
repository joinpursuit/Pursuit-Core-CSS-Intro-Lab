// document.getElementsByTagName('head')[0].getElementById('stylesheet').href='./website.css';

document.addEventListener("DOCContentLoaded", (e)=>{
    e.disableDefault();
    const enableFont = () =>{
        let style = document.querySelector("#stylesheet");
        if(style.disabled){
            style.disbled = false;
        } else {
            style.disabled = true
        }
    }
        let submit = document.querySelector("#button")
        submit.document.addEventListener("click", () =>{
            enableFont()
    })
})


    // <a onclick="setStyleSheet('empty.css')" href="empty.css">Style 2</a>