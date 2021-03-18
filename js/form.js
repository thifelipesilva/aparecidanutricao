var botaoAdcionar = document.querySelector('#adicionar-paciente');
botaoAdcionar.addEventListener("click", function(event){
    event.preventDefault(); // Previne de eventos padroes, como a pagina ser carregada quando o botao é clicado.

    var form = document.querySelector('#form-adiciona'); //querySelector retorna os dados formulario num objeto.
    //Extraindo as informaçoes do paciente (valor dos inputs)
    var paciente = obtemDadosDoPaciente(form); 
    //Criando o elemento tr e td.
    var pacienteTr = montaTr(paciente);   
    
    //Mensagem do array de error retornada da função validaPaciente.
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){    //Se for retornado uma string vazia da função validaPaciente ele não entra não dispara mensagem de erro.
        exibeMensagemDeErro(erros);
        return;
    }

    //Selecionando a tabela e acrescentando uma nova TR.
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector('#mensagem-erro')
    mensagensErro.innerHTML = '';

});

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemDadosDoPaciente (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }

    return paciente;
}

function montaTr(paciente) {
    //Criando o elemento tr.
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');
    
    //Tornando as Td's filhas da TR
    pacienteTr.appendChild(montaTd(paciente.nome,'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso,'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura,'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura,'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc,'info-imc'));

    return pacienteTr;
}

function montaTd (dados, classe) {
    var pacienteTd = document.createElement('td');  //Criando o elemento tr.
    pacienteTd.textContent = dados;  //Associando os valores dos inputs as Td's criadas
    pacienteTd.classList.add(classe); //Adicionando a classe correspondente a td.

    return pacienteTd;
}

function validaPaciente(paciente) {

    var erros = []; //Arrya para criar lista de mensagens

    if(paciente.nome.length == 0) {
        erros.push('O nome não pode ser em branco');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso é inválido');        
    }

    if(!validaPeso(paciente.altura)){
        erros.push('Altura é invalida');         
    } 

    if(paciente.gordura.length == 0) {
        erros.push('A gordura não pode ser em branco');
    }

    if(paciente.altura.length == 0) {
        erros.push('A altura não pode ser em branco');
    }

    if(paciente.peso.length == 0) {
        erros.push('O peso não pode ser em branco');
    }

    return erros;
}