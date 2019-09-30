document.addEventListener("onclick", () => {
  switchStyle();
})

function switchStyle() {

  let currentStyle = document.getElementById("#originalStyle");
  let alternateStyle = document.getElementById("#alternateStyle");

  if (currentStyle) {

    // document.getElementById("#originalStyle").href="cssIntro_blank.css";
    currentStyle.setAttribute("href", "cssIntro_blank.css");

  } else if (!currentStyle) {

    // document.getElementById("#alternateStyle").href="cssIntro.css";
    alternateStyle.setAttribute("href", "cssIntro.css");
  }
}
