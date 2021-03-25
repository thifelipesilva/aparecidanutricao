
var campoFiltro = document.querySelector('#filtrar-tabela'); //Captura o input.

campoFiltro.addEventListener("input", function(){ //input é um evento de digitação;
    var pacientes = document.querySelectorAll(".paciente"); //Devolve um array de pacientes.

    if(this.value.length > 0) { //Se digitarem algo no input
        for(var i = 0; i < pacientes.length; i++) { //for lista os pacientes
            var paciente = pacientes[i]; 
            var tdNome = paciente.querySelector(".info-nome"); // 
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //Expressão regular

            if(!expressao.test(nome)) { //testando se o nome é igual ao this.value. 
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }        
    } else{ //Se não for digitado nada no input, mostra a tabela.
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
