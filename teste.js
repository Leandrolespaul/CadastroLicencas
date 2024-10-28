import { format, parseJSON } from "date-fns"
import { addDays } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import parse from 'date-fns/parse'
import { differenceInDays } from "date-fns"
import { intervalToDuration } from "date-fns"

// let cont = 1
// const id = () => cont++

// const funcionarios = []

// const cadastroFunc = (nome, dataNascimento, CPF, telefone, cidade, CEP, logradouro, bairro, numero, matricula, localTrabalho, dataAdmissao) => {
//     funcionarios.push({ id: id(), nome, dataNascimento, CPF, telefone, cidade, CEP, logradouro, bairro, numero, matricula, localTrabalho, dataAdmissao })
// }



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

const intervaloDataAdmissao = (dataAdmissao, dataSaida) => {
    let dataEntrada = parse(dataAdmissao, 'dd/MM/yyyy', new Date(), { locale: ptBR })
    if (dataSaida){
        let dataFinal  = parse(dataSaida, 'dd/MM/yyyy', new Date(), { locale: ptBR })
        const intervalo = intervalToDuration({
            start: new Date(dataEntrada),
            end: new Date(dataFinal)
        })
        if (intervalo.days === undefined) intervalo.days = 0
        if (intervalo.months === undefined) intervalo.months = 0
        if (intervalo.years === undefined) intervalo.years = 0
        console.log(`Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`)  
    }else {
        const intervalo = intervalToDuration({
            start: new Date(dataEntrada),
            end: new Date()
        })
        if (intervalo.days === undefined) intervalo.days = 0
        if (intervalo.months === undefined) intervalo.months = 0
        if (intervalo.years === undefined) intervalo.years = 0
        console.log(`Seu tempo de trabalho é de ${intervalo.days} dia(s) ${intervalo.months} mês(s) e ${intervalo.years} ano(s).`)  

    }
}





dataLicenca("26/10/2024", 30)
console.log('_________________________________')
distanciaEntreDatas("27/10/2024", "03/03/2025")
console.log('_________________________________')
intervaloDataAdmissao("10/10/2024")


