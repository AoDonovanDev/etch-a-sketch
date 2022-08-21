const gridSpace = document.getElementById("sketchBox");
let gridSize = document.getElementById("mySlider");
let gridHeight = gridSpace.getAttribute("height");
let gridWidth = gridSpace.getAttribute("width");
let blackList = document.getElementsByClassName("grid");
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
        gridElement.addEventListener("mouseover", colorBlack);
    }
    gridSpace.style.gridTemplateColumns = "repeat("+gridSize.value+", 1fr)";
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}
function colorBlack(){
    this.classList.add("black");
}
