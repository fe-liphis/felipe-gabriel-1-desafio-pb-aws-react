class Tela {
    telas = document.querySelectorAll('.tela');
    index = 0;

    constructor(){
        this.atualizaTela();
    }

    atualizaTela() {
        this.telas.forEach((tela, key) => {
            if(key === this.index)
                tela.style.display = 'flex';
            else
                tela.style.display = 'none';
        })
    }

    proximaTela() {
        this.index++;
        this.atualizaTela();
    }

    voltaTela() {
        this.index--;
        this.atualizaTela();
    }
}