var botaoAdcionar = document.querySelector('#adicionar-paciente');
botaoAdcionar.addEventListener("click", function(event){
    event.preventDefault(); // Previne de eventos padroes, como a pagina ser carregada quando o botao é clicado.
    var form = document.querySelector('#form-adiciona');

    //Capturando o valor dos inputs
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //Criando o elemento tr.
    var pacienteTr = document.createElement('tr');

    //Criando os tds.
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    //Associando os valores dos inputs as Td's criadas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //Tornando as Td's filhas da TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    //Selecionando a tabela e acrescentando uma nova TR.
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

});
