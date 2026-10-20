import{vc as Pe}from"./chunk-h98znra8.js";import{Ac as ti}from"./chunk-vg98av2q.js";import{md as ye,nd as ge,sd as pe,td as ve,ud as Te,vd as be,wd as xe,xd as we,yd as _e,zd as ot}from"./chunk-ae9w13va.js";import{$d as $e,Gd as ke,Hd as nt,Jd as De,Kd as Se,Ld as Ce,Md as Me,Nd as Tt,Od as Ee,Ud as Ie,Vd as Nt,Wd as Rt,Xd as zt,Yd as Ht,Zd as Bt,_d as Ye,ae as Le,be as Ae,ce as Fe,de as Oe,ee as We,fe as jt,ge as Gt,he as Ve}from"./chunk-xbhgk68n.js";import{Ge as l}from"./chunk-kk3avqbr.js";import{Ie as ct,Je as _t}from"./chunk-za21p6hm.js";var ce=_t(function(Yt,$t){(function(t,e){typeof Yt=="object"&&typeof $t<"u"?$t.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_isoWeek=e()})(Yt,function(){var t="day";return function(e,n,s){var r=function(w){return w.add(4-w.isoWeekday(),t)},f=n.prototype;f.isoWeekYear=function(){return r(this).year()},f.isoWeek=function(w){if(!this.$utils().u(w))return this.add(7*(w-this.isoWeek()),t);var D,R,Y,H,z=r(this),B=(D=this.isoWeekYear(),R=this.$u,Y=(R?s.utc:s)().year(D).startOf("year"),H=4-Y.isoWeekday(),Y.isoWeekday()>4&&(H+=7),Y.add(H,t));return z.diff(B,"week")+1},f.isoWeekday=function(w){return this.$utils().u(w)?this.day()||7:this.day(this.day()%7?w:w-7)};var y=f.startOf;f.startOf=function(w,D){var R=this.$utils(),Y=!!R.u(D)||D;return R.p(w)==="isoweek"?Y?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):y.bind(this)(w,D)}}})});var le=_t(function(Lt,At){(function(t,e){typeof Lt=="object"&&typeof At<"u"?At.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_customParseFormat=e()})(Lt,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,s=/\d\d/,r=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,y={},w=function(x){return(x=+x)+(x>68?1900:2000)},D=function(x){return function(_){this[x]=+_}},R=[/[+-]\d\d:?(\d\d)?|Z/,function(x){(this.zone||(this.zone={})).offset=function(_){if(!_)return 0;if(_==="Z")return 0;var b=_.match(/([+-]|\d\d)/g),F=60*b[1]+(+b[2]||0);return F===0?0:b[0]==="+"?-F:F}(x)}],Y=function(x){var _=y[x];return _&&(_.indexOf?_:_.s.concat(_.f))},H=function(x,_){var b,F=y.meridiem;if(F){for(var U=1;U<=24;U+=1)if(x.indexOf(F(U,0,_))>-1){b=U>12;break}}else b=x===(_?"pm":"PM");return b},z={A:[f,function(x){this.afternoon=H(x,!1)}],a:[f,function(x){this.afternoon=H(x,!0)}],Q:[n,function(x){this.month=3*(x-1)+1}],S:[n,function(x){this.milliseconds=100*+x}],SS:[s,function(x){this.milliseconds=10*+x}],SSS:[/\d{3}/,function(x){this.milliseconds=+x}],s:[r,D("seconds")],ss:[r,D("seconds")],m:[r,D("minutes")],mm:[r,D("minutes")],H:[r,D("hours")],h:[r,D("hours")],HH:[r,D("hours")],hh:[r,D("hours")],D:[r,D("day")],DD:[s,D("day")],Do:[f,function(x){var _=y.ordinal,b=x.match(/\d+/);if(this.day=b[0],_)for(var F=1;F<=31;F+=1)_(F).replace(/\[|\]/g,"")===x&&(this.day=F)}],w:[r,D("week")],ww:[s,D("week")],M:[r,D("month")],MM:[s,D("month")],MMM:[f,function(x){var _=Y("months"),b=(Y("monthsShort")||_.map(function(F){return F.slice(0,3)})).indexOf(x)+1;if(b<1)throw Error();this.month=b%12||b}],MMMM:[f,function(x){var _=Y("months").indexOf(x)+1;if(_<1)throw Error();this.month=_%12||_}],Y:[/[+-]?\d+/,D("year")],YY:[s,function(x){this.year=w(x)}],YYYY:[/\d{4}/,D("year")],Z:R,ZZ:R};function B(x){var _,b;_=x,b=y&&y.formats;for(var F=(x=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(V,O,k){var p=k&&k.toUpperCase();return O||b[k]||t[k]||b[p].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(v,T,a){return T||a.slice(1)})})).match(e),U=F.length,q=0;q<U;q+=1){var L=F[q],g=z[L],m=g&&g[0],I=g&&g[1];F[q]=I?{regex:m,parser:I}:L.replace(/^\[|\]$/g,"")}return function(V){for(var O={},k=0,p=0;k<U;k+=1){var v=F[k];if(typeof v=="string")p+=v.length;else{var{regex:T,parser:a}=v,h=V.slice(p),d=T.exec(h)[0];a.call(O,d),V=V.replace(d,"")}}return function(u){var C=u.afternoon;if(C!==void 0){var i=u.hours;C?i<12&&(u.hours+=12):i===12&&(u.hours=0),delete u.afternoon}}(O),O}}return function(x,_,b){b.p.customParseFormat=!0,x&&x.parseTwoDigitYear&&(w=x.parseTwoDigitYear);var F=_.prototype,U=F.parse;F.parse=function(q){var{date:L,utc:g,args:m}=q;this.$u=g;var I=m[1];if(typeof I=="string"){var V=m[2]===!0,O=m[3]===!0,k=V||O,p=m[2];O&&(p=m[2]),y=this.$locale(),!V&&p&&(y=b.Ls[p]),this.$d=function(h,d,u,C){try{if(["x","X"].indexOf(d)>-1)return new Date((d==="X"?1000:1)*h);var i=B(d)(h),M=i.year,c=i.month,j=i.day,o=i.hours,S=i.minutes,E=i.seconds,P=i.milliseconds,N=i.zone,A=i.week,W=new Date,et=j||(M||c?1:W.getDate()),it=M||W.getFullYear(),ut=0;M&&!c||(ut=c>0?c-1:W.getMonth());var dt,ft=o||0,G=S||0,at=E||0,J=P||0;return N?new Date(Date.UTC(it,ut,et,ft,G,at,J+60*N.offset*1000)):u?new Date(Date.UTC(it,ut,et,ft,G,at,J)):(dt=new Date(it,ut,et,ft,G,at,J),A&&(dt=C(dt).week(A).toDate()),dt)}catch(Z){return new Date("")}}(L,I,g,b),this.init(),p&&p!==!0&&(this.$L=this.locale(p).$L),k&&L!=this.format(I)&&(this.$d=new Date("")),y={}}else if(I instanceof Array)for(var v=I.length,T=1;T<=v;T+=1){m[1]=I[T-1];var a=b.apply(this,m);if(a.isValid()){this.$d=a.$d,this.$L=a.$L,this.init();break}T===v&&(this.$d=new Date(""))}else U.call(this,q)}}})});var ue=_t(function(Ft,Ot){(function(t,e){typeof Ft=="object"&&typeof Ot<"u"?Ot.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_advancedFormat=e()})(Ft,function(){return function(t,e){var n=e.prototype,s=n.format;n.format=function(r){var f=this,y=this.$locale();if(!this.isValid())return s.bind(this)(r);var w=this.$utils(),D=(r||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(R){switch(R){case"Q":return Math.ceil((f.$M+1)/3);case"Do":return y.ordinal(f.$D);case"gggg":return f.weekYear();case"GGGG":return f.isoWeekYear();case"wo":return y.ordinal(f.week(),"W");case"w":case"ww":return w.s(f.week(),R==="w"?1:2,"0");case"W":case"WW":return w.s(f.isoWeek(),R==="W"?1:2,"0");case"k":case"kk":return w.s(String(f.$H===0?24:f.$H),R==="k"?1:2,"0");case"X":return Math.floor(f.$d.getTime()/1000);case"x":return f.$d.getTime();case"z":return"["+f.offsetName()+"]";case"zzz":return"["+f.offsetName("long")+"]";default:return R}});return s.bind(this)(D)}}})});var de=_t(function(Wt,Vt){(function(t,e){typeof Wt=="object"&&typeof Vt<"u"?Vt.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self).dayjs_plugin_duration=e()})(Wt,function(){var t,e,n=1000,s=60000,r=3600000,f=86400000,y=31536000000,w=2628000000,D=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,R=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,Y={years:y,months:w,days:f,hours:r,minutes:s,seconds:n,milliseconds:1,weeks:604800000},H=function(L){return L instanceof U},z=function(L,g,m){return new U(L,m,g.$l)},B=function(L){return e.p(L)+"s"},x=function(L){return L<0},_=function(L){return x(L)?Math.ceil(L):Math.floor(L)},b=function(L){return Math.abs(L)},F=function(L,g){return L?x(L)?{negative:!0,format:""+b(L)+g}:{negative:!1,format:""+L+g}:{negative:!1,format:""}},U=function(){function L(m,I,V){var O=this;if(this.$d={},this.$l=V,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),I)return z(m*Y[B(I)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach(function(v){O.$d[B(v)]=m[v]}),this.calMilliseconds(),this;if(typeof m=="string"){var k=m.match(D);if(k){var p=k.slice(2).map(function(v){return v!=null?Number(v):0});return this.$d.years=p[0],this.$d.months=p[1],this.$d.weeks=p[2],this.$d.days=p[3],this.$d.hours=p[4],this.$d.minutes=p[5],this.$d.seconds=p[6],this.calMilliseconds(),this}}return this}var g=L.prototype;return g.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce(function(I,V){return I+(m.$d[V]||0)*Y[V]},0)},g.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=_(m/y),m%=y,this.$d.months=_(m/w),m%=w,this.$d.days=_(m/f),m%=f,this.$d.hours=_(m/r),m%=r,this.$d.minutes=_(m/s),m%=s,this.$d.seconds=_(m/n),m%=n,this.$d.milliseconds=m},g.toISOString=function(){var m=F(this.$d.years,"Y"),I=F(this.$d.months,"M"),V=+this.$d.days||0;this.$d.weeks&&(V+=7*this.$d.weeks);var O=F(V,"D"),k=F(this.$d.hours,"H"),p=F(this.$d.minutes,"M"),v=this.$d.seconds||0;this.$d.milliseconds&&(v+=this.$d.milliseconds/1000,v=Math.round(1000*v)/1000);var T=F(v,"S"),a=m.negative||I.negative||O.negative||k.negative||p.negative||T.negative,h=k.format||p.format||T.format?"T":"",d=(a?"-":"")+"P"+m.format+I.format+O.format+h+k.format+p.format+T.format;return d==="P"||d==="-P"?"P0D":d},g.toJSON=function(){return this.toISOString()},g.format=function(m){var I=m||"YYYY-MM-DDTHH:mm:ss",V={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return I.replace(R,function(O,k){return k||String(V[O])})},g.as=function(m){return this.$ms/Y[B(m)]},g.get=function(m){var I=this.$ms,V=B(m);return V==="milliseconds"?I%=1000:I=V==="weeks"?_(I/Y[V]):this.$d[V],I||0},g.add=function(m,I,V){var O;return O=I?m*Y[B(I)]:H(m)?m.$ms:z(m,this).$ms,z(this.$ms+O*(V?-1:1),this)},g.subtract=function(m,I){return this.add(m,I,!0)},g.locale=function(m){var I=this.clone();return I.$l=m,I},g.clone=function(){return z(this.$ms,this)},g.humanize=function(m){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},g.valueOf=function(){return this.asMilliseconds()},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},L}(),q=function(L,g,m){return L.add(g.years()*m,"y").add(g.months()*m,"M").add(g.days()*m,"d").add(g.hours()*m,"h").add(g.minutes()*m,"m").add(g.seconds()*m,"s").add(g.milliseconds()*m,"ms")};return function(L,g,m){t=m,e=m().$utils(),m.duration=function(O,k){var p=m.locale();return z(O,{$l:p},k)},m.isDuration=H;var I=g.prototype.add,V=g.prototype.subtract;g.prototype.add=function(O,k){return H(O)?q(this,O,1):I.bind(this)(O,k)},g.prototype.subtract=function(O,k){return H(O)?q(this,O,-1):V.bind(this)(O,k)}}})});var Ne=ct(ti(),1),Q=ct(ke(),1),Re=ct(ce(),1),ze=ct(le(),1),He=ct(ue(),1),kt=ct(ke(),1),Je=ct(de(),1);var Xt=function(){var t=l(function(T,a,h,d){for(h=h||{},d=T.length;d--;h[T[d]]=a);return h},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],s=[1,27],r=[1,28],f=[1,29],y=[1,30],w=[1,31],D=[1,32],R=[1,33],Y=[1,34],H=[1,9],z=[1,10],B=[1,11],x=[1,12],_=[1,13],b=[1,14],F=[1,15],U=[1,16],q=[1,19],L=[1,20],g=[1,21],m=[1,22],I=[1,23],V=[1,25],O=[1,35],k={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(a,h,d,u,C,i,M){var c=i.length-1;switch(C){case 1:return i[c-1];case 2:this.$=[];break;case 3:i[c-1].push(i[c]),this.$=i[c-1];break;case 4:case 5:this.$=i[c];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=i[c].substr(18);break;case 19:u.TopAxis(),this.$=i[c].substr(8);break;case 20:u.setAxisFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 21:u.setTickInterval(i[c].substr(13)),this.$=i[c].substr(13);break;case 22:u.setExcludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 23:u.setIncludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 24:u.setTodayMarker(i[c].substr(12)),this.$=i[c].substr(12);break;case 27:u.setDiagramTitle(i[c].substr(6)),this.$=i[c].substr(6);break;case 28:this.$=i[c].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=i[c].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(i[c].substr(8)),this.$=i[c].substr(8);break;case 33:u.addTask(i[c-1],i[c]),this.$="task";break;case 34:this.$=i[c-1],u.setClickEvent(i[c-1],i[c],null);break;case 35:this.$=i[c-2],u.setClickEvent(i[c-2],i[c-1],i[c]);break;case 36:this.$=i[c-2],u.setClickEvent(i[c-2],i[c-1],null),u.setLink(i[c-2],i[c]);break;case 37:this.$=i[c-3],u.setClickEvent(i[c-3],i[c-2],i[c-1]),u.setLink(i[c-3],i[c]);break;case 38:this.$=i[c-2],u.setClickEvent(i[c-2],i[c],null),u.setLink(i[c-2],i[c-1]);break;case 39:this.$=i[c-3],u.setClickEvent(i[c-3],i[c-1],i[c]),u.setLink(i[c-3],i[c-2]);break;case 40:this.$=i[c-1],u.setLink(i[c-1],i[c]);break;case 41:case 47:this.$=i[c-1]+" "+i[c];break;case 42:case 43:case 45:this.$=i[c-2]+" "+i[c-1]+" "+i[c];break;case 44:case 46:this.$=i[c-3]+" "+i[c-2]+" "+i[c-1]+" "+i[c];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:s,14:r,15:f,16:y,17:w,18:D,19:18,20:R,21:Y,22:H,23:z,24:B,25:x,26:_,27:b,28:F,29:U,30:q,31:L,33:g,35:m,36:I,37:24,38:V,40:O},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:n,13:s,14:r,15:f,16:y,17:w,18:D,19:18,20:R,21:Y,22:H,23:z,24:B,25:x,26:_,27:b,28:F,29:U,30:q,31:L,33:g,35:m,36:I,37:24,38:V,40:O},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:l(function(a,h){if(h.recoverable)this.trace(a);else{var d=Error(a);throw d.hash=h,d}},"parseError"),parse:l(function(a){var h=this,d=[0],u=[],C=[null],i=[],M=this.table,c="",j=0,o=0,S=0,E=2,P=1,N=i.slice.call(arguments,1),A=Object.create(this.lexer),W={yy:{}};for(var et in this.yy)if(Object.prototype.hasOwnProperty.call(this.yy,et))W.yy[et]=this.yy[et];if(A.setInput(a,W.yy),W.yy.lexer=A,W.yy.parser=this,typeof A.yylloc>"u")A.yylloc={};var it=A.yylloc;i.push(it);var ut=A.options&&A.options.ranges;if(typeof W.yy.parseError==="function")this.parseError=W.yy.parseError;else this.parseError=Object.getPrototypeOf(this).parseError;function dt(K){d.length=d.length-2*K,C.length=C.length-K,i.length=i.length-K}l(dt,"popStack");function ft(){var K=u.pop()||A.lex()||P;if(typeof K!=="number"){if(K instanceof Array)u=K,K=u.pop();K=h.symbols_[K]||K}return K}l(ft,"lex");var G,at,J,Z,ji,Et,ht={},xt,st,oe,wt;while(!0){if(J=d[d.length-1],this.defaultActions[J])Z=this.defaultActions[J];else{if(G===null||typeof G>"u")G=ft();Z=M[J]&&M[J][G]}if(typeof Z>"u"||!Z.length||!Z[0]){var It="";wt=[];for(xt in M[J])if(this.terminals_[xt]&&xt>E)wt.push("'"+this.terminals_[xt]+"'");if(A.showPosition)It="Parse error on line "+(j+1)+`:
`+A.showPosition()+`
Expecting `+wt.join(", ")+", got '"+(this.terminals_[G]||G)+"'";else It="Parse error on line "+(j+1)+": Unexpected "+(G==P?"end of input":"'"+(this.terminals_[G]||G)+"'");this.parseError(It,{text:A.match,token:this.terminals_[G]||G,line:A.yylineno,loc:it,expected:wt})}if(Z[0]instanceof Array&&Z.length>1)throw Error("Parse Error: multiple actions possible at state: "+J+", token: "+G);switch(Z[0]){case 1:if(d.push(G),C.push(A.yytext),i.push(A.yylloc),d.push(Z[1]),G=null,!at){if(o=A.yyleng,c=A.yytext,j=A.yylineno,it=A.yylloc,S>0)S--}else G=at,at=null;break;case 2:if(st=this.productions_[Z[1]][1],ht.$=C[C.length-st],ht._$={first_line:i[i.length-(st||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(st||1)].first_column,last_column:i[i.length-1].last_column},ut)ht._$.range=[i[i.length-(st||1)].range[0],i[i.length-1].range[1]];if(Et=this.performAction.apply(ht,[c,o,j,W.yy,Z[1],C,i].concat(N)),typeof Et<"u")return Et;if(st)d=d.slice(0,-1*st*2),C=C.slice(0,-1*st),i=i.slice(0,-1*st);d.push(this.productions_[Z[1]][0]),C.push(ht.$),i.push(ht._$),oe=M[d[d.length-2]][d[d.length-1]],d.push(oe);break;case 3:return!0}}return!0},"parse")},p=function(){var T={EOF:1,parseError:l(function(h,d){if(this.yy.parser)this.yy.parser.parseError(h,d);else throw Error(h)},"parseError"),setInput:l(function(a,h){if(this.yy=h||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges)this.yylloc.range=[0,0];return this.offset=0,this},"setInput"),input:l(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var h=a.match(/(?:\r\n?|\n).*/g);if(h)this.yylineno++,this.yylloc.last_line++;else this.yylloc.last_column++;if(this.options.ranges)this.yylloc.range[1]++;return this._input=this._input.slice(1),a},"input"),unput:l(function(a){var h=a.length,d=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h),this.offset-=h;var u=this.match.split(/(?:\r\n?|\n)/g);if(this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1)this.yylineno-=d.length-1;var C=this.yylloc.range;if(this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===u.length?this.yylloc.first_column:0)+u[u.length-d.length].length-d[0].length:this.yylloc.first_column-h},this.options.ranges)this.yylloc.range=[C[0],C[0]+this.yyleng-h];return this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(a){this.unput(this.match.slice(a))},"less"),pastInput:l(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var a=this.match;if(a.length<20)a+=this._input.substr(0,20-a.length);return(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var a=this.pastInput(),h=Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+h+"^"},"showPosition"),test_match:l(function(a,h){var d,u,C;if(this.options.backtrack_lexer){if(C={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges)C.yylloc.range=this.yylloc.range.slice(0)}if(u=a[0].match(/(?:\r\n?|\n).*/g),u)this.yylineno+=u.length;if(this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges)this.yylloc.range=[this.offset,this.offset+=this.yyleng];if(this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],d=this.performAction.call(this,this.yy,this,h,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input)this.done=!1;if(d)return d;else if(this._backtrack){for(var i in C)this[i]=C[i];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var a,h,d,u;if(!this._more)this.yytext="",this.match="";var C=this._currentRules();for(var i=0;i<C.length;i++)if(d=this._input.match(this.rules[C[i]]),d&&(!h||d[0].length>h[0].length)){if(h=d,u=i,this.options.backtrack_lexer)if(a=this.test_match(d,C[i]),a!==!1)return a;else if(this._backtrack){h=!1;continue}else return!1;else if(!this.options.flex)break}if(h){if(a=this.test_match(h,C[u]),a!==!1)return a;return!1}if(this._input==="")return this.EOF;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var h=this.next();if(h)return h;else return this.lex()},"lex"),begin:l(function(h){this.conditionStack.push(h)},"begin"),popState:l(function(){var h=this.conditionStack.length-1;if(h>0)return this.conditionStack.pop();else return this.conditionStack[0]},"popState"),_currentRules:l(function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1])return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;else return this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(h){if(h=this.conditionStack.length-1-Math.abs(h||0),h>=0)return this.conditionStack[h];else return"INITIAL"},"topState"),pushState:l(function(h){this.begin(h)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(h,d,u,C){var i=C;switch(u){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return T}();k.lexer=p;function v(){this.yy={}}return l(v,"Parser"),v.prototype=k,k.Parser=v,new v}();Xt.parser=Xt;var ei=Xt;Q.default.extend(Re.default);Q.default.extend(ze.default);Q.default.extend(He.default);var fe={friday:5,saturday:6},tt="",Qt="",Kt=void 0,Jt="",gt=[],pt=[],te=new Map,ee=[],Ct=[],vt="",ie="",Be=["active","done","crit","milestone","vert"],se=[],mt="",bt=!1,re=!1,ne="sunday",Mt="saturday",Ut=0,ii=l(function(){ee=[],Ct=[],vt="",se=[],Dt=0,Zt=void 0,St=void 0,X=[],tt="",Qt="",ie="",Kt=void 0,Jt="",gt=[],pt=[],bt=!1,re=!1,Ut=0,te=new Map,mt="",pe(),ne="sunday",Mt="saturday"},"clear"),si=l(function(t){mt=t},"setDiagramId"),ri=l(function(t){Qt=t},"setAxisFormat"),ni=l(function(){return Qt},"getAxisFormat"),ai=l(function(t){Kt=t},"setTickInterval"),oi=l(function(){return Kt},"getTickInterval"),ci=l(function(t){Jt=t},"setTodayMarker"),li=l(function(){return Jt},"getTodayMarker"),ui=l(function(t){tt=t},"setDateFormat"),di=l(function(){bt=!0},"enableInclusiveEndDates"),fi=l(function(){return bt},"endDatesAreInclusive"),hi=l(function(){re=!0},"enableTopAxis"),mi=l(function(){return re},"topAxisEnabled"),ki=l(function(t){ie=t},"setDisplayMode"),yi=l(function(){return ie},"getDisplayMode"),gi=l(function(){return tt},"getDateFormat"),je=l((t,e)=>{let n=e.toLowerCase().split(/[\s,]+/).filter((s)=>s!=="");return[...new Set([...t,...n])]},"mergeTokens"),pi=l(function(t){gt=je(gt,t)},"setIncludes"),vi=l(function(){return gt},"getIncludes"),Ti=l(function(t){pt=je(pt,t)},"setExcludes"),bi=l(function(){return pt},"getExcludes"),xi=l(function(){return te},"getLinks"),wi=l(function(t){vt=t,ee.push(t)},"addSection"),_i=l(function(){return ee},"getSections"),Di=l(function(){let t=he(),e=10,n=0;while(!t&&n<e)t=he(),n++;return Ct=X,Ct},"getTasks"),Ge=l(function(t,e,n,s){let r=t.format(e.trim()),f=t.format("YYYY-MM-DD");if(s.includes(r)||s.includes(f))return!1;if(n.includes("weekends")&&(t.isoWeekday()===fe[Mt]||t.isoWeekday()===fe[Mt]+1))return!0;if(n.includes(t.format("dddd").toLowerCase()))return!0;return n.includes(r)||n.includes(f)},"isInvalidDate"),Si=l(function(t){ne=t},"setWeekday"),Ci=l(function(){return ne},"getWeekday"),Mi=l(function(t){Mt=t},"setWeekend"),Xe=l(function(t,e,n,s){if(!n.length||t.manualEndTime)return;let r;if(t.startTime instanceof Date)r=Q.default(t.startTime);else r=Q.default(t.startTime,e,!0);r=r.add(1,"d");let f;if(t.endTime instanceof Date)f=Q.default(t.endTime);else f=Q.default(t.endTime,e,!0);let[y,w]=Ei(r,f,e,n,s);t.endTime=y.toDate(),t.renderEndTime=w},"checkTaskDates"),Ei=l(function(t,e,n,s,r){let f=!1,y=null,w=e.add(1e4,"d");while(t<=e){if(!f)y=e.toDate();if(f=Ge(t,n,s,r),f){if(e=e.add(1,"d"),e>w)throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.")}t=t.add(1,"d")}return[e,y]},"fixTaskDates"),qt=l(function(t,e,n){if(n=n.trim(),l((w)=>{let D=w.trim();return D==="x"||D==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(n))return new Date(Number(n));let f=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let w=null;for(let R of f.groups.ids.split(" ")){let Y=lt(R);if(Y!==void 0&&(!w||Y.endTime>w.endTime))w=Y}if(w)return w.endTime;let D=new Date;return D.setHours(0,0,0,0),D}let y=Q.default(n,e.trim(),!0);if(y.isValid())return y.toDate();else{nt.debug("Invalid date:"+n),nt.debug("With date format:"+e.trim());let w=new Date(n);if(w===void 0||isNaN(w.getTime())||w.getFullYear()<-1e4||w.getFullYear()>1e4)throw Error("Invalid date:"+n);return w}},"getStartDate"),Ue=l(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());if(e!==null)return[Number.parseFloat(e[1]),e[2]];return[NaN,"ms"]},"parseDuration"),qe=l(function(t,e,n,s=!1){n=n.trim();let f=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let Y=null;for(let z of f.groups.ids.split(" ")){let B=lt(z);if(B!==void 0&&(!Y||B.startTime<Y.startTime))Y=B}if(Y)return Y.startTime;let H=new Date;return H.setHours(0,0,0,0),H}let y=Q.default(n,e.trim(),!0);if(y.isValid()){if(s)y=y.add(1,"d");return y.toDate()}let w=Q.default(t),[D,R]=Ue(n);if(!Number.isNaN(D)){let Y=w.add(D,R);if(Y.isValid())w=Y}return w.toDate()},"getEndDate"),Dt=0,yt=l(function(t){if(t===void 0)return Dt=Dt+1,"task"+Dt;return t},"parseId"),Ii=l(function(t,e){let n;if(e.substr(0,1)===":")n=e.substr(1,e.length);else n=e;let s=n.split(","),r={};ae(s,r,Be);for(let y=0;y<s.length;y++)s[y]=s[y].trim();let f="";switch(s.length){case 1:r.id=yt(),r.startTime=t.endTime,f=s[0];break;case 2:r.id=yt(),r.startTime=qt(void 0,tt,s[0]),f=s[1];break;case 3:r.id=yt(s[0]),r.startTime=qt(void 0,tt,s[1]),f=s[2];break;default:}if(f)r.endTime=qe(r.startTime,tt,f,bt),r.manualEndTime=Q.default(f,"YYYY-MM-DD",!0).isValid(),Xe(r,tt,pt,gt);return r},"compileData"),Yi=l(function(t,e){let n;if(e.substr(0,1)===":")n=e.substr(1,e.length);else n=e;let s=n.split(","),r={};ae(s,r,Be);for(let f=0;f<s.length;f++)s[f]=s[f].trim();switch(s.length){case 1:r.id=yt(),r.startTime={type:"prevTaskEnd",id:t},r.endTime={data:s[0]};break;case 2:r.id=yt(),r.startTime={type:"getStartDate",startData:s[0]},r.endTime={data:s[1]};break;case 3:r.id=yt(s[0]),r.startTime={type:"getStartDate",startData:s[1]},r.endTime={data:s[2]};break;default:}return r},"parseData"),Zt,St,X=[],Ze={},$i=l(function(t,e){let n={section:vt,type:vt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=Yi(St,e);if(n.raw.startTime=s.startTime,n.raw.endTime=s.endTime,n.id=s.id,n.prevTaskId=St,n.active=s.active,n.done=s.done,n.crit=s.crit,n.milestone=s.milestone,n.vert=s.vert,n.vert)n.order=-1;else n.order=Ut,Ut++;let r=X.push(n);St=n.id,Ze[n.id]=r-1},"addTask"),lt=l(function(t){let e=Ze[t];return X[e]},"findTaskById"),Li=l(function(t,e){let n={section:vt,type:vt,description:t,task:t,classes:[]},s=Ii(Zt,e);n.startTime=s.startTime,n.endTime=s.endTime,n.id=s.id,n.active=s.active,n.done=s.done,n.crit=s.crit,n.milestone=s.milestone,n.vert=s.vert,Zt=n,Ct.push(n)},"addTaskOrg"),he=l(function(){let t=l(function(n){let s=X[n],r="";switch(X[n].raw.startTime.type){case"prevTaskEnd":{let f=lt(s.prevTaskId);s.startTime=f.endTime;break}case"getStartDate":if(r=qt(void 0,tt,X[n].raw.startTime.startData),r)X[n].startTime=r;break}if(X[n].startTime){if(X[n].endTime=qe(X[n].startTime,tt,X[n].raw.endTime.data,bt),X[n].endTime)X[n].processed=!0,X[n].manualEndTime=Q.default(X[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Xe(X[n],tt,pt,gt)}return X[n].processed},"compileTask"),e=!0;for(let[n,s]of X.entries())t(n),e=e&&s.processed;return e},"compileTasks"),Ai=l(function(t,e){let n=e;if(ot().securityLevel!=="loose")n=Ne.sanitizeUrl(e);t.split(",").forEach(function(s){if(lt(s)!==void 0)Ke(s,()=>{window.open(n,"_self")}),te.set(s,n)}),Qe(t,"clickable")},"setLink"),Qe=l(function(t,e){t.split(",").forEach(function(n){let s=lt(n);if(s!==void 0)s.classes.push(e)})},"setClass"),Fi=l(function(t,e,n){if(ot().securityLevel!=="loose")return;if(e===void 0)return;let s=[];if(typeof n==="string"){s=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<s.length;f++){let y=s[f].trim();if(y.startsWith('"')&&y.endsWith('"'))y=y.substr(1,y.length-2);s[f]=y}}if(s.length===0)s.push(t);if(lt(t)!==void 0)Ke(t,()=>{Pe.runFunc(e,...s)})},"setClickFun"),Ke=l(function(t,e){se.push(function(){let n=mt?`${mt}-${t}`:t,s=document.querySelector(`[id="${n}"]`);if(s!==null)s.addEventListener("click",function(){e()})},function(){let n=mt?`${mt}-${t}`:t,s=document.querySelector(`[id="${n}-text"]`);if(s!==null)s.addEventListener("click",function(){e()})})},"pushFun"),Oi=l(function(t,e,n){t.split(",").forEach(function(s){Fi(s,e,n)}),Qe(t,"clickable")},"setClickEvent"),Wi=l(function(t){se.forEach(function(e){e(t)})},"bindFunctions"),Vi={getConfig:l(()=>ot().gantt,"getConfig"),clear:ii,setDateFormat:ui,getDateFormat:gi,enableInclusiveEndDates:di,endDatesAreInclusive:fi,enableTopAxis:hi,topAxisEnabled:mi,setAxisFormat:ri,getAxisFormat:ni,setTickInterval:ai,getTickInterval:oi,setTodayMarker:ci,getTodayMarker:li,setAccTitle:ve,getAccTitle:Te,setDiagramTitle:we,getDiagramTitle:_e,setDiagramId:si,setDisplayMode:ki,getDisplayMode:yi,setAccDescription:be,getAccDescription:xe,addSection:wi,getSections:_i,getTasks:Di,addTask:$i,findTaskById:lt,addTaskOrg:Li,setIncludes:pi,getIncludes:vi,setExcludes:Ti,getExcludes:bi,setClickEvent:Oi,setLink:Ai,getLinks:xi,bindFunctions:Wi,parseDuration:Ue,isInvalidDate:Ge,setWeekday:Si,getWeekday:Ci,setWeekend:Mi};function ae(t,e,n){let s=!0;while(s)s=!1,n.forEach(function(r){let f="^\\s*"+r+"\\s*$",y=new RegExp(f);if(t[0].match(y))e[r]=!0,t.shift(1),s=!0})}l(ae,"getTaskTags");kt.default.extend(Je.default);var Pi=l(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),me={monday:$e,tuesday:Le,wednesday:Ae,thursday:Fe,friday:Oe,saturday:We,sunday:Ye},Ni=l((t,e)=>{let n=[...t].map(()=>-1/0),s=[...t].sort((f,y)=>f.startTime-y.startTime||f.order-y.order),r=0;for(let f of s)for(let y=0;y<n.length;y++)if(f.startTime>=n[y]){if(n[y]=f.endTime,f.order=y+e,y>r)r=y;break}return r},"getMaxIntersections"),rt,Pt=1e4,Ri=l(function(t,e,n,s){let r=ot().gantt;s.db.setDiagramId(e);let f=ot().securityLevel,y;if(f==="sandbox")y=Tt("#i"+e);let w=f==="sandbox"?Tt(y.nodes()[0].contentDocument.body):Tt("body"),D=f==="sandbox"?y.nodes()[0].contentDocument:document,R=D.getElementById(e);if(rt=R.parentElement.offsetWidth,rt===void 0)rt=1200;if(r.useWidth!==void 0)rt=r.useWidth;let Y=s.db.getTasks(),H=Y.filter((k)=>!k.vert),z=[];for(let k of H)z.push(k.type);z=O(z);let B={},x=2*r.topPadding;if(s.db.getDisplayMode()==="compact"||r.displayMode==="compact"){let k={};for(let v of H)if(k[v.section]===void 0)k[v.section]=[v];else k[v.section].push(v);let p=0;for(let v of Object.keys(k)){let T=Ni(k[v],p)+1;p+=T,x+=T*(r.barHeight+r.barGap),B[v]=T}}else{x+=H.length*(r.barHeight+r.barGap);for(let k of z)B[k]=H.filter((p)=>p.type===k).length}R.setAttribute("viewBox","0 0 "+rt+" "+x);let _=w.select(`[id="${e}"]`),b=Ve().domain([Se(Y,function(k){return k.startTime}),De(Y,function(k){return k.endTime})]).rangeRound([0,rt-r.leftPadding-r.rightPadding]);function F(k,p){let v=k.startTime,T=p.startTime,a=0;if(v>T)a=1;else if(v<T)a=-1;return a}l(F,"taskCompare"),Y.sort(F),U(Y,rt,x),ge(_,x,rt,r.useMaxWidth),_.append("text").text(s.db.getDiagramTitle()).attr("x",rt/2).attr("y",r.titleTopMargin).attr("class","titleText");function U(k,p,v){let T=r.barHeight,a=T+r.barGap,h=r.topPadding,d=r.leftPadding,u=Ie().domain([0,z.length]).range(["#00B9FA","#F95002"]).interpolate(Ee);L(a,h,d,p,v,k,s.db.getExcludes(),s.db.getIncludes()),m(d,h,p,v),q(k,a,h,d,T,u,p,v),I(a,h,d,T,u),V(d,h,p,v)}l(U,"makeGantt");function q(k,p,v,T,a,h,d){k.sort((o,S)=>o.vert===S.vert?0:o.vert?1:-1);let u=k.filter((o)=>!o.vert),i=[...new Set(u.map((o)=>o.order))].map((o)=>u.find((S)=>S.order===o));_.append("g").selectAll("rect").data(i).enter().append("rect").attr("x",0).attr("y",function(o,S){return S=o.order,S*p+v-2}).attr("width",function(){return d-r.rightPadding/2}).attr("height",p).attr("class",function(o){for(let[S,E]of z.entries())if(o.type===E)return"section section"+S%r.numberSectionStyles;return"section section0"}).enter();let M=_.append("g").selectAll("rect").data(k).enter(),c=s.db.getLinks();if(M.append("rect").attr("id",function(o){return e+"-"+o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){if(o.milestone)return b(o.startTime)+T+0.5*(b(o.endTime)-b(o.startTime))-0.5*a;return b(o.startTime)+T}).attr("y",function(o,S){if(S=o.order,o.vert)return r.gridLineStartPadding;return S*p+v}).attr("width",function(o){if(o.milestone)return a;if(o.vert)return 0.08*a;return b(o.renderEndTime||o.endTime)-b(o.startTime)}).attr("height",function(o){if(o.vert)return u.length*(r.barHeight+r.barGap)+r.barHeight*2;return a}).attr("transform-origin",function(o,S){return S=o.order,(b(o.startTime)+T+0.5*(b(o.endTime)-b(o.startTime))).toString()+"px "+(S*p+v+0.5*a).toString()+"px"}).attr("class",function(o){let E="";if(o.classes.length>0)E=o.classes.join(" ");let P=0;for(let[A,W]of z.entries())if(o.type===W)P=A%r.numberSectionStyles;let N="";if(o.active)if(o.crit)N+=" activeCrit";else N=" active";else if(o.done)if(o.crit)N=" doneCrit";else N=" done";else if(o.crit)N+=" crit";if(N.length===0)N=" task";if(o.milestone)N=" milestone "+N;if(o.vert)N=" vert "+N;return N+=P,N+=" "+E,"task"+N}),M.append("text").attr("id",function(o){return e+"-"+o.id+"-text"}).text(function(o){return o.task}).attr("font-size",r.fontSize).attr("x",function(o){let S=b(o.startTime),E=b(o.renderEndTime||o.endTime);if(o.milestone)S+=0.5*(b(o.endTime)-b(o.startTime))-0.5*a,E=S+a;if(o.vert)return b(o.startTime)+T;let P=this.getBBox().width;if(P>E-S)if(E+P+1.5*r.leftPadding>d)return S+T-5;else return E+T+5;else return(E-S)/2+S+T}).attr("y",function(o,S){if(o.vert)return r.gridLineStartPadding+u.length*(r.barHeight+r.barGap)+60;return S=o.order,S*p+r.barHeight/2+(r.fontSize/2-2)+v}).attr("text-height",a).attr("class",function(o){let S=b(o.startTime),E=b(o.endTime);if(o.milestone)E=S+a;let P=this.getBBox().width,N="";if(o.classes.length>0)N=o.classes.join(" ");let A=0;for(let[et,it]of z.entries())if(o.type===it)A=et%r.numberSectionStyles;let W="";if(o.active)if(o.crit)W="activeCritText"+A;else W="activeText"+A;if(o.done)if(o.crit)W=W+" doneCritText"+A;else W=W+" doneText"+A;else if(o.crit)W=W+" critText"+A;if(o.milestone)W+=" milestoneText";if(o.vert)W+=" vertText";if(P>E-S)if(E+P+1.5*r.leftPadding>d)return N+" taskTextOutsideLeft taskTextOutside"+A+" "+W;else return N+" taskTextOutsideRight taskTextOutside"+A+" "+W+" width-"+P;else return N+" taskText taskText"+A+" "+W+" width-"+P}),ot().securityLevel==="sandbox"){let o;o=Tt("#i"+e);let S=o.nodes()[0].contentDocument;M.filter(function(E){return c.has(E.id)}).each(function(E){var P=S.querySelector("#"+CSS.escape(e+"-"+E.id)),N=S.querySelector("#"+CSS.escape(e+"-"+E.id+"-text"));let A=P.parentNode;var W=S.createElement("a");W.setAttribute("xlink:href",c.get(E.id)),W.setAttribute("target","_top"),A.appendChild(W),W.appendChild(P),W.appendChild(N)})}}l(q,"drawRects");function L(k,p,v,T,a,h,d,u){if(d.length===0&&u.length===0)return;let C,i;for(let{startTime:E,endTime:P}of h){if(C===void 0||E<C)C=E;if(i===void 0||P>i)i=P}if(!C||!i)return;if(kt.default(i).diff(kt.default(C),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let M=s.db.getDateFormat(),c=[],j=null,o=kt.default(C);while(o.valueOf()<=i){if(s.db.isInvalidDate(o,M,d,u))if(!j)j={start:o,end:o};else j.end=o;else if(j)c.push(j),j=null;o=o.add(1,"d")}_.append("g").selectAll("rect").data(c).enter().append("rect").attr("id",(E)=>e+"-exclude-"+E.start.format("YYYY-MM-DD")).attr("x",(E)=>b(E.start.startOf("day"))+v).attr("y",r.gridLineStartPadding).attr("width",(E)=>b(E.end.endOf("day"))-b(E.start.startOf("day"))).attr("height",a-p-r.gridLineStartPadding).attr("transform-origin",function(E,P){return(b(E.start)+v+0.5*(b(E.end)-b(E.start))).toString()+"px "+(P*k+0.5*a).toString()+"px"}).attr("class","exclude-range")}l(L,"drawExcludeDays");function g(k,p,v,T){if(v<=0||k>p)return 1/0;let a=p-k,h=kt.default.duration({[T??"day"]:v}).asMilliseconds();if(h<=0)return 1/0;return Math.ceil(a/h)}l(g,"getEstimatedTickCount");function m(k,p,v,T){let a=s.db.getDateFormat(),h=s.db.getAxisFormat(),d;if(h)d=h;else if(a==="D")d="%d";else d=r.axisFormat??"%Y-%m-%d";let u=Me(b).tickSize(-T+p+r.gridLineStartPadding).tickFormat(Gt(d)),i=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||r.tickInterval);if(i!==null){let M=parseInt(i[1],10);if(isNaN(M)||M<=0)nt.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{let c=i[2],j=s.db.getWeekday()||r.weekday,o=b.domain(),S=o[0],E=o[1],P=g(S,E,M,c);if(P>Pt)nt.warn(`The tick interval "${M}${c}" would generate ${P} ticks, which exceeds the maximum allowed (${Pt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":u.ticks(Nt.every(M));break;case"second":u.ticks(Rt.every(M));break;case"minute":u.ticks(zt.every(M));break;case"hour":u.ticks(Ht.every(M));break;case"day":u.ticks(Bt.every(M));break;case"week":u.ticks(me[j].every(M));break;case"month":u.ticks(jt.every(M));break}}}if(_.append("g").attr("class","grid").attr("transform","translate("+k+", "+(T-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||r.topAxis){let M=Ce(b).tickSize(-T+p+r.gridLineStartPadding).tickFormat(Gt(d));if(i!==null){let c=parseInt(i[1],10);if(isNaN(c)||c<=0)nt.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{let j=i[2],o=s.db.getWeekday()||r.weekday,S=b.domain(),E=S[0],P=S[1];if(g(E,P,c,j)<=Pt)switch(j){case"millisecond":M.ticks(Nt.every(c));break;case"second":M.ticks(Rt.every(c));break;case"minute":M.ticks(zt.every(c));break;case"hour":M.ticks(Ht.every(c));break;case"day":M.ticks(Bt.every(c));break;case"week":M.ticks(me[o].every(c));break;case"month":M.ticks(jt.every(c));break}}}_.append("g").attr("class","grid").attr("transform","translate("+k+", "+p+")").call(M).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(m,"makeGrid");function I(k,p){let v=0,T=Object.keys(B).map((a)=>[a,B[a]]);_.append("g").selectAll("text").data(T).enter().append(function(a){let h=a[0].split(ye.lineBreakRegex),d=-(h.length-1)/2,u=D.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",d+"em");for(let[C,i]of h.entries()){let M=D.createElementNS("http://www.w3.org/2000/svg","tspan");if(M.setAttribute("alignment-baseline","central"),M.setAttribute("x","10"),C>0)M.setAttribute("dy","1em");M.textContent=i,u.appendChild(M)}return u}).attr("x",10).attr("y",function(a,h){if(h>0)for(let d=0;d<h;d++)return v+=T[h-1][1],a[1]*k/2+v*k+p;else return a[1]*k/2+p}).attr("font-size",r.sectionFontSize).attr("class",function(a){for(let[h,d]of z.entries())if(a[0]===d)return"sectionTitle sectionTitle"+h%r.numberSectionStyles;return"sectionTitle"})}l(I,"vertLabels");function V(k,p,v,T){let a=s.db.getTodayMarker();if(a==="off")return;let h=_.append("g").attr("class","today"),d=new Date,u=h.append("line");if(u.attr("x1",b(d)+k).attr("x2",b(d)+k).attr("y1",r.titleTopMargin).attr("y2",T-r.titleTopMargin).attr("class","today"),a!=="")u.attr("style",a.replace(/,/g,";"))}l(V,"drawToday");function O(k){let p={},v=[];for(let T=0,a=k.length;T<a;++T)if(!Object.prototype.hasOwnProperty.call(p,k[T]))p[k[T]]=!0,v.push(k[T]);return v}l(O,"checkUnique")},"draw"),zi={setConf:Pi,draw:Ri},Hi=l((t)=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Bi=Hi,Qi={parser:ei,db:Vi,renderer:zi,styles:Bi};export{Qi as diagram};
