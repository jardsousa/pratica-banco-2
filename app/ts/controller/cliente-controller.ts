class ClienteController{
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private clientes: Clientes;
    

    constructor(){
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");

        this.clientes = new Clientes();
        

    }

    inserir(event: Event){
        event.preventDefault();
        
        let novaConta = new Conta(this.inputConta.value, 0);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);

    }

    listar(){
        this.clientes.listar().forEach(cliente => {this.inserirClienteNoHTML(cliente)});
    }

    inserirClienteNoHTML(cliente: Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = `Nome: ${cliente.nome} | CPF: ${cliente.cpf}| Conta: ${cliente.conta.toString()}`;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'Apagar cliente';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
            
        })
        elementoP.style.display = 'flex';
        elementoP.style.alignItems = 'center';
        elementoP.style.justifyContent = 'space-between';
        elementoP.style.backgroundColor = '#f5f5f5';
        elementoP.style.padding = '10px';
        elementoP.style.border = '1px solid #ddd';
        elementoP.style.borderRadius = '5px';
        elementoP.style.color = '#333';
        elementoP.style.fontSize = '16px';
        elementoP.style.marginBottom = '10px';

        botaoApagar.style.backgroundColor = '#dc3545';
        botaoApagar.style.color = '#fff';
        botaoApagar.style.border = 'none';
        botaoApagar.style.borderRadius = '5px';
        botaoApagar.style.padding = '5px 10px';
        botaoApagar.style.cursor = 'pointer';
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}   
