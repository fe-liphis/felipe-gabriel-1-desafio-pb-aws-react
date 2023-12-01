class Form {
    tela = new Tela();

    statusAccount = "";
    financialMarkets = "";
    decideInvest = "";
    resourcesTrainning = [];
    lossInvestment = "";
    fullName = "";
    email = "";
    age = "";

    initialState = {
        statusAccount : "",
        financialMarkets : "",
        decideInvest : "",
        resourcesTrainning : [],
        lossInvestment : "",
        fullName : "",
        email : "",
        age : ""
    }

    aguardaVerificacao() {
        let validacao;

        if (Tela.index >= 2) {
            validacao = this.validaInputs(Tela.index);
            
            if(validacao) 
                this.tela.proximaTela();
        } else
            this.tela.proximaTela();
    }

    submitFormulario() {
        console.log("Formulario enviado com sucesso");
    }

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
            case 5:
                aprovacao = this.validaTela6();
                break;
        }
        return aprovacao;
    }

    validaTela3() {
        this.initialState.statusAccount = document.getElementById("status-account").value
        this.initialState.financialMarkets = document.querySelector('input[name="financial-markets"]:checked');

        if(this.initialState.statusAccount && this.initialState.financialMarkets){
            this.initialState.financialMarkets = this.initialState.financialMarkets.value;

            localStorage.setItem("formulario", JSON.stringify({...this.initialState,statusAccount:this.initialState.statusAccount, financialMarkets:this.initialState.financialMarkets}));

            return true;
        }
        else {
            this.financialMarkets = "";
            this.statusAccount = "";
            return false;
        }
    }

    validaTela4() {
        this.decideInvest = document.getElementById("decide-invest").value;
        const aux = document.querySelectorAll("input[name='resources-training']:checked");
        aux.forEach(checkbox => this.resourcesTrainning.push(checkbox.value));
        
        if(this.resourcesTrainning.length !== 0) {
            console.log(this.resourcesTrainning);
            console.log(this.decideInvest);
            return true;
        } 
        else {
            this.decideInvest = "";
            this.resourcesTrainning = [];
            return false;
        }
    }

    validaTela5() {
        this.lossInvestment = document.getElementById("loss-investment").value;
        
        if(this.lossInvestment.length !== 0) {
            console.log(this.lossInvestment);
            return true;
        } 
        else {
            this.lossInvestment = "";
            return false;
        }
    }

    validaTela6() {
        this.fullName = document.getElementById("full-name").value;
        this.email = document.getElementById("email").value;
        this.age = document.getElementById("age").value;

        if(this.fullName && this.email && this.age) {
            this.submitFormulario();
            return true;
        }
        else {
            this.fullName = "";
            this.email = "";
            this.age = "";
            console.log("false");
            return false;
        }
    }
}