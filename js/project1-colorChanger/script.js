const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'wheat'){
          body.style.background = e.target.id;
        }
        if(e.target.id === 'orange'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.background = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.background = e.target.id;
        }
    })
})

