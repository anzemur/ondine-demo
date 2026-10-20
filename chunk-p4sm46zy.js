import{Le as me}from"./chunk-za21p6hm.js";var ie=new TextDecoder,se=new TextEncoder;function W(e){let a=typeof e==="string"?new WebAssembly.Module(de(e)):e,t=new WebAssembly.Instance(a,{}).exports,r=B(t.memory),o=()=>{if(r.bytes.byteLength===0)Object.assign(r,B(t.memory));return r},i=(d,p)=>d===""?0:se.encodeInto(d,r.bytes.subarray(p,p+d.length*3)).written;return{render(d,p,g){t.reset();let s=t.alloc((d.length+p.length)*3);o();let c=i(d,s),b=s+c,q=i(p,b),A=t.render(s,c,b,q,g);return o().at=A,le(r)}}}function de(e){let a=atob(e),t=new Uint8Array(a.length);for(let r=0;r<a.length;r++)t[r]=a.charCodeAt(r);return t}function B(e){return{at:0,bytes:new Uint8Array(e.buffer),view:new DataView(e.buffer)}}function le(e){if(e.bytes[e.at++]===1){let g=f(e),s=f(e),c=e.view.getUint32(h(e),!0),b=e.view.getUint32(h(e),!0),q=f(e),A=f(e);return{code:g,column:b,line:c,message:A,ok:!1,snippet:q,type:s||void 0}}let t=f(e),r=e.view.getFloat64(h(e),!0),o=e.view.getFloat64(h(e),!0),i=e.view.getUint32(h(e),!0),d=[];for(let g=0;g<i;g++)d.push({href:f(e),id:f(e),internal:e.bytes[h(e)]===1});let p=f(e);return{height:o,links:d,ok:!0,svg:p,type:t,width:r}}function h(e){let a=e.view.getUint32(e.at,!0);return e.at+=4+a,e.at-a}function f(e){let a=h(e);return a===e.at?"":ie.decode(e.bytes.subarray(a,e.at))}class x extends Error{name="Render.RenderError";code;column;line;snippet;type;constructor(e){super(e.message);this.code=e.code,this.column=e.column,this.line=e.line,this.snippet=e.snippet,this.type=e.type}}function O(e){let a=new Map,t=(o)=>{let i=a.get(o);if(i)return i;let d=e.modules[o];if(d===void 0)return;return i=W(d),a.set(o,i),i},r=Object.keys(e.modules);return{render(o,i={}){let d=r[0]===void 0?void 0:t(r[0]);if(d===void 0)throw Error("Render.create needs at least one module.");let p=pe(i),g=i.now??Date.now(),s=typeof g==="number"?g:Number.NaN,c=d.render(o,p,s);if(!c.ok&&c.code==="unsupported-diagram"&&c.type!==void 0){let b=t(c.type);if(b)return N(b.render(o,p,s))}return N(c)}}}function pe(e){for(let a in e)return JSON.stringify({...e,now:void 0});return""}function N(e){if(!e.ok)throw new x({...e,code:e.code});return{height:e.height,links:e.links,svg:e.svg,type:e.type,width:e.width}}var ge={dark:{darkMode:!0,background:"#0d0d0d",edgeLabelBackground:"#0d0d0d",primaryColor:"#2d2a4a",primaryTextColor:"#ece9ff",lineColor:"#6b6f78",git0:"#8b7cf6",gitBranchLabel0:"#ffffff",cScale0:"#3b3470",cScale1:"#1f4a5a",cScale2:"#5a3a1f",cScale3:"#2f4d2a",cScale4:"#5a2340",cScaleLabel0:"#ffffff",cScaleLabel1:"#ffffff",cScaleLabel2:"#ffffff",cScaleLabel3:"#ffffff",cScaleLabel4:"#ffffff"},light:{darkMode:!1,background:"#fbfaf9",edgeLabelBackground:"#fbfaf9",primaryColor:"#ede9ff",primaryTextColor:"#1d1b2e",lineColor:"#b9b6ad",git0:"#6d5bd0",gitBranchLabel0:"#ffffff",cScale0:"#ddd6fe",cScale1:"#cdeafe",cScale2:"#fde2c8",cScale3:"#d6f5d0",cScale4:"#fbd3e4",cScaleLabel0:"#1d1b2e",cScaleLabel1:"#1d1b2e",cScaleLabel2:"#1d1b2e",cScaleLabel3:"#1d1b2e",cScaleLabel4:"#1d1b2e"}},G,I,J=(e)=>{I=e},fe=0,F=Promise.resolve(),D=({code:e,theme:a})=>{I?.();let t=F.then(async()=>{G??=import("./chunk-ythmpr0d.js").then((d)=>d.default);let r=await G;r.initialize({startOnLoad:!1,securityLevel:"strict",suppressErrorRendering:!0,theme:"base",fontFamily:getComputedStyle(document.body).fontFamily,themeVariables:{fontSize:"18px",...ge[a]}});let o=performance.now(),{svg:i}=await r.render(`mermaid-${++fe}`,e);return{svg:i,ms:performance.now()-o}});return F=t.catch(()=>{return}),t},T={},Z=new Map,y,U=(e)=>{let a=Z.get(e);if(!a)a=WebAssembly.compileStreaming(fetch(new URL(`./wasm/${e}.wasm`,document.baseURI))).then((t)=>{T[e]=t,y=O({modules:{...T}})}),Z.set(e,a);return a},V=()=>y!==void 0,ue=0.7,E=(e,{maxWidth:a})=>{if(!y)throw Error("Ondine not loaded");let t=performance.now(),r={maxWidth:a,fontSize:16,padding:4};if(/^\s*mindmap\b/.test(e)){let i=y.render(e,{...r,autoDirection:!1});if(i.width*ue<=a)return{svg:i.svg,ms:performance.now()-t}}let{svg:o}=y.render(e,r);return{svg:o,ms:performance.now()-t}},R=async(e,a)=>{await U("flowchart");try{return E(e,a)}catch(t){if(t instanceof x&&t.code==="unsupported-diagram"&&t.type&&!T[t.type])return await U(t.type),E(e,a);throw t}},_=()=>Object.keys(T);var w=[{id:"photosynthesis",label:"Flowchart",question:"Can you explain how photosynthesis works? Keep it simple.",before:"Photosynthesis happens in two stages inside the chloroplast. The light reactions capture energy, and the Calvin cycle uses that energy to build sugar:",diagram:`flowchart LR
  Sun([Sunlight]) --> LR[Light reactions]
  Water[H₂O] --> LR
  LR -->|releases| O2[O₂]
  LR -->|ATP + NADPH| CC[Calvin cycle]
  CO2[CO₂] --> CC
  CC --> G[Glucose C₆H₁₂O₆]`,after:"So the plant takes in **water, carbon dioxide and light**, and gives out **glucose and oxygen**. Want to try a quick question on it?"},{id:"cell",label:"Mindmap",question:"What are the main parts of an animal cell?",before:"Here is the animal cell at a glance, grouped by what each part does:",diagram:`mindmap
  root((Animal cell))
    Control
      Nucleus
      DNA
    Energy
      Mitochondria
      ATP
    Making proteins
      Ribosomes
      Endoplasmic reticulum
    Boundary
      Cell membrane`,after:"Unlike a plant cell, there is **no cell wall and no chloroplasts**. Which part would you like to look at first?"},{id:"states",label:"State diagram",question:"How does matter change between solid, liquid and gas?",before:"Each change of state has its own name, depending on whether energy goes in or comes out:",diagram:`stateDiagram-v2
  direction LR
  Solid --> Liquid: melting
  Liquid --> Gas: evaporation
  Gas --> Liquid: condensation
  Liquid --> Solid: freezing
  Solid --> Gas: sublimation
  Gas --> Solid: deposition`,after:"Moving to the right means **adding heat**; moving to the left means the substance **gives heat away**."},{id:"bill",label:"Sequence",question:"How does a bill become a law in the US?",before:"A bill has to get through both chambers before the President signs it:",diagram:`sequenceDiagram
  participant H as House
  participant S as Senate
  participant P as President
  H->>H: Committee review and vote
  H->>S: Passed bill
  S->>S: Committee review and vote
  S->>P: Same bill, passed by both
  alt Signs
    P-->>H: Becomes law
  else Vetoes
    P-->>H: Returned
    H->>S: Override needs 2/3 in both
  end`,after:"If the two chambers pass **different versions**, a conference committee settles the text first."},{id:"air",label:"Pie",question:"What is air made of?",before:"Dry air at sea level is mostly nitrogen:",diagram:`pie showData
  title Composition of dry air
  "Nitrogen" : 78.08
  "Oxygen" : 20.95
  "Argon" : 0.93
  "CO₂ and others" : 0.04`,after:"Water vapour comes on top of this and changes from day to day."},{id:"slovenia",label:"Timeline · sl",question:"Kako je Slovenija postala samostojna država?",before:"Tu so ključni koraki do osamosvojitve:",diagram:`timeline
  title Pot do samostojne Slovenije
  1989 : Majniška deklaracija
  1990 : Prve večstrankarske volitve : Plebiscit o samostojnosti
  1991 : Razglasitev neodvisnosti : Desetdnevna vojna
  1992 : Mednarodno priznanje : Članstvo v OZN`,after:"Na plebiscitu decembra 1990 je za samostojnost glasovalo **88,5 %** volivcev."},{id:"water",label:"Flowchart · zh",question:"水循环是怎样进行的？",before:"水循环是一个不断重复的过程：",diagram:`flowchart TD
  A[海洋和湖泊] -->|蒸发| B[水蒸气]
  B -->|凝结| C[云]
  C -->|降水| D[雨和雪]
  D -->|径流| A
  D -->|渗透| E[地下水]
  E --> A`,after:"太阳提供的能量推动了整个循环。"},{id:"arabic",label:"Flowchart · ar",dir:"rtl",question:"كيف تحدث عملية الهضم؟",before:"يمر الطعام بهذه المراحل:",diagram:`flowchart LR
  A[الفم] --> B[المريء]
  B --> C[المعدة]
  C --> D[الأمعاء الدقيقة]
  D --> E[الأمعاء الغليظة]`,after:"يتم امتصاص معظم العناصر الغذائية في **الأمعاء الدقيقة**."},{id:"quadratic",label:"Math",question:"How do I know how many solutions a quadratic has?",before:"Look at the discriminant D = b² − 4ac:",diagram:`flowchart TD
  Q["ax² + bx + c = 0"] --> D{"D = b² − 4ac"}
  D -->|D > 0| Two[Two real solutions]
  D -->|D = 0| One[One repeated solution]
  D -->|D < 0| None[No real solutions]`,after:"Try it: for x² − 6x + 9 = 0, what is D?"},{id:"broken",label:"Broken",question:"Show me the food chain in a pond.",before:"Here is a simple pond food chain:",diagram:`flowchart LR
  A[Algae] --> B[Tadpole
  B --> C[Fish]
  C --> D[Heron]`,after:"Energy flows from left to right, and only about 10% passes on at each step."}];var k=new URLSearchParams(location.search),n={sample:w.find((e)=>e.id===k.get("sample"))??w[0],mode:k.get("mode")??"compare",theme:k.get("theme")??"dark",font:k.get("font")==="mono"?"mono":"sans",code:"",playground:k.get("edit")==="1",streaming:0};n.code=n.sample.diagram;var u={bytes:{mermaid:0,ondine:0},last:{mermaid:void 0,ondine:void 0},themeRerenders:0},l=(e)=>document.getElementById(e),L=(e)=>e.replace(/[&<>"]/g,(a)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]??a),S=(e)=>L(e).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),be=(e)=>e?`${(e/1024).toFixed(0)} kB`:"—",te=(e)=>e===void 0?"—":e<10?`${e.toFixed(2)} ms`:`${e.toFixed(0)} ms`,he=()=>{let e=new URLSearchParams({sample:n.sample.id,mode:n.mode,theme:n.theme,font:n.font});if(n.playground)e.set("edit","1");history.replaceState(null,"",`?${e}`)},ne=!1;J(()=>{ne=!0});var xe=document.querySelector('script[type="module"]')?.src;new PerformanceObserver((e)=>{for(let a of e.getEntries()){let t=a.transferSize||a.encodedBodySize;if(a.name.includes("/wasm/"))u.bytes.ondine+=t;else if(ne&&a.name!==xe&&/\/chunk-[^/]+\.js$/.test(a.name))u.bytes.mermaid+=t}C()}).observe({type:"resource",buffered:!0});var ve=({value:e,max:a,engine:t})=>`<span class="meter ${t}"><span style="width:${e&&a?Math.max(3,e/a*100):0}%"></span></span>`,K=({label:e,values:a,format:t})=>{let r=Math.max(a.mermaid??0,a.ondine??0);return`<div class="stat"><dt>${e}</dt><dd>
    ${["mermaid","ondine"].map((o)=>`<span class="stat-line ${o}"><span class="who">${o==="mermaid"?"Today":"Ondine"}</span>${ve({value:a[o],max:r,engine:o})}<span class="value">${t(a[o])}</span></span>`).join("")}
  </dd></div>`},C=()=>{let e=_();l("stats").innerHTML=`
    ${K({label:"Downloaded · gzip",values:{mermaid:u.bytes.mermaid||void 0,ondine:u.bytes.ondine||void 0},format:(a)=>be(a??0)})}
    ${K({label:"Last render",values:u.last,format:te})}
    <div class="stat"><dt>Theme switch</dt><dd>
      <span class="stat-line"><span class="who">Today</span><span class="note">re-renders · ${u.themeRerenders}×</span></span>
      <span class="stat-line"><span class="who">Ondine</span><span class="note on">CSS only, no render</span></span>
    </dd></div>
    <div class="stat"><dt>Ondine modules</dt><dd class="tags">${e.length?e.map((a)=>`<span class="tag brand">${a}</span>`).join(""):'<span class="tag">none yet</span>'}</dd></div>`},re=()=>n.mode==="compare"?["mermaid","ondine"]:[n.mode],ye={mermaid:'<span class="tag">Today · mermaid 11</span>',ondine:'<span class="tag brand">Ondine</span>'},H=()=>{let e=n.sample,a=e.dir?` dir="${e.dir}"`:"";l("chat").innerHTML=`
    <div class="user-row"${a}><div class="user-bubble">${S(e.question)}</div></div>
    <article class="tutor"${a}>
      <span class="avatar small" aria-hidden="true"></span>
      <div class="tutor-body">
        <p id="before"></p>
        <div class="diagrams ${n.mode}${/^\s*mindmap\b/.test(n.code)?" stacked":""}" dir="ltr">
          ${re().map((t)=>`
            <section class="pane" data-engine="${t}">
              ${n.mode==="compare"?`<header>${ye[t]}<span class="tag time ${t==="ondine"?"success":""}" data-time></span></header>`:""}
              <div class="pane-body" data-body></div>
            </section>`).join("")}
        </div>
        <p id="after"></p>
        ${n.playground?`<label class="playground"><span class="eyebrow">Mermaid source · edits render live</span><textarea id="code" spellcheck="false" rows="10">${L(n.code)}</textarea></label>`:""}
      </div>
    </article>`,l("before").innerHTML=S(e.before),l("after").innerHTML=S(e.after),document.querySelector("#code")?.addEventListener("input",(t)=>{n.code=t.target.value,j({code:n.code})}),j({code:n.code})},m=(e)=>document.querySelector(`.pane[data-engine="${e}"]`),M=({engine:e,result:a})=>{let t=m(e);if(!t)return;t.querySelector("[data-body]").innerHTML=`<div class="svg ${e}">${a.svg}</div>`;let r=t.querySelector("[data-time]");if(r)r.textContent=te(a.ms);u.last[e]=a.ms,C()},oe=(e)=>{let a=m(e)?.querySelector("[data-body]");if(a&&!a.querySelector(".skeleton"))a.innerHTML='<div class="skeleton"></div>'},Q=({engine:e,code:a,error:t})=>{let r=m(e);if(!r)return;let o=t instanceof x?`<div class="error">Line ${t.line}, column ${t.column}
${L(t.snippet||t.message)}</div>`:"";r.querySelector("[data-body]").innerHTML=`${o}<pre class="code"><code>${L(a)}</code></pre>`;let i=r.querySelector("[data-time]");if(i)i.textContent="error → code block"},P=()=>m("ondine")?.querySelector("[data-body]")?.clientWidth||640,X,j=({code:e})=>{let a=n.streaming;if(m("ondine"))R(e,{maxWidth:P()}).then((t)=>a===n.streaming&&M({engine:"ondine",result:t}),(t)=>a===n.streaming&&Q({engine:"ondine",code:e,error:t}));if(m("mermaid")){if(!m("mermaid").querySelector(".svg"))oe("mermaid");clearTimeout(X),X=setTimeout(()=>{D({code:e,theme:n.theme}).then((t)=>a===n.streaming&&M({engine:"mermaid",result:t}),(t)=>a===n.streaming&&Q({engine:"mermaid",code:e,error:t}))},n.playground?150:0)}},z=(e)=>new Promise((a)=>setTimeout(a,e)),we=async()=>{let e=++n.streaming,a=n.sample,t=()=>e===n.streaming,r=l("before"),o=l("after");r.textContent="",o.textContent="";for(let s of re()){m(s).querySelector("[data-body]").innerHTML="";let c=m(s).querySelector("[data-time]");if(c)c.textContent="streaming…"}let i=a.before.split(" ");for(let s=1;s<=i.length&&t();s++)r.innerHTML=S(i.slice(0,s).join(" ")),await z(25);if(m("ondine")&&!V())await R(`flowchart LR
  a`,{maxWidth:100}).catch(()=>{return});let d=n.code,p=5;for(let s=p;s<d.length+p&&t();s+=p){let c=d.slice(0,s);if(m("mermaid"))oe("mermaid");if(m("ondine"))try{M({engine:"ondine",result:E(c,{maxWidth:P()})})}catch{}await z(45)}if(!t())return;j({code:d});let g=a.after.split(" ");for(let s=1;s<=g.length&&t();s++)o.innerHTML=S(g.slice(0,s).join(" ")),await z(25)},Y=({tray:e,value:a,key:t})=>{let r=e.querySelector(".plate");for(let o of e.querySelectorAll("button")){let i=o.dataset[t]===a;if(o.setAttribute("aria-checked",String(i)),i)r.style.width=`${o.offsetWidth}px`,r.style.translate=`${o.offsetLeft}px 0`}},v=()=>{document.documentElement.dataset.theme=n.theme,document.documentElement.dataset.ondineFont=n.font,Y({tray:l("mode"),value:n.mode,key:"mode"}),Y({tray:l("font"),value:n.font,key:"font"}),l("samples").innerHTML=w.map((e)=>`<button class="chip ${e.id===n.sample.id?"glass":""}" data-sample="${e.id}" aria-pressed="${e.id===n.sample.id}">${L(e.label)}</button>`).join(""),l("theme").innerHTML=n.theme==="dark"?ke:Se,l("playground-toggle").textContent=n.playground?"Close editor":"Edit diagram",he()},ke='<svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/></svg>',Se='<svg viewBox="0 0 256 256" width="20" height="20" fill="currentColor"><path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z"/></svg>';l("mode").addEventListener("click",(e)=>{let a=e.target.closest("button")?.dataset.mode;if(a)n.mode=a,n.streaming++,v(),H()});l("samples").addEventListener("click",(e)=>{let a=e.target.closest("button")?.dataset.sample,t=w.find((r)=>r.id===a);if(t)n.sample=t,n.code=t.diagram,n.streaming++,v(),H()});l("theme").addEventListener("click",()=>{if(n.theme=n.theme==="dark"?"light":"dark",v(),m("mermaid"))u.themeRerenders++,D({code:n.code,theme:n.theme}).then((e)=>M({engine:"mermaid",result:e}),()=>{return});C()});l("font").addEventListener("click",(e)=>{let a=e.target.closest("button")?.dataset.font;if(a)n.font=a,v()});l("replay").addEventListener("click",()=>{we()});l("playground-toggle").addEventListener("click",()=>{n.playground=!n.playground,v(),H()});var ee,ae=innerWidth;addEventListener("resize",()=>{if(innerWidth===ae)return;ae=innerWidth,clearTimeout(ee),ee=setTimeout(()=>{if(m("ondine"))R(n.code,{maxWidth:P()}).then((e)=>M({engine:"ondine",result:e}),()=>{return})},100)});v();H();C();document.fonts.ready.then(v);
