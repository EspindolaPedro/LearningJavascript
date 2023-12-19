function saveHouse() {
    event.preventDefault()

    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='Neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    //CRIANDO A LISTA PARA ARMAZENAR OS ENDEREÇOS CADASTRADOS
    let newlist = document.createElement("li")
    newlist.innerHTML = area + "m**, número: " + number + " (" + neighborhood  + "-" + city + ") "

    //CRIANDO BUTTON DE REMOVER O ELEMENTO
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    

    //ACRESCENTANDO NO ELEMENTO newlist O ELEMENTO removeButton
    newlist.appendChild(removeButton)
    
    //Adicionando o elemente newlist para a lista de elementos no HTML
    document.getElementById("house-list").appendChild(newlist)

}

function removeHouse(button) {
    //acessando o elemento pai do button
    let liToRemove = button.parentNode
    //Pegando o elemento pelo id house-list e removendo o elemento pai
    document.getElementById("house-list").removeChild(liToRemove)

}