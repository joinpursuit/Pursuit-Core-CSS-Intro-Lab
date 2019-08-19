document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    function changeCSS(cssFile, cssLinkIndex) {

        var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    
        var newlink = document.createElement("link");
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
    
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    }

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        console.log('Checked');
      } else {
        // do that
        console.log('Not checked');
      }
    });
  });

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}