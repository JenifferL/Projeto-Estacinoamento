// Função para verificar se todos os campos de entrada estão preenchidos
function verificarCamposPreenchidos() {
    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const apartamento = document.getElementById("apartamento").value;
    const bloco = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor = document.getElementById("cor").value;
    const vaga = document.getElementById("vaga").value;

    // Array para armazenar os campos em branco
    const camposEmBranco = [];

    if (placa === "") {
        camposEmBranco.push("Placa do Veículo");
        document.getElementById("placa").classList.add("invalid");
    } else {
        document.getElementById("placa").classList.remove("invalid");
    }
    if (proprietario === "") {
        camposEmBranco.push("Nome do Proprietário");
        document.getElementById("proprietario").classList.add("invalid");
    } else {
        document.getElementById("proprietario").classList.remove("invalid");
    }
    if (apartamento === "") {
        camposEmBranco.push("Número do Apartamento");
        document.getElementById("apartamento").classList.add("invalid");
    } else {
        document.getElementById("apartamento").classList.remove("invalid");
    }
    if (bloco === "") {
        camposEmBranco.push("Bloco do Apartamento");
        document.getElementById("bloco").classList.add("invalid");
    } else {
        document.getElementById("bloco").classList.remove("invalid");
    }
    if (modelo === "") {
        camposEmBranco.push("Modelo do Veículo");
        document.getElementById("modelo").classList.add("invalid");
    } else {
        document.getElementById("modelo").classList.remove("invalid");
    }
    if (cor === "") {
        camposEmBranco.push("Cor do Veículo");
        document.getElementById("cor").classList.add("invalid");
    } else {
        document.getElementById("cor").classList.remove("invalid");
    }
    if (vaga === "") {
        camposEmBranco.push("Número da Vaga de Estacionamento");
        document.getElementById("vaga").classList.add("invalid");
    } else {
        document.getElementById("vaga").classList.remove("invalid");
    }

    // Exibir mensagens de erro se houver campos em branco
    if (camposEmBranco.length > 0) {
        const mensagemErro = "Por favor, preencha os seguintes campos antes de salvar:\n\n" + camposEmBranco.join("\n");
        alert(mensagemErro);
        return false;
    }

    return true;
}

botaoSalvar = document.getElementById("salvar")
if (botaoSalvar != null) {
    document.getElementById("salvar").addEventListener("click", function () {
        // Verificar se todos os campos estão preenchidos
        if (verificarCamposPreenchidos()) {
            // Obter os valores do formulário
            const placa = document.getElementById("placa").value;
            const proprietario = document.getElementById("proprietario").value;
            const apartamento = document.getElementById("apartamento").value;
            const bloco = document.getElementById("bloco").value;
            const modelo = document.getElementById("modelo").value;
            const cor = document.getElementById("cor").value;
            const vaga = document.getElementById("vaga").value;

            // Exibir os valores no console
            console.log("Placa do Veículo:", placa);
            console.log("Nome do Proprietário:", proprietario);
            console.log("Número do Apartamento:", apartamento);
            console.log("Bloco do Apartamento:", bloco);
            console.log("Modelo do Veículo:", modelo);
            console.log("Cor do Veículo:", cor);
            console.log("Número da Vaga de Estacionamento:", vaga);

            // Exibir a mensagem de confirmação em um pop-up
            alert("Cadastro realizado com sucesso! Vaga Reservada.");
            setTimeout(redirecionarParaListagem, 1000); 
        }

    });
}

function redirecionarParaListagem() {
    window.location.href = "CadastroRealizado.html";
}


function excluirVagaReservada(button) {
    const listItem = button.parentElement; // Obtém o elemento pai do botão (o <li>)
    const listaReservadas = listItem.parentElement; // Obtém a <ul> que contém o <li>
    
    listaReservadas.removeChild(listItem); // Remove o <li> da lista
    const vagaInfo = listItem.textContent.trim(); // Obtém as informações da vaga como texto
    console.log(`Vaga ${vagaInfo} foi excluída.`);
}

// Adicione um evento de clique para os botões de exclusão na página de listagem de vagas
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('excluir')) {
        excluirVagaReservada(event.target);
    }
});








