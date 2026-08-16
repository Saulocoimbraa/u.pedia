/**
 * js/aboutAuthor.js — Renderiza a página "Sobre o Autor"
 * Expõe window.renderAboutAuthor(containerId)
 */
(function () {
  window.renderAboutAuthor = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    container.style.opacity = "0";
    container.style.transform = "translateY(10px)";

    container.innerHTML =
      '<div class="about-author-wrapper" style="max-width: 800px; margin: 2rem auto; padding: 2rem; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 16px; box-shadow: var(--shadow-subtle);">' +
      '<div style="text-align: center; margin-bottom: 2rem;">' +
      '<div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-color), var(--primary-color-light, #818cf8)); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2.5rem; font-weight: bold; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); overflow: hidden;">' +
      '<img src="src/img/saulo.jpg" alt="Saulo Coimbra" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block;">' +
      '</div>' +
      '<h1 style="font-family: var(--font-family); font-size: 2.25rem; font-weight: 800; color: var(--text-color); margin: 0;">Saulo Coimbra</h1>' +
      '<p style="font-family: var(--font-family); font-size: 1.1rem; color: var(--primary-color); font-weight: 600; margin-top: 0.5rem;">Mestre em Educação Matemática e Tecnológica (UFPE)</p>' +
      '</div>' +

      '<div style="font-family: var(--font-family); font-size: 1.05rem; line-height: 1.75; color: var(--text-muted); text-align: justify; margin-bottom: 2rem;">' +
      '<p>Mestre em Educação Matemática e Tecnológica (Edumatec/UFPE) e Licenciado em Matemática pela mesma instituição. Possuo uma trajetória consolidada na intersecção entre pedagogia e tecnologia, atuando hoje como Técnico Formador Pedagógico e docente na Educação de Jovens e Adultos (EJA). Sou movido pela resolução de problemas complexos e pelo desenvolvimento de soluções criativas que otimizem a didática da matemática. Tenho como foco constante a investigação de novas metodologias e ferramentas que facilitem a democratização do conhecimento.</p>' +
      '</div>' +

      '<div style="border-top: 1px solid var(--border-color); padding-top: 1.5rem; display: flex; justify-content: center;">' +
      '<a href="#/" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; border-radius: 8px;">' +
      '<i data-lucide="arrow-left"></i> Voltar para os Artigos' +
      '</a>' +
      '</div>' +
      '</div>';

    if (window.lucide) window.lucide.createIcons();

    requestAnimationFrame(function () {
      container.style.transition = "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)";
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    });
  };
})();
