import { formatarData } from "../utils/formaters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "./Conta.js";
// Irá inserir a data de acesso.
const elemenoDataAcesso = document.querySelector('.block-saldo time');
rederizarData();
function rederizarData() {
    if (elemenoDataAcesso != null) {
        elemenoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar() {
        rederizarData();
    }
};
export default DataComponent;
