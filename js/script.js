
const numUno = document.getElementById('num-uno');
const numDue = document.getElementById('num-due');
const btn = document.querySelector('button');
const output = document.querySelector('h1');

btn.addEventListener('click', function() {

  const numeroUno = parseInt(numUno.value);
  const numeroDue = parseInt(numDue.value);

  // Soluzione A
  /*if(somma(numeroUno, numeroDue)){
    output.innerHTML = somma(numeroUno, numeroDue);
  }else{
    output.innerHTML = 'Inserire i numeri corretti'
  }*/

  // Soluzione B (con operatore ternario)
  // miavar = (condizione) ? 'valore se è vera la condizione' : 'valore se è false'
  output.innerHTML = somma(numeroUno, numeroDue) ? somma(numeroUno, numeroDue) : 'Inserire i numeri corretti';

});

function somma (numA, numB) {

  if (isNaN (numA) || isNaN(numB)){

    return null;  
  }

  return numA + numB;
};



