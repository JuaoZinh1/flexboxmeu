
const dataInicio = new Date('2024-04-19T00:00:00');

function atualizarContagem() {
  
    const dataAtual = new Date();

    const diferenca = dataAtual - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const milissegundos = diferenca % 1000;


    const contagemFormatada = `Estamos juntos há ${dias} Dias e ${minutos.toString().padStart(2, '0')} Minutos`;

    document.getElementById('contagem').textContent = contagemFormatada;
}

setInterval(atualizarContagem, 10);

atualizarContagem();