

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
                div.appendChild(divRow);
                
            };
        }
    }

    grid();

});

const hover = document.querySelector('#container');

hover.addEventListener('mouseover', function(event) {

    event.target.style.backgroundColor = 'red';
    document.getElementById('container').style.backgroundColor = 'transparent';

});

