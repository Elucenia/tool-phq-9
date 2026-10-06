<!-- ELUCENIA technical documentation · phq-9 · fr · no clinical/professional/rights approval -->

# Questionnaire PHQ-9

[conditions, sources et autorisations](https://elucenia.org/fr/outils/phq-9)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Au cours des 2 dernières semaines, à quelle fréquence avez-vous été gêné par… 1. Peu d’intérêt ou de plaisir à faire les choses

`q1`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 2. Vous sentir abattu, déprimé ou sans espoir

`q2`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 3. Difficulté à vous endormir ou à rester endormi, ou dormir plus que d’habitude

`q3`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 4. Vous sentir fatigué ou avoir peu d’énergie

`q4`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 5. Manque d’appétit ou alimentation excessive

`q5`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 6. Avoir une mauvaise opinion de vous-même — ou penser avoir échoué ou déçu votre famille ou vous-même

`q6`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 7. Difficulté à vous concentrer, par exemple pour lire le journal ou regarder la télévision

`q7`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 8. Bouger ou parler si lentement que les autres le remarquent ? Ou, au contraire, être si agité que vous bougez beaucoup plus que d’habitude

`q8`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

### 9. Penser à se faire du mal d’une façon quelconque ou qu’il vaudrait mieux être mort

`q9`

- `0` — Jamais
- `1` — Plusieurs jours
- `2` — Plus de la moitié des jours
- `3` — Presque tous les jours

## Édition de la méthode

PHQ-9/Kroenke 2001 : 9 items 0–3, total 0–27 ; seuil original 10 contre brésilien Santos 2013≥9 ; alerte item 9

## Formule documentée

Chaque item vaut 0 (jamais) – 3 (presque tous les jours). Total : 0 – 27.

Seuil habituel : ≥ 10 (sensibilité et spécificité 88% pour dépression majeure dans l’étude originale). Dans la population générale brésilienne (Santos 2013), ≥ 9: sensibilité 77,5%; spécificité 86,7%.

Toute réponse différente de “jamais” à l’item 9 exige évaluation du risque suicidaire quel que soit le total.

## Limites et population

Dépistage et intensité des symptômes au cours des deux dernières semaines ; ne remplace pas l’entretien diagnostique. Distinguez le seuil original ≥10 du seuil ≥9 étudié dans la population adulte de Pelotas. Les sensibilités et spécificités publiées ne valident pas automatiquement d’autres populations ou traductions.

## Références

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Symptômes dépressifs : intensité minimale

| Détails du résultat | |
| --- | --- |
| Item 9 (pensées de mort ou de se faire du mal) | Jamais |

Instrument de dépistage : ne permet pas d’établir un diagnostic. Confirmer par un entretien clinique (critères du DSM-5).


### 2

Symptômes dépressifs : intensité légère

| Détails du résultat | |
| --- | --- |
| Item 9 (pensées de mort ou de se faire du mal) | Jamais |

Instrument de dépistage : ne permet pas d’établir un diagnostic. Confirmer par un entretien clinique (critères du DSM-5).


### 3

Symptômes dépressifs : intensité modérée (dépistage positif : ≥ 10)

| Détails du résultat | |
| --- | --- |
| Item 9 (pensées de mort ou de se faire du mal) | Jamais |

Instrument de dépistage : ne permet pas d’établir un diagnostic. Confirmer par un entretien clinique (critères du DSM-5).


### 4

Symptômes dépressifs : intensité sévère (dépistage positif : ≥ 10)

| Détails du résultat | |
| --- | --- |
| Item 9 (pensées de mort ou de se faire du mal) | Jamais |

Instrument de dépistage : ne permet pas d’établir un diagnostic. Confirmer par un entretien clinique (critères du DSM-5).


### 5

Symptômes dépressifs : intensité minimale. Item 9 positif : évaluer maintenant le risque de suicide

| Détails du résultat | |
| --- | --- |
| Item 9 (pensées de mort ou de se faire du mal) | Plusieurs jours |

Pensées de mort ou de se faire du mal : demandez directement s’il existe des idées, un plan et des moyens, et ne laissez pas la personne seule si le risque est imminent. Soutien émotionnel gratuit 24 h : CVV 188 (ou cvv.org.br). Risque immédiat : SAMU 192 ou service des urgences.

