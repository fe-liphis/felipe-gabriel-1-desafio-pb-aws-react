class Form {
    statusAccount = document.getElementById("status-account");
    financialMarkets = "";

    validaInputs(indexTela) {
        let aprovacao;
        switch(indexTela) {
            case 2:
                aprovacao = this.validaTela3();
                break;
            case 3:
                aprovacao = this.validaTela4();
                break;
            case 4:
                aprovacao = this.validaTela5();
                break;
        }
        return aprovacao;
    }

    validaTela3() {
        this.financialMarkets = document.querySelector('input[name="financial-markets"]:checked');

        if(this.statusAccount.value && this.financialMarkets){
            this.financialMarkets = this.financialMarkets.value;
            console.log(this.statusAccount);
            console.log(this.financialMarkets);
            return true;
        }
        else
            return false;
    }

    validaTela4() {

    }

    validaTela5() {

    }
}