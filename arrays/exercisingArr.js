const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
 ]

 let filteredNames = hitchedSpaceships.filter(element => {
    return element[1] > 9
 }).map(element => {
    return element[0]
 })


let engagedPending = hitchedSpaceships.findIndex(element => {
    return element[2] == false
})

let allToUpperCased = hitchedSpaceships.map(element => {
    return element[0].toUpperCase()
})



let message = "Espaçonave com mais de 9 tripulantes: " + filteredNames.join(', ')
message += "\nPlataforma com processo de engate: " + engagedPending + 1
message += "\nEspaçonaves edstacadas: " + allToUpperCased.join(', ')

console.log(message)