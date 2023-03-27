class Clientes{
    private clientes : Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>;

    }

    inserir(cliente:Cliente):void{
        this.clientes.push(cliente);
    }

    pesquisar(cpf:string): Cliente{
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    listar(): Array<Cliente>{
        return this.clientes;
    }

    remover(cpf:string){
        const removerCliente = this.pesquisar(cpf);
        if(removerCliente){
            const indice = this.clientes.indexOf(removerCliente);
            if(indice >-1){
                this.clientes.splice(indice,1);
            }
        }

    }

}