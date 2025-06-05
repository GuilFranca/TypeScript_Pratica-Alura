let saldo = 3000;
//Desta forma é acessado a class valor dentro da class salvo-valor.
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    // No TypeScript o textcontent não pode receber um valor que seja diferete de uma string
    elementoSaldo.textContent = formatarMoeda(saldo);
    // O elementoSaldo informa que pode ser um elemeno do tipo null, e isso o textcontent não aceita.
}
// Irá inserir a data de acesso.
const elemenoDataAcesso = document.querySelector('.block-saldo time');
if (elemenoDataAcesso != null) {
    const dataAcesso = new Date();
    // Padroniza o estilo de data que será mostrado
    elemenoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
