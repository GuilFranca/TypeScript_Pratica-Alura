// Tipos Primitivos
let valor: number = 3000;
let nome: string =  '';
let isPago: boolean = false;

let qualquer: any = '';
qualquer = 22;

// Arrays
const lista: number[] = [];

// lista.push("Jhonathan", "Cachorros", 22, true, []);
lista.push(13, 22.5, 22, 89, 1.58);
 
// Tipos Personalizados (Type Alias)
type Transacao = {
    // tipoTransacao: string; 
    tipoTransacao: TipoTransacao; // será do tipo Enum TipoTransacao
    date: Date;
    valor: number;
}

// Enum
enum TipoTransacao {
    DEPOSITO = 'Deposito',
    TRANSFERENCIA = 'Transferência',
    PAGAMENTO_BOLETO = 'Pagamento de Boleto'
}

const novaTransacao: Transacao = {
    // tipoTransacao : '',
    tipoTransacao : TipoTransacao.DEPOSITO, // Agora tem que seguir o padrão da Enum para ser aprovado
    date: new Date(),
    valor: 0
}

