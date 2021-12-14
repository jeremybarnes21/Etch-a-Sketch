const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.height = '100%';
container.style.width = '100%';
let rowColumns = 16;
//let square = document.createElement('div');//need to have this in for loop... or else only one works

//const square = document.createElement('div'); 12.7.21 This made 1 div 


function gridLayout(rowColumns){
    container.style.gridTemplateColumns = `repeat(${rowColumns}, 1fr)`; //Learned about string interpolation... this is NOT jquery
    container.style.gridTemplateRows = `repeat(${rowColumns}, 1fr)`;
    for(i=0; i<rowColumns*rowColumns;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
        square.addEventListener('mouseenter', ()=>{
            console.log('mouse has entered');
            square.style.backgroundColor = 'black';    
        });
    }
}
gridLayout(rowColumns);

const resetButton = document.querySelector('#btn');

resetButton.addEventListener('click',()=>{
    rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20"');
    const divs = document.getElementsByTagName('div');
    if(rowColumns <101){
     for(div of divs){
        div.style.backgroundColor = 'white';
     }
     gridLayout(rowColumns);
    }
    else{ //Need to do while loop?
        rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20"');
    }
});
//12.14.21 app is now functioning!!! Now can add styling and potentially random colors 
//Need to also add so that input cannot be over 100