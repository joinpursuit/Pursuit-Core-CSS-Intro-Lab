/*
    found my preferred solution
    https://stackoverflow.com/questions/48795605/switching-websites-theme-css-file?noredirect=1&lq=1
*/
const switchStyleSheet = () => {
   let element = document.getElementById("theme_css");
   
   if(element.classList[0] === undefined){
       element.href = "styleSheet2.css";
       element.classList.add("styleSheet2");
    } else if(element.classList[0] === "styleSheet1"){
        element.href = "styleSheet2.css";
        element.classList.remove("styleSheet1")
        element.classList.add("styleSheet2");
    } else {
        element.href = "styleSheet1.css";
        element.classList.remove("styleSheet2")
        element.classList.add("styleSheet1");
    }
}