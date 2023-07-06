
const buttonOpen = document.querySelector(".open-modal")
const buttonClose = document.querySelector(".close-modal")
const backdrop = document.querySelector(".backdrop")
const body = document.querySelector("body")

buttonOpen.addEventListener("click", ()=> {
    
    backdrop.classList.toggle("abc")
})

buttonClose.addEventListener("click", ()=> {

    backdrop.classList.toggle("abc")
})



// =====2=====

const redColor = document.querySelector(".red")
const whiteColor = document.querySelector(".white")
const greenColor = document.querySelector(".green")

redColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "red"
})

whiteColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "white"
})

greenColor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "green"
})

// =====3=====

const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")


nameInput.addEventListener("input", ()=> {
    const name = nameInput.value
    if (name.trim() === '') {
        nameOutput.textContent = "незнайомець"
    } else {
        nameOutput.textContent = name
    }
})

// =====4=====

const string = document.querySelector("#validation-input")
string.addEventListener("blur", ()=> {
    const long = string.value
    if (long.length === 6) {
        string.classList = ".correct"
    }
    
    else {
        string.classList = ".incorrect"
    }
})


