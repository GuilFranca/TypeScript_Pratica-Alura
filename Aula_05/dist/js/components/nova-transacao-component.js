import Conta from "./Conta.js";
import ExtratroComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener('submit', function (event) {
    try {
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
        // Utiliza a enum TipoTransacao para padronizar a entrada de valores
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputTipoValor.valueAsNumber;
        // Corrigindo erro de data no extrado que vem sempre um dia a menos (precisamos passar um horário de 00:00 ou mais) precisa de espaço
        let data = new Date(inputTipoData.value + " 00:00:00");
        // Objeto que representa a nova transação com o tipo Transacao e uma enum TipoTransacao
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratroComponent.atualizar();
        // Limpa o formulário quando o anterior for concluído
        elementoFormulario.reset();
        // Total de cada transação
        Conta.resumoTransacoes();
    }
    catch (erro) {
        alert(erro.message);
    }
});
