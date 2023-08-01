const headerInformacao = {
  logoSrc: './images/logo.png',
  logoAlt: 'Logo DevInFarma',
  menuOpcoes: [
    {
      texto: 'TODOS OS MEDICAMENTOS',
      link: 'index.html'
    },
    {
      texto: 'FALE CONOSCO',
      link: 'contato.html'
    },
    {
      texto: 'SOBRE NÓS',
      link: '#'
    }
  ]
};

function adcHearder() {
  const headerElemento = document.getElementById('header');

  const sectionLogo = document.createElement('section');
  sectionLogo.className = 'section-logo';

  const logoElement = document.createElement('img');
  logoElement.className = 'section-logo';
  logoElement.src = headerInformacao.logoSrc;
  logoElement.alt = headerInformacao.logoAlt;
  sectionLogo.appendChild(logoElement);

  const sectionMenu = document.createElement('section');
  sectionMenu.className = 'section-menu';
  
  const formBusca = document.createElement('form');
  formBusca.className = 'section-menu-busca';
  
  const inputBusca = document.createElement('input');
  inputBusca.type = 'text';
  inputBusca.placeholder = 'O que você busca? (Ex: vitamina,fralda)';

  const buttonBusca = document.createElement('button');
  buttonBusca.type = 'submit';

  const imgBusca = document.createElement('img');
  imgBusca.src = 'images/lupa.svg';
  imgBusca.width = '10';

  buttonBusca.appendChild(imgBusca);
  formBusca.appendChild(inputBusca);
  formBusca.appendChild(buttonBusca);

  const ulMenu = document.createElement('ul');
  ulMenu.className = 'nav';
  ulMenu.classList.add('nav-underline');

  headerInformacao.menuOpcoes.map(opcao => {
    const liMenu = document.createElement('li');
    liMenu.className = 'nav-item';

    const aMenu = document.createElement('a');
    aMenu.className = 'nav-link';
    aMenu.textContent = opcao.texto;
    aMenu.href = opcao.link;

    liMenu.appendChild(aMenu);
    ulMenu.appendChild(liMenu);
  });

  sectionMenu.appendChild(formBusca);
  sectionMenu.appendChild(ulMenu);

  headerElemento.appendChild(sectionLogo);
  headerElemento.appendChild(sectionMenu);
}

document.addEventListener('DOMContentLoaded', adcHearder);

