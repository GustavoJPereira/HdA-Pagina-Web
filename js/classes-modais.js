// Detalhes das classes 

function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
            modal.classList.remove ('mostrar');
        }
    })
}

const acrobata = document.querySelector('.demo-classe');
acrobata.addEventListener('click', function () {
    iniciaModal('acrobata');
})
console.log(acrobata);