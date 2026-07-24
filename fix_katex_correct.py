"""
fix_katex_correct.py — Corrige escapes LaTeX em arquivos JS da µ.pedia.

Regra: dentro de template strings JS, todo \cmd LaTeX deve ser \\cmd.
Lógica: percorre char a char; se encontra \ solitário (não precedido de \)
seguido de letra ou { }, duplica para \\.
"""

import os
import re

FILES = [
    r'd:\Projetos IA\u.pedia-main\content\algebra\equacao-do-primeiro-grau.js',
    r'd:\Projetos IA\u.pedia-main\content\algebra\sistemas-de-equacoes.js',
    r'd:\Projetos IA\u.pedia-main\content\algebra\equacao-do-segundo-grau.js',
    r'd:\Projetos IA\u.pedia-main\content\algebra\fatoracao-algebrica.js',
    r'd:\Projetos IA\u.pedia-main\content\algebra\funcao.js',
    r'd:\Projetos IA\u.pedia-main\content\grandezas-e-medidas\perimetro-e-area.js',
    r'd:\Projetos IA\u.pedia-main\content\grandezas-e-medidas\volume-do-bloco-retangular.js',
    r'd:\Projetos IA\u.pedia-main\content\geometria\plano-cartesiano.js',
    r'd:\Projetos IA\u.pedia-main\content\geometria\geometria-espacial.js',
    r'd:\Projetos IA\u.pedia-main\content\geometria\simetria-e-transformacoes-geometricas.js',
    r'd:\Projetos IA\u.pedia-main\content\estatistica\tabelas-e-graficos.js',
    r'd:\Projetos IA\u.pedia-main\content\estatistica\medidas-de-tendencia-central.js',
    r'd:\Projetos IA\u.pedia-main\content\estatistica\espaco-amostral.js',
    r'd:\Projetos IA\u.pedia-main\content\estatistica\probabilidade-de-um-evento.js',
    r'd:\Projetos IA\u.pedia-main\content\estatistica\pesquisa-amostral-e-censitaria.js',
    r'd:\Projetos IA\u.pedia-main\content\grandezas-e-medidas\sistema-monetario-brasileiro.js',
    r'd:\Projetos IA\u.pedia-main\content\grandezas-e-medidas\unidades-de-medida.js',
]

LATEX_TRIGGERS = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{')


def fix_template_content(text):
    """
    Percorre char a char. Quando encontra uma \ solitária (não precedida de \)
    seguida de um caractere LaTeX (letra ou {), insere uma \ extra.
    Sequências \\ já corretas são preservadas intactas.
    """
    result = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch == '\\':
            # Peek ahead
            next_ch = text[i + 1] if i + 1 < n else ''
            if next_ch == '\\':
                # Já é \\ — correto, copia os dois e avança
                result.append('\\')
                result.append('\\')
                i += 2
            elif next_ch in LATEX_TRIGGERS:
                # \ solitária antes de cmd LaTeX — duplica
                result.append('\\')
                result.append('\\')
                i += 1   # avança só a \, o próximo char será copiado normal
            else:
                result.append(ch)
                i += 1
        else:
            result.append(ch)
            i += 1
    return ''.join(result)


def fix_file(fpath):
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        original = f.read()

    # Localiza a template string: tudo entre o primeiro ` e o último `
    first_bt = original.index('`')
    last_bt = original.rindex('`')

    if first_bt == last_bt:
        print(f'[SKIP] {fname} — backtick não encontrado')
        return

    before = original[:first_bt + 1]          # inclui o `
    content = original[first_bt + 1:last_bt]  # conteúdo da template
    after = original[last_bt:]                 # inclui o ` final

    fixed_content = fix_template_content(content)
    fixed = before + fixed_content + after

    if fixed != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f'[FIXED] {fname}')
    else:
        print(f'[OK]    {fname}  (nenhuma alteração necessária)')


def count_bad(fpath):
    """Conta ocorrências de \ solitária antes de cmd LaTeX no conteúdo do template."""
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as f:
        original = f.read()
    first_bt = original.index('`')
    last_bt = original.rindex('`')
    content = original[first_bt + 1:last_bt]

    # Regex para \ solitária (não precedida de \) antes de letra ou {
    bad = re.findall(r'(?<!\\)\\(?=[a-zA-Z{])', content)
    if bad:
        return len(bad)
    return 0


print('=== FASE 1: Corrigindo arquivos ===')
for f in FILES:
    fix_file(f)

print()
print('=== FASE 2: Verificação pós-correção ===')
all_ok = True
for f in FILES:
    n = count_bad(f)
    fname = os.path.basename(f)
    if n > 0:
        print(f'AINDA COM ERRO [{fname}]: {n} ocorrências')
        all_ok = False
    else:
        print(f'OK [{fname}]')

print()
if all_ok:
    print('==> Todos os arquivos com escape KaTeX correto!')
else:
    print('==> Ainda existem erros!')
