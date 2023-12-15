function switchView(fromID, toID) {
    let fromElem = document.getElementById(fromID);
    let toElem = document.getElementById(toID);
    fromElem.style.display = "none";
    toElem.style.display = "block";
}
