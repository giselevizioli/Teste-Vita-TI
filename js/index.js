// chamar o modal
var modal = document.getElementById('id01');

// fechar o modal quando o usuário clicar fora
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}