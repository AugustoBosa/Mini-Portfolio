// Selecionar abas
const abas = document.querySelectorAll(".aba")

// Adicionar funcionalidade click
// Desmarcar aba ativa
// Marcar aba que foi clicada (aba) como ativa
// mesmo com conteudo
abas.forEach(aba=>{
    aba.addEventListener("click",function(){

        // cancelar se ja for a tab ativa
        if (aba.classList.contains("selected")) {
            return;            
        }

       tabSwitch(aba)

       infoStwitch(aba)
        
     
    })
})

function tabSwitch(aba) { 
    const abaSelected=document.querySelector(".aba.selected")
    abaSelected.classList.remove("selected")
    aba.classList.add("selected")  
 }

 function infoStwitch(aba) {
    const infoSelected = document.querySelector(".conteudoAba.selected")
        infoSelected.classList.remove("selected")

        let id=`content-${aba.id}`
        console.log(id)
        const newInfo = document.getElementById(id)
        newInfo.classList.add("selected")
 }