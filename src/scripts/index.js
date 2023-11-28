const tela = new Tela();

const btnParaProximaTela = document.querySelectorAll(".btn-prox-tela");
const btnParaVoltarTela = document.querySelectorAll(".btn-volta-tela");
const btnSkip = document.querySelectorAll(".btn-skip");

btnParaProximaTela.forEach(btn => btn.addEventListener("click", () => tela.proximaTela()));
btnParaVoltarTela.forEach(btn => btn.addEventListener("click", () => tela.voltaTela()));
btnSkip.forEach(btn => btn.addEventListener("click", () => tela.pulaTela()));