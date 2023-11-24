let draw = true;
let size = 16;
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const eraseButton = document.querySelector('.erase');
const sizeButton = document.querySelector('.size');
const gridItems = document.querySelectorAll('.grid-item');
const gridRows = document.querySelectorAll('.grid-rows');
sizeButton.addEventListener('click',()=> sizeChange());
resetButton.addEventListener('click',()=> clear());
eraseButton.addEventListener('click',()=> {
  if(draw){
    eraseButton.textContent='Draw';}
  else{
    eraseButton.textContent='Erase';
  }
  draw = !draw
});



function reset(){
  while(container.hasChildNodes())
  container.removeChild(container.firstChild);
  
}
function clear(){
  while(container.hasChildNodes())
  container.removeChild(container.firstChild);
  buildGrid(size)
}
function sizeChange(){
  size = window.prompt("What pixel density would you like the grid?");
  reset();
  buildGrid(size)
  
  
}
function buildGrid(size){
    for(i=1;i<=size;i++){
        let row = document.createElement('div');
        row.classList.add('grid-rows');
        container.appendChild(row);
        for(x=1;x<=size;x++){
          let box = document.createElement('div');
          box.classList.add('grid-item');
          box.addEventListener('mouseover', ()=> handleHover(box));
          row.appendChild(box);

    }
}

function handleHover(div){
  if(draw){
    div.style['background-color'] = "black";
  }
  else{
    div.style['background-color'] = "white";
  }

 } 
  
}

buildGrid(size);

