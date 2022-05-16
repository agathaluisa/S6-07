//ADIÇÃO
function add (a, b){
  return a + b
}

//MULTIPLICAÇÃO
function multiply (a, b){
  let result = 0
  for(let i= 1; i <= a; i++){
    result = add(result, b)
  }
  return result
}

//POTÊNCIA
function power (x, n){
  let result = x
  for(let i = 1; i < n; i++){
    result = multiply(result, x)
  }
  return result
}

//FATORIAL
function factorial (num){
  let result = num--
  for(num; num >= 1; num--){
    result = multiply(result, num)
  }
  return result
}

//BONUS FIBONACCI
function fibonacci (num){
  let anterior = 0
  let proximo = 1
  let resultado =0

  for(let i= 0; i < num; i++){
    resultado = anterior + proximo
    anterior = proximo
    proximo = resultado
  }
  return anterior
}

console.log(fibonacci(7))