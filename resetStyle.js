function changeCSS(cssFile, cssLinkIndex) {
    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    if (oldlink.href.includes('/reset.css')){
        newlink.setAttribute("href", './style.css');
    } else {
        newlink.setAttribute("href", './reset.css');
    }
    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}