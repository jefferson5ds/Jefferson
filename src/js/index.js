/* 
1 objtivo- quando o ususario clicar no botão de ver trailer, abrir a modal com video do trailer.

2- quando o usuario clicar no x fechar a modal


1 objtivo- quando o ususario clicar no botão de ver trailer, abrir a modal com video do trailer.
    passo 1 dar um jeito de pegar o elemento que represnte o botão na tela usando o js.

    passo 2 - dar um jeito de indentificar quando o usuario clicar no botão
    passo 3 - dar um jeito de pegar o elemento da modal no js 
    passo 4 - abrir a modal mna tela. 

    
2 objtivo - quando o usuario clicar no x fechar a modal
passo 1- dar um jeito de pegar o elemento de fechar a modal usando o js
passo 2 - dar um jeito de indentificar quando o usuario clicar no x 
passo 3 - fechar a modal 
*/


console.log( 'mostrar o document' document);
//    passo 1 dar um jeito de pegar o elemento que represnte o botão na tela usando o js.
console.log(document.querySelector(".botao-trailer"));
const botaoTrailer = document.querySelector(".botao-trailer"); 
// passo 2 - dar um jeito de indentificar quando o usuario clicar no botão

botaoTrailer.addEventListener("click",()=>{
    console.log("clicou no botao veja o trailer");
    //  passo 4 - abrir a modal mna tela. 
    modal.classList.add("aberto");
    video.setAttribute("src",linkdoVideo);
})
// passo 3 - dar um jeito de pegar o elemento da modal no js 
const modal = document.querySelector(".modal");
console.log("mosntrar o objeto da modal",modal);

//2 objtivo - quando o usuario clicar no x fechar a modal
//passo 1- dar um jeito de pegar o elemento de fechar a modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");
//passo 2 - dar um jeito de indentificar quando o usuario clicar no x 
botaoFecharModal.addEventListener("click",() => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");

})

const video = document.getElementById("video");
const linkdoVideo = Video.scr; 


