window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {'[+]': ['mhchem', 'color', 'colortbl']}, // añade mhchem y color
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore|mathjax_ignore",
    // añadimos 'arithmatex-box' para que lea también nuestra caja customizada
    processHtmlClass: "arithmatex|arithmatex-box"
  },
  loader: {load: ['[tex]/mhchem', '[tex]/color', '[tex]/colortbl']},
};
