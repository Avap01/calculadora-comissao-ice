// Definindo a variável resultadosSalvos no escopo global
let resultadosSalvos = [];

document.addEventListener("DOMContentLoaded", function() {
    const trashBtn = document.querySelector(".trash-btn");
    const resetBtn = document.querySelector(".reset-btn");
    const pele1Input = document.getElementById("pele1Input");
    const pele2Input = document.getElementById("pele2Input");
    const pele3Input = document.getElementById("pele3Input");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoInput = document.getElementById("resultado");

    // Carregar os resultados salvos no localStorage ao carregar a página
    const resultadosSalvosJSON = localStorage.getItem("resultados");
    if (resultadosSalvosJSON !== null) {
        resultadosSalvos = JSON.parse(resultadosSalvosJSON);
    }

    calcularBtn.addEventListener("click", function() {
        const pele1 = parseInt(pele1Input.value) || 0;
        const pele2 = parseInt(pele2Input.value) || 0;
        const pele3 = parseInt(pele3Input.value) || 0;

        const total = pele1 * 110 + pele2 * 160 + pele3 * 210;

        resultadoInput.value = "R$ " + total.toFixed(2);

        // Adicionar o novo resultado ao array
        resultadosSalvos.push(resultadoInput.value);

        // Salvar o array de resultados atualizado no localStorage
        localStorage.setItem("resultados", JSON.stringify(resultadosSalvos));
    });

    trashBtn.addEventListener("click", function() {
      localStorage.clear();
      alert("Local Storage limpo com sucesso!");
  });
  

    resetBtn.addEventListener("click", function() {
        pele1Input.value = "";
        pele2Input.value = "";
        pele3Input.value = "";
        resultadoInput.value = "";

        
    });
    

});
