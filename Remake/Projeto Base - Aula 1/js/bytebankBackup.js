let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector('.block-nova-transacao form');
// Sempre que o submit ocorrer a função será ativada
elementoFormulario.addEventListener('submit', function(event){
    // Submete o formulário sem carregar a página
    event.preventDefault();
    // Checa a vlidação do formulário
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preencha todos os campos da transação');
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if (tipoTransacao === 'Depósito') {
        saldo += parseFloat(valor);
    } else if (tipoTransacao === "Transferência" || tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválido!');
        return;
    }

    elementoSaldo.textContent = saldo;

    // Objeto nova transação
    const novaTransacao = {
        tipoTransacao : tipoTransacao,
        valor : valor,
        data : data
    }

    console.log(novaTransacao);

    // Após a função de submeter os campos do formulário serão resetados
    elementoFormulario.reset();

});

