const contaController = new ContaController();
const clienteController = new ClienteController();
//contaController.listar();
clienteController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const cl1 = new Cliente('Luna', '123', c1); // criando cliente da conta 1
const cl2 = new Cliente('Jonas', '456', p1); // criando cliente da poupanca 2
//clienteController.inserir(cl1);
//clienteController.inserir(cl2);
//clienteController.listar();
//clienteController.remover('123');
//clienteController.pesquisar('456');
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);
