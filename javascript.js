

const btn = document.querySelector('button')





btn.addEventListener('click', function() {



    const container = document.querySelector('#container');

    container.replaceChildren();
    n = prompt('How many squares per side do you want?');

    function grid(){

        for (let i=1; i <= n; i++){

            const div = document.createElement('div');
            div.classList.add('row');
            container.appendChild(div);
            

            for (let j=1; j<=n; j++){
                const row = document.querySelector('.row');

                const divRow = document.createElement('div');
                divRow.classList.add('square');

                let color = 0;
                divRow.addEventListener('mouseover', function (event2) {
                color++
                let a = color/10;
                console.log(a);
                    divRow.setAttribute('style', `background-color: rgba(0, 0, 0, ${a})`);
                })
      
                div.appendChild(divRow);
                
            };
        }
    }

    grid();

});

const hover = document.querySelector('#container');

//let color = 0;
//hover.addEventListener('mouseover', function(event) {

    //event.target.style.backgroundColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    //color++
    ///let a = color/10;
    //console.log(a);


   // event.target.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
    
    //event.target.style.opacity = .2;
   /// document.getElementById('container').style.backgroundColor = 'transparent';
    
//});



