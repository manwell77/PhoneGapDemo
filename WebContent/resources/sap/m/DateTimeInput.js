/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.DateTimeInput");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.InputBase");sap.m.InputBase.extend("sap.m.DateTimeInput",{metadata:{library:"sap.m",properties:{"type":{type:"sap.m.DateTimeInputType",group:"Data",defaultValue:sap.m.DateTimeInputType.Date},"displayFormat":{type:"string",group:"Appearance",defaultValue:null},"valueFormat":{type:"string",group:"Data",defaultValue:null},"dateValue":{type:"object",group:"Data",defaultValue:null}},events:{"change":{}}}});sap.m.DateTimeInput.M_EVENTS={'change':'change'};jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.model.type.Date");!function(p,$){var o=sap.m.getLocaleData(),h=(function(){if(sap.ui.core.theming.Parameters.get("sapMPlatformDependent")!="true"){return false}if($.os.blackberry||$.browser.msie||($.os.android&&$.os.fVersion<=4.1&&!$.browser.chrome)){return false}}());$.extend(p,{_hasChangeEventBug:jQuery.support.touch&&$.os.ios&&$.os.fVersion<6,_hasChangeEvent:true,_origin:"value",_super:sap.m.InputBase.prototype,_types:{Date:{isNative:h,valueFormat:o.getDatePattern("short"),displayFormat:o.getDatePattern("medium"),nativeFormat:"yyyy-MM-dd",nativeType:"date"},Time:{isNative:h,valueFormat:o.getTimePattern("short"),displayFormat:o.getTimePattern("short"),nativeFormat:"HH:mm:ss",nativeType:"time"},DateTime:{isNative:h,valueFormat:o.getDateTimePattern("short"),displayFormat:o.getDateTimePattern("short"),nativeFormat:"yyyy-MM-ddTHH:mm:ss"+(jQuery.os.ios?".S":""),nativeType:"datetime-local"}}});$.each(["Time","Date"],function(n,t){$.each(["valueFormat","displayFormat"],function(){var T=p._types;T.DateTime[this]=T.DateTime[this].replace("{"+n+"}",T[t][this])})})}(sap.m.DateTimeInput.prototype,jQuery);
sap.m.DateTimeInput.prototype.onBeforeRendering=function(){this._super.onBeforeRendering.call(this);if(!this.mProperties.hasOwnProperty("type")){this.setType("Date")}};
sap.m.DateTimeInput.prototype.onAfterRendering=function(){this._super.onAfterRendering.call(this);if(!this._hasChangeEvent){this._$input.bind("blur.input focus.input",this._changeProxy)}if(!this.isNative()){jQuery.sap.require("sap.m.DateTimeCustom");this._$input[0].type="text";this._$input.scroller(this._getScrollerConfig())}else{this._$input[0].type=this._types[this.getType()].nativeType}this._showValue()};
sap.m.DateTimeInput.prototype.setValue=function(v){this.setProperty("value",v);this._origin="value";this._getFormatFromBinding();return this};
sap.m.DateTimeInput.prototype.setDateValue=function(v){this._isDate(v);this._origin="dateValue";return this.setProperty("dateValue",v)};
sap.m.DateTimeInput.prototype.getDateValue=function(){var v=this.getProperty("value");if(!v){return null}return sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).parse(this.getProperty("value"))};
sap.m.DateTimeInput.prototype.getDisplayFormat=function(){return this.getProperty("displayFormat")||this._types[this.getType()].displayFormat};
sap.m.DateTimeInput.prototype.getValueFormat=function(){return this.getProperty("valueFormat")||this._types[this.getType()].valueFormat};
sap.m.DateTimeInput.prototype.getNativeFormat=function(){return this._types[this.getType()].nativeFormat};
sap.m.DateTimeInput.prototype.isNative=function(t){var T=this._types[t||this.getType()];if(typeof T.isNative=="undefined"){T.isNative=this._hasNativeSupport()}return T.isNative};
sap.m.DateTimeInput.prototype.setType=function(t){this.setProperty("type",t);delete this._hasChangeEvent;delete this._showLabelAsPlaceholder;if(this.isNative()){if(this._hasChangeEventBug){this._hasChangeEvent=false}if(this._showLabelAsPlaceholder===null){this._showLabelAsPlaceholder=true}}return this};
sap.m.DateTimeInput.prototype._isDate=function(v){if(!sap.m.isDate(v)){throw new Error("Type Error: Expected JavaScript Date Object for property dateValue of "+this)}return true};
sap.m.DateTimeInput.prototype._onChange=function(e){var d,n=this._$input.val(),o=this.getProperty("value");if(n){if(!this.isNative()){d=this._$input.scroller("getDate");e&&this._reformat&&this._$input.val(sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getDisplayFormat()}).format(d))}else{n=this._$input.val();d=sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getNativeFormat()}).parse(n)}if(!isNaN(d)){n=sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).format(d)}else{n="";d=null}}if(e&&e.type!="change"&&o==n){return}this.setProperty("value",n,true);this._setLabelVisibility();if(e&&e.type!="focus"){this.fireChange({newValue:n,newDateValue:d})}};
sap.m.DateTimeInput.prototype._unbind=function(){this._super._unbind.call(this);if(this._$input instanceof jQuery&&!this.isNative()&&this._$input.scroller){this._$input.scroller("destroy")}};
sap.m.DateTimeInput.prototype._hasNativeSupport=function(t){var s,u=":)",e=document.createElement("input");t=t||this._types[this.getType()].nativeType;e.setAttribute("type",t);s=(e.type!=="text");if(s){e.value=u;s=(e.value!=u)}return s};
sap.m.DateTimeInput.prototype._setInputValue=function(v){this._$input.val(v);this._onChange()};
sap.m.DateTimeInput.prototype._showValue=function(){var d=this.getProperty(this._origin);if(!d){return}if(this._origin=="value"){d=sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).parse(d);if(+d==+sap.m.getInvalidDate()){jQuery.sap.log.error("Format Error: value property "+this.getValue()+" does not match with valueFormat "+this.getValueFormat()+" of "+this);this._setInputValue("");return}}else{this._isDate(d)}if(!this.isNative()){this._$input.scroller("setDate",d,false)}this._setInputValue(sap.ui.core.format.DateFormat.getDateInstance({pattern:this.isNative()?this.getNativeFormat():this.getDisplayFormat()}).format(d))};
sap.m.DateTimeInput.prototype._getFormatFromBinding=function(){var b=this.getBindingInfo("value");if(!b){return}var B=b.type;if(!B||!(B instanceof sap.ui.model.type.Date)){return}var f=B.getOutputPattern();this.setProperty("valueFormat",f,true);this.setProperty("displayFormat",f,true);return f};
