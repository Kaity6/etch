let container = document.getElementById("container")
let gridCounter =document.getElementById("gridCoubter")


for (let i = 1; i <= 256; i++) {
    let i = document.createElement("div")
    i.classList.add("grid")
    container.appendChild(i)
    i.addEventListener("mouseover", () =>
    {
        i.classList.add("change")
    })
}
