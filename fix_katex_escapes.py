"""
fix_katex_escapes.py
Corrige todos os \\cmd (barra simples) para \\\\cmd (barra dupla) dentro de
template strings JavaScript nos artigos da µ.pedia.
"""
import re
import os

files = [
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
]

def fix_escapes(content):
    """
    In the raw file bytes, correct LaTeX inside a JS template string
    should have DOUBLE backslash: \\\\frac → \\\\frac (as stored in file)
    Wrong ones have a SINGLE backslash: \\frac (as stored in file).
    
    In Python when we read the file as text:
      - single backslash in file = '\\' (1 char)  
      - double backslash in file = '\\\\' (2 chars)
    
    Strategy: replace every occurrence of a single \ before a LaTeX command
    (not already preceded by another \) with \\.
    
    We do this by normalising: first replace ALL \\ to a placeholder,
    then replace single \ with \\, then restore placeholders.
    """
    PLACEHOLDER = '\x00DBLSLASH\x00'
    
    # 1. Protect already-correct double backslashes
    content = content.replace('\\\\', PLACEHOLDER)
    
    # 2. Now every remaining single \ is bad — double it
    content = content.replace('\\', '\\\\')
    
    # 3. Restore placeholders → correct double backslashes
    content = content.replace(PLACEHOLDER, '\\\\')
    
    return content


for fpath in files:
    fname = os.path.basename(fpath)
    
    with open(fpath, 'r', encoding='utf-8') as f:
        original = f.read()
    
    # Only operate inside the template string (between the backtick delimiters)
    # We extract the IIFE wrapper and fix only the content string
    # Pattern: find the template string content between ` and `
    
    def fix_template_string(m):
        inner = m.group(1)
        fixed = fix_escapes(inner)
        return '`' + fixed + '`'
    
    fixed = re.sub(r'`(.*?)`', fix_template_string, original, flags=re.DOTALL)
    
    if fixed != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f'[FIXED] {fname}')
    else:
        print(f'[UNCHANGED] {fname}')
