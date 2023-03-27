class ClienteEspecial extends Cliente{
    private _dependentes: Array<Cliente>;


    constructor(nome:string, cpf: string, conta: Conta, dependentes: Array<Cliente>){
        super(nome,cpf,conta);
        this._dependentes = dependentes;

    }

    get dependetes(){
        return this._dependentes;
    }
    set dependentes(novoDependentes: Array<Cliente>){
        this._dependentes = novoDependentes;
    }

    adicionarDependente(dependente: Cliente){
        this._dependentes.push(dependente);
    }

    removerDependente(dependente: Cliente){
        let index = this._dependentes.findIndex(cliente => cliente.cpf == dependente.cpf);
        if(index != -1){
            this._dependentes.splice(index,1);
        }
        
    }

}