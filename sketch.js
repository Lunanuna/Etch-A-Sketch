// to set the original grid size
const size = 16;
const container = document.querySelector('#container');
//color options
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

//to make grid
function addGrid (num) {
        for (let i = 0; i < (num*num); i++ ){
            let cell = document.createElement('div');
            cell.id = 'cell';
            container.appendChild(cell);
            container.style.gridTemplateColumns = 'repeat('+num+', 1fr)';

            //to change background
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            })
            ;
        }
    

    }


//to set the original grid    
let original = addGrid(size);

//to change grid size 
const newGrid = document.querySelector('.new-grid');
 
 newGrid.addEventListener('click', ()=>{
    //group of cell 
    const cells = document.querySelectorAll('#cell');

    let userSize = Number(prompt('What dimensions do you want for the new grid?'))
    
    //to set under 100 grid
    while (userSize > 100) {
        userSize = Number(prompt('It should be under 100. Please pick a smaller number'))
    }
    
        cells.forEach(function(i){
            i.remove();
        });

        addGrid(userSize); 
    
     
   }
 );


//color events
black.addEventListener('click', changeBlack);
red.addEventListener('click', changeRed);
blue.addEventListener('click', changeBlue);
rainbow.addEventListener('click', changeRainbow);
eraser.addEventListener('click', useEraser);
reset.addEventListener('click', makeReset);


//to black
function changeBlack(e){
    const cells = document.querySelectorAll('#cell');

    cells.forEach(function (i){
        i.addEventListener('mousemove', function(){
           i.style.backgroundColor = 'black'; 
        });
    });
};
//to red
function changeRed(e){
    const cells = document.querySelectorAll('#cell');

    cells.forEach(function (i){
        i.addEventListener('mousemove', function(){
           i.style.backgroundColor = 'red'; 
        });
    });
};
// to blue
function changeBlue(e){
    const cells = document.querySelectorAll('#cell');

    cells.forEach(function (i){
        i.addEventListener('mousemove', function(){
           i.style.backgroundColor = 'blue'; 
        });
    });
};
// to rainbow
function changeRainbow(e){
    const cells = document.querySelectorAll('#cell');

    cells.forEach(function (i){
        i.addEventListener('mousemove', function(){
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
           i.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        });
    });
}
// eraser function 
function useEraser(e){
    const cells = document.querySelectorAll('#cell');

    cells.forEach(function (i){
        i.addEventListener('mousemove', function(){
           i.style.backgroundColor = '#FDF9F8'; 
        });
    });
};

function makeReset(e){
    const cells = document.querySelectorAll('#cell');
    cells.forEach(function(i){
        i.style.backgroundColor = '#FDF9F8';
    }) 
}