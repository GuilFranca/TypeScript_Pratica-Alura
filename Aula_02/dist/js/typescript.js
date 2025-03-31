// Tipos Primitivos
let valor = 3000;
let nome = '';
let isPago = false;
let qualquer = '';
qualquer = 22;
// Arrays
const lista = [];
// lista.push("Jhonathan", "Cachorros", 22, true, []);
lista.push(13, 22.5, 22, 89, 1.58);
// Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Deposito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    // tipoTransacao : '',
    tipoTransacao: TipoTransacao.DEPOSITO, // Agora tem que seguir o padrão da Enum para ser aprovado
    date: new Date(),
    valor: 0
};
