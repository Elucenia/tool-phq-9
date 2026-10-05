<!-- ELUCENIA technical documentation · phq-9 · es · no clinical/professional/rights approval -->

# Cuestionario PHQ-9

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/phq-9)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado… 1. Poco interés o placer en hacer cosas

`q1`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 2. Sentirse decaído, deprimido o sin esperanza

`q2`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 3. Dificultad para conciliar o mantener el sueño, o dormir más de lo habitual

`q3`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 4. Sentirse cansado o con poca energía

`q4`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 5. Falta de apetito o comer en exceso

`q5`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 6. Sentirse mal consigo mismo — o sentir que ha fracasado o decepcionado a su familia o a usted mismo

`q6`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 7. Dificultad para concentrarse en cosas como leer el periódico o ver la televisión

`q7`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 8. ¿Moverse o hablar tan despacio que otras personas lo notan? O lo contrario: estar tan agitado o inquieto que se mueve mucho más de lo habitual

`q8`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

### 9. Pensar en hacerse daño de alguna forma o en que sería mejor estar muerto

`q9`

- `0` — Nunca
- `1` — Varios días
- `2` — Más de la mitad de los días
- `3` — Casi todos los días

## Edición del método

PHQ-9/Kroenke 2001: 9 ítems 0–3, total 0–27; original 10 frente a brasileño Santos 2013≥9; alerta ítem 9

## Fórmula documentada

Cada ítem vale 0 (nunca) – 3 (casi todos los días). Total: 0 – 27.

Corte usual: ≥ 10 (sensibilidad y especificidad 88% para depresión mayor en estudio original). En población general brasileña (Santos 2013), ≥ 9: sensibilidad 77,5%; especificidad 86,7%.

Cualquier respuesta distinta de “nunca” en el ítem 9 exige evaluación de riesgo suicida independientemente del total.

## Límites y población

Cribado e intensidad de síntomas en las últimas dos semanas; no sustituye una entrevista diagnóstica. Distinga el punto de corte original ≥10 del punto de corte ≥9 estudiado en la población adulta de Pelotas. Los valores publicados de sensibilidad y especificidad no validan automáticamente otras poblaciones ni traducciones.

## Referencias

- [Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 2001.](https://doi.org/10.1046/j.1525-1497.2001.016009606.x)

- [Santos IS et al. Sensibilidade e especificidade do Patient Health Questionnaire-9 (PHQ-9) entre adultos da população geral. Cad Saúde Pública, 2013.](https://doi.org/10.1590/0102-311X00144612)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
