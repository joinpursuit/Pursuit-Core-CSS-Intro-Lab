document.addEventListener('DOMContentLoaded', () => {
   let button = document.querySelector("#button")
   let oldFile = document.querySelector("link")
  button.addEventListener("click", () => {
   let newFile = document.createElement('link')
   let currentFile = document.querySelector("link") 
     if (currentFile === oldFile) {
      document.querySelector('head').replaceChild(newFile, oldFile)
     } else {
       document.querySelector('head').replaceChild(oldFile, currentFile)
     }
   
    
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