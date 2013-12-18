window["sap-ui-optimized"] = true;
try {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
(function(){if(!window.jQuery){throw new Error("SAPUI5 requires jQuery as a prerequisite (>= version 1.7)")}var _=window;var a=[];var b=undefined;if(parseFloat(jQuery.prototype.jquery)<1.7){a.push("SAPUI5 requires at least jQuery 1.7, current version is "+jQuery.prototype.jquery)}if(jQuery.sap){return}if(jQuery.browser.msie){jQuery.support.cors=true}var c=(function(){var T,U,R,i=/\/download\/configurator[\/\?]/,l=/\/(sap-ui-(core|custom|boot)(-.*)?)\.js([?#]|$)/,o=/^(.*\/)?resources\//;jQuery("script[src]").each(function(){var v=this.getAttribute("src"),m;if(m=v.match(i)){T=this;U=v;R=v.substring(0,m.index)+"/resources/";return false}else if(m=v.match(l)){T=this;U=v;R=v.substring(0,m.index)+"/";return false}else if(this.id=='sap-ui-bootstrap'&&(m=v.match(o))){T=this;U=v;R=m[0];return false}});return{tag:T,url:U,resourceRoot:R}})();(function(){if(/sap-bootstrap-debug=(true|x|X)/.test(location.search)){window["sap-ui-bRestart"]=false;window["sap-ui-sRestartUrl"]="http://localhost:8080/sapui5/resources/sap-ui-core.js";function l(){var o=c.tag,m="<script src=\""+window["sap-ui-sRestartUrl"]+"\"";jQuery.each(o.attributes,function(i,A){if(A.nodeName.indexOf("data-sap-ui-")==0){m+=" "+A.nodeName+"=\""+A.nodeValue+"\""}});m+="></script>";o.parentNode.removeChild(o);jQuery("#sap-ui-bootstrap-cachebusted").remove();window["sap-ui-config"]&&window["sap-ui-config"].resourceRoots&&(window["sap-ui-config"].resourceRoots[""]=undefined);document.write(m);var R=new Error("Aborting UI5 bootstrap and restarting from: "+window["sap-ui-sRestartUrl"]);R.name="Restart";delete window["sap-ui-bRestart"];delete window["sap-ui-sRestartUrl"];throw R};debugger;if(window["sap-ui-bRestart"]){l()}}})();(function(){var D=/sap-ui-debug=(true|x|X)/.test(location.search),i=window["sap-ui-optimized"];try{D=D||(window.localStorage.getItem("sap-ui-debug")=="X")}catch(e){}window["sap-ui-debug"]=D;if(/-dbg\.js([?#]|$)/.test(c.url)){window["sap-ui-loaddbg"]=true;window["sap-ui-debug"]=true}if(i&&D){var l=c.url.replace(/\/(?:sap-ui-cachebuster\/)?([^\/]+)\.js/,"/$1-dbg.js");window["sap-ui-optimized"]=false;window["sap-ui-loaddbg"]=true;document.write("<script type=\"text/javascript\" src=\""+l+"\"></script>");var R=new Error("Aborting UI5 bootstrap and restarting from: "+l);R.name="Restart";throw R}})();var C=_["sap-ui-config"]=(function(){function l(o){jQuery.each(o,function(i,v){var m=i.toLowerCase();if(!o.hasOwnProperty(m)){o[m]=v;delete o[i]}});return o}var w=l(_["sap-ui-config"]||{}),y=c.tag;w.resourceroots=w.resourceroots||{};w.themeroots=w.themeroots||{};w.resourceroots['']=w.resourceroots['']||c.resourceRoot;w['xx-loadallmode']=/(^|\/)(sap-?ui5|[^\/]+-all).js([?#]|$)/.test(c.url);if(y){var z=y.getAttribute("data-sap-ui-config");if(z){try{jQuery.extend(w,l((new Function("return {"+z+"};"))()))}catch(e){a.push("failed to parse data-sap-ui-config attribute: "+(e.message||e))}}jQuery.each(y.attributes,function(i,o){var m=o.name.match(/^data-sap-ui-(.*)$/);if(m){m=m[1].toLowerCase();if(m==='resourceroots'){jQuery.extend(w[m],jQuery.parseJSON(o.value))}else if(m==='theme-roots'){jQuery.extend(w.themeroots,jQuery.parseJSON(o.value))}else if(m!=='config'){w[m]=o.value}}})}return w}());if(C.noconflict===true||C.noconflict==="true"||C.noconflict==="x"){jQuery.noConflict()}jQuery.sap={};jQuery.sap.debug=function(i){if(!window.localStorage){return null}function l(U){alert("Usage of debug sources is "+(U?"on":"off")+" now.\nFor the change to take effect, you need to reload the page.")};if(i===true){window.localStorage.setItem("sap-ui-debug","X");l(true)}else if(i===false){window.localStorage.removeItem("sap-ui-debug");l(false)}return window.localStorage.getItem("sap-ui-debug")=="X"};(function(){var F=0,l=1,W=2,I=3,D=4,T=5;var o=(window.top==window)?"":"["+window.location.pathname.split('/').slice(-1)[0]+"] ";var y=[];var z={'':l};var A=null;function B(i,w){return("000"+String(i)).slice(-w)}function G(i){return(!i||isNaN(z[i]))?z['']:z[i]}function H(){if(!A){A={listeners:[],onLogEntry:function(m){for(var i=0;i<A.listeners.length;i++){if(A.listeners[i].onLogEntry){A.listeners[i].onLogEntry(m)}}},attach:function(i,m){if(m){A.listeners.push(m);if(m.onAttachToLog){m.onAttachToLog(i)}}},detach:function(m,v){for(var i=0;i<A.listeners.length;i++){if(A.listeners[i]===v){if(v.onDetachFromLog){v.onDetachFromLog(m)}A.listeners.splice(i,1);return}}}}}return A}function J(i,m,v,w){if(i<=G(w)){var N=new Date(),O={time:B(N.getHours(),2)+":"+B(N.getMinutes(),2)+":"+B(N.getSeconds(),2),date:B(N.getFullYear(),4)+"-"+B(N.getMonth()+1,2)+"-"+B(N.getDate(),2),timestamp:N.getTime(),level:i,message:m||"",details:v||"",component:w||""};y.push(O);if(A){A.onLogEntry(O)}if(window.console){var Q=O.date+" "+O.time+" "+o+O.message+" - "+O.details+" "+O.component;switch(i){case F:case l:console.error(Q);break;case W:console.warn(Q);break;case I:console.info?console.info(Q):console.log(Q);break;case D:console.debug?console.debug(Q):console.log(Q);break;case T:console.trace?console.trace(Q):console.log(Q);break}}return O}}function K(i){this.fatal=function(m,v,w){J(F,m,v,w||i);return this};this.error=function error(m,v,w){J(l,m,v,w||i);return this};this.warning=function warning(m,v,w){J(W,m,v,w||i);return this};this.info=function info(m,v,w){J(I,m,v,w||i);return this};this.debug=function debug(m,v,w){J(D,m,v,w||i);return this};this.trace=function trace(m,v,w){J(T,m,v,w||i);return this};this.setLevel=function setLevel(m,w){w=w||i||'';z[w]=m;var N=[];jQuery.each(jQuery.sap.log.LogLevel,function(O,v){N[v]=O});J(I,"Changing log level "+(w?"for '"+w+"' ":"")+"to "+N[m],"","jQuery.sap.log");return this};this.getLevel=function getLevel(m){return G(m||i)}}jQuery.sap.log=jQuery.extend(new K(),{Level:{NONE:F-1,FATAL:F,ERROR:l,WARNING:W,INFO:I,DEBUG:D,TRACE:T,ALL:(T+1)},getLogger:function(i){return new K(i)},getLogEntries:function(){return y.slice()},addLogListener:function(A){H().attach(this,A);return this},removeLogListener:function(A){H().detach(this,A);return this}});jQuery.sap.log.LogLevel=jQuery.sap.log.Level;jQuery.sap.log.getLog=jQuery.sap.log.getLogEntries;jQuery.sap.assert=function(R,m){if(!R){if(window.console&&console.assert){console.assert(R,o+m)}else{jQuery.sap.log.debug("[Assertions] "+m)}}};C.loglevel=C.loglevel||(function(){var m=/(?:\?|&)sap-ui-log(?:L|-l)evel=([^&]*)/.exec(window.location.search);return m&&m[1]}());if(C.loglevel){jQuery.sap.log.setLevel(jQuery.sap.log.Level[C.loglevel.toUpperCase()]||parseInt(C.loglevel,10))}jQuery.sap.log.info("SAP Logger started.");jQuery.each(a,function(i,e){jQuery.sap.log.error(e)});a=null}());jQuery.sap.factory=function factory(o){function F(){}F.prototype=o;return F};jQuery.sap.newObject=function newObject(o){return new(jQuery.sap.factory(o))()};jQuery.sap.getter=function getter(v){return function(){return v}};jQuery.sap.getObject=function getObject(N,m,o){var O=o||_,v=(N||"").split("."),l=v.length,w=isNaN(m)?0:l-m,i;for(i=0;O&&i<l;i++){if(!O[v[i]]&&i<w){O[v[i]]={}}O=O[v[i]]}return O};jQuery.sap.setObject=function(N,v,o){var O=o||_,m=(N||"").split("."),l=m.length,i;if(l>0){for(i=0;O&&i<l-1;i++){if(!O[m[i]]){O[m[i]]={}}O=O[m[i]]}O[m[l-1]]=v}};function S(N,i,T){var l=[],o=0,F=0,m;this.startTask=function(w){var I=l.length;l[I]={name:w,finished:false};o++;return I};this.finishTask=function(I,w){if(!l[I]||l[I].finished){throw new Error("trying to finish non existing or already finished task")}l[I].finished=true;o--;if(w===false){F++}if(o===0){jQuery.sap.log.info("Sync point '"+N+"' finished (tasks:"+l.length+", open:"+o+", failures:"+F+")");if(m){clearTimeout(m);m=null};v()}};function v(){i&&i(o,F);i=null}if(!isNaN(T)){m=setTimeout(function(){jQuery.sap.log.info("Sync point '"+N+"' timed out (tasks:"+l.length+", open:"+o+", failures:"+F+")");v()},T)};jQuery.sap.log.info("Sync point '"+N+"' created"+(T?"(timeout after "+T+" ms)":""))}jQuery.sap.syncPoint=function(N,i,T){return new S(N,i,T)};var u={'':'resources/'};if(C.resourceroots){jQuery.extend(true,u,C.resourceroots)}jQuery.sap.log.info("URL prefixes set to:");for(var n in u){jQuery.sap.log.info("  "+(n?"'"+n+"'":"(default)")+" : "+u[n])}var d=function d(m,i){var o=m.split(/\./);for(var l=o.length;l>=0;l--){var N=o.slice(0,l).join('.');if(u[N]){var R=u[N];if(l<o.length){R+=o.slice(l).join("/")}if(R.slice(-1)==='/'){R=R.slice(0,-1)}return R+(i||'')}}};var f=d;var d=function HACK_modified_getModulePath(m,i){if(m.indexOf("jquery.sap.")===0){m=m.replace(/\./gi,"%2E");var l=f(m,i);return l.replace(/%2E/gi,".")}return f(m,i)};jQuery.sap.getModulePath=function(m,i){return d(m,i)};jQuery.sap.registerModulePath=function registerModulePath(m,U){U=U||'.';if(U.slice(-1)!='/'){U+='/'}u[m]=U;jQuery.sap.log.info("sap.registerModulePath ('"+m+"', '"+U+"')")};var M={};var g=false;var h=[];var L="";jQuery.sap.isDeclared=function isDeclared(m){return M[m]&&M[m].state!=="preloaded"};jQuery.sap.getAllDeclaredModules=function(){var m=[];jQuery.each(M,function(i,v){if(jQuery.sap.isDeclared(i)){m.push(i)}});return m};jQuery.sap.declare=function declare(m,i){if(g){jQuery.sap.log.debug(L+"sap.declare '"+m+"'")}var T="";if(typeof(m)==="object"){T=m.type?"."+m.type:"";m=m.modName+T}if(!jQuery.sap.isDeclared(m)){if(!M[m]){M[m]={}}M[m].state='ready'}if(h.length===0&&m!=="jquery.sap.global"){h.push(m);M[m].url=M[m].url||b}if(!M[m].parent){M[m].parent=h[h.length-1]}if(i!==false){jQuery.sap.getObject(m,1)}return this};function r(m){if(arguments.length>1){for(var i=0;i<arguments.length;i++){jQuery.sap.require(arguments[i])}return this}var T="";if(typeof(m)==="object"){T=m.type?"."+m.type:"";m=m.modName+T}if(g){jQuery.sap.log.debug(L+"require '"+m+"' of type '"+T+"'")}if(M[m]){if(M[m].state==='preloaded'){M[m].state='loaded';k(m)}if(M[m].state==='ready'){if(g){jQuery.sap.log.debug("module '"+m+"' has already been loaded (skipped).")}return this}else if(M[m].state==='failed'){throw new Error("found in negative cache: '"+m+"' from "+M[m].url+": "+M[m].error)}else{return this}}var l=M[m]={state:'loading'};var B=T?m.substring(0,m.length-T.length):m;if(window["sap-ui-loaddbg"]){l.url=jQuery.sap.getModulePath(B+"-dbg",T+'.js');if(g){jQuery.sap.log.debug("loading debug version of '"+m+"' from '"+l.url+"'")}jQuery.ajax({url:l.url,dataType:'text',async:false,success:function(o,v,w){l.state='loaded';l.data=o},error:function(o,v,w){l.state='failed';l.error=o?o.status+" - "+o.statusText:v}})}if(l.state!=='loaded'){l.url=jQuery.sap.getModulePath(B,T+'.js');if(g){jQuery.sap.log.debug("loading '"+m+"' from '"+l.url+"'")}jQuery.ajax({url:l.url,dataType:'text',async:false,success:function(o,v,w){l.state='loaded';l.data=o},error:function(o,v,w){l.state='failed';l.error=o?o.status+" - "+o.statusText:v}})}if(l.state==='loaded'){k(m)}if(l.state!=='ready'){throw new Error("failed to load '"+m+"' from "+l.url+": "+l.error)}return this}var j=512*1024;function k(m){var i=M[m];if(i&&i.state==='loaded'&&typeof i.data!=="undefined"){try{if(g){var o=L;L=L+"  ";jQuery.sap.log.debug(L+"executing '"+m+"'")}i.state='executing';h.push(m);if(typeof i.data==="function"){i.data.apply(window)}else if(_.execScript&&(!i.data||i.data.length<j)){try{i.data&&_.execScript(i.data)}catch(e){h.pop();jQuery.sap.globalEval(i.data);throw e}}else{_.eval(i.data+"\r\n//@ sourceURL="+i.url)}h.pop();i.state='ready';i.data=undefined;if(g){jQuery.sap.log.debug(L+"finished executing '"+m+"'");L=o}}catch(l){i.state='failed';i.error=((l.toString&&l.toString())||l.message)+(l.line?"(line "+l.line+")":"");i.data=undefined;if(window["sap-ui-debug"]&&(C["xx-showloaderrors"]||/sap-ui-xx-show(L|-l)oad(E|-e)rrors=(true|x|X)/.test(location.search))){jQuery.sap.log.error("error while evaluating "+m+", embedding again via script tag to enforce a stack trace (see below)");jQuery.sap.includeScript(i.url);return}}}}jQuery.sap.require=r;var p={};jQuery.sap.preloadModules=function(i,A,o){if(p[i])return;p[i]=true;var U=jQuery.sap.getModulePath(i,".json");jQuery.sap.log.debug("preload file "+i);var T=o&&o.startTask("load "+i);jQuery.ajax({dataType:"json",async:A,url:U,success:function(l){if(l){l.url=U}jQuery.sap.registerPreloadedModules(l,A,o);o&&o.finishTask(T)},error:function(l){o&&o.finishTask(T,false)}})};jQuery.sap.registerPreloadedModules=function(D,A,o){if(g){jQuery.sap.log.debug(L+"adding preloaded modules from '"+D.url+"'")}if(D.name){p[D.name]=true}jQuery.each(D.modules,function(N,i){if(!M[N]){M[N]={state:'preloaded',url:D.url+"/"+N,data:i}}});if(D.dependencies){jQuery.each(D.dependencies,function(i,m){jQuery.sap.preloadModules(m,A,o)})}};jQuery.sap.declare("jquery.sap.global",false);function q(o){var i=window.document.getElementsByTagName("head")[0];if(i){i.appendChild(o)}}jQuery.sap.includeScript=function includeScript(U,i){var o=window.document.createElement("script");o.src=U;o.type="text/javascript";if(i){o.id=i}q(o)};jQuery.sap.includeStyleSheet=function includeStyleSheet(U,i){var l=document.createElement("link");l.type="text/css";l.rel="stylesheet";l.href=U;if(i){l.id=i}l.onload=function(){jQuery(l).attr("sap-ui-ready","true")};l.onerror=function(){jQuery(l).attr("sap-ui-ready","false")};var o,R;if((i&&(o=jQuery.sap.domById(i))&&(R=o.tagName==="LINK"&&o.rel==="stylesheet"))||window.document.body){if(R){jQuery(o).replaceWith(l)}else{q(l)}}else{q(l)}};if(!(C.productive===true||C.productive==="true"||C.productive==="x")){jQuery(function(){jQuery(document.body).keydown(function(e){if(e.keyCode==80&&e.shiftKey&&e.altKey&&e.ctrlKey){try{jQuery.sap.require("sap.ui.debug.TechnicalInfo")}catch(e){return}sap.ui.debug.TechnicalInfo.open(function(){return{modules:M,prefixes:u,config:C}})}})});jQuery(function(){jQuery(document.body).keydown(function(e){if(e.keyCode==83&&e.shiftKey&&e.altKey&&e.ctrlKey){try{jQuery.sap.require("sap.ui.core.support.Support");var o=sap.ui.core.support.Support.getStub();if(o.getType()!=sap.ui.core.support.Support.StubType.APPLICATION){return}o.openSupportTool()}catch(e){}}})})}if(!jQuery.support){jQuery.support={}}jQuery.extend(jQuery.support,{touch:"ontouchend"in document});var P=["Webkit","ms","Moz"];var s=document.documentElement.style;var t=function(l,m){if(jQuery.support[l]===undefined){if(s[m]!==undefined){jQuery.support[l]=true;return}else{m=m.charAt(0).toUpperCase()+m.slice(1);for(var i in P){if(s[P[i]+m]!==undefined){jQuery.support[l]=true;return}}}jQuery.support[l]=false}};t("cssTransforms","transform");t("cssTransforms3d","perspective");t("cssTransitions","transition");t("cssAnimations","animationName");if(jQuery.support.cssGradients===undefined){var E=document.createElement('div'),s=E.style;try{s.backgroundImage="linear-gradient(left top, red, white)";s.backgroundImage="-moz-linear-gradient(left top, red, white)";s.backgroundImage="-webkit-linear-gradient(left top, red, white)";s.backgroundImage="-ms-linear-gradient(left top, red, white)";s.backgroundImage="-webkit-gradient(linear, left top, right bottom, from(red), to(white))"}catch(e){}jQuery.support.cssGradients=(s.backgroundImage&&s.backgroundImage.indexOf("gradient")>-1);E=null}t("flexBoxLayout","boxFlex");t("ie10FlexBoxLayout","flexOrder");t("newFlexBoxLayout","flexGrow");if(!jQuery.support.flexBoxLayout&&!jQuery.support.newFlexBoxLayout&&!jQuery.support.ie10FlexBoxLayout){jQuery.support.useFlexBoxPolyfill=true}else{jQuery.support.useFlexBoxPolyfill=false}if(!jQuery.support.opacity){(function(){var o=jQuery.cssHooks.opacity.set;jQuery.cssHooks.opacity.set=function(i,v){o.apply(this,arguments);if(!jQuery.trim(i.style.filter)){i.style.removeAttribute("filter")}}}())}function x(){function i(I,m,o,v){this.id=I;this.info=m;this.start=o;this.end=v;this.pause=0;this.resume=0;this.duration=0;this.time=0}var A=false;var l=jQuery.ajax;this.getActive=function(){return A};this.setActive=function(o){if(A==o){return A}A=o;if(A){jQuery.ajax=function(m,v){jQuery.sap.measure.start(m.url,"Request for "+m.url);l.apply(this,arguments);jQuery.sap.measure.end(m.url)}}else if(l){jQuery.ajax=l}return A};this.setActive(/sap-ui-measure=(true|x|X)/.test(location.search));this.mMeasurements={};this.start=function(I,m){if(!A){return}var T=new Date().getTime();var o=new i(I,m,T,0);if(o){this.mMeasurements[I]=o;return({id:o.id,info:o.info,start:o.start})}else{return false}};this.pause=function(I){if(!A){return}var T=new Date().getTime();var m=this.mMeasurements[I];if(m&&m.end>0){return false}if(m&&m.pause==0){m.pause=T;if(m.pause>=m.resume&&m.resume>0){m.duration=m.duration+m.pause-m.resume;m.resume=0}else if(m.pause>=m.start){m.duration=m.pause-m.start}}if(m){return({id:m.id,info:m.info,start:m.start,pause:m.pause})}else{return false}};this.resume=function(I){if(!A){return}var T=new Date().getTime();var m=this.mMeasurements[I];if(m&&m.pause>0){m.pause=0;m.resume=T}if(m){return({id:m.id,info:m.info,start:m.start,resume:m.resume})}else{return false}};this.end=function(I){if(!A){return}var T=new Date().getTime();var m=this.mMeasurements[I];if(m&&!m.end){m.end=T;if(m.end>=m.resume&&m.resume>0){m.duration=m.duration+m.end-m.resume;m.resume=0}else if(m.pause>0){m.pause=0}else if(m.end>=m.start){m.duration=m.end-m.start}if(m.end>=m.start){m.time=m.end-m.start}}if(m){return({id:m.id,info:m.info,start:m.start,end:m.end,time:m.time,duration:m.duration})}else{return false}};this.getMeasurement=function(I){if(!A){return}var m=this.mMeasurements[I];if(m){return({id:m.id,info:m.info,start:m.start,end:m.end,time:m.time,duration:m.duration})}else{return false}};this.clear=function(){if(!A){return}this.mMeasurements={};return};this.remove=function(I){if(!A){return}delete this.mMeasurements[I];return};this.getAllMeasurements=function(){if(!A){return}var m=new Array();jQuery.each(this.mMeasurements,function(I,o){m.push({id:o.id,info:o.info,start:o.start,end:o.end,duration:o.duration,time:o.time})});return m};this.add=function(I,m,o,v,T,D){if(!A){return}var w=new i(I,m,o,v);w.time=T;w.duration=D;if(w){this.mMeasurements[I]=w;return({id:w.id,info:w.info,start:w.start,end:w.end,time:w.time,duration:w.duration})}else{return false}}}jQuery.sap.measure=new x()}());
jQuery.sap.globalEval=function(){eval(arguments[0])};
} catch(oError) {
if (oError.name != "Restart") { throw oError; }
}
