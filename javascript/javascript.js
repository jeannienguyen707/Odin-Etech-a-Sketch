
let userInput = document.querySelector(".numSqrs")
userInput.addEventListener("click", getUserInput)
let refToBoxes = document.querySelector(".containsSqrs")
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        let xy = (document.createElement("div"))
        xy.addEventListener("mouseover", colorHover)
        xy.classList.add("insideBox")
        refToBoxes.append(xy)
    }
}  
    refToBoxes.style.width = (16 * 24) + "px"
    refToBoxes.style.height = (16 * 24) + "px"

function colorHover(e){
    e.target.style.backgroundColor = "black";
    console.log("you changed!")
}

function getUserInput(){
    let newNum = prompt("How many squares do you want the grid to be by?")
    while (newNum < 0 || newNum > 100) {
        newNum = prompt("Number has to be between 1 and 100")
    }

    while(isNaN(Number(newNum))){
        newNum = prompt("Please enter real number")
         
    }
    newSqrs(newNum)
}

function newSqrs(num){
    let refToBoxes = document.querySelector(".containsSqrs")
    while (refToBoxes.firstChild){
        refToBoxes.removeChild(refToBoxes.firstChild)
        console.log("here")
    }
    for (let x = 0; x < num; x++) {
        for (let y = 0; y < num; y++) {
            let xy = (document.createElement("div"))
            xy.addEventListener("mouseover", colorHover)
            xy.classList.add("insideBox")
            refToBoxes.append(xy)
        }
    }
    refToBoxes.style.width = (num * 24) + "px"
    refToBoxes.style.height = (num * 24) + "px"

}