const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remove a classe "selected" de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // Adiciona a classe "selected" ao botão clicado
        const clickedButton = e.currentTarget;
        clickedButton.querySelector(".color").classList.add("selected");

        // Atualiza a imagem do produto
        const id = clickedButton.getAttribute("id");
        const newImageSrc = `./img/iphone_${id}.jpg`; // Ajusta o caminho da imagem

        // Define a nova imagem e adiciona a classe de transição
        image.classList.add("changing");
        image.setAttribute("src", newImageSrc);

        // Remove a classe de transição após a mudança de imagem para permitir novas transições
        image.addEventListener("transitionend", () => {
            image.classList.remove("changing");
        }, { once: true });
    });
});
