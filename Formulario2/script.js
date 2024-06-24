const express = require("express")
const app = express()
const port = 3000


document.getElementById('iform').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('inomeError').textContent = '';
    document.getElementById('iemailError').textContent = '';
    document.getElementById('imensagemError').textContent = '';

    /* Validar Nome */
    var nome = document.getElementById('inome').value;
    if (nome.length < 3) {
        document.getElementById('inomeError').textContent = 'O nome deve ter pelo menos 3 caracteres.';
        return false;
    }

    /* Validar Email */
    var email = document.getElementById('iemail').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('iemailError').textContent = 'Por favor, insira um email válido.';
        return false;
    }

    /* Validar Mensagem */
    var mensagem = document.getElementById('imensagem').value;
    if (mensagem.length < 10) {
        document.getElementById('imensagemError').textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
        return false;
    }

    /* Se todas as validações passarem, submeter o formulário */
    this.submit();
});