function changeCSS(about, cssLinkIndex) {

    let oldlink = document.getElementsByTagName("about").item(cssLinkIndex);

    let newlink = document.createElement("reset");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}