const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.height = '75%';
container.style.width = '95%';
let rowColumns = 16;
let bColor = 'rgb(0,0,0)';
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    bColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bColor);
}
random_bg_color();


function gridLayout(rowColumns){
    container.style.gridTemplateColumns = `repeat(${rowColumns}, 1fr)`; //Learned about string interpolation... this is NOT jquery
    container.style.gridTemplateRows = `repeat(${rowColumns}, 1fr)`;
    for(i=0; i<rowColumns*rowColumns;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
        square.addEventListener('mouseenter', ()=>{
            console.log('mouse has entered');
            random_bg_color();
            square.style.backgroundColor = bColor; 
        });
    }
}
gridLayout(rowColumns);

const resetButton = document.querySelector('#btn');

resetButton.addEventListener('click',()=>{
    rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20". Do not use a grid more detailed than 100x100.');
    while (isNaN(rowColumns) || rowColumns>100){
     rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20". Do not use a grid more detailed than 100x100.');
    }
    const divs = document.getElementsByTagName('div');
    for(div of divs){
        div.style.backgroundColor = 'white';
     }
    gridLayout(rowColumns);
    
});
//12.14.21 app is now functioning!!! Now can add styling and potentially random colors 
