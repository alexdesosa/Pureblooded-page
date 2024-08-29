const translations = {
  en: {
      nav: {
          home: "Home",
          shop: "Shop",
          about: "About",
          contact: "Contact",
          gallery: "Gallery",
          login: "Login"
      },
      body: {
          mainTitle: "PURE BLOODED",
          mainText: "Dive into a world of darkness and hidden secrets where reality fades away and deepest fears come to life. 'Pure Blooded' is a psychological horror game designed to push you to the edge of your sanity and immerse you in an enveloping and terrifying narrative."
      }
  },
  es: {
      nav: {
          home: "Inicio",
          shop: "Tienda",
          about: "Acerca de",
          contact: "Contacto",
          gallery: "Galería",
          login: "Iniciar sesión"
      },
      body: {
          mainTitle: "PURE BLOODED",
          mainText: "Sumérgete en un mundo de oscuridad y secretos ocultos donde la realidad se desvanece y los miedos más profundos cobran vida. 'Sangre Pura' es un juego de terror psicológico diseñado para llevarte al borde de tu cordura e introducirte en una narrativa envolvente y aterradora."
      }
  },
  pt: {
      nav: {
          home: "Início",
          shop: "Loja",
          about: "Sobre",
          contact: "Contato",
          gallery: "Galeria",
          login: "Entrar"
      },
      body: {
          mainTitle: "PURE BLOODED",
          mainText: "Mergulhe em um mundo de escuridão e segredos ocultos onde a realidade desaparece e os medos mais profundos ganham vida. 'Sangue Puro' é um jogo de terror psicológico projetado para levar você ao limite da sua sanidade e mergulhar você em uma narrativa envolvente e aterrorizante."
      }
  }
};

// Function to translate the navigation links
function translateNav(lang) {
  const navLinks = document.querySelectorAll('.header-link a[data-lang-key]');
  navLinks.forEach(link => {
      link.textContent = translations[lang].nav[link.dataset.langKey];
  });
}

// Function to translate the body content
function translateBody(lang) {
  document.getElementById('main-title').textContent = translations[lang].body.mainTitle;
  document.getElementById('main-text').textContent = translations[lang].body.mainText;
}

// Initial translation to English
translateNav('en');
translateBody('en');

// Event listener for language dropdown
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', event => {
      const lang = event.target.getAttribute('data-lang');
      translateNav(lang);
      translateBody(lang);
  });
});
