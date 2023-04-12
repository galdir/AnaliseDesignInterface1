let carrinho = [];

function adicionarAoCarrinho(produtoId, quantidade) {
    const produtoExistente = carrinho.find((item) => item.id === produtoId);
    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        carrinho.push({ id: produtoId, quantidade: quantidade });
    }
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    const elementoCarrinho = document.querySelector("#carrinho span");
    //elementoCarrinho.innerText = totalItens > 0 ? `(${totalItens})` : "";
    elementoCarrinho.innerText = totalItens > 0 ? `(*)` : "";
}

// Funções de validação de campos ao perder o foco
function validarNome() {
    const nome = document.querySelector("#nome");
    const erroNome = document.querySelector("#erro-nome");
    if (nome.value.trim() === "") {
        erroNome.textContent = "O campo Nome é obrigatório.";
    } else {
        erroNome.textContent = "";
    }
}

function validarEmail() {
    const email = document.querySelector("#email");
    const erroEmail = document.querySelector("#erro-email");
    const re = /\S+@\S+.\S+/;
    if (!re.test(email.value)) {
        erroEmail.textContent = "E-mail inválido.";
    } else {
        erroEmail.textContent = "";
    }
}

function validarSenha() {
    const senha = document.querySelector("#senha");
    const erroSenha = document.querySelector("#erro-senha");
    if (senha.value.length < 8) {
        erroSenha.textContent = "A senha deve ter no mínimo 8 caracteres.";
    } else {
        erroSenha.textContent = "";
    }
}

function validarConfirmacaoSenha() {
    const senha = document.querySelector("#senha");
    const confirmaSenha = document.querySelector("#confirma-senha");
    const erroConfirmaSenha = document.querySelector("#erro-confirma-senha");
    if (senha.value !== confirmaSenha.value) {
        erroConfirmaSenha.textContent = "As senhas não correspondem.";
    } else {
        erroConfirmaSenha.textContent = "";
    }
}

function validarEndereco() {
    const endereco = document.querySelector("#endereco");
    const erroEndereco = document.querySelector("#erro-endereco");
    if (endereco.value.trim() === "") {
        erroEndereco.textContent = "O campo Endereço é obrigatório.";
    } else {
        erroEndereco.textContent = "";
    }
}

function validarTelefone() {
    const telefone = document.querySelector("#telefone");
    const erroTelefone = document.querySelector("#erro-telefone");
    const re = /^\d{2}-\d{5}-\d{4}$/;
    if (!re.test(telefone.value)) {
        erroTelefone.textContent = "Telefone inválido. O formato correto é xx-xxxxx-xxxx.";
    } else {
        erroTelefone.textContent = "";
    }
}