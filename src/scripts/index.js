const tela = new Tela();

const btnParaProximaTela = document.querySelectorAll(".btn-prox-tela");

btnParaProximaTela.forEach(btn => btn.addEventListener("click", () => tela.proximaTela()));