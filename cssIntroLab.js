function changeCss(cssIntroLab, csslinkIndex) {
    let oldLink = document.querySelector('#cssLab1');
    // console.log(oldLink)
    let newLink = document.createElement("link");
    newLink.setAttribute("type", "text/css");
    newLink.setAttribute("rel", "stylesheet");
    newLink.setAttribute("id", "cssLab2");
    newLink.setAttribute("href" , "./csslinkIndex.css");
   let result = document.getElementsByTagName('head').item(0).replaceChild(newLink, oldLink);
   console.log(result)

   if (newLink.id === "cssLab2") {
    
   } 
//    else if (id = "cssLab2") {
//     document.querySelector('#cssLab1')
//    }
    
}