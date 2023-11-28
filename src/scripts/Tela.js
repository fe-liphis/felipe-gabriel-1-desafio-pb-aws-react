class Tela {
    telas = document.querySelectorAll('.tela');
    static index = 0;

    constructor(){
        this.atualizaTela();
    }

    atualizaTela() {
        this.telas.forEach((tela, key) => {
            if(key === Tela.index)
                tela.style.display = 'grid';
            else
                tela.style.display = 'none';
        });
    }

    proximaTela() {
        if(Tela.index > this.telas.length) {
            Tela.index = 0;
            this.atualizaTela();
        } else {
            Tela.index++;
            this.atualizaTela();
        }
    }

    voltaTela() {
        Tela.index--;
        this.atualizaTela();
    }
}