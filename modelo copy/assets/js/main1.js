const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');



form.addEventListener('submit', function(e){
e.preventDefault();

//console.log("evento previnido"); teste de funcao

  const texto1 = form.querySelector('.texto1');
  const texto2 = form.querySelector('.texto2');

  const peso = Number(texto1.value);
  const altura = Number(texto2.value);

  //console.log('valor:'+peso+altura); teste de selecionar valores

  imc(peso,altura);

function imc(peso, altura, contador){

  const calculo = peso/(altura*altura);


  //CRIAR CONDIONAL PARA SABER SE A PESSOA ESTA OBESA OU NAO.

    // agora falta printar o IMC e colocar cor no css
    if(isNaN(altura) === true && isNaN(peso) === true){
      resultado.innerHTML = (`<p class="invalidoAltura"> Peso e altura invalidos!!</p>`);
      }
    else if(isNaN(peso) === true){
      resultado.innerHTML = (`<p class="invalidoPeso"> Peso invalido!!</p>`);
    }else if(isNaN(altura) === true){
      resultado.innerHTML = (`<p class="invalidoAltura"> Altura invalida!!</p>`);
    }else{
      printImc(calculo);
    }
}

function printImc(calculo){

 // console.log(calculo);
  if(calculo >=3 && calculo <5){
    resultado.innerHTML = (`<p class="resultadoCalculo">Na medida</p>`);
  }else if(calculo >=5 && calculo < 8 ){
    resultado.innerHTML = (`<p class="resultadoCalculo">Acima do peso</p>`);
  }else{resultado.innerHTML = (`<p class="resultadoCalculo">resultado: ${calculo}</p>`);
}
 
}
});
