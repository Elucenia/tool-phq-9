<!-- ELUCENIA technical documentation · phq-9 · de · no clinical/professional/rights approval -->

# PHQ-9-Fragebogen

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/phq-9)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Wie häufig waren Sie in den letzten 2 Wochen beeinträchtigt durch… 1. Wenig Interesse oder Freude daran, Dinge zu tun

`q1`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 2. Sich niedergeschlagen, depressiv oder hoffnungslos fühlen

`q2`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 3. Schwierigkeiten beim Einschlafen oder Durchschlafen oder mehr Schlaf als gewöhnlich

`q3`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 4. Sich müde fühlen oder wenig Energie haben

`q4`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 5. Appetitmangel oder übermäßiges Essen

`q5`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 6. Sich schlecht fühlen — oder sich als Versager fühlen oder glauben, sich selbst oder die Familie enttäuscht zu haben

`q6`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 7. Konzentrationsschwierigkeiten, etwa beim Zeitungslesen oder Fernsehen

`q7`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 8. Sich so langsam bewegen oder sprechen, dass andere es bemerken? Oder umgekehrt so unruhig sein, dass Sie sich viel mehr als gewöhnlich bewegen

`q8`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

### 9. Gedanken, sich in irgendeiner Weise zu verletzen oder besser tot zu sein

`q9`

- `0` — Nie
- `1` — An mehreren Tagen
- `2` — An mehr als der Hälfte der Tage
- `3` — Fast jeden Tag

## Fassung der Methode

PHQ-9/Kroenke 2001: 9 Items 0–3, gesamt 0–27; Originalschwelle 10, brasilianisch Santos 2013≥9; Frage 9 Warnung

## Dokumentierte Formel

Jede Frage hat 0 (überhaupt nicht) – 3 (fast jeden Tag). Gesamt: 0 – 27.

Übliche Schwelle: ≥ 10 (Sensitivität und Spezifität 88% für Major Depression in Originalstudie). In brasilianischer Allgemeinbevölkerung (Santos 2013), ≥ 9: Sensitivität 77,5%; Spezifität 86,7%.

Jede Antwort außer “überhaupt nicht” auf Frage 9 erfordert Suizidrisikobeurteilung unabhängig vom Gesamtwert.

## Grenzen und Population

Screening und Symptomintensität der letzten zwei Wochen; ersetzt kein diagnostisches Interview. Unterscheiden Sie die Originalschwelle ≥10 von der bei Erwachsenen in Pelotas untersuchten Schwelle ≥9. Veröffentlichte Sensitivitäts- und Spezifitätswerte validieren nicht automatisch andere Populationen oder Übersetzungen.

## Referenzen

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
