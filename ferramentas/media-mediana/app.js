"use strict";
const NS = "http://www.w3.org/2000/svg";
const money = new Intl.NumberFormat("pt-BR", {style:"currency",currency:"BRL",maximumFractionDigits:0});
const numeral = new Intl.NumberFormat("pt-BR", {maximumFractionDigits:0});
function summarize(values) {
  if (!values.length || !values.every(v => Number.isFinite(v) && v >= 0)) throw new Error("Valores inválidos");
  const ordered = [...values].sort((a,b)=>a-b);
  const middle = Math.floor(ordered.length/2);
  return { mean: values.reduce((a,b)=>a+b,0)/values.length, median: ordered.length%2 ? ordered[middle] : (ordered[middle-1]+ordered[middle])/2, ordered };
}
function svgElement(type, attrs, content) {
  const el = document.createElementNS(NS,type);
  for(const [key,value] of Object.entries(attrs)) el.setAttribute(key,String(value));
  if(content !== undefined) el.textContent=content;
  return el;
}
const slider=document.getElementById("revenue");
const grid=document.getElementById("grid");
const bars=document.getElementById("bars");
const references=document.getElementById("references");
const rects=[]; const labels=[];
for(let i=0;i<5;i++) {
  const x=111+i*112;
  const rect=svgElement("rect",{x:x-28,y:288,width:56,height:0,rx:2,class:"bar"});
  const value=svgElement("text",{x,y:280,"text-anchor":"middle",fill:"#e8e5dc","font-size":14,"font-weight":700},"");
  bars.append(rect,value,svgElement("text",{x,y:321,"text-anchor":"middle",fill:"#aaa99e","font-size":15},String.fromCharCode(65+i)));
  rects.push(rect);labels.push(value);
}
function update() {
  const fifth=Number(slider.value);
  if(!Number.isFinite(fifth)||fifth<0||fifth>40000) return;
  const values=[2000,2000,2000,2000,fifth];
  const {mean,median,ordered}=summarize(values);
  document.getElementById("revenue-value").textContent=money.format(fifth);
  slider.setAttribute("aria-valuetext",money.format(fifth)+" por mês");
  const max=Math.max(20000,Math.ceil(Math.max(...values)/5000)*5000);
  const y=v=>288-230*v/max;
  grid.replaceChildren(); references.replaceChildren();
  for(let i=0;i<=4;i++) {
    const value=max*i/4, baseline=y(value);
    grid.append(svgElement("line",{x1:65,x2:630,y1:baseline,y2:baseline,stroke:"#45463e","stroke-width":1}),svgElement("text",{x:52,y:baseline+4,"text-anchor":"end",fill:"#aaa99e","font-size":12},numeral.format(value)));
  }
  for(let i=0;i<5;i++) {
    const baseline=y(values[i]);
    rects[i].setAttribute("y",String(baseline));
    rects[i].setAttribute("height",String(288-baseline));
    labels[i].setAttribute("y",String(baseline-12));
    labels[i].textContent=numeral.format(values[i]);
  }
  for(const [value,color,dash] of [[mean,"#91b5a3","8 4"],[median,"#e8e5dc","3 4"]]) {
    references.append(svgElement("line",{x1:65,x2:630,y1:y(value),y2:y(value),stroke:color,"stroke-width":2,"stroke-dasharray":dash}));
  }
  document.getElementById("mean").textContent=money.format(mean);
  document.getElementById("median").textContent=money.format(median);
  document.getElementById("calculation").textContent="("+values.map(v=>numeral.format(v)).join(" + ")+") / 5 = "+numeral.format(mean);
  document.getElementById("ordered").textContent="Valores em ordem: "+ordered.map(v=>numeral.format(v)).join(", ")+". O terceiro é "+numeral.format(median)+".";
  const below=values.filter(v=>v<mean).length;
  let insight;
  if(values.every(v=>v===2000)) insight="Todos os valores são iguais. Média e mediana coincidem em R$ 2.000.";
  else if(fifth>2000) insight="Quatro dos cinco valores estão abaixo da média. A mediana continua em R$ 2.000.";
  else insight="Um valor está abaixo da média, e quatro estão acima. A mediana continua em R$ 2.000.";
  document.getElementById("insight").textContent=insight;
  document.getElementById("chart-description").textContent="Cinco clientes fictícios com receitas mensais de "+values.map(v=>money.format(v)).join(", ")+". Média: "+money.format(mean)+". Mediana: "+money.format(median)+". "+below+" valores abaixo da média.";
  // Resultado legível por ferramentas de QA, sem substituir os rótulos acessíveis.
  document.documentElement.dataset.mean=String(mean);
  document.documentElement.dataset.median=String(median);
}
slider.addEventListener("input",update);
document.getElementById("equal").addEventListener("click",()=>{slider.value="2000";update();});
document.getElementById("reset").addEventListener("click",()=>{slider.value="20000";update();});
update();
