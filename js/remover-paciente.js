var tabela = document.querySelector('table');
tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut'); //adcionando a classe do css para fazer a transição
    setTimeout(function(){ //setTimeout cria uma desacelaração na remoção de 500ms(0.5s).
        event.target.parentNode.remove(); 

    },500);


    /*
    var alvoEvento = event.target;//event.target captura o alvo q sofreu o evento, no caso, o duplo click;
    var paiDoALvo = alvoEvento.parentNode; //parentNode captura o pai q foi clicado.
    paiDoALvo.classList.add('fadeOut');
    paiDoALvo.remove();
    */
    
});







/*
var pacientes = document.querySelectorAll('.paciente');
pacientes.forEach(function(paciente){ //forEach aplica a função anonima em cada item do array no loop.
    paciente.addEventListener('dblclick', function(){
        this.remove(); //remove o paciente clicado.
    })
})
*/