const prompt = require('prompt-sync')()
const idade = Number(prompt("Diga um numero"))
let classe
switch (true){
case (idade >=0 && idade <=12):
classe = "crianca"
break
case (idade >=13 && idade <=17):
classe = "adolescente"
break
case (idade >=18 && idade <=64):
classe = "adulto"
break
case (idade >=65):
classe = "idoso"
break
default:
classe = "invalido"
break}
console.log(`Voce é: ${classe}`)
