
var inputQtde = document.querySelector('#qtde')
inputQtde.addEventListener("change", atualizarOrcamento)
document.querySelector('#Veiculo').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout_nao').addEventListener("change", atualizarOrcamento)

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('navbar').classList.toggle("hidden")
}

function atualizarOrcamento(){
    let qtde = inputQtde.value 
    let plano = ''
    
    let Veiculo = document.querySelector('#Veiculo').checked
    if(Veiculo) plano = 'PREÇO TRIMESTRAL'

    let layout = document.querySelector("#layout_sim").checked
    if(layout) plano = 'PLANO SEMESTRAL'

    if(Veiculo == true &&  layout == false && qtde >= 5){
        plano = 'PLANO SEMESTRAL'
    } else if(Veiculo == true){
        plano = 'PLANO SEMESTRAL'
    }
    else if(layout == true && qtde >=4){
        plano = 'PLANO TRIMESTRAL'
    } else if(layout == false && qtde <=2){
        plano = 'PLANO MENSAL'
    }else if(layout == false && qtde <=3){
        plano = 'PLANO TRIMESTRAL'
    } 



    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML =  plano
    console.log(Veiculo)
}
