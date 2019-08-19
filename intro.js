document.addEventListener('DOMContentLoaded', () => {
    let oldFile = document.querySelector("link")
    let newFile = document.querySelector('link')
  newFile.removeAttribute("rel", "stylesheet");
  newFile.removeAttribute("type", "text/css")
  newFile.removeAttribute("href", "intro2")
  document.querySelector('head').replaceChild(newFile, oldFile)
  link.addEventListener("click", () => {
    
    
  })
})








// const changeFiles = (intro2, intro) => {
// let oldFile = document.querySelector('link')
// let newFile = document.createElement('link')
// newFile.setAttribute("rel", "stylesheet");
// newFile.setAttribute("type", "text/css")
// newFile.setAttribute("href", "intro2")
// document.querySelector('head').replaceChild(newFile, oldFile)

// }