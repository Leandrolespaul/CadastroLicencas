import { format } from "date-fns"
import { addDays } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import parse from 'date-fns/parse';
import { differenceInDays } from "date-fns"

const dataLicenca = (dataUsuario, dias) => {
    let dataEntrada = parse(dataUsuario, 'dd/MM/yyyy', new Date(), { locale: ptBR })
    const calculo = addDays(dataEntrada, dias)
    const dataFormatada = format(new Date(calculo), "dd/MM/yyyy")
    console.log(`Sua Liceça termina em ${dataFormatada}`)
}

const distanciaEntreDatas = (dataInicial, dataFinal) => {
    let dataEntrada = parse(dataInicial, 'dd/MM/yyyy', new Date(), { locale: ptBR })
    let dataSaida = parse(dataFinal, 'dd/MM/yyyy', new Date(), { locale: ptBR })
    const diasEntreDatas = differenceInDays(dataSaida, dataEntrada)
    console.log(`Entre a data ${dataInicial} e ${dataFinal} o servidor tem ${diasEntreDatas} dias.`)
   
}

dataLicenca("26/10/2024", 30)
console.log('_________________________________')
distanciaEntreDatas("27/10/2024", "30/11/2024")



