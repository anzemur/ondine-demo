import{m as gt}from"./chunk-p1cewpt8.js";import{n as ht}from"./chunk-2nvpnbyz.js";import"./chunk-83x9xzdh.js";import{r as ut}from"./chunk-3v9a9nk4.js";import"./chunk-xyg5jsw0.js";import"./chunk-9f1a36x9.js";import"./chunk-dbc8q5h6.js";import"./chunk-gzb0g1x8.js";import"./chunk-s7mbpsk9.js";import"./chunk-3btvadsb.js";import"./chunk-mv98cavb.js";import"./chunk-k73k4raa.js";import"./chunk-jk809rwm.js";import"./chunk-8rf4hm2x.js";import"./chunk-x3fjjx7f.js";import"./chunk-nsbc0c5r.js";import"./chunk-eb62vrxh.js";import"./chunk-58w28cca.js";import"./chunk-rn6v8db3.js";import{uc as q}from"./chunk-h98znra8.js";import"./chunk-vg98av2q.js";import{Jc as J,Lc as it,Vc as j,nd as st,sd as ct,td as lt,ud as dt,vd as ft,wd as mt,xd as pt,yd as yt}from"./chunk-ae9w13va.js";import{Hd as E}from"./chunk-xbhgk68n.js";import{Ge as r}from"./chunk-kk3avqbr.js";import"./chunk-za21p6hm.js";var xt=r(()=>({domains:new Map,transitions:[]}),"createDefaultData"),G=xt(),Mt=r(()=>G.domains,"getDomains"),zt=r(()=>G.transitions,"getTransitions"),Lt=r((t)=>{if(!t)return;for(let e of t){let n=e.domain,o=(e.items??[]).map((c)=>({label:c.label}));G.domains.set(n,{name:n,items:o})}},"setDomains"),Nt=r((t)=>{if(!t)return;G.transitions=t.filter((e)=>{if(e.from===e.to)return E.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1;return!0}).map((e)=>({from:e.from,to:e.to,label:e.label||void 0}))},"setTransitions"),Pt=r(()=>q({...it.cynefin,...j().cynefin}),"getConfig"),It=r(()=>{ct(),G=xt()},"clear"),X={getDomains:Mt,getTransitions:zt,setDomains:Lt,setTransitions:Nt,getConfig:Pt,clear:It,setAccTitle:lt,getAccTitle:dt,setDiagramTitle:pt,getDiagramTitle:yt,getAccDescription:mt,setAccDescription:ft},Wt=r((t)=>{gt(t,X),X.setDomains(t.domains),X.setTransitions(t.transitions)},"populate"),Rt={parse:r(async(t)=>{let e=await ht("cynefin",t);E.debug(e),Wt(e)},"parse")};function H(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}r(H,"seededRandom");function $t(t){let e=0;for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);e=(e<<5)-e+o,e|=0}return e}r($t,"hashString");function bt(t,e){if(typeof t==="number"&&Number.isFinite(t)&&t!==0)return t;return $t(e)}r(bt,"resolveSeed");function wt(t,e,n,o){let c=t/2,m=o??t*0.015,Y=7,W=e/7,d=[];for(let a=0;a<=7;a++){let p=H(n+a*17)*m*2-m;d.push({x:c+p,y:a*W})}let D=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){let p=d[a],s=d[a+1],f=(p.y+s.y)/2,w=a%2===0?1:-1,g=m*1.5*w*H(n+a*31+7),R=p.x+g,F=f,V=s.x-g;D+=` C${R},${F} ${V},${f} ${s.x},${s.y}`}return D}r(wt,"generateFoldPath");function Ct(t,e,n,o){let c=e/2,m=o??e*0.015,Y=7,W=t/7,d=[];for(let a=0;a<=7;a++){let p=H(n+a*23)*m*2-m;d.push({x:a*W,y:c+p})}let D=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){let p=d[a],s=d[a+1],f=(p.x+s.x)/2,w=a%2===0?1:-1,g=m*1.5*w*H(n+a*37+11),R=f,F=p.y+g,V=f,z=s.y-g;D+=` C${R},${F} ${V},${z} ${s.x},${s.y}`}return D}r(Ct,"generateHorizontalBoundary");function vt(t,e){let n=t/2,o=e*0.5,c=e,m=t*0.03;return[`M${n},${o}`,`C${n+m},${o+(c-o)*0.2}`,`${n-m*1.5},${o+(c-o)*0.55}`,`${n+m*0.5},${o+(c-o)*0.75}`,`C${n-m},${o+(c-o)*0.85}`,`${n+m*0.3},${o+(c-o)*0.95}`,`${n},${c}`].join(" ")}r(vt,"generateCliffPath");function Dt(t,e,n,o){return[`M${t-n},${e}`,`A${n},${o} 0 1,1 ${t+n},${e}`,`A${n},${o} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}r(Dt,"generateConfusionPath");var rt={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Ft=r((t,e)=>{let n=t/2,o=e/2;return{complex:{cx:n/2,cy:o/2,x:0,y:0,w:n,h:o},complicated:{cx:n+n/2,cy:o/2,x:n,y:0,w:n,h:o},chaotic:{cx:n/2,cy:o+o/2,x:0,y:o,w:n,h:o},clear:{cx:n+n/2,cy:o+o/2,x:n,y:o,w:n,h:o},confusion:{cx:n,cy:o,x:n*0.7,y:o*0.7,w:n*0.6,h:o*0.6}}},"getDomainLayouts"),Vt=r(()=>{let t=J(),e=j();return q(t,e.themeVariables).cynefin},"getCynefinDomainColors"),Z=3,_t=r((t,e,n,o)=>{let c=o.db,m=c.getDomains(),Y=c.getTransitions(),W=c.getDiagramTitle(),d=c.getAccTitle(),D=c.getAccDescription(),a=c.getConfig(),p=Vt();E.debug("Rendering Cynefin diagram");let{width:s,height:f,padding:w,showDomainDescriptions:g,boundaryAmplitude:R}=a,F=s+w*2,V=f+w*2,z={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},k=ut(e);if(st(k,V,F,a.useMaxWidth??!0),k.attr("viewBox",`0 0 ${F} ${V}`),d)k.append("title").text(d);if(D)k.append("desc").text(D);let T=k.append("g").attr("transform",`translate(${w}, ${w})`),_=Ft(s,f),K=bt(a.seed,e),kt=T.append("g").attr("class","cynefin-backgrounds"),U=["complex","complicated","chaotic","clear"];for(let l of U){let i=_[l];kt.append("rect").attr("class","cynefinDomain").attr("x",i.x).attr("y",i.y).attr("width",i.w).attr("height",i.h).attr("fill",z[l]).attr("fill-opacity",0.4).attr("stroke","none")}let Q=T.append("g").attr("class","cynefin-boundaries");Q.append("path").attr("class","cynefinBoundary").attr("d",wt(s,f,K,R)).attr("fill","none"),Q.append("path").attr("class","cynefinBoundary").attr("d",Ct(s,f,K+100,R)).attr("fill","none"),Q.append("path").attr("class","cynefinCliff").attr("d",vt(s,f)).attr("fill","none");let Tt=s*0.15,At=f*0.15;T.append("path").attr("class","cynefinConfusion").attr("d",Dt(s/2,f/2,Tt,At)).attr("fill",z.confusion).attr("fill-opacity",0.5);let tt=T.append("g").attr("class","cynefin-labels");for(let l of U){let i=_[l];tt.append("text").attr("class","cynefinDomainLabel").attr("x",i.cx).attr("y",g?i.cy-30:i.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(l.charAt(0).toUpperCase()+l.slice(1))}if(tt.append("text").attr("class","cynefinDomainLabel").attr("x",s/2).attr("y",g?f/2-10:f/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),g){let l=T.append("g").attr("class","cynefin-subtitles");for(let i of U){let u=_[i],y=rt[i];l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.model),l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.practice)}l.append("text").attr("class","cynefinSubtitle").attr("x",s/2).attr("y",f/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(rt.confusion.practice)}let et=T.append("g").attr("class","cynefin-items"),A=26,nt=10,Bt=["complex","complicated","chaotic","clear","confusion"];for(let l of Bt){let i=m.get(l);if(!i||i.items.length===0)continue;let u=_[l],y=l==="confusion",L=i.items,N=0;if(y&&i.items.length>Z)N=i.items.length-Z,L=i.items.slice(0,Z);let B;if(y){let x=g?22:14;B=u.cy+x}else B=u.cy+(g?25:15);if([...L].forEach((x,S)=>{let C=B+S*(A+4),M=et.append("g"),P=M.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",A/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(x.label),b=x.label.length*7,h=P.node();if(h&&typeof h.getBBox==="function"){let O=h.getBBox();if(O.width>0)b=O.width}let v=b+nt*2,I=u.cx-v/2;M.attr("transform",`translate(${I}, ${C})`),M.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",v).attr("height",A).attr("rx",4).attr("ry",4).attr("fill",z[l]).attr("fill-opacity",0.95),P.attr("x",v/2).attr("y",A/2)}),N>0){let x=B+L.length*(A+4),S=`+${N} more`,C=et.append("g"),M=C.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",A/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(S),P=S.length*7,b=M.node();if(b&&typeof b.getBBox==="function"){let I=b.getBBox();if(I.width>0)P=I.width}let h=P+nt*2,v=u.cx-h/2;C.attr("transform",`translate(${v}, ${x})`),C.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",h).attr("height",A).attr("rx",4).attr("ry",4).attr("fill",z[l]).attr("fill-opacity",0.6),M.attr("x",h/2).attr("y",A/2)}}if(Y.length>0){let l=k.select("defs").empty()?k.append("defs"):k.select("defs"),i=`cynefin-arrow-${e}`;l.append("marker").attr("id",i).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");let u=T.append("g").attr("class","cynefin-arrows");Y.forEach((y)=>{let L=_[y.from],N=_[y.to];if(!L||!N)return;if(y.from===y.to){E.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);return}let{cx:B,cy:x}=L,S=N.cx,C=N.cy,M=(B+S)/2,P=(x+C)/2,b=S-B,h=C-x,v=Math.sqrt(b*b+h*h),I=v*0.15,O=-h/v,St=b/v,ot=M+O*I,at=P+St*I;if(u.append("path").attr("class","cynefinArrowLine").attr("d",`M${B},${x} Q${ot},${at} ${S},${C}`).attr("fill","none").attr("marker-end",`url(#${i})`),y.label)u.append("text").attr("class","cynefinArrowLabel").attr("x",ot).attr("y",at-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(y.label)})}if(W)T.append("text").attr("class","cynefinTitle").attr("x",s/2).attr("y",-w/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(W)},"draw"),Et={draw:_t},Ht=r(()=>{let t=J(),e=j();return q(t,e.themeVariables).cynefin},"getCynefinTheme"),Gt=r(()=>{let t=Ht();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles"),Yt=Gt,Jt={parser:Rt,db:X,renderer:Et,styles:Yt};export{Jt as diagram};
