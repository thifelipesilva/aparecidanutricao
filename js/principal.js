var titulo = document.querySelector('h1');
titulo.textContent = "Aparecida Nutricionista";



//Aplicando o calculo do IMC em todos os pacientes.
var pacientes = document.querySelectorAll(".paciente"); //selecionta todos os paciente e devolve um array dos pacientes

//Loop pra varrer o array e aplicar o calculo de IMC.
for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    //peso do paciente
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent; //selecionando o conteudo de texto
    
    //altura do paciente
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    
    //Validação de Peso e Altura
    
    var pesoEhvalido = true;
    var alturaEhvalida = true;
    
    if (altura <= 0 || altura >= 4) {
        console.log('Altura inválida');
        alturaEhvalida = false;
        tdImc.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido'); // adiciona uma classe de estilo no html.
    }
    
    if (peso <= 0 || peso >= 350) {
        console.log('Peso inválido');
        pesoEhvalido = false;
        tdImc.textContent = 'Peso Inválido';
        paciente.classList.add('paciente-invalido');
    }
    
    //calcular o IMC e atribuir o valor a td 
    if (pesoEhvalido && alturaEhvalida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

