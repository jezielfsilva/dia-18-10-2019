let userMail = document.querySelector('.user');
let userPass = document.querySelector('.pass');

let testMail = 'testando@serv.document'
let testPass = 'senha'

function loggar (event) {
    event.preventDefault();
    console.log(event)


if (userMail.value === testMail) {
    document.querySelector('h1').innerHTML = 'Email certo!!'
} else {
    document.querySelector('h1').innerHTML = 'Email inválido!!'
}

if (userPass.value === testPass) {
    document.querySelector('h2').innerHTML = 'Senha certo!!'
} else {
    document.querySelector('h2').innerHTML = 'Senha incorreta!!'
}
}
