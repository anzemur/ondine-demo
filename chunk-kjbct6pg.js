import{jb as vt}from"./chunk-k25c0p73.js";import{Fb as kt,Gb as bt,Hb as _t,Kb as D}from"./chunk-85msxs4x.js";import"./chunk-vg98av2q.js";import{nd as ut,sd as yt,td as dt,ud as ft,vd as pt,wd as gt,xd as mt,yd as xt,zd as V}from"./chunk-ae9w13va.js";import{Nd as O,je as J}from"./chunk-xbhgk68n.js";import{Ge as s}from"./chunk-kk3avqbr.js";import"./chunk-za21p6hm.js";var K=function(){var t=s(function(h,i,n,l){for(n=n||{},l=h.length;l--;n[h[l]]=i);return n},"o"),e=[6,8,10,11,12,14,16,17,18],a=[1,9],f=[1,10],r=[1,11],u=[1,12],p=[1,13],o=[1,14],g={trace:s(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:s(function(i,n,l,y,d,c,_){var k=c.length-1;switch(d){case 1:return c[k-1];case 2:this.$=[];break;case 3:c[k-1].push(c[k]),this.$=c[k-1];break;case 4:case 5:this.$=c[k];break;case 6:case 7:this.$=[];break;case 8:y.setDiagramTitle(c[k].substr(6)),this.$=c[k].substr(6);break;case 9:this.$=c[k].trim(),y.setAccTitle(this.$);break;case 10:case 11:this.$=c[k].trim(),y.setAccDescription(this.$);break;case 12:y.addSection(c[k].substr(8)),this.$=c[k].substr(8);break;case 13:y.addTask(c[k-1],c[k]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:a,12:f,14:r,16:u,17:p,18:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:a,12:f,14:r,16:u,17:p,18:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:s(function(i,n){if(n.recoverable)this.trace(i);else{var l=Error(i);throw l.hash=n,l}},"parseError"),parse:s(function(i){var n=this,l=[0],y=[],d=[null],c=[],_=this.table,k="",P=0,rt=0,it=0,Mt=2,nt=1,Et=c.slice.call(arguments,1),b=Object.create(this.lexer),A={yy:{}};for(var q in this.yy)if(Object.prototype.hasOwnProperty.call(this.yy,q))A.yy[q]=this.yy[q];if(b.setInput(i,A.yy),A.yy.lexer=b,A.yy.parser=this,typeof b.yylloc>"u")b.yylloc={};var X=b.yylloc;c.push(X);var Ct=b.options&&b.options.ranges;if(typeof A.yy.parseError==="function")this.parseError=A.yy.parseError;else this.parseError=Object.getPrototypeOf(this).parseError;function Pt(T){l.length=l.length-2*T,d.length=d.length-T,c.length=c.length-T}s(Pt,"popStack");function st(){var T=y.pop()||b.lex()||nt;if(typeof T!=="number"){if(T instanceof Array)y=T,T=y.pop();T=n.symbols_[T]||T}return T}s(st,"lex");var v,G,F,w,Kt,H,R={},z,E,at,W;while(!0){if(F=l[l.length-1],this.defaultActions[F])w=this.defaultActions[F];else{if(v===null||typeof v>"u")v=st();w=_[F]&&_[F][v]}if(typeof w>"u"||!w.length||!w[0]){var U="";W=[];for(z in _[F])if(this.terminals_[z]&&z>Mt)W.push("'"+this.terminals_[z]+"'");if(b.showPosition)U="Parse error on line "+(P+1)+`:
`+b.showPosition()+`
Expecting `+W.join(", ")+", got '"+(this.terminals_[v]||v)+"'";else U="Parse error on line "+(P+1)+": Unexpected "+(v==nt?"end of input":"'"+(this.terminals_[v]||v)+"'");this.parseError(U,{text:b.match,token:this.terminals_[v]||v,line:b.yylineno,loc:X,expected:W})}if(w[0]instanceof Array&&w.length>1)throw Error("Parse Error: multiple actions possible at state: "+F+", token: "+v);switch(w[0]){case 1:if(l.push(v),d.push(b.yytext),c.push(b.yylloc),l.push(w[1]),v=null,!G){if(rt=b.yyleng,k=b.yytext,P=b.yylineno,X=b.yylloc,it>0)it--}else v=G,G=null;break;case 2:if(E=this.productions_[w[1]][1],R.$=d[d.length-E],R._$={first_line:c[c.length-(E||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(E||1)].first_column,last_column:c[c.length-1].last_column},Ct)R._$.range=[c[c.length-(E||1)].range[0],c[c.length-1].range[1]];if(H=this.performAction.apply(R,[k,rt,P,A.yy,w[1],d,c].concat(Et)),typeof H<"u")return H;if(E)l=l.slice(0,-1*E*2),d=d.slice(0,-1*E),c=c.slice(0,-1*E);l.push(this.productions_[w[1]][0]),d.push(R.$),c.push(R._$),at=_[l[l.length-2]][l[l.length-1]],l.push(at);break;case 3:return!0}}return!0},"parse")},m=function(){var h={EOF:1,parseError:s(function(n,l){if(this.yy.parser)this.yy.parser.parseError(n,l);else throw Error(n)},"parseError"),setInput:s(function(i,n){if(this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges)this.yylloc.range=[0,0];return this.offset=0,this},"setInput"),input:s(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);if(n)this.yylineno++,this.yylloc.last_line++;else this.yylloc.last_column++;if(this.options.ranges)this.yylloc.range[1]++;return this._input=this._input.slice(1),i},"input"),unput:s(function(i){var n=i.length,l=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var y=this.match.split(/(?:\r\n?|\n)/g);if(this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1)this.yylineno-=l.length-1;var d=this.yylloc.range;if(this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===y.length?this.yylloc.first_column:0)+y[y.length-l.length].length-l[0].length:this.yylloc.first_column-n},this.options.ranges)this.yylloc.range=[d[0],d[0]+this.yyleng-n];return this.yyleng=this.yytext.length,this},"unput"),more:s(function(){return this._more=!0,this},"more"),reject:s(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:s(function(i){this.unput(this.match.slice(i))},"less"),pastInput:s(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:s(function(){var i=this.match;if(i.length<20)i+=this._input.substr(0,20-i.length);return(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:s(function(){var i=this.pastInput(),n=Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:s(function(i,n){var l,y,d;if(this.options.backtrack_lexer){if(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges)d.yylloc.range=this.yylloc.range.slice(0)}if(y=i[0].match(/(?:\r\n?|\n).*/g),y)this.yylineno+=y.length;if(this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges)this.yylloc.range=[this.offset,this.offset+=this.yyleng];if(this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],l=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input)this.done=!1;if(l)return l;else if(this._backtrack){for(var c in d)this[c]=d[c];return!1}return!1},"test_match"),next:s(function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var i,n,l,y;if(!this._more)this.yytext="",this.match="";var d=this._currentRules();for(var c=0;c<d.length;c++)if(l=this._input.match(this.rules[d[c]]),l&&(!n||l[0].length>n[0].length)){if(n=l,y=c,this.options.backtrack_lexer)if(i=this.test_match(l,d[c]),i!==!1)return i;else if(this._backtrack){n=!1;continue}else return!1;else if(!this.options.flex)break}if(n){if(i=this.test_match(n,d[y]),i!==!1)return i;return!1}if(this._input==="")return this.EOF;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:s(function(){var n=this.next();if(n)return n;else return this.lex()},"lex"),begin:s(function(n){this.conditionStack.push(n)},"begin"),popState:s(function(){var n=this.conditionStack.length-1;if(n>0)return this.conditionStack.pop();else return this.conditionStack[0]},"popState"),_currentRules:s(function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1])return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;else return this.conditions.INITIAL.rules},"_currentRules"),topState:s(function(n){if(n=this.conditionStack.length-1-Math.abs(n||0),n>=0)return this.conditionStack[n];else return"INITIAL"},"topState"),pushState:s(function(n){this.begin(n)},"pushState"),stateStackSize:s(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:s(function(n,l,y,d){var c=d;switch(y){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;break;case 8:return this.popState(),"acc_title_value";break;case 9:return this.begin("acc_descr"),14;break;case 10:return this.popState(),"acc_descr_value";break;case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return h}();g.lexer=m;function x(){this.yy={}}return s(x,"Parser"),x.prototype=g,g.Parser=x,new x}();K.parser=K;var It=K,L="",tt=[],B=[],j=[],At=s(function(){tt.length=0,B.length=0,L="",j.length=0,yt()},"clear"),Ft=s(function(t){L=t,tt.push(t)},"addSection"),Vt=s(function(){return tt},"getSections"),Rt=s(function(){let t=lt(),e=100,a=0;while(!t&&a<e)t=lt(),a++;return B.push(...j),B},"getTasks"),Lt=s(function(){let t=[];return B.forEach((a)=>{if(a.people)t.push(...a.people)}),[...new Set(t)].sort()},"updateActors"),Bt=s(function(t,e){let a=e.substr(1).split(":"),f=0,r=[];if(a.length===1)f=Number(a[0]),r=[];else f=Number(a[0]),r=a[1].split(",");let u=r.map((o)=>o.trim()),p={section:L,type:L,people:u,task:t,score:f};j.push(p)},"addTask"),jt=s(function(t){let e={section:L,type:L,description:t,task:t,classes:[]};B.push(e)},"addTaskOrg"),lt=s(function(){let t=s(function(a){return j[a].processed},"compileTask"),e=!0;for(let[a,f]of j.entries())t(a),e=e&&f.processed;return e},"compileTasks"),Nt=s(function(){return Lt()},"getActors"),ot={getConfig:s(()=>V().journey,"getConfig"),clear:At,setDiagramTitle:mt,getDiagramTitle:xt,setAccTitle:dt,getAccTitle:ft,setAccDescription:pt,getAccDescription:gt,addSection:Ft,getSections:Vt,getTasks:Rt,addTask:Bt,addTaskOrg:jt,getActors:Nt},zt=s((t)=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePaths .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${vt()}
`,"getStyles"),Wt=zt,et=s(function(t,e){return kt(t,e)},"drawRect"),Ot=s(function(t,e){let f=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");r.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function u(g){let m=J().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}s(u,"smile");function p(g){let m=J().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}s(p,"sad");function o(g){g.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}if(s(o,"ambivalent"),e.score>3)u(r);else if(e.score<3)p(r);else o(r);return f},"drawFace"),wt=s(function(t,e){let a=t.append("circle");if(a.attr("cx",e.cx),a.attr("cy",e.cy),a.attr("class","actor-"+e.pos),a.attr("fill",e.fill),a.attr("stroke",e.stroke),a.attr("r",e.r),a.class!==void 0)a.attr("class",a.class);if(e.title!==void 0)a.append("title").text(e.title);return a},"drawCircle"),Tt=s(function(t,e){return _t(t,e)},"drawText"),Yt=s(function(t,e){function a(r,u,p,o,g){return r+","+u+" "+(r+p)+","+u+" "+(r+p)+","+(u+o-g)+" "+(r+p-g*1.2)+","+(u+o)+" "+r+","+(u+o)}s(a,"genPoints");let f=t.append("polygon");f.attr("points",a(e.x,e.y,50,20,7)),f.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+0.5*e.labelMargin,Tt(t,e)},"drawLabel"),qt=s(function(t,e,a){let f=t.append("g"),r=D();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=a.width*e.taskCount+a.diagramMarginX*(e.taskCount-1),r.height=a.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,et(f,r),St(a)(e.text,f,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},a,e.colour)},"drawSection"),Q=-1,Xt=s(function(t,e,a,f){let r=e.x+a.width/2,u=t.append("g");Q++;let p=450;u.append("line").attr("id",f+"-task"+Q).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",p).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ot(u,{cx:r,cy:300+(5-e.score)*30,score:e.score});let o=D();o.x=e.x,o.y=e.y,o.fill=e.fill,o.width=a.width,o.height=a.height,o.class="task task-type-"+e.num,o.rx=3,o.ry=3,et(u,o);let g=e.x+14;e.people.forEach((m)=>{let x=e.actors[m].color,h={cx:g,cy:e.y,r:7,fill:x,stroke:"#000",title:m,pos:e.actors[m].position};wt(u,h),g+=10}),St(a)(e.task,u,o.x,o.y,o.width,o.height,{class:"task"},a,e.colour)},"drawTask"),Gt=s(function(t,e){bt(t,e)},"drawBackgroundRect"),St=function(){function t(r,u,p,o,g,m,x,h){let i=u.append("text").attr("x",p+g/2).attr("y",o+m/2+5).style("font-color",h).style("text-anchor","middle").text(r);f(i,x)}s(t,"byText");function e(r,u,p,o,g,m,x,h,i){let{taskFontSize:n,taskFontFamily:l}=h,y=r.split(/<br\s*\/?>/gi);for(let d=0;d<y.length;d++){let c=d*n-n*(y.length-1)/2,_=u.append("text").attr("x",p+g/2).attr("y",o).attr("fill",i).style("text-anchor","middle").style("font-size",n).style("font-family",l);_.append("tspan").attr("x",p+g/2).attr("dy",c).text(y[d]),_.attr("y",o+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),f(_,x)}}s(e,"byTspan");function a(r,u,p,o,g,m,x,h){let i=u.append("switch"),l=i.append("foreignObject").attr("x",p).attr("y",o).attr("width",g).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");l.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),e(r,i,p,o,g,m,x,h),f(l,x)}s(a,"byFo");function f(r,u){for(let p in u)if(p in u)r.attr(p,u[p])}return s(f,"_setTextAttrs"),function(r){return r.textPlacement==="fo"?a:r.textPlacement==="old"?t:e}}(),Ht=s(function(t,e){Q=-1,t.append("defs").append("marker").attr("id",e+"-arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),N={drawRect:et,drawCircle:wt,drawSection:qt,drawText:Tt,drawLabel:Yt,drawTask:Xt,drawBackgroundRect:Gt,initGraphics:Ht},Ut=s(function(t){Object.keys(t).forEach(function(a){M[a]=t[a]})},"setConf"),C={},Y=0;function $t(t){let e=V().journey,a=e.maxLabelWidth;Y=0;let f=60;Object.keys(C).forEach((r)=>{let u=C[r].color,p={cx:20,cy:f,r:7,fill:u,stroke:"#000",pos:C[r].position};N.drawCircle(t,p);let o=t.append("text").attr("visibility","hidden").text(r),g=o.node().getBoundingClientRect().width;o.remove();let m=[];if(g<=a)m=[r];else{let x=r.split(" "),h="";if(o=t.append("text").attr("visibility","hidden"),x.forEach((i)=>{let n=h?`${h} ${i}`:i;if(o.text(n),o.node().getBoundingClientRect().width>a){if(h)m.push(h);if(h=i,o.text(i),o.node().getBoundingClientRect().width>a){let y="";for(let d of i)if(y+=d,o.text(y+"-"),o.node().getBoundingClientRect().width>a)m.push(y.slice(0,-1)+"-"),y=d;h=y}}else h=n}),h)m.push(h);o.remove()}m.forEach((x,h)=>{let i={x:40,y:f+7+h*20,fill:"#666",text:x,textMargin:e.boxTextMargin??5},l=N.drawText(t,i).node().getBoundingClientRect().width;if(l>Y&&l>e.leftMargin-l)Y=l}),f+=Math.max(20,m.length*20)})}s($t,"drawActorLegend");var M=V().journey,I=0,Zt=s(function(t,e,a,f){let r=V(),u=r.journey.titleColor,p=r.journey.titleFontSize,o=r.journey.titleFontFamily,g=r.securityLevel,m;if(g==="sandbox")m=O("#i"+e);let x=g==="sandbox"?O(m.nodes()[0].contentDocument.body):O("body");S.init();let h=x.select("#"+e);N.initGraphics(h,e);let i=f.db.getTasks(),n=f.db.getDiagramTitle(),l=f.db.getActors();for(let P in C)delete C[P];let y=0;l.forEach((P)=>{C[P]={color:M.actorColours[y%M.actorColours.length],position:y},y++}),$t(h),I=M.leftMargin+Y,S.insert(0,0,I,Object.keys(C).length*50),Jt(h,i,0,e);let d=S.getBounds();if(n)h.append("text").text(n).attr("x",I).attr("font-size",p).attr("font-weight","bold").attr("y",25).attr("fill",u).attr("font-family",o);let c=d.stopy-d.starty+2*M.diagramMarginY,_=I+d.stopx+2*M.diagramMarginX;ut(h,c,_,M.useMaxWidth),h.append("line").attr("x1",I).attr("y1",M.height*4).attr("x2",_-I-4).attr("y2",M.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#"+e+"-arrowhead)");let k=n?70:0;h.attr("viewBox",`${d.startx} -25 ${_} ${c+k}`),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",c+k+25)},"draw"),S={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:s(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:s(function(t,e,a,f){if(t[e]===void 0)t[e]=a;else t[e]=f(a,t[e])},"updateVal"),updateBounds:s(function(t,e,a,f){let r=V().journey,u=this,p=0;function o(g){return s(function(x){p++;let h=u.sequenceItems.length-p+1;if(u.updateVal(x,"starty",e-h*r.boxMargin,Math.min),u.updateVal(x,"stopy",f+h*r.boxMargin,Math.max),u.updateVal(S.data,"startx",t-h*r.boxMargin,Math.min),u.updateVal(S.data,"stopx",a+h*r.boxMargin,Math.max),g!=="activation")u.updateVal(x,"startx",t-h*r.boxMargin,Math.min),u.updateVal(x,"stopx",a+h*r.boxMargin,Math.max),u.updateVal(S.data,"starty",e-h*r.boxMargin,Math.min),u.updateVal(S.data,"stopy",f+h*r.boxMargin,Math.max)},"updateItemBounds")}s(o,"updateFn"),this.sequenceItems.forEach(o())},"updateBounds"),insert:s(function(t,e,a,f){let r=Math.min(t,a),u=Math.max(t,a),p=Math.min(e,f),o=Math.max(e,f);this.updateVal(S.data,"startx",r,Math.min),this.updateVal(S.data,"starty",p,Math.min),this.updateVal(S.data,"stopx",u,Math.max),this.updateVal(S.data,"stopy",o,Math.max),this.updateBounds(r,p,u,o)},"insert"),bumpVerticalPos:s(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:s(function(){return this.verticalPos},"getVerticalPos"),getBounds:s(function(){return this.data},"getBounds")},Z=M.sectionFills,ct=M.sectionColours,Jt=s(function(t,e,a,f){let r=V().journey,u="",p=r.height*2+r.diagramMarginY,o=a+p,g=0,m="#CCC",x="black",h=0;for(let[i,n]of e.entries()){if(u!==n.section){m=Z[g%Z.length],h=g%Z.length,x=ct[g%ct.length];let y=0,d=n.section;for(let _=i;_<e.length;_++)if(e[_].section==d)y=y+1;else break;let c={x:i*r.taskMargin+i*r.width+I,y:50,text:n.section,fill:m,num:h,colour:x,taskCount:y};N.drawSection(t,c,r),u=n.section,g++}let l=n.people.reduce((y,d)=>{if(C[d])y[d]=C[d];return y},{});n.x=i*r.taskMargin+i*r.width+I,n.y=o,n.width=r.diagramMarginX,n.height=r.diagramMarginY,n.colour=x,n.fill=m,n.num=h,n.actors=l,N.drawTask(t,n,r,f),S.insert(n.x,n.y,n.x+n.width+r.taskMargin,450)}},"drawTasks"),ht={setConf:Ut,draw:Zt},se={parser:It,db:ot,renderer:ht,styles:Wt,init:s((t)=>{ht.setConf(t.journey),ot.clear()},"init")};export{se as diagram};
