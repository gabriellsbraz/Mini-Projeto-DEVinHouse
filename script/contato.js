const assuntos = ["Comercial", "Dúvidas", "Revenda", "Outro Assunto"];

  function adcAssunto() {
    const selecionarAssunto = document.getElementById('assunto');

    selecionarAssunto.innerHTML = '';

    const opcaoDefault = document.createElement('option');
    opcaoDefault.value = '';
    opcaoDefault.textContent = 'Selecione uma opção';
    opcaoDefault.disabled = true;
    opcaoDefault.selected = true;
    selecionarAssunto.appendChild(opcaoDefault);

    assuntos.forEach(assunto => {
      const opcaoAssunto = document.createElement('option');
      opcaoAssunto.value = assunto.toLowerCase();
      opcaoAssunto.textContent = assunto;
      selecionarAssunto.appendChild(opcaoAssunto);
    });
  }

  adcAssunto();

  function enviarForm(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    console.log(`Mensagem enviada por: ${nome}`);
    alert('Mensagem enviada com sucesso!');
  }

  const formContato = document.getElementById('form-contato');
  formContato.addEventListener('submit', enviarForm);