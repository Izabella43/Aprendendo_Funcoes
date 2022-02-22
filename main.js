function Azul() {
    document.querySelector('#exemplo').classList.add('Azul');
    document.querySelector('#exemplo').classList.remove('Verde', 'Violeta');
}

function Verde() {
    document.querySelector('#exemplo').classList.add('Verde');
    document.querySelector('#exemplo').classList.remove('Azul', 'Violeta');

}

function Violeta() {
    document.querySelector('#exemplo').classList.add('Violeta');
    document.querySelector('#exemplo').classList.remove('Verde', 'Azul');

}