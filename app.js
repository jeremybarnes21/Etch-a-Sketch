let gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem.length);
gridLayout(rowColumns);
console.log(gridItem.length);// array is still 256... this may be good to know... need to reset

const resetButton = document.querySelector('#btn');
resetButton.addEventListener('click',()=>{
    console.log('test');
    //need to add to make everything white...
    rowColumns = prompt('Enter your grid dimensions below. For example, if you want your grid to be 20x20, enter "20"');
    gridLayout(rowColumns);
});

