import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";

let saldo: number = 3000;

const Conta = {

    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {

        // Padronizaremos os tipo de entrada no TipoTransacao
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert('Tipo de transação é inválido!');
        }

        console.log(novaTransacao);

    }

}

// Quando vamos exportar um objeto inteiro é comum exporta-lo como default
// O export default é utilizado quando temos apenas um item sendo exportado por módulo
export default Conta;