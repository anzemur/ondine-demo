import{m as E}from"./chunk-p1cewpt8.js";import{n as F}from"./chunk-2nvpnbyz.js";import"./chunk-83x9xzdh.js";import{r as z}from"./chunk-3v9a9nk4.js";import"./chunk-xyg5jsw0.js";import"./chunk-9f1a36x9.js";import"./chunk-dbc8q5h6.js";import"./chunk-gzb0g1x8.js";import"./chunk-s7mbpsk9.js";import"./chunk-3btvadsb.js";import"./chunk-mv98cavb.js";import"./chunk-k73k4raa.js";import"./chunk-jk809rwm.js";import"./chunk-8rf4hm2x.js";import"./chunk-x3fjjx7f.js";import"./chunk-nsbc0c5r.js";import"./chunk-eb62vrxh.js";import"./chunk-58w28cca.js";import"./chunk-rn6v8db3.js";import{uc as u}from"./chunk-h98znra8.js";import"./chunk-vg98av2q.js";import{Lc as w,Vc as v,nd as x,sd as y,td as B,ud as C,vd as S,wd as D,xd as T,yd as P}from"./chunk-ae9w13va.js";import{Hd as b}from"./chunk-xbhgk68n.js";import{Ge as h}from"./chunk-kk3avqbr.js";import"./chunk-za21p6hm.js";var L=w.packet,A=class{constructor(){this.packet=[],this.setAccTitle=B,this.getAccTitle=C,this.setDiagramTitle=T,this.getDiagramTitle=P,this.getAccDescription=D,this.setAccDescription=S}static{h(this,"PacketDB")}getConfig(){let t=u({...L,...v().packet});if(t.showBits)t.paddingY+=10;return t}getPacket(){return this.packet}pushWord(t){if(t.length>0)this.packet.push(t)}clear(){y(),this.packet=[]}},M=1e4,Y=h((t,e)=>{E(t,e);let a=-1,o=[],n=1,{bitsPerRow:l}=e.getConfig();for(let{start:r,end:s,bits:d,label:c}of t.blocks){if(r!==void 0&&s!==void 0&&s<r)throw Error(`Packet block ${r} - ${s} is invalid. End must be greater than start.`);if(r??=a+1,r!==a+1)throw Error(`Packet block ${r} - ${s??r} is not contiguous. It should start from ${a+1}.`);if(d===0)throw Error(`Packet block ${r} is invalid. Cannot have a zero bit field.`);s??=r+(d??1)-1,d??=s-r+1,a=s,b.debug(`Packet block ${r} - ${a} with label ${c}`);while(o.length<=l+1&&e.getPacket().length<M){let[p,i]=I({start:r,end:s,bits:d,label:c},n,l);if(o.push(p),p.end+1===n*l)e.pushWord(o),o=[],n++;if(!i)break;({start:r,end:s,bits:d,label:c}=i)}}e.pushWord(o)},"populate"),I=h((t,e,a)=>{if(t.start===void 0)throw Error("start should have been set during first phase");if(t.end===void 0)throw Error("end should have been set during first phase");if(t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let o=e*a-1,n=e*a;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:n,end:t.end,label:t.label,bits:t.end-n}]},"getNextFittingBlock"),W={parser:{yy:void 0},parse:h(async(t)=>{let e=await F("packet",t),a=W.parser?.yy;if(!(a instanceof A))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");b.debug(e),Y(e,a)},"parse")},O=h((t,e,a,o)=>{let n=o.db,l=n.getConfig(),{rowHeight:r,paddingY:s,bitWidth:d,bitsPerRow:c}=l,p=n.getPacket(),i=n.getDiagramTitle(),f=r+s,g=f*(p.length+1)-(i?0:r),k=d*c+2,m=z(e);m.attr("viewBox",`0 0 ${k} ${g}`),x(m,g,k,l.useMaxWidth);for(let[_,N]of p.entries())j(m,N,_,l);m.append("text").text(i).attr("x",k/2).attr("y",g-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),j=h((t,e,a,{rowHeight:o,paddingX:n,paddingY:l,bitWidth:r,bitsPerRow:s,showBits:d})=>{let c=t.append("g"),p=a*(o+l)+l;for(let i of e){let f=i.start%s*r+1,g=(i.end-i.start+1)*r-n;if(c.append("rect").attr("x",f).attr("y",p).attr("width",g).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+g/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(i.label),!d)continue;let k=i.end===i.start,m=p-2;if(c.append("text").attr("x",f+(k?g/2:0)).attr("y",m).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(i.start),!k)c.append("text").attr("x",f+g).attr("y",m).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(i.end)}},"drawWord"),G={draw:O},H={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},K=h(({packet:t}={})=>{let e=u(H,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),Z={parser:W,get db(){return new A},renderer:G,styles:K};export{Z as diagram};
