(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{441:function(t,n,e){},442:function(t,n,e){"use strict";e(8),e(6),e(13),e(14);var r=e(2),o=(e(35),e(62),e(23),e(10),e(28),e(51),e(297),e(15),e(31),e(298),e(299),e(300),e(301),e(302),e(303),e(304),e(305),e(306),e(307),e(308),e(309),e(310),e(36),e(9),e(214),e(1)),c=e(77),l=e(0);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d=["sm","md","lg","xl"],j=["start","end","center"];function y(t,n){return d.reduce((function(e,r){return e[t+Object(l.s)(r)]=n(),e}),{})}var O=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},m=y("justify",(function(){return{type:String,default:null,validator:h}})),x=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:x}})),_={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(C)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,n,e){var r=S[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var P=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:x}},C),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var f in e)l+=String(e[f]);var v=P.get(l);return v||function(){var t,n;for(n in v=[],_)_[n].forEach((function(t){var r=e[t],o=k(n,t,r);o&&v.push(o)}));v.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),P.set(l,v)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},446:function(t,n,e){"use strict";e(441)},454:function(t,n,e){"use strict";e.r(n);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(e(446),e(60)),c=e(61),l=e.n(c),f=e(423),v=e(192),d=e(442),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",[e("v-col",[t.prev?e("NuxtLink",{staticClass:"prev-blog-post text-truncate",attrs:{to:{name:"posts-slug",params:{slug:t.prev.slug}}}},[e("v-icon",[t._v("mdi-arrow-left")]),t._v("  \n      "+t._s(t.prev.title)+"\n    ")],1):e("span",[t._v(" ")])],1),t._v(" "),e("v-col",[e("v-row",{attrs:{justify:"end"}},[t.next?e("NuxtLink",{staticClass:"next-blog-post text-truncate",attrs:{to:{name:"posts-slug",params:{slug:t.next.slug}}}},[t._v("\n        "+t._s(t.next.title)+"  \n        "),e("v-icon",[t._v("mdi-arrow-right")])],1):e("span",[t._v(" ")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VCol:f.a,VIcon:v.a,VRow:d.a})}}]);