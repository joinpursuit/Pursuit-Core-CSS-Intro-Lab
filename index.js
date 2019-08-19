document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector('button')
    button.addEventListener('click', replaceCSS)
})


function replaceCSS(event) {
    event.preventDefault()
    let oldlink = document.querySelector("#linking")
    let newlink = document.createElement("link");
    newlink.id = 'linking'
    newlink.rel = 'stylesheet'
    newlink.href = './replacer.css'
    console.log(oldlink);

    if (oldlink.href === newlink.href) {
        oldlink.href = './css_intro_lab.css'
    } else {
        oldlink.href = './replacer.css'
    }


}