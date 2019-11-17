document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    let CSSfile = "./blank.css"
    getCrrLink = document.querySelector("link");

    newLink = document.createElement("link");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("href", CSSfile);
    document.querySelector("head").replaceChild(newLink, getCrrLink);
  });
});
