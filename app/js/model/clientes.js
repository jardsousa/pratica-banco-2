class Clientes {
    clientes;
    constructor() {
        this.clientes = new Array;
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
    remover(cpf) {
        const removerCliente = this.pesquisar(cpf);
        if (removerCliente) {
            const indice = this.clientes.indexOf(removerCliente);
            if (indice > -1) {
                this.clientes.splice(indice, 1);
            }
        }
    }
}
