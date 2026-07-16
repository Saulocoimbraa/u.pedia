(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["teorema-de-pitagoras"] = `O Teorema de Pitágoras é uma das leis mais antigas e úteis de toda a [[geometria-plana]]. Ele descreve uma relação especial que existe entre os lados de qualquer [[triangulo-retangulo]] — ou seja, todo triângulo que possui um [[angulo-reto]] interno.

### A Fórmula Central

Em qualquer triângulo retângulo, o quadrado do comprimento da [[hipotenusa]] é sempre igual à soma dos quadrados dos dois [[catetos]].

$$a^2 = b^2 + c^2$$

Nessa equação, $a$ é a medida da hipotenusa (o maior lado, oposto ao ângulo reto), e $b$ e $c$ são as medidas dos dois [[catetos]].

### Por que isso funciona? A Prova Visual

A prova mais intuitiva é a de rearranjo geométrico. Imagine quatro triângulos iguais organizados dentro de um grande quadrado de lado $b+c$. Se colocarmos as peças nas pontas, a área vazia no meio forma um quadrado de área $a^2$. Se movermos essas mesmas quatro peças para formar dois retângulos nos cantos, o espaço vazio restante passa a ser dois quadrados menores: um de lado $b$ (área $b^2$) e outro de lado $c$ (área $c^2$).

Como o tamanho do quadrado total e a área dos quatro triângulos são os mesmos em ambas as posições, o espaço vazio deve ser o mesmo: logo, $a^2 = b^2 + c^2$. 

Você pode experimentar essa animação (e também a versão de grid com quadradinhos menores) na ferramenta interativa abaixo:

{{widget}}

### Demonstração Formal (Por Semelhança de Triângulos)

Para provar formalmente a relação sem depender apenas do apelo visual do rearranjo, recorremos à [[geometria-dedutiva]] clássica usando a ideia de [[triangulo-semelhante]].

Para isso, dividimos o triângulo original traçando a sua altura. Veja o diagrama geométrico abaixo:

<div style="display: flex; justify-content: center; margin: 1.5rem 0;">
  <svg width="360" height="210" viewBox="0 0 360 210" style="background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; box-shadow: var(--shadow-subtle);">
    <line x1="150" y1="40" x2="150" y2="160" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" />
    <rect x="150" y="150" width="10" height="10" fill="none" stroke="#9ca3af" stroke-width="1.5" />
    <circle cx="155" cy="155" r="1" fill="#9ca3af" />
    <polygon points="150,40 60,160 310,160" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round" />
    <text x="150" y="28" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">A (90°)</text>
    <text x="45" y="165" text-anchor="end" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">B</text>
    <text x="325" y="165" text-anchor="start" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#1a1a1a">C</text>
    <text x="150" y="180" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="14" fill="#ef4444">H</text>
    <text x="95" y="95" text-anchor="end" font-family="var(--font-family)" font-weight="600" font-size="13" fill="#4f46e5">c</text>
    <text x="240" y="95" text-anchor="start" font-family="var(--font-family)" font-weight="600" font-size="13" fill="#10b981">b</text>
    <text x="142" y="105" text-anchor="end" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#ef4444">h</text>
    <text x="105" y="152" text-anchor="middle" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#4f46e5">m</text>
    <text x="230" y="152" text-anchor="middle" font-family="var(--font-family)" font-weight="600" font-size="12" fill="#10b981">n</text>
    <line x1="60" y1="192" x2="310" y2="192" stroke="#f59e0b" stroke-width="1.5" />
    <line x1="60" y1="188" x2="60" y2="196" stroke="#f59e0b" stroke-width="1.5" />
    <line x1="310" y1="188" x2="310" y2="196" stroke="#f59e0b" stroke-width="1.5" />
    <text x="185" y="205" text-anchor="middle" font-family="var(--font-family)" font-weight="700" font-size="12" fill="#f59e0b">hipotenusa a = m + n</text>
  </svg>
</div>

1. **Definição da Altura:** No triângulo retângulo $ABC$ (com ângulo reto em $A$), traçamos a altura $h$ relativa à hipotenusa $BC$. O ponto de encontro é $H$, dividindo a hipotenusa em $BH = m$ e $HC = n$, de modo que $a = m + n$.

2. **Criação de Triângulos Semelhantes:** A linha $AH$ divide o triângulo original em dois triângulos retângulos menores: $ABH$ e $ACH$.

3. **Semelhança (Caso Ângulo-Ângulo):**
   * $\\Delta ABH \\sim \\Delta CBA$ (compartilham ângulo $B$ e ambos têm $90°$)
   * $\\Delta ACH \\sim \\Delta BCA$ (compartilham ângulo $C$ e ambos têm $90°$)

4. **Proporção do Cateto $c$:** De $\\Delta ABH \\sim \\Delta CBA$:
   $$\\frac{c}{a} = \\frac{m}{c} \\implies c^2 = a \\cdot m$$

5. **Proporção do Cateto $b$:** De $\\Delta ACH \\sim \\Delta BCA$:
   $$\\frac{b}{a} = \\frac{n}{b} \\implies b^2 = a \\cdot n$$

6. **Conclusão:** Somando as duas equações:
   $$b^2 + c^2 = a \\cdot n + a \\cdot m = a(n + m) = a \\cdot a = a^2$$

Fica assim demonstrado que a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.
`;
})();
