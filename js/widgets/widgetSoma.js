/**
 * js/widgets/widgetSoma.js
 * Widget interativo: Conceito de Soma e Agrupamento (Compacto e Ultra Fluido)
 * Expõe window.initWidgetSoma(containerId)
 */
(function () {
  window.initWidgetSoma = function (containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var state = { a: 3, b: 2 };

    container.innerHTML =
      '<style>' +
        '.wsoma-wrapper { font-family: "Inter", -apple-system, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem; color: #1e293b; max-width: 580px; margin: 0 auto; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }' +
        '.wsoma-ctrls { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; align-items: center; background: #f8fafc; padding: 0.6rem 0.8rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 0.8rem; font-size: 0.85rem; }' +
        '.wsoma-ctrl { display: flex; align-items: center; gap: 8px; font-weight: 600; }' +
        '.wsoma-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 6px; border-radius: 3px; background: #e2e8f0; outline: none; cursor: pointer; }' +
        '.wsoma-slider-a::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: grab; box-shadow: 0 1px 4px rgba(99,102,241,0.35); }' +
        '.wsoma-slider-b::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #ec4899; cursor: grab; box-shadow: 0 1px 4px rgba(236,72,153,0.35); }' +
        '.wsoma-stage { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.75rem; min-height: 85px; padding: 0.75rem; background: #fafafa; border-radius: 8px; border: 1px solid #f1f5f9; margin-bottom: 0.8rem; }' +
        '.wsoma-group { display: flex; flex-wrap: wrap; gap: 4px; max-width: 120px; justify-content: center; padding: 6px; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0; }' +
        '.wsoma-block { width: 18px; height: 18px; border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.08); animation: wsoma-pop 0.15s cubic-bezier(0.16, 1, 0.3, 1); }' +
        '.wsoma-footer { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 0.9rem; }' +
        '.wsoma-eq { font-weight: 800; font-size: 1.15rem; color: #0f172a; }' +
        '@keyframes wsoma-pop { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }' +
      '</style>' +

      '<div class="wsoma-wrapper">' +
        '<div class="wsoma-ctrls">' +
          '<div class="wsoma-ctrl">' +
            '<span style="color:#4338ca;">Parcela A:</span>' +
            '<input type="range" class="wsoma-slider wsoma-slider-a" id="wsoma-a" min="0" max="8" value="' + state.a + '">' +
            '<strong id="wsoma-val-a" style="width: 14px; color:#4338ca;">' + state.a + '</strong>' +
          '</div>' +

          '<div class="wsoma-ctrl">' +
            '<span style="color:#be185d;">Parcela B:</span>' +
            '<input type="range" class="wsoma-slider wsoma-slider-b" id="wsoma-b" min="0" max="8" value="' + state.b + '">' +
            '<strong id="wsoma-val-b" style="width: 14px; color:#be185d;">' + state.b + '</strong>' +
          '</div>' +
        '</div>' +

        '<div class="wsoma-stage">' +
          '<div class="wsoma-group" id="wsoma-grp-a"></div>' +
          '<span style="font-size: 1.3rem; font-weight: 800; color: #64748b;">+</span>' +
          '<div class="wsoma-group" id="wsoma-grp-b"></div>' +
          '<span style="font-size: 1.3rem; font-weight: 800; color: #64748b;">=</span>' +
          '<div class="wsoma-group" id="wsoma-grp-sum" style="border: 1.5px solid #cbd5e1; background: #ffffff;"></div>' +
        '</div>' +

        '<div class="wsoma-footer">' +
          '<div class="wsoma-eq" id="wsoma-eq"></div>' +
          '<span style="font-size: 0.78rem; font-weight: 600; color: #64748b;">Junção de Quantidades</span>' +
        '</div>' +
      '</div>';

    var sliderA = container.querySelector("#wsoma-a");
    var sliderB = container.querySelector("#wsoma-b");
    var valA = container.querySelector("#wsoma-val-a");
    var valB = container.querySelector("#wsoma-val-b");
    var grpA = container.querySelector("#wsoma-grp-a");
    var grpB = container.querySelector("#wsoma-grp-b");
    var grpSum = container.querySelector("#wsoma-grp-sum");
    var eqEl = container.querySelector("#wsoma-eq");

    function update() {
      var a = parseInt(sliderA.value, 10);
      var b = parseInt(sliderB.value, 10);
      state.a = a;
      state.b = b;

      valA.textContent = a;
      valB.textContent = b;

      var sum = a + b;

      var blocksA = "";
      for (var i = 0; i < a; i++) {
        blocksA += '<div class="wsoma-block" style="background:#6366f1;"></div>';
      }
      grpA.innerHTML = blocksA || '<span style="font-size:0.7rem; color:#cbd5e1;">0</span>';

      var blocksB = "";
      for (var j = 0; j < b; j++) {
        blocksB += '<div class="wsoma-block" style="background:#ec4899;"></div>';
      }
      grpB.innerHTML = blocksB || '<span style="font-size:0.7rem; color:#cbd5e1;">0</span>';

      var blocksSum = "";
      for (var k = 0; k < sum; k++) {
        var col = k < a ? '#6366f1' : '#ec4899';
        blocksSum += '<div class="wsoma-block" style="background:' + col + ';"></div>';
      }
      grpSum.innerHTML = blocksSum || '<span style="font-size:0.7rem; color:#cbd5e1;">0</span>';

      eqEl.innerHTML =
        '<span style="color:#4338ca;">' + a + '</span> + ' +
        '<span style="color:#be185d;">' + b + '</span> = ' +
        '<span style="color:#059669;">' + sum + '</span>';
    }

    sliderA.addEventListener("input", update);
    sliderB.addEventListener("input", update);

    update();
  };
})();
