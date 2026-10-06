<!-- ELUCENIA technical documentation · phq-9 · en · no clinical/professional/rights approval -->

# PHQ-9 questionnaire

[conditions, sources and permissions](https://elucenia.org/en/tools/phq-9)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Over the last 2 weeks, how often have you been bothered by… 1. Little interest or pleasure in doing things

`q1`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 2. Feeling down, depressed or without hope

`q2`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 3. Trouble falling or staying asleep, or sleeping more than usual

`q3`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 4. Feeling tired or having little energy

`q4`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 5. Poor appetite or overeating

`q5`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 6. Feeling bad about yourself — or feeling you are a failure or have let yourself or your family down

`q6`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 7. Trouble concentrating on things such as reading the newspaper or watching television

`q7`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 8. Moving or speaking so slowly that other people could notice? Or the opposite — being so agitated or restless that you move around much more than usual

`q8`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

### 9. Thinking about hurting yourself in some way or that you would be better off dead

`q9`

- `0` — Never
- `1` — Several days
- `2` — More than half the days
- `3` — Nearly every day

## Method edition

PHQ-9/Kroenke 2001: 9 items 0–3, total 0–27; original cutoff 10 versus Brazilian Santos 2013≥9; item 9 alert

## Documented formula

Each item scores 0 (not at all) – 3 (nearly every day). Total: 0 – 27.

Usual cutoff: ≥ 10 (sensitivity and specificity 88% for major depression in the original study). In the Brazilian general population (Santos 2013), ≥ 9: sensitivity 77.5%; specificity 86.7%.

Any response other than “not at all” on item 9 requires suicide-risk assessment regardless of total.

## Limits and population

Screening and symptom severity over the past two weeks; it does not replace a diagnostic interview. Distinguish the original ≥10 cutoff from the ≥9 cutoff studied in the adult Pelotas population. Published sensitivity and specificity values do not automatically validate other populations or translations.

## References

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Depressive symptoms: minimal intensity

| Result details | |
| --- | --- |
| Item 9 (thoughts of death or of hurting yourself) | Never |

Screening instrument: does not make a diagnosis. Confirm with a clinical interview (DSM-5 criteria).


### 2

Depressive symptoms: mild intensity

| Result details | |
| --- | --- |
| Item 9 (thoughts of death or of hurting yourself) | Never |

Screening instrument: does not make a diagnosis. Confirm with a clinical interview (DSM-5 criteria).


### 3

Depressive symptoms: moderate intensity (positive screening: ≥ 10)

| Result details | |
| --- | --- |
| Item 9 (thoughts of death or of hurting yourself) | Never |

Screening instrument: does not make a diagnosis. Confirm with a clinical interview (DSM-5 criteria).


### 4

Depressive symptoms: severe intensity (positive screening: ≥ 10)

| Result details | |
| --- | --- |
| Item 9 (thoughts of death or of hurting yourself) | Never |

Screening instrument: does not make a diagnosis. Confirm with a clinical interview (DSM-5 criteria).


### 5

Depressive symptoms: minimal intensity. Item 9 positive: assess suicide risk now

| Result details | |
| --- | --- |
| Item 9 (thoughts of death or of hurting yourself) | Several days |

Thoughts of death or of hurting yourself: ask directly about ideation, plan, and means, and do not leave the person alone if the risk is imminent. 24 h free emotional support: CVV 188 (or cvv.org.br). Immediate risk: SAMU 192 or emergency department.

