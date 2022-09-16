const inputCodigo = document.getElementById('inputCodigo');
const inputNome = document.getElementById('inputNome');
const inputDetalhamento = document.getElementById('inputDetalhamento');

const formCard = document.getElementById('formCard');

let arrayLista = [];


formCard.addEventListener('submit', (event) =>{
    event.preventDefault();
    criarTarefas();
   imprimAccordion();
   
})

const criarTarefas = () => {
    if(validarCampos()){
       const tarefa = {
        codigo: inputCodigo.value,
        nome:inputNome.value,
        detalhamento:inputDetalhamento.value,
       }
       arrayLista.push(tarefa);
    }
   formCard.reset();
}



const validarCampos = () => {
    if(!inputCodigo.value || !inputNome.value || !inputDetalhamento.value){
        alertBootStrap("Contem campos vazios", 'danger')
        return false;
    }

    if(!inputCodigo.value.match(/[0-9]/g)){
       alertBootStrap("Somente numeros", 'warning');
       return false
    }
    return true
}

function imprimAccordion(){
    if(arrayLista.length === 3){
        inputCodigo.setAttribute('disabled', 'true')
        inputNome.setAttribute('disabled', 'true')
        inputDetalhamento.setAttribute('disabled', 'true')
        const accordionExample = document.getElementById('accordionExample');
        for (const valor of arrayLista) {
            accordionExample.innerHTML+=`
            <div class="accordion-item mb-1">
                 <h2 class="accordion-header" id="${valor.codigo}-acc">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${valor.codigo}" aria-expanded="true" aria-controls="collapse${valor.codigo}">
                     Accordion Item #${valor.codigo}
                   </button>
                 </h2>
                 <div id="collapse${valor.codigo}" class="accordion-collapse collapse " aria-labelledby="${valor.codigo}-acc" data-bs-parent="#accordionExample">
                   <div class="accordion-body">
                     <h4>${valor.nome}</h4>
                     <p>${valor.detalhamento}</p>
                   </div>
                 </div>
               </div>
            `
        }
    }else{
       console.log("Não resgistro");     
    }
}

