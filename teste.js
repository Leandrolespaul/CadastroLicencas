import { format } from "date-fns"
import { addDays } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import parse from 'date-fns/parse';


const dataPtBr = (dataUsuario, dias) => {
let dataEntrada = parse(dataUsuario, 'dd/MM/yyyy', new Date(), { locale: ptBR })  
const  calculo = addDays(dataEntrada, dias) 
const data = new Date(calculo)

const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
})

console.log(dataFormatada)
}

dataPtBr("26/10/2024", 30)