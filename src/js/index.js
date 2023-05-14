const botaoTema = document.getElementById("botao-tema");
const body = document.querySelector("body")
const imagemTema = document.querySelector(".imagem-botao")

botaoTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")
    if (modoEscuroAtivo) {
    imagemTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemTema.setAttribute("src", "./src/imagens/moon.png");
    }
});