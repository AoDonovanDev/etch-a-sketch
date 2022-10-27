const gridSpace = document.getElementById("sketchBox");
gridSize = document.getElementById("mySlider");
let opVal = [];
document.getElementById("color").addEventListener("click", colorMode);
document.getElementById("grayscale").addEventListener("click", grayMode);
document.getElementById("black").addEventListener("click", blackMode);
gridSize.addEventListener("load", createGrid);  
gridSize.addEventListener("change", createGrid);
gridSize.value = 16;
let userSelection = "black";
createGrid();
function createGrid(){
    removeAllChildNodes(gridSpace); 
    console.log(gridSize.value);
    opVal = [];
    for(let i = 0; i < (gridSize.value*gridSize.value); i++){
        opVal.push(0);
        gridElement = document.createElement("div");
        gridElement.classList.add("grid");
        gridElement.setAttribute("id", i);
        document.getElementById("sketchBox").appendChild(gridElement);
        gridElement.addEventListener("mouseover", selectMode);
    }
    gridSpace.style.gridTemplateColumns = "repeat("+gridSize.value+", 1fr)";
}
function selectMode(){
    if(userSelection == "black"){
        this.classList.add(userSelection)
    }
    if(userSelection == "color"){
        let rVal = Math.floor(Math.random()*256);
        let gVal = Math.floor(Math.random()*256);
        let bVal = Math.floor(Math.random()*256);
        this.style.backgroundColor = "rgb("+rVal+", "+gVal+", "+bVal+")"
        this.classList.add(userSelection);
    }
    if(userSelection == "gray"){
        let opInc = parseInt(this.id);
        opVal[opInc] = opVal[opInc]+0.1
        this.classList.add(userSelection);
        this.style.filter = "opacity("+(opVal[opInc])+")"
    }
}
function colorMode(){
    removeAllChildNodes(gridSpace); 
    createGrid();
    userSelection = "color";
}
function blackMode(){
    removeAllChildNodes(gridSpace);
    createGrid(); 
    userSelection = "black";
}
function grayMode(){
    removeAllChildNodes(gridSpace);
    createGrid();
    userSelection = "gray";
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}