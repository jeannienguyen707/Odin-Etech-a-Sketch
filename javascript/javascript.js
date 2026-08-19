
let userInput = document.querySelector(".numSqrs")
userInput.addEventListener("click", getUserInput)
let refToBoxes = document.querySelector(".containsSqrs")
for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        let xy = (document.createElement("div"))
        xy.classList.add("insideBox")
        xy.addEventListener("mouseover", colorHover )
        refToBoxes.append(xy)
    }
}   


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
}