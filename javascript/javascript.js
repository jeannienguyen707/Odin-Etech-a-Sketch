
let refToBoxes = document.querySelector(".containsSqrs")
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        let xy = (document.createElement("div"))
        xy.addEventListener("mouseover", backgroundChange)
        xy.classList.add("insideBox")
        refToBoxes.append(xy)
    }
}   

function backgroundChange(e){
    e.target.style.backgroundColor = "purple"
}