import{m as nt}from"./chunk-p1cewpt8.js";import{n as lt}from"./chunk-2nvpnbyz.js";import"./chunk-83x9xzdh.js";import{r as rt}from"./chunk-3v9a9nk4.js";import"./chunk-xyg5jsw0.js";import"./chunk-9f1a36x9.js";import"./chunk-dbc8q5h6.js";import"./chunk-gzb0g1x8.js";import"./chunk-s7mbpsk9.js";import"./chunk-3btvadsb.js";import"./chunk-mv98cavb.js";import"./chunk-k73k4raa.js";import"./chunk-jk809rwm.js";import"./chunk-8rf4hm2x.js";import"./chunk-x3fjjx7f.js";import"./chunk-nsbc0c5r.js";import"./chunk-eb62vrxh.js";import"./chunk-58w28cca.js";import"./chunk-rn6v8db3.js";import{tc as it,uc as ot}from"./chunk-h98znra8.js";import"./chunk-vg98av2q.js";import{Lc as V,nd as X,sd as Z,td as j,ud as q,vd as J,wd as K,xd as Q,yd as Y,zd as tt}from"./chunk-ae9w13va.js";import{Hd as A,Sd as et,je as L,me as at}from"./chunk-xbhgk68n.js";import{Ge as l}from"./chunk-kk3avqbr.js";import"./chunk-za21p6hm.js";var st=V.pie,O={sections:new Map,showData:!1,config:st},b=O.sections,W=O.showData,xt=structuredClone(st),wt=l(()=>structuredClone(xt),"getConfig"),Ct=l(()=>{b=new Map,W=O.showData,Z()},"clear"),$t=l(({label:t,value:a})=>{if(a<0)throw Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);if(!b.has(t))b.set(t,a),A.debug(`added new section: ${t}, with value: ${a}`)},"addSection"),Dt=l(()=>b,"getSections"),yt=l((t)=>{W=t},"setShowData"),Tt=l(()=>W,"getShowData"),ct={getConfig:wt,clear:Ct,setDiagramTitle:Q,getDiagramTitle:Y,setAccTitle:j,getAccTitle:q,setAccDescription:J,getAccDescription:K,addSection:$t,getSections:Dt,setShowData:yt,getShowData:Tt},bt=l((t,a)=>{nt(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),At={parse:l(async(t)=>{let a=await lt("pie",t);A.debug(a),bt(a,ct)},"parse")},kt=l((t)=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),_t=kt,zt=l((t)=>{let a=[...t.values()].reduce((n,m)=>n+m,0),F=[...t.entries()].map(([n,m])=>({label:n,value:m})).filter((n)=>n.value/a*100>=1);return at().value((n)=>n.value).sort(null)(F)},"createPieArcs"),Et=l((t,a,F,H)=>{A.debug(`rendering pie chart
`+t);let n=H.db,m=tt(),h=ot(n.getConfig(),m.pie),M=40,i=18,c=4,S=450,x=S,k=rt(a),D=k.append("g");D.attr("transform","translate("+x/2+","+S/2+")");let{themeVariables:o}=m,[P]=it(o.pieOuterStrokeWidth);P??=2;let{legendPosition:dt,textPosition:G}=h,gt=h.donutHole>0&&h.donutHole<=0.9?h.donutHole:0,f=Math.min(x,S)/2-M,pt=L().innerRadius(gt*f).outerRadius(f),ht=L().innerRadius(f*G).outerRadius(f*G),w=D.append("g");w.append("circle").attr("cx",0).attr("cy",0).attr("r",f+P/2).attr("class","pieOuterCircle");let y=n.getSections(),ft=zt(y),ut=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12],_=0;y.forEach((e)=>{_+=e});let B=ft.filter((e)=>(e.data.value/_*100).toFixed(0)!=="0"),z=et(ut).domain([...y.keys()]);w.selectAll("mySlices").data(B).enter().append("path").attr("d",pt).attr("fill",(e)=>z(e.data.label)).attr("class",(e)=>{let r="pieCircle";if(h.highlightSlice==="hover")r+=" highlightedOnHover";else if(h.highlightSlice===e.data.label)r+=" highlighted";return r}),w.selectAll("mySlices").data(B).enter().append("text").text((e)=>(e.data.value/_*100).toFixed(0)+"%").attr("transform",(e)=>"translate("+ht.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let mt=D.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(S-50)/2).attr("class","pieTitleText"),C=[...y.entries()].map(([e,r])=>({label:e,value:r})),u=D.selectAll(".legend").data(C).enter().append("g").attr("class","legend");u.append("rect").attr("width",i).attr("height",i).style("fill",(e)=>z(e.label)).style("stroke",(e)=>z(e.label)),u.append("text").attr("x",i+c).attr("y",i-c).text((e)=>{if(n.getShowData())return`${e.label} [${e.value}]`;return e.label});let v=Math.max(...u.selectAll("text").nodes().map((e)=>e?.getBoundingClientRect().width??0)),T=S,E=x+M,s=i+c,R=C.length*s;switch(dt){case"center":u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"top":T+=R,u.attr("transform",(e,r)=>{let d=f,g=-v/2-(i+c),p=r*s-d;return`translate(${g}, ${p})`}),w.attr("transform",()=>`translate(0, ${R+s})`);break;case"bottom":T+=R,u.attr("transform",(e,r)=>{let d=-f-s,g=-v/2-(i+c),p=r*s-d;return"translate("+g+","+p+")"});break;case"left":E+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=-f-(i+c),p=r*s-d;return"translate("+g+","+p+")"}),w.attr("transform",()=>`translate(${v+i+c}, 0)`);break;case"right":default:E+=i+c+v,u.attr("transform",(e,r)=>{let d=s*C.length/2,g=12*i,p=r*s-d;return"translate("+g+","+p+")"});break}let N=mt.node()?.getBoundingClientRect().width??0,vt=x/2-N/2,St=x/2+N/2,I=Math.min(0,vt),U=Math.max(E,St)-I;k.attr("viewBox",`${I} 0 ${U} ${T}`),X(k,T,U,h.useMaxWidth)},"draw"),Rt={draw:Et},Nt={parser:At,db:ct,renderer:Rt,styles:_t};export{Nt as diagram};
