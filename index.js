const primeiroNome = prompt("Informe o primeiro nome: ")
const sobrenome = prompt("Informe o sobrenome:")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?: ")
const nascimento = prompt("Informe a data de nascimento: ")


alert("Recruta cadastrado com sucesso!  \n" + "\n Nome Completo: " + primeiroNome + " " + sobrenome + "\n " + "\nCampo de estudo: " +campoDeEstudo + "\n " + "\nIdade : " + (2022 - nascimento))

console.log(primeiroNome, sobrenome, nascimento)