function showMenu() {
    var x = document.getElementById("modal");
    var y = document.getElementById("blur");

    
    if (!x || !y) return null;

    x.classList.remove("d-none")
    y.classList.remove("d-none")
}

function hideMenu() {
    var x = document.getElementById("modal");
    var y = document.getElementById("blur");

    if (!x || !y) return null;

    x.classList.add("d-none")
    y.classList.add("d-none")
}

document.querySelector("#modal a").addEventListener("click", hideMenu)
