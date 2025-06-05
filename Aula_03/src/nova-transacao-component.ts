const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener('submit', function (event) {

    // Com isso os dados do formulário são acessados, mas não recarregão a página quando enviados.
    event.preventDefault();

    // Se o formulário não estiver válido, será mostrado o alerta a seguir.
    if (!elementoFormulario.checkVisibility()) {
        alert('Por favor, preencha todos os campos da transação!');
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputTipoValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputTipoData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    // Utiliza a enum TipoTransacao para padronizar a entrada de valores
    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputTipoValor.valueAsNumber;
    let data: Date = new Date (inputTipoData.value);

    // Padronizaremos os tipo de entrada no TipoTransacao
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    } else {
        alert('Tipo de transação é inválido!');
    }

    // Insere o valor novamente após a transação
    elementoSaldo.textContent = formatarMoeda(saldo);

    // Objeto que representa a nova transação com o tipo Transacao e uma enum TipoTransacao
    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);

    // Limpa o formulário quando o anterior for concluído
    elementoFormulario.reset();

})
