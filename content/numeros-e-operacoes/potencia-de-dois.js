(function () {
  window.UPEDIA_CONTENT = window.UPEDIA_CONTENT || {};
  window.UPEDIA_CONTENT["potencia-de-dois"] = `As **potências de 2** (uma forma de [[potenciacao]]) para um número natural $n > 0$ são o resultado da multiplicação do número $2$ por si mesmo $n$ vezes:

$$2^n = \\underbrace{2 \\times 2 \\times \\cdots \\times 2}_{n \\text{ vezes}}$$

Para manter as propriedades algébricas de divisão coerentes, define-se matematicamente que $2^0 = 1$. Assim, a sequência segue um padrão perfeito, onde cada termo é o dobro do anterior.

### Tabela dos Primeiros Termos

Os primeiros valores de $2^n$ formam uma sequência familiar:

* $2^0 = 1$
* $2^1 = 2$
* $2^2 = 4$
* $2^3 = 8$
* $2^4 = 16$
* $2^{10} = 1024$ (base do Kilobyte na [[computacao]])

### Por que 2 é especial na Computação

Todo processador digital opera com dois estados: ligado ($1$) e desligado ($0$). Um byte com $8$ bits pode representar $2^8 = 256$ valores diferentes. Isso explica por que memórias e arquivos têm tamanhos como 256 MB, 512 GB e 1024 TB.

### Propriedades Algébricas

As potências respeitam os [[axiomas-fundamentais]] da álgebra:

* **Multiplicação:** $2^a \\times 2^b = 2^{a+b}$
* **Divisão:** $2^a \\div 2^b = 2^{a-b}$
* **Potência de potência:** $(2^a)^b = 2^{a \\cdot b}$
`;
})();
