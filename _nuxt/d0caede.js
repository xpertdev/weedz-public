(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{439:function(t,n,e){"use strict";e(8),e(6),e(13),e(14);var r=e(2),o=(e(35),e(63),e(23),e(10),e(28),e(52),e(294),e(15),e(31),e(295),e(296),e(297),e(298),e(299),e(300),e(301),e(302),e(303),e(304),e(305),e(306),e(307),e(36),e(9),e(212),e(1)),c=e(78),l=e(0);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var v=["sm","md","lg","xl"],j=["start","end","center"];function y(t,n){return v.reduce((function(e,r){return e[t+Object(l.s)(r)]=n(),e}),{})}var O=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},m=y("justify",(function(){return{type:String,default:null,validator:h}})),C=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:C}})),k={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(S)},P={align:"align",justify:"justify",alignContent:"align-content"};function _(t,n,e){var r=P[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var x=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:C}},S),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var d=x.get(l);return d||function(){var t,n;for(n in d=[],k)k[n].forEach((function(t){var r=e[t],o=_(n,t,r);o&&d.push(o)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),x.set(l,d)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},470:function(t,n,e){"use strict";e.r(n);var r=e(61),o=e(62),c=e.n(o),l=e(421),f=e(439),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),e("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[t._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VCol:l.a,VRow:f.a})}}]);