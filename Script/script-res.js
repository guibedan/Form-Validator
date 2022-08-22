const senha = document.getElementById('password')
const btn = document.getElementById('btn')

btn.onclick = () => {
    if(senha.type === 'password') {
        senha.type = 'text'
        btn.src = '/Style/img/shower.png'
    } else if(senha.type === 'text')  {
        senha.type = 'password'
        btn.src = '/Style/img/hide.png'
    }
}





const fields = document.querySelectorAll("[required]")


function validateField(field) {

    function verify() {
        
        let foundError = false

        for(let error in field.validity) {
            if(field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError;
    }

    

    return verify()
}



function customValidation(val) {


    const field = val.target



    const error = validateField(field)


    let spanError = field.parentNode.querySelector("span.error")

    if (error) {
        spanError.classList.add("active")
        spanError.innerHTML = "Preencha Corretamente!   "
    } else {
        spanError.classList.remove("active")
        spanError.innerHTML = ""
    }

}

for( let field of fields) {
    field.addEventListener("invalid", val => {
        val.preventDefault()
        customValidation(val)
    })
    field.addEventListener("blur",customValidation)
}





document.querySelector('form').addEventListener("submit", event => {
    console.log("eviou")
})