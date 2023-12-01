class Form {
    tela = new Tela();

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
            this.initialState.statusAccount = "";
            this.initialState.financialMarkets = "";
            return false;
        }
    }

    validaTela4() {
        this.initialState.decideInvest = document.getElementById("decide-invest").value;
        this.initialState.resourcesTrainning = [];
        const aux = document.querySelectorAll("input[name='resources-training']:checked");
        aux.forEach(checkbox => this.initialState.resourcesTrainning.push(checkbox.value));
        
        if(this.initialState.resourcesTrainning.length !== 0) {
            localStorage.setItem("formulario", JSON.stringify({...this.initialState,decideInvest:this.initialState.decideInvest, resourcesTrainning:this.initialState.resourcesTrainning}));
            return true;
        } 

        else {
            this.initialState.decideInvest = "";
            this.initialState.resourcesTrainning = [];
            return false;
        }
    }

    validaTela5() {
        this.initialState.lossInvestment = document.getElementById("loss-investment").value;
        
        if(this.initialState.lossInvestment.length !== 0) {
            localStorage.setItem("formulario", JSON.stringify({...this.initialState,lossInvestment:this.initialState.lossInvestment}));
            return true;
        } 
        else {
            this.initialState.lossInvestment = "";
            return false;
        }
    }

    validaTela6() {
        this.initialState.fullName = document.getElementById("full-name").value;
        this.initialState.email = document.getElementById("email").value;
        this.initialState.age = document.getElementById("age").value;

        if(this.initialState.fullName && this.initialState.email && this.initialState.age) {
            localStorage.setItem("formulario", JSON.stringify({...this.initialState,fullName: this.initialState.fullName, email: this.initialState.email, age: this.initialState.age}));
            return true;
        }
        else {
            this.initialState.fullName = "";
            this.initialState.email = "";
            this.initialState.age = "";
            return false;
        }
    }
}