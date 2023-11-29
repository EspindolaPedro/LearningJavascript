class spacialStation {
    constructor(spaceshipName, crewQuantity) {
        this.name = spaceshipName
        this.crew = crewQuantity
        this.Hitched = false
        this.entranceOpenDoors = false
    }
    isHitched() { // método para certificar-se se as portas estão aberta e as naves engatadas.
        this.Hitched = true
        this.entranceOpenDoors = true

    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer?\n-1 Engatar a nave\n-2 Imprimir naves\n-3 Sair")
    }
    return chosenOption
}


function createSpaceship() { //Função para cadastro das naves e retornar os valores para a classe spacialStation
    let spaceshipName = prompt("informe o nome da nave")
    let crewQuantity = Number(prompt("Informe a quantidade de  tripulantes"))
    let spaceship = new spacialStation(spaceshipName, crewQuantity)
    return spaceship
}


function printSpaceShipList(spaceships) {
    let spaceshipList = " "
    spaceships.forEach((spacialStation, index) => {
        spaceshipList += (index + 1) + "- "+spacialStation.name + " (" +spacialStation.crew + " tripulantes )"
    })
    alert(spaceshipList)
}


let spaceShipQuantity = []

let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            let spaceshipToAdd = createSpaceship()  
            spaceshipToAdd.isHitched()
            spaceShipQuantity.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceShipList(spaceShipQuantity)
            break;

    }
}