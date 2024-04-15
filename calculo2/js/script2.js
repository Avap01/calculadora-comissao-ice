document.addEventListener("DOMContentLoaded", function() {
    const pele1Input = document.getElementById("pele1Input");
    const pele2Input = document.getElementById("pele2Input");
    const pele3Input = document.getElementById("pele3Input");
    const calcularBtn = document.getElementById("calcularBtn");
    const resultadoInput = document.getElementById("resultado");
  
    calcularBtn.addEventListener("click", function() {
      const pele1 = parseInt(pele1Input.value) || 0;
      const pele2 = parseInt(pele2Input.value) || 0;
      const pele3 = parseInt(pele3Input.value) || 0;
  
      const total = pele1 * 110 + pele2 * 160 + pele3 * 210;
  
      resultadoInput.value = total;
    });
  });
  