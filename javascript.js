let container = document.getElementById("container")
for (let i = 1; i <= 256; i++) {
    let i = document.createElement("div")
    i.classList.add("grid")
    container.appendChild(i)
}
let grid = document.querySelectorAll(".grid")
console.log(grid)

function change() {
    grid.classList.add("change")
    
}

change()