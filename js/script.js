// SELECIONANDO ELEMENTOS
const form = document.querySelector("#form");
const inputTarefa = document.querySelector("#tarefa");
const msgErroTarefa = document.querySelector("#msgErroTarefa");
const boxResultado = document.querySelector("#boxResultado");

// ADICIONANDO EVENTOS
form.addEventListener("submit", validarForm);
inputTarefa.addEventListener("input", removerErro);

// FUNÇÕES

// FUNÇÃO QUE VALIDA OS DADOS DO FORMULÁRIO
function validarForm(event){
	event.preventDefault();

	// VERIFICA SE INPUT DE TAREFA ESTÁ VAZIO
	if(inputTarefa.value === ""){
		exibirErro("Por favor, informe uma tarefa");

		return;
	}

	adicionarTarefa();
}

// FUNÇÃO QUE EXIBE O ERRO DO INPUT DE TAREFA
function exibirErro(msgErro){
	inputTarefa.classList.add("erro");

	msgErroTarefa.classList.add("ativo");
	msgErroTarefa.textContent = msgErro;
}

// FUNÇÃO QUE ADICIONA UMA TAREFA
function adicionarTarefa(){
	const boxTarefa = document.createElement("div");
	let iconesSelecaoTarefa = null;
	let iconesDelecaoTarefa = null;

	boxTarefa.classList.add("box-tarefa");
	boxTarefa.innerHTML = `<div class="box-selecao-tarefa">
								<i class="bi bi-circle icone-selecao-tarefa"></i>
							</div>
							<div class="box-txt-tarefa">${inputTarefa.value}</div>
							<div class="box-delecao-tarefa">
								<i class="bi bi-trash-fill"></i>
							</div>`;

	boxResultado.appendChild(boxTarefa);

	inputTarefa.value = "";
	inputTarefa.focus();

	alert("Tarefa adicionada com sucesso! =)");

	iconesSelecaoTarefa = document.querySelectorAll(".icone-selecao-tarefa");
	iconesDelecaoTarefa = document.querySelectorAll(".bi-trash-fill");

	for(let i = 0; i < iconesSelecaoTarefa.length; i++){
		iconesSelecaoTarefa[i].addEventListener("click", marcarTarefa);
	}

	for(let i = 0; i < iconesDelecaoTarefa.length; i++){
		iconesDelecaoTarefa[i].addEventListener("click", deletarTarefa);
	}
}

// FUNÇÃO QUE MARCA UMA TAREFA COMO CONCLUÍDA
function marcarTarefa(event){
	const boxTarefa = event.target.closest(".box-tarefa");
	const iconeSelecaoTarefa = event.target;

	// VERIFICA SE TAREFA NÃO CONTÉM CLASSE .MARCADA
	if(!boxTarefa.classList.contains("marcada")){
		boxTarefa.classList.add("marcada");

		iconeSelecaoTarefa.classList.remove("bi-circle");
		iconeSelecaoTarefa.classList.add("bi-check-circle-fill");

		boxResultado.appendChild(boxTarefa);

		return;
	}

	boxTarefa.classList.remove("marcada");

	iconeSelecaoTarefa.classList.remove("bi-check-circle-fill");
	iconeSelecaoTarefa.classList.add("bi-circle");
}

// FUNÇÃO QUE DELETA UMA TAREFA
function deletarTarefa(event){
	const boxTarefa = event.target.closest(".box-tarefa");

	boxTarefa.remove();

	alert("Tarefa deletada com sucesso! =)");
}

// FUNÇÃO QUE REMOVE O ERRO DO INPUT DE TAREFA
function removerErro(){
	inputTarefa.classList.remove("erro");

	msgErroTarefa.textContent = "";
	msgErroTarefa.classList.remove("ativo");
}