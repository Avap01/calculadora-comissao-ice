document.addEventListener("DOMContentLoaded",function(){var a=document.getElementById("calcularBtn"),b=document.querySelector(".reset-btn");a.addEventListener("click",function(){var a=parseFloat(document.getElementById("mochilaInput").value),b=parseFloat(document.getElementById("bolsoInput").value),c=parseFloat(document.getElementById("porcentagemInput").value),d=document.getElementById("resultado");d.value="R$ "+((3200*a+1600*b)*(c/100)).toFixed(2)}),b.addEventListener("click",function(){document.getElementById("mochilaInput").value="",document.getElementById("bolsoInput").value="",document.getElementById("porcentagemInput").value="",document.getElementById("resultado").value=""})});