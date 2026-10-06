<!-- ELUCENIA technical documentation · phq-9 · it · no clinical/professional/rights approval -->

# Questionario PHQ-9

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/phq-9)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Nelle ultime 2 settimane, con quale frequenza è stato disturbato da… 1. Poco interesse o piacere nel fare le cose

`q1`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 2. Sentirsi giù, depresso o senza speranza

`q2`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 3. Difficoltà ad addormentarsi o a mantenere il sonno, oppure dormire più del solito

`q3`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 4. Sentirsi stanco o avere poca energia

`q4`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 5. Scarso appetito o mangiare troppo

`q5`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 6. Sentirsi male con se stesso — oppure pensare di essere un fallimento o di aver deluso se stesso o la famiglia

`q6`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 7. Difficoltà a concentrarsi, per esempio nel leggere il giornale o guardare la televisione

`q7`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 8. Muoversi o parlare così lentamente che gli altri lo notano? Oppure, al contrario, essere così agitato o irrequieto da muoversi molto più del solito

`q8`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

### 9. Pensare di farsi del male in qualche modo o che sarebbe meglio essere morto

`q9`

- `0` — Mai
- `1` — Diversi giorni
- `2` — Più della metà dei giorni
- `3` — Quasi ogni giorno

## Edizione del metodo

PHQ-9/Kroenke 2001: 9 item 0–3, totale 0–27; soglia originale 10, brasiliana Santos 2013≥9; allarme item 9

## Formula documentata

Ogni item vale 0 (mai) – 3 (quasi ogni giorno). Totale: 0 – 27.

Soglia usuale: ≥ 10 (sensibilità e specificità 88% per depressione maggiore nello studio originale). Nella popolazione generale brasiliana (Santos 2013), ≥ 9: sensibilità 77,5%; specificità 86,7%.

Qualsiasi risposta diversa da “mai” all’item 9 richiede valutazione del rischio suicidario indipendentemente dal totale.

## Limiti e popolazione

Screening e intensità dei sintomi nelle ultime due settimane; non sostituisce il colloquio diagnostico. Distinguere la soglia originale ≥10 dalla soglia ≥9 studiata nella popolazione adulta di Pelotas. I valori pubblicati di sensibilità e specificità non validano automaticamente altre popolazioni o traduzioni.

## Riferimenti

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Sintomi depressivi: intensità minima

| Dettagli del risultato | |
| --- | --- |
| Item 9 (pensieri di morte o di farsi del male) | Mai |

Strumento di screening: non pone diagnosi. Confermare con intervista clinica (criteri del DSM-5).


### 2

Sintomi depressivi: intensità lieve

| Dettagli del risultato | |
| --- | --- |
| Item 9 (pensieri di morte o di farsi del male) | Mai |

Strumento di screening: non pone diagnosi. Confermare con intervista clinica (criteri del DSM-5).


### 3

Sintomi depressivi: intensità moderata (screening positivo: ≥ 10)

| Dettagli del risultato | |
| --- | --- |
| Item 9 (pensieri di morte o di farsi del male) | Mai |

Strumento di screening: non pone diagnosi. Confermare con intervista clinica (criteri del DSM-5).


### 4

Sintomi depressivi: intensità grave (screening positivo: ≥ 10)

| Dettagli del risultato | |
| --- | --- |
| Item 9 (pensieri di morte o di farsi del male) | Mai |

Strumento di screening: non pone diagnosi. Confermare con intervista clinica (criteri del DSM-5).


### 5

Sintomi depressivi: intensità minima. Item 9 positivo: valutare ora il rischio di suicidio

| Dettagli del risultato | |
| --- | --- |
| Item 9 (pensieri di morte o di farsi del male) | Diversi giorni |

Pensieri di morte o di farsi del male: chiedere direttamente di ideazione, piano e mezzi, e non lasciare la persona da sola se il rischio è imminente. Supporto emotivo gratuito 24 h: CVV 188 (o cvv.org.br). Rischio immediato: SAMU 192 o pronto soccorso.

