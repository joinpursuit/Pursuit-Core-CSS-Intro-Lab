document.addEventListener("DOMContentLoaded", () => {
    let resetButton = document.querySelector("button")

    resetButton.addEventListener("click", () => {
    let css = document.querySelector("#cssStyle")
    if(css.href = "cssintro.css") {
    cssStyle.setAttribute("href", "cssreplace.css")
  } else if(css.getAttribute('href').value = "cssreplace.css"){
      cssStyle.setAttribute("href", "cssintro.css")
    }
})
})
