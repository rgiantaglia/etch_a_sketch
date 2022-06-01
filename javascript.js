const btn = document.querySelector('button')

btn.addEventListener('click', function() {

    const container = document.querySelector('#container');

    container.replaceChildren();
    let n = numberSqr.value //prompt('How many squares per side do you want?');

    if ( n > 64) alert ('Please enter a number smaller than 64');
    
    else {

    function grid(){
        
        //sets the number of rows entered in the prompt
        for (let i=1; i <= n; i++){

            const div = document.createElement('div');
            div.classList.add('row');
            container.appendChild(div);
            
            //sets the number of squares in the row entered in the prompt
            for (let j=1; j<=n; j++){
                const row = document.querySelector('.row');

                
                const divRow = document.createElement('div');
                divRow.classList.add('square');

                //Solid Color Button
                const solid = document.querySelector('#solidButton');

                solid.addEventListener('click', () => {

                    solid.appendChild(color).parentNode;
                    let colorInput = document.getElementById('chooseColor');
                        
                    divRow.addEventListener('mouseover', function (event) {
                        let theColor = colorInput.value;
                        console.log(theColor);
                        divRow.setAttribute('style', `background-color: ${theColor}`);
                    }, false);   
                    

                });

                //Random Color Button
                const random = document.querySelector('#btnRandom');

                random.addEventListener('click', () => {
            
                    divRow.addEventListener('mouseover', function (event) {
                        let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
                        divRow.setAttribute('style', `background-color: ${color}`);
                    });

                });

                //Gradient Color Button
                const gradient = document.querySelector('#btnGradient');

                gradient.addEventListener('click', () => {
                    let color = 0;
                    divRow.addEventListener('mouseover', function (event) {
                        color++
                        let a = color/10;
                        console.log(a);
                        divRow.setAttribute('style', `background-color: rgba(0, 0, 0, ${a})`);
                    });
                });

                div.appendChild(divRow);
            };
        }
    }

    grid();
    }
});


//Creates color input selection in div id='solidButton'
const solid = document.querySelector('#solidButton');
let color = document.createElement('input');
color.setAttribute('type','color');
color.setAttribute('id', 'chooseColor');


const number = document.querySelector('#mainButton');
let numberSqr = document.createElement('input');
numberSqr.setAttribute('id', 'numberSqr');
mainButton.appendChild(numberSqr);

