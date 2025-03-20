function adding(e) {
    e.preventDefault()

    const inp1 = document.querySelector("#I1").value
    const inp2 = document.querySelector("#I2").value
    const img = document.querySelector("#imgLink").value
    const category = document.querySelector("#select-id").value

    const addName = document.querySelector("#name")
    const addPrice = document.querySelector("#price")
    const addCatg = document.querySelector("#Category")
    const addImage = document.querySelector("#image")

    const newIn1 = document.createElement("p")
    const newIn2 = document.createElement("p")
    const newCatg = document.createElement("p")
    const newImg = document.createElement("image")
    newImg.SRC = img

    
    newIn1.innerText = inp1
    addName.appendChild(newIn1)
    
    newIn2.innerText = inp2
    addPrice.appendChild(newIn2)
    
    newCatg.innerText = category
    addCatg.appendChild(newCatg)

    // newImg.innerText = img
    addImage.appendChild(newImg)
}

function deleteProduct (e) {
    e.preventDefault()

    newIn1.innerText = " "
    addName.appendChild(newIn1)
    
    newIn2.innerText = " "
    addPrice.appendChild(newIn2)

    newImg.innerText = " "
    addImage.appendChild(newImg)
    
    
}

const deleteB = document.querySelector("deleteButton");
deleteB.addEventListener("click" , deleteProduct)