function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let preferencia = document.querySelectorAll('input[name="preferencia"]:checked').length;
    let tipoCarne = document.getElementById("tipoCarne").value;
    let comunicacoes = document.querySelectorAll('input[name="comunicacoes"]:checked').length;
    let mensagem = document.getElementById("mensagem").value;

    // Validação do nome
    let nomeSplit = nome.trim().split(" ");
    if (nomeSplit.length < 2) {
        alert("O nome deve possuir pelo menos dois nomes.");
        return false;
    }

    // Validação do email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        alert("Por favor, insira um endereço de email válido.");
        return false;
    }

    // Validação do telefone
    telefone = telefone.replace(/[\s()-]/g, "");
    if (telefone.length !== 11) {
        alert("Por favor, insira um número de telefone válido.");
        return false;
    }

    // Validação da preferência
    if (preferencia === 0) {
        alert("Selecione pelo menos uma preferência.");
        return false;
    }

    // Validação do tipo de carne
    if (tipoCarne === "") {
        alert("Selecione um tipo de carne favorita.");
        return false;
    }

    // Validação das comunicações
    if (comunicacoes === 0) {
        alert("Selecione pelo menos um meio de comunicação.");
        return false;
    }

    // Validação da mensagem
    if (mensagem.length < 5) {
        alert("A mensagem deve ter pelo menos 5 caracteres.");
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let todosOsMeiosCheckbox = document.querySelector('input[name="comunicacoes"][value="Todos os meios"]');

    todosOsMeiosCheckbox.addEventListener("change", function() {
        let emailCheckbox = document.querySelector('input[name="comunicacoes"][value="Email"]');
        let smsCheckbox = document.querySelector('input[name="comunicacoes"][value="SMS"]');

        emailCheckbox.checked = this.checked;
        smsCheckbox.checked = this.checked;
    });
});


// Janela de agradecimento
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector('.formulario form');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        if (validarFormulario()) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const janelaAgradecimento = document.createElement('div');
            janelaAgradecimento.classList.add('janela-agradecimento');
            janelaAgradecimento.innerHTML = `
                <div class="conteudo-janela">
                    <h2>Obrigado por entrar em contato!</h2>
                    <p>Ficamos felizes em receber sua mensagem. Entraremos em contato em breve.</p>
                    <button class="fechar-janela">Fechar</button>
                </div>
            `;

            overlay.appendChild(janelaAgradecimento);
            document.body.appendChild(overlay);

            const fecharJanela = document.querySelector('.fechar-janela');
            fecharJanela.addEventListener('click', function() {
                overlay.remove();
                location.reload(); // Recarrega a página
            });
        }
    });
});
