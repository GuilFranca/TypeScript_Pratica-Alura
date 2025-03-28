let saldo = 3000;
//Desta forma é acessado a class valor dentro da class salvo-valor.
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    // No TypeScript o textcontent não pode receber um valor que seja diferete de uma string
    elementoSaldo.textContent = saldo.toString();
    // O elementoSaldo informa que pode ser um elemeno do tipo null, e isso o textcontent não aceita.
}
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener('submit', function (event) {
    // Com isso os dados do formulário são acessados, mas não recarregão a página quando enviados.
    event.preventDefault();
    // Se o formulário não estiver válido, será mostrado o alerta a seguir.
    if (!elementoFormulario.checkVisibility()) {
        alert('Por favor, preencha todos os campos da transação!');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputTipoValor = elementoFormulario.querySelector("#valor");
    const inputTipoData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputTipoValor.valueAsNumber;
    let data = new Date(inputTipoData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação é inválido!');
    }
    elementoSaldo.textContent = saldo.toString();
    // Objeto que representa a nova transação
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    // Limpa o formulário quando o anterior for concluído
    elementoFormulario.reset();
});
