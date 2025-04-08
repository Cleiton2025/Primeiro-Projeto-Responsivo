let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")


function mudarvisual(cor,imagem){
    console.log(cor)

   body.style.background = cor
   tenis.src = imagem
}