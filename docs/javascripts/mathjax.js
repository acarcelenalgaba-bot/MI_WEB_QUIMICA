window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['mhchem']} // <-- 1. Añade esto para activar \ce
  },
  options: {
    ignoreHtmlClass: ".*",
    // 2. Añadimos 'arithmatex-box' para que lea también nuestra caja customizada
    processHtmlClass: "arithmatex|arithmatex-box" 
  },
  loader: {load: ['[tex]/mhchem']} // <-- 3. Añade esto para cargar mhchem
};