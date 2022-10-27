const gridSpace = document.getElementById("sketchBox");
let gridSize = document.getElementById("mySlider");
let gridHeight = gridSpace.getAttribute("height");
let gridWidth = gridSpace.getAttribute("width");
let opVal = [];
document.getElementById("color").addEventListener("click", colorMode);
document.getElementById("grayscale").addEventListener("click", grayMode);
gridSize.value = 16;
gridSize.addEventListener("load", createGrid);  
gridSize.addEventListener("change", createGrid);
createGrid();
function createGrid(){
    removeAllChildNodes(gridSpace); 
    console.log(gridSize.value);
    for(let i = 0; i < (gridSize.value*gridSize.value); i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        document.getElementById("sketchBox").appendChild(gridElement);
        gridElement.addEventListener("mouseover", blackMode);
    }
    gridSpace.style.gridTemplateColumns = "repeat("+gridSize.value+", 1fr)";
}
function colorMode(){
    removeAllChildNodes(gridSpace); 
    console.log(gridSize.value);
    for(let i = 0; i < (gridSize.value*gridSize.value); i++){
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        document.getElementById("sketchBox").appendChild(gridElement);
        gridElement.addEventListener("mouseover", colorGrid);
    }
    gridSpace.style.gridTemplateColumns = "repeat("+gridSize.value+", 1fr)";
}
function grayMode(){
    removeAllChildNodes(gridSpace); 
    console.log(gridSize.value);
    opVal = [];
    for(let i = 0; i < (gridSize.value*gridSize.value); i++){
        opVal.push(0);
        let gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridElement.setAttribute("id", i);
        document.getElementById("sketchBox").appendChild(gridElement);
        gridElement.addEventListener("mouseover", grayGrid);
    }
    console.log(opVal);
    gridSpace.style.gridTemplateColumns = "repeat("+gridSize.value+", 1fr)";
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}
function blackMode(){
    this.classList.add("black");
}
function colorGrid(){
    let rVal = Math.floor(Math.random()*256);
    let gVal = Math.floor(Math.random()*256);
    let bVal = Math.floor(Math.random()*256);
    this.style.backgroundColor = "rgb("+rVal+", "+gVal+", "+bVal+")"
    this.classList.add("color");
}
function grayGrid(){
    let opInc = parseInt(this.id);
    console.log(opVal[opInc]);
    opVal[opInc]= opVal[opInc]+0.1
    this.classList.add("gray");
    this.style.filter = "opacity("+(opVal[opInc])+")"
    console.log(this);
}
