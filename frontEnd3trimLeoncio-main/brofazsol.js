function Calcular(){
   


    let idadeCachorro = prompt("Qual a idade do seu dog");
    if (isNaN(idadeCachorro)) {
        alert("insira uma idade válida.");
        return;
    
    
    }
    let calc= idadeCachorro * 7;
    alert("a idade do dog é igual á " + calc + " anos humanos");
    let show = document.querySelector(".mostra-resultado")
    show.textContent = "Resultado: a idade humana do dog é " + calc;
}