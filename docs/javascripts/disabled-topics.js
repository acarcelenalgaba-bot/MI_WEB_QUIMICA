document.addEventListener("DOMContentLoaded", function () {
  // 1. Escribe aquí el nombre o prefijo de los temas que quieras BLOQUEAR
  const temasBloqueados = [
    "Tema 2",
    "Tema 3",
    "Tema 4",
    "Tema 5",
    "Tema 6",
    "Tema 7",
    "Tema 8",
    "Tema 9"
  ];

  // 2. Busca los enlaces en el menú de navegación lateral
  const navLinks = document.querySelectorAll(".md-nav__link");

  navLinks.forEach(link => {
    const texto = link.textContent.trim();

    // Comprueba si el texto del enlace coincide con alguno de la lista
    const esBloqueado = temasBloqueados.some(tema => texto.includes(tema));

    if (esBloqueado) {
      // Añade la clase CSS de bloqueo
      link.classList.add("tema-bloqueado");

      // Anula la acción de abrir la página al hacer clic
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });
});