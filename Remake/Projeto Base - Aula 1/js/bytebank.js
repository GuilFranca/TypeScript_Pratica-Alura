// let saldo = 3000;
var saldo = 3000;
// Converte o valor obtido do querySelector em um elemento HTML
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
// const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
var elementoFormulario = document.querySelector(".block-nova-transacao form");
// Sempre que o submit ocorrer a função será ativada
elementoFormulario.addEventListener('submit', function (event) {
    // Submete o formulário sem carregar a página
    event.preventDefault();
    // Checa a vlidação do formulário
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos os campos da transação');
    }
    var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector('#valor');
    var inputData = elementoFormulario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao === 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválido!');
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    // Objeto nova transação
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    // Após a função de submeter os campos do formulário serão resetados
    elementoFormulario.reset();
});
// // let saldo = 3000;
// saldo = 3000;
// // Converte o valor obtido do querySelector em um elemento HTML
// const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement;
// if (elementoSaldo != null) {
//     elementoSaldo.textContent = saldo.toString();
// }
// if (elementoFormulario) {
//     // const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
// const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
// // Sempre que o submit ocorrer a função será ativada
// elementoFormulario.addEventListener('submit', function(event){
//     // Submete o formulário sem carregar a página
//     event.preventDefault();
//     // Checa a vlidação do formulário
//     if (!elementoFormulario.checkValidity()) {
//         alert('Por favor, preencha todos os campos da transação');
//     }
//     const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
//     const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
//     const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;
//     let tipoTransacao: string = inputTipoTransacao.value;
//     let valor: number = inputValor.valueAsNumber;
//     let data: Date = new Date(inputData.value);
//     if (tipoTransacao === 'Depósito') {
//         saldo += valor;
//     } else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
//         saldo -= valor;
//     } else {
//         alert('Tipo de transação inválido!');
//         return;
//     }
//     elementoSaldo.textContent = saldo.toString();
//     // Objeto nova transação
//     const novaTransacao = {
//         tipoTransacao : tipoTransacao,
//         valor : valor,
//         data : data
//     }
//     console.log(novaTransacao);
//     // Após a função de submeter os campos do formulário serão resetados
//     elementoFormulario.reset();
// });
// }
