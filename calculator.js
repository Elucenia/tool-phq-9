/* tool-phq-9 · Elucenia · https://github.com/Elucenia/tool-phq-9
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"phq-9","title":"Questionário PHQ-9","fields":[["q1","Durante as últimas 2 semanas, com que frequência você foi incomodado(a) por…<br>1. Pouco interesse ou pouco prazer em fazer as coisas","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q2","2. Se sentir “para baixo”, deprimido(a) ou sem perspectiva","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q3","3. Dificuldade para pegar no sono ou permanecer dormindo, ou dormir mais do que de costume","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q4","4. Se sentir cansado(a) ou com pouca energia","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q5","5. Falta de apetite ou comendo demais","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q6","6. Se sentir mal consigo mesmo(a) — ou achar que você é um fracasso ou que decepcionou sua família ou você mesmo(a)","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q7","7. Dificuldade para se concentrar nas coisas, como ler o jornal ou ver televisão","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q8","8. Lentidão para se movimentar ou falar, a ponto das outras pessoas perceberem? Ou o oposto – estar tão agitado(a) ou irrequieto(a) que você fica andando de um lado para o outro muito mais do que de costume","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}],["q9","9. Pensar em se ferir de alguma maneira ou que seria melhor estar morto(a)","radio",{"opts":{"0":"Nenhuma vez","1":"Vários dias","2":"Mais da metade dos dias","3":"Quase todos os dias"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(e){'use strict';
var a="Pensamentos de morte ou de se ferir: pergunte diretamente sobre ideação, plano e meios, e não deixe a pessoa sozinha se o risco for iminente. Apoio emocional 24 h e gratuito: <strong>CVV 188</strong> (ou cvv.org.br). Risco imediato: SAMU 192 ou pronto-socorro.";
e.def("phq-9",function(e){for(var o=0,i=1;i<=9;i++)o+=+e["q"+i]||0;var r=+e.q9||0,t=o>=20?["grave","high"]:o>=15?["moderadamente grave","high"]:o>=10?["moderada","mid"]:o>=5?["leve","mid"]:["mínima","low"],n="Sintomas depressivos: intensidade "+t[0]+(o>=10?" (rastreamento positivo: ≥ 10)":"");return r>0&&(n+=". Item 9 positivo: avaliar risco de suicídio agora"),{main:[String(o),"de 27"],label:"PHQ-9",level:r>0?"high":t[1],verdict:n,rows:[["Item 9 (pensamentos de morte ou de se ferir)",["Nenhuma vez","Vários dias","Mais da metade dos dias","Quase todos os dias"][r]]],note:r>0?a:"Instrumento de rastreamento: não faz diagnóstico. Confirme com entrevista clínica (critérios do DSM-5).",raw:{score:o,item9:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
