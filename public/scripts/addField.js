
///HABILITAR O BOTÃO - ADICIONAR NOVO HORÁRIO
//procurar o botão
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField() {

//duplicar os campos, que campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//limpar os campos, que campos?
const fields = newFieldContainer.querySelectorAll('input')

//para cada campo, lima
fields.forEach(function(field) {
//pegar o field do momento e limpa ele
    field.value = ""
})
  //essa pratica não é dinamica nesse caso
            //fields[0].value = ""
            //fields[1].value = ""

//colocar na pagina,onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}




