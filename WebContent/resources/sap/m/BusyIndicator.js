/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.BusyIndicator");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.BusyIndicator",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Data",defaultValue:null},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"customIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"customIconRotationSpeed":{type:"int",group:"Appearance",defaultValue:1000},"customIconDensityAware":{type:"boolean",group:"",defaultValue:true},"customIconWidth":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"customIconHeight":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:null},"size":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"design":{type:"string",group:"Appearance",defaultValue:'auto'}}}});jQuery.sap.require("sap.ui.core.theming.Parameters");
sap.m.BusyIndicator.prototype.init=function(){this._bUseCanvas=sap.ui.core.theming.Parameters.get("sapMPlatformDependent")!="true";this._bIosStyle=jQuery.os.ios;this._sBColor=sap.ui.core.theming.Parameters.get("sapUiPageBG")||"rgba(0, 0, 0, 0)"};
sap.m.BusyIndicator.prototype.exit=function(){this._cancelAnimation()};
if(window.requestAnimationFrame){sap.m.BusyIndicator.prototype._requestAnimation=function(c){return window.requestAnimationFrame(c)}}else if(window.webkitRequestAnimationFrame){sap.m.BusyIndicator.prototype._requestAnimation=function(c,d){return window.webkitRequestAnimationFrame(c,d)}}else if(window.mozRequestAnimationFrame){sap.m.BusyIndicator.prototype._requestAnimation=function(c){return window.mozRequestAnimationFrame(c)}}else{sap.m.BusyIndicator.prototype._requestAnimation=function(c){return window.setTimeout(c,1000/60)}};
sap.m.BusyIndicator.prototype._cancelAnimation=function(){if(!this._animationId){return}if(window.cancelAnimationFrame){window.cancelAnimationFrame(this._animationId)}else if(window.webkitCancelAnimationFrame){window.webkitCancelAnimationFrame(this._animationId)}else if(window.mozCancelAnimationFrame){window.mozCancelAnimationFrame(this._animationId)}else{window.cancelTimeout(this._animationId)};this._animationId=undefined};
sap.m.BusyIndicator.prototype._animateCanvas=function(){if(!this.oCanvas){return}var c=this.oCanvas.clientWidth,a=this.oCanvas.clientHeight;if(!c||!a){this._animationId=undefined;return}if(c!=this.oCanvas.width){this.oCanvas.setAttribute("width",c)}if(a!=this.oCanvas.height){this.oCanvas.setAttribute("height",a)}var b=this.oCanvas.getContext("2d"),w=this.oCanvas.width,h=this.oCanvas.height,x=Math.round(w/2),y=Math.round(h/2),r=Math.round(x*0.7),t=new Date(),s=0.9*(t.getSeconds()+t.getMilliseconds()/1000)*2*Math.PI,e=s+1.25*Math.PI,d=false,f=window.getComputedStyle(this.oCanvas).color,l=Math.round(w/10)*2;b.clearRect(0,0,w,h);if(jQuery.os.android&&jQuery.os.fVersion==4.1&&!jQuery.browser.chrome){b.strokeStyle=this._sBColor;b.lineWidth=l+2;b.beginPath();b.arc(x,y,r,0,2*Math.PI);b.stroke()}b.strokeStyle=f;b.lineWidth=l;b.beginPath();b.arc(x,y,r,s,e,d);b.stroke();this._animationId=this._requestAnimation(this._fAnimateCallback,this.oCanvas)};
sap.m.BusyIndicator.prototype._doCanvas=function(){this.oCanvas=jQuery.sap.domById(this.getId()+"-canvas");this._fAnimateCallback=jQuery.proxy(this._animateCanvas,this);this._animationId=this._requestAnimation(this._fAnimateCallback,this.oCanvas)};
sap.m.BusyIndicator.prototype._doCustomIcon=function(){if(this.getCustomIconRotationSpeed()){var r=this.getCustomIconRotationSpeed()+"ms";this.$().children('img').css("-webkit-animation-duration",r).css("animation-duration",r)}};
sap.m.BusyIndicator.prototype._doPlatformDependent=function(){var $=this.$();var p=this.getParent()?this.getParent()._context:'';if(!this._bIosStyle){if(!this.getCustomIcon()&&this.$().parent('.sapMBusyDialog').length===0&&p!=='header'){var f=true;while($.css('background-color')==="rgba(0, 0, 0, 0)"){$=$.parent();if($.parent().length==0){f=false;break}}var b=f?$.css('background-color'):this._sBColor;this.$().children().children('.sapMSpinBar3').children('.sapMSpinBar4').css('background-color',b)}}};
sap.m.BusyIndicator.prototype.onBeforeRendering=function(){this._cancelAnimation()};
sap.m.BusyIndicator.prototype.onAfterRendering=function(){if(this.getCustomIcon()){this._doCustomIcon()}else if(this._bUseCanvas){this._doCanvas()}else{this._doPlatformDependent()}};
sap.m.BusyIndicator.prototype.setCustomIconRotationSpeed=function(s){if(s){if(s!==this.getCustomIconRotationSpeed()){this.setProperty("customIconRotationSpeed",s,true)}}return this};
sap.m.BusyIndicator.prototype.setDesign=function(d){this.setProperty("design",d,true);this.$().toggleClass("sapMBusyIndicatorLight",(this.getDesign()==="light"));this.$().toggleClass("sapMBusyIndicatorDark",(this.getDesign()==="dark"))};
sap.m.BusyIndicator.prototype.setVisible=function(v){this.setProperty("visible",v,true);if(!this.getDomRef()){return}this.getDomRef().style.visibility=v?"visible":"hidden";if(v&&!this._animationId){this._animateCanvas()}return this}
