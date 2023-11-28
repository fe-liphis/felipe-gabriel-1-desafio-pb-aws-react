class Tela {
    form = new Form();
    telas = document.querySelectorAll('.tela');
    index = 0;

    constructor(){
        this.atualizaTela();
    }

    atualizaTela() {
        this.telas.forEach((tela, key) => {
            if(key === this.index)
                tela.style.display = 'grid';
            else
                tela.style.display = 'none';
        });
    }

    proximaTela() {
        console.log(this.index);
        if (this.index >= 2) {
            const validacao = this.form.validaInputs(this.index);
            
            if(validacao) {
                this.index++;
                this.atualizaTela();
            }
        } else {
            this.index++;
            this.atualizaTela();
        }
    }

    voltaTela() {
        this.index--;
        this.atualizaTela();
    }

    pulaTela() {
        this.index++;
        this.atualizaTela();
    }
}