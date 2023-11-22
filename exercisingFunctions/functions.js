let spaceShipName = prompt("Digite o nome da nave: ")
let spaceShipVelocity = 0
let chosenOption

function showMenu(){
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer? \n1 - Acelerar a nave em 5 km/s\n2 - Desacelerar em 5 km/s\n3 - Imprimir dados de bordo\n4 - sair do programa")
    }
    return option
} 

function speedUp(acceleration) {
    let newVelocity= acceleration + 5
    return newVelocity
}

function slowDown(acceleration) {
    let newVelocity = acceleration - 5
    if (newVelocity < 5) {
        newVelocity = 5
    }
    return newVelocity
}

function printDataBoard(Name, velocity){
    alert("Nome da nave: " + spaceShipName+"\nVelocidade: "+velocity +"km/s")
}

do {
     chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceShipVelocity = speedUp(spaceShipVelocity)
            break;
        case "2":
            spaceShipVelocity = slowDown(spaceShipVelocity)
            break;
        case "3":
            printDataBoard(spaceShipName,spaceShipVelocity)   
            break;
        default:
            alert("Digite 4 novamente para sair.")
            break;
    }

} while (chosenOption != 4)

console.log(showMenu(), speedUp(), slowDown(), printDataBoard())