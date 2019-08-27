document.addEventListener("DOMContentLoaded", () => {
    let resetButton = document.querySelector("button")

    resetButton.addEventListener("click", () => {
    let css = document.querySelector("#cssStyle")
    console.log(css.href)
    if(css.href.endsWith("cssintro.css")) {
    cssStyle.setAttribute("href", "cssreplace.css")
  } else if(css.href.endsWith("cssreplace.css")){
      cssStyle.setAttribute("href", "cssintro.css")
    }
})
})
