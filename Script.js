const colorlist = [
    "f00",
    "e10",
    "d20",
    "c30",
    "b40",
    "a50",
    "960",
    "870",
    "780",
    "690",
    "5a0",
    "4b0",
    "3c0",
    "2d0",
    "1e0",
    "0f0",
    "0e1",
    "0d2",
    "0c3",
    "0b4",
    "0a5",
    "096",
    "087",
    "078",
    "069",
    "05a",
    "04b",
    "03c",
    "02d",
    "01e",
    "00f",
    "10e",
    "20d",
    "30c",
    "40b",
    "50a",
    "609",
    "708",
    "807",
    "906",
    "a05",
    "b04",
    "c03",
    "d02",
    "e01"
];
var n = 0;
function select() {
    var t = document.getElementById("input").value;
    document.getElementById("0").style.display = "none"
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById(t).style.display = "block"
    document.getElementById("title").style.color = "#" + colorlist [Math.floor(n / 3)]
    n = (n + 1) % 135
    setTimeout(select, 20)
}