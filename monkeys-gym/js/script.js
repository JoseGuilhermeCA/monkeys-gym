
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#Veiculo').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_nao').addEventListener("change", atualizarOrcamento)


function atualizarOrcamento(){
    let qtde = inputQtde.value 
    let plano = ''
    
    let Veiculo = document.querySelector('#Veiculo').checked
    if(Veiculo) plano = 'PREÇO TRIMESTRAL'

    let layout = document.querySelector("#layout_sim").checked
    if(layout) plano = 'PLANO SEMESTRAL'

    if(Veiculo == true &&  layout == true){
        plano = 'PLANO SEMESTRAL'
    } else if(Veiculo == true){
        plano = 'PLANO SEMESTRAL'
    }
    else if(layout == true){
        plano = 'PLANO TRIMESTRAL'
    } else{
        plano = 'PLANO MENSAL'
    }

    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML =  plano
    console.log(Veiculo)
}
