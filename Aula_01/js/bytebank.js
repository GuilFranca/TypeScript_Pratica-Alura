var saldo = 3000;
//Desta forma é acessado a class valor dentro da class salvo-valor.
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    // No TypeScript o textcontent não pode receber um valor que seja diferete de uma string
    elementoSaldo.textContent = saldo.toString();
    // O elementoSaldo informa que pode ser um elemeno do tipo null, e isso o textcontent não aceita.
}
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener('submit', function (event) {
    // Com isso os dados do formulário são acessados, mas não recarregão a página quando enviados.
    event.preventDefault();
    // Se o formulário não estiver válido, será mostrado o alerta a seguir.
    if (!elementoFormulario.checkVisibility()) {
        alert('Por favor, preencha todos os campos da transação!');
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputTipoValor = elementoFormulario.querySelector("#valor");
    var inputTipoData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputTipoValor.valueAsNumber;
    var data = new Date(inputTipoData.value);
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
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    // Limpa o formulário quando o anterior for concluído
    elementoFormulario.reset();
});
