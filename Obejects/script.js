/*
let spaceship = {
   name: "Fenix",
   crewQuantity: 7,
   type: "Batalha"
}

spaceship.isHitched = false
spaceship["shieldLevel"] = 100
console.log(spaceship)
*/

/*
let spacialStation = {
   name: "Receptora",
   platformQuantity: 15,
   shape: "Esférica"
}

let spaceshipName = ["Fenix","Miller", "Golias"]

console.log(spaceshipName[0].toUpperCase())

*/

/*
let spaceship = {
   name: "Supernova", 
   type: "Batalha",
   crew: ["Cap. silva", "Tom ", "Thiago"]
}

spaceship.crew.push("Jéssyka")  //Adicionando mais um elemento para a array dentro do objeto

console.log(spaceship) */

/*
let spaceship = [ //array de objeto
   {name: "Elemental", crewQuantity: 10},
   {name: "Colossus", crewQuantity: 8},
   {name: "Helmet", crewQuantity: 15}
]

console.log(spaceship[2].name)

spaceship.forEach(spaceship => { //forEach irá percorrer todos os objetos dentro da array spaceship, imprimindo o nome e a quantidade de tripulantes na array.
   console.log(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes")
})
*/

/*

let spaceship = {
   name: "Golias",
   maxCrew: 20,
   captain: {
      name:"Hugo Trent",
      age: 37
   }
}

console.log("O capitão " + spaceship.captain.name + " tem " + spaceship.captain.age + " anos.")

*/



//ADICIONANDO FUNÇÕES AOS OBJETOS
/*
let spaceship = {
   name: "Deméter",
   type: "Extração",
   maxCrew: 20,
   turnOn: function() {
      alert("Preparando propulsão")
      alert("Ligando computador de bordo")
   }
}

spaceship.velocity = 0  //denfinindo velocidade 0 para a nave
spaceship.speedUp = function(acceleration) { //Função para acelerar o objeto, utilizando o this para se referir ao objeto
   this.velocity += acceleration
}


console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)

*/

