import { formatarMoeda } from "../utils/formaters.js";
import Conta from "./Conta.js";
//Desta forma é acessado a class valor dentro da class saldo-valor.
const elementoSaldo = document.querySelector(".saldo-valor .valor");
renderizarSaldo();
// Essa função não possui nenhum valor de retorno, por isso foi declarada como tipo void
function renderizarSaldo() {
    if (elementoSaldo != null) {
        // No TypeScript o textcontent não pode receber um valor que seja diferete de uma string
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
        // O elementoSaldo informa que pode ser um elemeno do tipo null, e isso o textcontent não aceita.
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
