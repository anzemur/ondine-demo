import{m as D}from"./chunk-p1cewpt8.js";import{n as P}from"./chunk-2nvpnbyz.js";import"./chunk-83x9xzdh.js";import{r as F}from"./chunk-3v9a9nk4.js";import"./chunk-xyg5jsw0.js";import"./chunk-9f1a36x9.js";import"./chunk-dbc8q5h6.js";import"./chunk-gzb0g1x8.js";import"./chunk-s7mbpsk9.js";import"./chunk-3btvadsb.js";import"./chunk-mv98cavb.js";import"./chunk-k73k4raa.js";import"./chunk-jk809rwm.js";import"./chunk-8rf4hm2x.js";import"./chunk-x3fjjx7f.js";import"./chunk-nsbc0c5r.js";import"./chunk-eb62vrxh.js";import"./chunk-58w28cca.js";import"./chunk-rn6v8db3.js";import{uc as C}from"./chunk-h98znra8.js";import"./chunk-vg98av2q.js";import{Jc as M,Lc as L,Vc as A,nd as T,sd as S,td as k,ud as O,vd as R,wd as I,xd as _,yd as E}from"./chunk-ae9w13va.js";import{Hd as b}from"./chunk-xbhgk68n.js";import{Ge as i}from"./chunk-kk3avqbr.js";import"./chunk-za21p6hm.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w=32,z={axes:[],curves:[],options:x},g=structuredClone(z),X=L.radar,K=i(()=>C({...X,...A().radar}),"getConfig"),G=i(()=>g.axes,"getAxes"),N=i(()=>g.curves,"getCurves"),Y=i(()=>g.options,"getOptions"),Z=i((a)=>{g.axes=a.map((t)=>({name:t.name,label:t.label??t.name}))},"setAxes"),q=i((a)=>{g.curves=a.map((t)=>({name:t.name,label:t.label??t.name,entries:J(t.entries)}))},"setCurves"),J=i((a)=>{if(a[0].axis==null)return a.map((e)=>e.value);let t=G();if(t.length===0)throw Error("Axes must be populated before curves for reference entries");return t.map((e)=>{let r=a.find((n)=>n.axis?.$refText===e.name);if(r===void 0)throw Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),Q=i((a)=>{let t=a.reduce((e,r)=>(e[r.name]=r,e),{});if(g.options={showLegend:t.showLegend?.value??x.showLegend,ticks:t.ticks?.value??x.ticks,max:t.max?.value??x.max,min:t.min?.value??x.min,graticule:t.graticule?.value??x.graticule},g.options.ticks>w)b.warn(`Radar diagram ticks (${g.options.ticks}) exceeds maximum allowed (${w}). Using ${w} instead.`),g.options.ticks=w},"setOptions"),tt=i(()=>{S(),g=structuredClone(z)},"clear"),f={getAxes:G,getCurves:N,getOptions:Y,setAxes:Z,setCurves:q,setOptions:Q,getConfig:K,clear:tt,setAccTitle:k,getAccTitle:O,setDiagramTitle:_,getDiagramTitle:E,getAccDescription:I,setAccDescription:R},et=i((a)=>{D(a,f);let{axes:t,curves:e,options:r}=a;f.setAxes(t),f.setCurves(e),f.setOptions(r)},"populate"),at={parse:i(async(a)=>{let t=await P("radar",a);b.debug(t),et(t)},"parse")},rt=i((a,t,e,r)=>{let n=r.db,l=n.getAxes(),c=n.getCurves(),s=n.getOptions(),o=n.getConfig(),d=n.getDiagramTitle(),p=F(t),u=nt(p,o),m=s.max??Math.max(...c.map((y)=>Math.max(...y.entries))),h=s.min,v=Math.min(o.width,o.height)/2;st(u,l,v,s.ticks,s.graticule),ot(u,l,v,o),B(u,l,c,h,m,s.graticule,o),H(u,c,s.showLegend,o),u.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-o.height/2-o.marginTop)},"draw"),nt=i((a,t)=>{let e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,n={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return T(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${n.x}, ${n.y})`)},"drawFrame"),st=i((a,t,e,r,n)=>{if(n==="circle")for(let l=0;l<r;l++){let c=e*(l+1)/r;a.append("circle").attr("r",c).attr("class","radarGraticule")}else if(n==="polygon"){let l=t.length;for(let c=0;c<r;c++){let s=e*(c+1)/r,o=t.map((d,p)=>{let u=2*p*Math.PI/l-Math.PI/2,m=s*Math.cos(u),h=s*Math.sin(u);return`${m},${h}`}).join(" ");a.append("polygon").attr("points",o).attr("class","radarGraticule")}}},"drawGraticule"),ot=i((a,t,e,r)=>{let n=t.length;for(let l=0;l<n;l++){let c=t[l].label,s=2*l*Math.PI/n-Math.PI/2,o=Math.cos(s),d=Math.sin(s);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*o).attr("y2",e*r.axisScaleFactor*d).attr("class","radarAxisLine");let p=o>0.01?"start":o<-0.01?"end":"middle",u=d>0.01?"hanging":d<-0.01?"auto":"central",m=4;a.append("text").text(c).attr("x",e*r.axisLabelFactor*o+m*o).attr("y",e*r.axisLabelFactor*d+m*d).attr("text-anchor",p).attr("dominant-baseline",u).attr("class","radarAxisLabel")}},"drawAxes");function B(a,t,e,r,n,l,c){let s=t.length,o=Math.min(c.width,c.height)/2;e.forEach((d,p)=>{if(d.entries.length!==s)return;let u=d.entries.map((m,h)=>{let v=2*Math.PI*h/s-Math.PI/2,y=W(m,r,n,o),j=y*Math.cos(v),U=y*Math.sin(v);return{x:j,y:U}});if(l==="circle")a.append("path").attr("d",V(u,c.curveTension)).attr("class",`radarCurve-${p}`);else if(l==="polygon")a.append("polygon").attr("points",u.map((m)=>`${m.x},${m.y}`).join(" ")).attr("class",`radarCurve-${p}`)})}i(B,"drawCurves");function W(a,t,e,r){let n=Math.min(Math.max(a,t),e);return r*(n-t)/(e-t)}i(W,"relativeRadius");function V(a,t){let e=a.length,r=`M${a[0].x},${a[0].y}`;for(let n=0;n<e;n++){let l=a[(n-1+e)%e],c=a[n],s=a[(n+1)%e],o=a[(n+2)%e],d={x:c.x+(s.x-l.x)*t,y:c.y+(s.y-l.y)*t},p={x:s.x-(o.x-c.x)*t,y:s.y-(o.y-c.y)*t};r+=` C${d.x},${d.y} ${p.x},${p.y} ${s.x},${s.y}`}return`${r} Z`}i(V,"closedRoundCurve");function H(a,t,e,r){if(!e)return;let n=(r.width/2+r.marginRight)*3/4,l=-(r.height/2+r.marginTop)*3/4,c=20;t.forEach((s,o)=>{let d=a.append("g").attr("transform",`translate(${n}, ${l+o*c})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${o}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}i(H,"drawLegend");var it={draw:rt},lt=i((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){let n=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${n};
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${n};
			fill-opacity: ${t.curveOpacity};
			stroke: ${n};
		}
		`}return e},"genIndexStyles"),ct=i((a)=>{let t=M(),e=A(),r=C(t,e.themeVariables),n=C(r.radar,a);return{themeVariables:r,radarOptions:n}},"buildRadarStyleOptions"),dt=i(({radar:a}={})=>{let{themeVariables:t,radarOptions:e}=ct(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${lt(t,e)}
	`},"styles"),$t={parser:at,db:f,renderer:it,styles:dt};export{$t as diagram};
