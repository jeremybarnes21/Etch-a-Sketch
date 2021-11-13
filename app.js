const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.height = '100%';
container.style.width = '100%';

function gridLayout(rows,columns){
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; //Learned about string interpolation... this is NOT jquery
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    //Grid is setup, but need to make divs for each grid that was can add hover effect
    for(i=0; i<rows*columns;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.setAttribute('id','gItem')
        container.appendChild(square);
    }
}
gridLayout(16,16);

const gridItem = document.querySelectorAll('.grid-item');
gridItem.forEach((div) => {
    div.addEventListener('mouseenter', () => {
     div.style.backgroundColor = 'black'; //querySelectorALL wouldn't work... but div did... why?? Needed to match what was iterated through?
 });
});

//Next need to make form/button to put in input and pass that to gridLayout function
//Needs to 1. Clear all styles (backgroundColors) 2. be able to input number of rows/columns
const resetButton = document.querySelector('#btn');
resetButton.onclick = clearFunction;
function clearFunction(){
    gridItem.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}