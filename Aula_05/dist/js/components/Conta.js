import { TipoTransacao } from "../types/TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem('saldo')) || 0;
// Transformando em JSON, caso não tenha dados devolve um array vazio
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    // Pega o objeto data que vira uma string e retorna como data
    if (key === 'data') {
        return new Date(value);
    }
    // Caso não seja uma data, retorna o valor normalmente
    return value;
}) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser debitado deve ser maior que zero!');
    }
    if (valor > saldo) {
        throw new Error('Saldo insuficiente!');
    }
    saldo -= valor;
    localStorage.setItem('saldo', saldo.toString());
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error('O valor a ser depositado deve ser maior que zero!');
    }
    saldo += valor;
    localStorage.setItem('saldo', saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        // criamos uma lista cópia de transacoes para darmos segurança a aplicação, sem expor a lista original
        const listaTransacoes = structuredClone(transacoes);
        // Criando uma ordenação da lista de ordem decrescente
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao = '';
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString('pt-br', { month: 'long', year: 'numeric' });
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        // Padronizaremos os tipo de entrada no TipoTransacao
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error('Tipo de transação é inválido!');
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        // Transforma esta lista em uma stringJSON
        localStorage.setItem('transacoes', JSON.stringify(transacoes));
    }
};
// Quando vamos exportar um objeto inteiro é comum exporta-lo como default
// O export default é utilizado quando temos apenas um item sendo exportado por módulo
export default Conta;
