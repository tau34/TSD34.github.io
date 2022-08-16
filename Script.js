function select() {
    var t = document.getElementById("input").value;
    document.getElementById("0").style.display = "none"
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById(t).style.display = "block"
    setTimeout(select, 20)
}