document.addEventListener("DOMContentLoaded", function () {
    const changeColorButton = document.getElementById("changeColorButton");

    // Adiciona um evento de clique ao botão
    changeColorButton.addEventListener("click", function () {
        // Gera uma cor aleatória em hexadecimal
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

        // Atualiza a cor de fundo da página
        document.body.style.backgroundColor = randomColor;
    });
});
