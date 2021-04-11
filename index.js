function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var lightHead = document.getElementById("header").className === "header";
    console.log(lightHead);
    if (lightHead) {
        document.getElementById("header").className = "header-dark-mode";
    } else if (!lightHead) {
        document.getElementById("header").className = "header";
    }
    var lightcounten = document.getElementById("web").className === "counten";
    console.log(lightcounten);
    if (lightcounten) {
        document.getElementById("web").className = "counten-dark-mode";
    } else if (!lightcounten) {
        document.getElementById("web").className = "counten";
    }
}