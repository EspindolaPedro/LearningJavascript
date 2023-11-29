spaceShip = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceShip.spaceshipName = prompt("Digite o nome da nave: ")
    spaceShip.type = prompt("Digite o tipo da nave: ")
    spaceShip.maxVelocity = Number(prompt("digite a velocidade máxima da nave: "))
 
}

function accelerate() {
    let acceleration = Number(prompt("Quanto voce deseja acelerar? "))
    spaceShip.speedUp(acceleration)
    if(spaceShip.velocity > spaceShip.maxVelocity) {
        spaceShip.velocity = spaceShip.maxVelocity
        alert("Velocidade Ultrapassada!\n"+"Velocidade da nave: "+spaceShip.velocity+"\nVelocidade máxima: "+spaceShip.maxVelocity)
    }
}

function stop() {
    alert("Nome da nave: "+spaceShip.spaceshipName+"\nTipo: "+spaceShip.type+"\nVelocidade: "+spaceShip.velocity+"\nVelocidade máxima permitida: "+spaceShip.maxVelocity)
    spaceShip.velocity = 0
}

function showMenu(){
    let chosenOption
    do {
        chosenOption =  prompt("Qual opção voce escolhe?\n-1 Acelerar\n-2 Parar")


        switch (chosenOption) {
            case "1":
                accelerate()
                break;
            case "2":
                stop()
            default:
                alert("Digite 3 para sair.")
                break;       
             }

    } while (chosenOption != "3");
}

console.log(registerSpaceship(), showMenu())