const medicamentos = [
  {
    titulo: 'Doralgina Caixa 20 Drágeas',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Doralgina.',
    preco: 'R$ 89,00'
  },
  {
    titulo: 'Allegra Pediátrico 6mg/ml ',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Allegra.',
    preco: 'R$ 32,26'
  },
  {
    titulo: 'Loratadina Pediátrico 6mg/ml ',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Loratadina.',
    preco: 'R$ 32,26'
  },
  {
    titulo: 'Loratadina Pediátrico 6mg/ml ',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Loratadina.',
    preco: 'R$ 32,26'
  },
  {
    titulo: 'Loratadina Pediátrico 6mg/ml ',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Loratadina.',
    preco: 'R$ 32,26'
  },
  {
    titulo: 'Loratadina Pediátrico 6mg/ml ',
    imagemSrc: 'images/doralgina.png',
    descricao: 'Descrição do medicamento Loratadina.',
    preco: 'R$ 32,26'
  }
];

function criarCardMedicamento(medicamento) {
  const cardElemento = document.createElement('div');
  cardElemento.className = 'col-md-6 col-lg-4';
  cardElemento.style.width = '32.4rem';
  cardElemento.style.marginInline = '2rem';
  
  const cardElementoBody = document.createElement('div');
  cardElementoBody.className = 'card-body';

  const cardElementoLink = document.createElement('a');
  cardElementoLink.href = '';
  cardElementoLink.className = 'card-link';

  const cardElementoLinkImg = document.createElement('img');
  cardElementoLinkImg.id = 'heart-icon';
  cardElementoLinkImg.src = './images/heart-icon.png';
  cardElementoLinkImg.alt = 'Ícone de coração';
  cardElementoLink.appendChild(cardElementoLinkImg);


  const cardElementoImg = document.createElement('img');
  cardElementoImg.className = 'card-imagem';
  cardElementoImg.src = medicamento.imagemSrc;
  cardElementoImg.alt = medicamento.descricao;

  const cardElementoTitulo = document.createElement('h2');
  cardElementoTitulo.className = 'card-title';
  cardElementoTitulo.textContent = medicamento.titulo;

  const cardElementoPreco = document.createElement('p');
  cardElementoPreco.className = 'card-text';
  cardElementoPreco.textContent = medicamento.preco;

  const cardElementoButton = document.createElement('button');
  cardElementoButton.classList = 'card-button '
  cardElementoButton.innerText = '+ Adicionar';

  cardElementoButton.addEventListener('click', function(){
    console.log('Medicamento adicionado: ', medicamento.titulo);
    alert('Medicamento adicionado ao carrinho: ' + medicamento.titulo);
  });

  cardElementoBody.appendChild(cardElementoLink);
  cardElementoLink.appendChild(cardElementoImg);
  cardElementoBody.appendChild(cardElementoTitulo);
  cardElementoBody.appendChild(cardElementoPreco);
  cardElementoBody.appendChild(cardElementoButton);

  cardElemento.appendChild(cardElementoBody);

  return cardElemento;
}

function mostrarCards() {
  const medicamentosContainer = document.getElementById('medicamentos-container');

  medicamentos.forEach(medicamento => {
    const cardMedicamento = criarCardMedicamento(medicamento);
    medicamentosContainer.appendChild(cardMedicamento);
  });
}

document.addEventListener('DOMContentLoaded', mostrarCards);

document.addEventListener('DOMContentLoaded', mostrarCards);
