let hitchedSpaceships = [["Pedro", 18],["Jéssyka",32],["Isabelly", 5,["Paulo", 18,["M",45]]],["Elza",38]]

//console.log(hitchedSpaceships[2][2][2][1])

hitchedSpaceships.push(["Josué",42])  //acrescenta um elemento

hitchedSpaceships.shift()  //retira o primeiro elemento da array

hitchedSpaceships.pop() //retira o último elemento

hitchedSpaceships.unshift() //desfaz o shift

 /*
    Splice:
    Significa "Emendar" ou "Custurar"
    Substitui o array original
    A sintaxe deste método é:
    array.splice(index[, deleteCount[, elemento1[, ..]]])

    *Espera um primeiro parâmetro que é um índice do Array
    *O segundo é quantidade de elementos que queremos remover a partir deste índice
    *Os próximos são os elementos que queremos adicionar no lugar.
    *Apenas o primeiro parâmetro é "Obrigatório"
 */

let spaceshipName = ["Elemental", "Darwin", "Artemis", "Supernova"]


//console.log(spaceshipName.indexOf("Supernova"))  // retorna o índice do elemento e retorna -1 se não for encontrado o elemento

removedSpaceships = spaceshipName.splice(1/*index do array*/, 2/*A quantidade de elementos */, "Miller","Pedra","Golias")

//console.log(spaceshipName)

//console.log(removedSpaceships)

/*
    Slice:
    Significa "fatiar" ou "Dividir"
    Extrai uma parte do array sem alterar o array original
    A sintaxe deste método é:
    arr.slice([begin[, end]])

    *Possui um primeiro parâmetro que é o índice inicial
    *Retorna todos os elementos entre o elemento de índice "Begin" e o anterior ao elemento "end"
*/


let spaceshipNames = [["Elemental", "Darwin", "Artemis", "Supernova"], ["latnemelE", "niwraD", "simetrA"]]

let extractedNames = spaceshipNames.slice(1,3)

// console.log(extractedNames)

/*
    Iterações em Arrays
    *As funções de iteração que veremos são HOF
    *O callback é chamado para cada elemento do Array
    *Segue o seguinte formato:
        array.funcaoDeIterar(function(elementoAtual, indice, array){
            <corpo da função>
        }) 
*/

let hitchedSpaceX = ["Deméter", "Darwin", "SuperNova", "Fenix", "Puller"]

/*
let upcasedSpaceX = hitchedSpaceX.map(function(currentSpaceship) {
    // O map irá iterar em cada elemento da array mapeando e retorna o valor alterado de acordo com nossa função
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceX)
*/


hitchedSpaceX.forEach(function(currentSpaceship, index) { //forEach irá iterar em toda a array chamando callback de retorno para cada elemento
   // console.log("Nave: " + currentSpaceship + "\nIndice: "+ index) 
})


let retornomap = hitchedSpaceX.map((currentSpaceship, i) => {
   // console.log("Nave:",currentSpaceship,"\nIndex:", i )

})


let with7Chars = hitchedSpaceX.filter(element => {return element.length >= 7}) //filtra e retorna o elemento que tem 7 char

console.log(with7Chars)

let with7Charss = hitchedSpaceX.find(element => {return element.length >= 7}) //filtra e retorna o primeiro elemento que tem 7 char

console.log(with7Charss)