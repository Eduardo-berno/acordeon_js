const itensPerguntaseRespostas = document.querySelectorAll(".item")

itensPerguntaseRespostas.forEach(function(item){
    item.addEventListener("click", function(){
        const itemAtivoAtual = document.querySelector(".ativo");
        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }
        item.classList.add("ativo")
    })
})

