const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.height = '100%';
container.style.width = '100%';
let rowColumns = 16;

function gridLayout(rowColumns){
    container.style.gridTemplateColumns = `repeat(${rowColumns}, 1fr)`; //Learned about string interpolation... this is NOT jquery
    container.style.gridTemplateRows = `repeat(${rowColumns}, 1fr)`;
    //Grid is setup, but need to make divs for each grid that was can add hover effect
    for(i=0; i<rowColumns*rowColumns;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.setAttribute('id','gItem');
        container.appendChild(square);
        for(j=0;j<rowColumns*rowColumns;j++){
        square.style.backgroundColor ='white';
         }//not working...
        square.addEventListener('mouseenter', ()=>{
            square.style.backgroundColor = 'black';    //This makes it addEventListener as being made!!
        });
    }
    
}
gridLayout(rowColumns);