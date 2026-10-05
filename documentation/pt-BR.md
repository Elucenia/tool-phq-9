<!-- ELUCENIA technical documentation · phq-9 · pt-BR · no clinical/professional/rights approval -->

# Questionário PHQ-9

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/phq-9)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Durante as últimas 2 semanas, com que frequência você foi incomodado(a) por… 1. Pouco interesse ou pouco prazer em fazer as coisas

`q1`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 2. Se sentir “para baixo”, deprimido(a) ou sem perspectiva

`q2`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 3. Dificuldade para pegar no sono ou permanecer dormindo, ou dormir mais do que de costume

`q3`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 4. Se sentir cansado(a) ou com pouca energia

`q4`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 5. Falta de apetite ou comendo demais

`q5`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 6. Se sentir mal consigo mesmo(a) — ou achar que você é um fracasso ou que decepcionou sua família ou você mesmo(a)

`q6`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 7. Dificuldade para se concentrar nas coisas, como ler o jornal ou ver televisão

`q7`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 8. Lentidão para se movimentar ou falar, a ponto das outras pessoas perceberem? Ou o oposto – estar tão agitado(a) ou irrequieto(a) que você fica andando de um lado para o outro muito mais do que de costume

`q8`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

### 9. Pensar em se ferir de alguma maneira ou que seria melhor estar morto(a)

`q9`

- `0` — Nenhuma vez
- `1` — Vários dias
- `2` — Mais da metade dos dias
- `3` — Quase todos os dias

## Edição do método

PHQ 9/Kroenke 2001:9 itens 0–3, total 0–27; cutofforiginal 10 vs PTSantos 2013≥9; item 9 alarme

## Fórmula documentada

Cada item vale de 0 (nenhuma vez) a 3 (quase todos os dias). Total: 0 a 27.

Ponto de corte usual: ≥ 10 (sensibilidade e especificidade de 88% para depressão maior no estudo original). Na população geral brasileira (Santos 2013), o corte ≥ 9 teve sensibilidade de 77,5% e especificidade de 86,7%.

Qualquer resposta diferente de “nenhuma vez” no item 9 exige avaliação do risco de suicídio, qualquer que seja o total.

## Limites e população

Rastreamento e intensidade de sintomas nas últimas duas semanas; não substitui entrevista diagnóstica. Distinga o corte original ≥10 do corte ≥9 estudado na população adulta de Pelotas. Os valores de sensibilidade e especificidade publicados não validam automaticamente outras populações ou traduções.

## Referências

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
