document.addEventListener('DOMContentLoaded', ativaBotaoCadastrar)

// chamar o modal
var modal = document.getElementById('id01');

function ativaBotaoCadastrar(){
	document.getElementById('signup').addEventListener('click', function(){
	window.location="cadastro.html"
})
}

