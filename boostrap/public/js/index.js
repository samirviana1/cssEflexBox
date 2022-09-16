/*let modal = document.getElementById('modalSimpl');
let modalSimpl = new bootstrap.Modal(modal);
modalSimpl.show();*/

/*function salvar(){
    console.log("Exclusão dos dados confirmada")
}*/

/*function sair(){
    console.log("Exclusão dos dados NÃO confirmada")
}*/
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')


function salvar(){ 
          alertBootStrap('Exclusão dos dados confirmada!', 'success');      
}



function sair(){
          alertBootStrap('Exclusão dos dados NÃO confirmada!', 'danger');   
}

const alertBootStrap = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = 
    `<div class="alert alert-${type} alert-dismissible" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
  

  alertPlaceholder.append(wrapper)
}