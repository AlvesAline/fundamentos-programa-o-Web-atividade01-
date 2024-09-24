// Função para sempre voltar para a página principal (index.html)
function voltarPagina() {
    window.location.href = "index.html"; // Sempre redireciona para a página "Sobre mim"
}

// Função de validação de formulário
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Previne o envio do formulário se houver campos vazios
    } else {
        alert('Mensagem enviada com sucesso!');
    }
});
