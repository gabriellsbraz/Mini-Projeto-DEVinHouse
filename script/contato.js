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