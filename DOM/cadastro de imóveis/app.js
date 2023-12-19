class App {
    addProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let property = new Property(kind, area, rented)
        this.addOnPropertiesList(property)
        this.cleanForm()

    }

    addOnPropertiesList(property) {
        let ListElement = document.createElement("li")
        let propertyInfo = "Tipo: " + property.kind + " (Área: " + property.area + "m**) "
        if(property.rented) {
            let rentedMark = this.createRentedMark()
            ListElement.appendChild(rentedMark)
        }
        ListElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        ListElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(ListElement)
    }

    createRentedMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
    } 
    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick","app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    cleanForm() {
        document.querySelector("input[name='area']").value = " "
        document.querySelector("input[name='rented']").checked = false

    }

    remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }
}