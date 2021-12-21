const container = document.querySelector('#container');
container.style.display = 'grid';
container.style.height = '75%';
container.style.width = '95%';
let rowColumns = 16;
let bColor = 'rgb(0,0,0)';
/*function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    bColor = "rgb(" + x + "," + y + "," + z + ")";
    square.style.backgroundColor = bColor;
    //console.log(bColor);
}*/
//random_bg_color();
function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    bColor = "rgb(" + x + "," + y + "," + z + ")";
}

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click',()=>{
      bColor = 'rgb(0,0,0)';
});

const blueBtn = document.querySelector('#blue');
blueBtn.addEventListener('click',()=>{
    bColor = 'rgb(0,0,255)';
});

const greenBtn = document.querySelector('#green');
greenBtn.addEventListener('click',()=>{
    bColor = 'rgb(0,128,0)';
});

function gridLayout(rowColumns){
    container.style.gridTemplateColumns = `repeat(${rowColumns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowColumns}, 1fr)`;
    for(i=0; i<rowColumns*rowColumns;i++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        container.appendChild(square);
    }
    let gridItems = document.getElementsByClassName('grid-item');
    for (let j= gridItems.length -1; j>=0; j--){
        gridItems[j].addEventListener('mouseenter',()=>{
            //randomColor();
            gridItems[j].style.backgroundColor = bColor;
        });
    }

        /*    // console.log('rainbow');
            random_bg_color();
           // console.log(bColor);
            square.style.backgroundColor = bColor; 
        });
        //Need to make branch at home some do not mess up old code.
        //This may be helpful: how to pass argument event listener stack overflow
        /*
        const blackBtn = document.querySelector('#black');
        blackBtn.addEventListener('click',()=>{

        });

        const blueBtn = document.querySelector('#blue');
        blueBtn.addEventListener('click',()=>{
    
        });

        const greenBtn = document.querySelector('#green');
        greenBtn.addEventListener('click',()=>{
    
        });

        const rainbowBtn = document.querySelector('#rainbow');
        rainbowBtn.addEventListener('click',()=>{
            square.addEventListener('mouseenter', ()=>{
                console.log('rainbow');
                random_bg_color();
                square.style.backgroundColor = bColor; 
            });*/ //This needs to be added first I think...
        
        
    }

gridLayout(rowColumns);

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click',()=>{
    rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20". Do not use a grid more detailed than 100x100.');
    while (isNaN(rowColumns) || rowColumns>100){
     rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20". Do not use a grid more detailed than 100x100.');
    }
    const divs = document.getElementsByTagName('div');
    for(div of divs){
        div.style.backgroundColor = 'white';
     }
    const btnContainer = document.querySelector('#btncontainer');
    btnContainer.style.backgroundColor = '#828e84';
    gridLayout(rowColumns);
    
});




