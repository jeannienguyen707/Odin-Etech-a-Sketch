
let refToBoxes = document.querySelector(".containsSqrs")
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        let xy = document.createElement("div")
        xy.textContent = x + " " + y
        refToBoxes.append(xy)
    }
}   
