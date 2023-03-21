function adicionarElemento() {
	// Cria um novo elemento div
	var novoElemento = document.createElement("div");
	
	// Define um atributo id para o novo elemento
	novoElemento.setAttribute("id", "novo-elemento");
	
	// Define o conteúdo do novo elemento
	novoElemento.innerHTML = "<p>Novo elemento adicionado!</p>";
	
	// Adiciona o novo elemento ao elemento de id "conteudo"
	document.getElementById("conteudo").appendChild(novoElemento);
}
