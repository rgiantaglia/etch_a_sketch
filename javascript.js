const container = document.querySelector('#container');


function grid(){

const div = document.createElement('div');
div.classList.add('row');
container.appendChild(div);


for (let j=1; j<=n; j++){
const row = document.querySelector('.row');

const divRow = document.createElement('div');
divRow.classList.add('square');
div.appendChild(divRow);
};

}




const hover = document.querySelector('#container');

hover.addEventListener('mouseover', function(event) {

event.target.style.backgroundColor = 'red';
document.getElementById('container').style.backgroundColor = 'transparent';

});



const n = prompt('choose a number');
for (let i=1; i <= n; i++){
    grid ();
}

