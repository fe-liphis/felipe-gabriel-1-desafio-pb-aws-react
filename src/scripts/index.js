const tela = new Tela();
const form = new Form();

const btnParaProximaTela = document.querySelectorAll(".btn-prox-tela");
const btnParaVoltarTela = document.querySelectorAll(".btn-volta-tela");
const btnSkip = document.querySelectorAll(".btn-skip");
const btnSubmit = document.getElementById("submit");

btnParaVoltarTela.forEach(btn => btn.addEventListener("click", () => tela.voltaTela()));
btnParaProximaTela.forEach(btn => btn.addEventListener("click", () => form.aguardaVerificacao()));
btnSkip.forEach(btn => btn.addEventListener("click", () => tela.proximaTela()));
btnSubmit.addEventListener("click", () => form.aguardaVerificacao())