//Fonctionnalité 1 et 1-bis

var foot = document.querySelector('footer');

var increment = 0;
foot.addEventListener('click',function(){
    increment ++ ;
    console.log(`tu as cliquer ${increment} fois `);
    
});

//Fonctionnalité 2
var nav = document.querySelector('.navbar-toggler');
nav.addEventListener('click', function(){
    var head = document.querySelector('#navbarHeader');
    head.classList.toggle("collapse");
 
});

//Fonctionnalité 3
var edit = document.querySelectorAll('.btn-outline-secondary')[0];
edit.addEventListener('click', function(){
    var text = document.querySelectorAll('.card-body')[0];
    text.style.color = 'red';

});

//Fonctionnalité 4
var edit2 = document.querySelectorAll('.btn-outline-secondary')[1];
edit2.addEventListener('click', function(){
    var text2 = document.querySelectorAll('.card-body')[1];
   if (text2.style.color === 'green'){
        text2.style.color = '';
    }
   else{
       text2.style.color = 'green';

   }

});

//Fonctionnalité 5
var cache = document.querySelector('header');
var link = document.styleSheets[0];
cache.addEventListener('dblclick', function(){
 
    if (link.disabled === true){
        link.disabled = false;

    }else{
        link.disabled = true;
    }


});

//Fonctionalité 6

function reduire (){ 


    var view =document.querySelectorAll('.btn-success');
    var text6 = document.querySelectorAll('.card-text');
    var img = document.querySelectorAll('.card-img-top');

        for (let i= 0; i < text6.length; i++) {
            var p = document.querySelectorAll('.card-text')[i].textContent;  
            var reduce = false;
        view[i].addEventListener('mouseover', function() {
  
            if(reduce === false){
                img[i].style.width = '20%';
                text6[i].textContent = "";
                reduce = true;
            }
            else{
                img[i].style.width ='100%';
                text6[i].textContent = p ;
                reduce = false;
                
            }
       });
    }
    
};
reduire ();
    



