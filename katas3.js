const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 
    let arr = []
    for(let i = 1; i <= 25; i++){
        arr.push(i)
    }
    showResults(arr.join(', '))
    return arr
}

kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    let arr = []
    for(let i = 25; i >= 1; i--){
        arr.push(i)
    }
    showResults(arr.join(' ,'))
    return
}
kata2()
// console.log(kata2())


function kata3() {
    // implemente o código do kata 3 aqui
    let arr = []
    for(let i = -1; i >= -25; i--){
        arr.push(i)
    }
    showResults(arr.join(' ,'))
    return
}

kata3()
// console.log(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
    let arr = []
    for(let i = -25; i <= -1; i++){
        arr.push(i)
    }
    showResults(arr.join(' ,'))
    return
}

kata4()
// console.log(kata4())

function kata5() {
    // implemente o código do kata 5 aqui
    let arr = []
    let num = 0
    for(let i = 25; i >= -25; i--){
        if(i % 2 !== 0){
            arr.push(i)
        }
    }
    showResults(arr.join(' ,'))
    return
}
kata5()


function kata6() {
    // implemente o código do kata 6 aqui
    let arr = []
    for(let i = 3; i <=100; i++){
        if(i % 3 === 0){
            arr.push(i)
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata6()
// console.log(kata6())

function kata7() {
    // implemente o código do kata 7 aqui
    let arr = []
    for(let i = 7; i <= 100; i++){
        if(i % 7 === 0){
            arr.push(i)
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata7()
// console.log(kata7)


function kata8() {
    // implemente o código do kata 8 aqui
    let arr = []
    for(let i = 100; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            arr.push(i)
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    let arr = []
    for(let i = 1; i <= 100; i++){
        if(i % 5 === 0){
            arr.push(i)
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata9()


function kata10() {
    // implemente o código do kata 10 aqui
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        if(arr += sampleArray[i]){
            arr +=  ' " '
            
        }
    }
    showResults(arr)
    return
}

kata10()



function kata11() {
    // implemente o código do kata 11 aqui
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            arr.push(sampleArray[i])
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    let arr = []
    for(let i = 0; i< sampleArray.length; i++){
        if(sampleArray[i] % 3 === 0){
            arr.push(sampleArray[i])
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let arr = []
    for(let i = 0; i< sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            arr.push(sampleArray[i])
        }
    }
    showResults(arr.join(' ,'))
    return
}

kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let soma = 0
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        soma = sampleArray[i] ** 2
        arr.push(soma)
    }
    showResults(arr.join(' ,'))
    return
}

kata14()


function kata15() {
    // implemente o código do kata 15 aqui
    let soma = 0
    let arr = []
    for(let i = 1; i <= 20; i++){
        soma = i + i
        arr.push(soma)
    }
    showResults(arr.join(' ,'))
    return
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    let soma = 0;
    let arr = []
    for(let i = 0; i < sampleArray.length; i++){
        soma = sampleArray[i] + sampleArray[i]
        arr.push(soma)
    }
    showResults(arr.join(' ,'))
    return
}

kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let menorValor = 21
    let guardandoLugarMenorValor = 1
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < menorValor){
            menorValor = sampleArray[i]
            guardandoLugarMenorValor = i
        }  
    }
    showResults(menorValor)
    return
}

kata17()


function kata18() {
    // implemente o código do kata 18 aqui
    let maiorValor = 888
    let guardandoLugarMaiorValor = 1
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > maiorValor){
            maiorValor = sampleArray[i]
            guardandoLugarMaiorValor = [i]
        }
    }
    showResults(maiorValor)
    return
}

kata18()


function showResults (valorQualquer){
    const mostrandoResultado = document.getElementById('results')
    const createTag = document.createElement('li');
    const resultKata = document.createTextNode(valorQualquer)
    mostrandoResultado.appendChild(createTag)
    createTag.appendChild(resultKata)
    return
}

showResults




/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
