function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("reset.css").item(cssLinkIndex);

    var newlink = document.createElement("about.css");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
