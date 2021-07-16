
function highlightCurrentNavLink(){
    var path = window.location.pathname.substring(1);
    var els = document.querySelector("a[href='" + path + "']");
    if (els) {
        els.classList.add("active");
    }
}