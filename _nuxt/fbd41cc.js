(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{434:function(t,e,n){},436:function(t,e,n){"use strict";n(434)},444:function(t,e,n){"use strict";n.r(e);n(26),n(44);var r={props:{listing:{type:Object,default:null}},data:function(){return{loading:!1,show:!1,selection:1}},methods:{generateListingUrl:function(t){return t?this.$listingUrl({country:"usa",state:t.state,city:t.city,type:t.type,slug:t.slug}):""},formatPhone:function(t){return t=t.replace(/\D/g,""),"tel:".concat(t)}}},l=(n(436),n(62)),o=n(63),c=n.n(o),v=n(427),d=n(445),_=n(430),f=n(460),h=n(461),m=n(439),w=n(423),y=n(420),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto my-6 pa-md-2",attrs:{loading:t.loading,width:"400",hover:"",to:t.generateListingUrl(t.listing)}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),n("v-card-title",[t._v("\n    "+t._s(t.listing.name)+"\n  ")]),t._v(" "),n("v-card-text",[n("v-row",[n("div",{staticClass:"grey--text ms-4"},[t._v("\n        "+t._s(t._f("capitalize")(t.listing.city))+", "+t._s(t._f("capitalize")(t.listing.state))+"\n      ")])]),t._v(" "),n("v-row",{staticClass:"ms-0"},[n("div",{staticClass:"my-4 text-subtitle-1"},[n("v-chip",[t._v(t._s(t._f("capitalize")(t.listing.type)))])],1)])],1),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"orange",text:""}},[t._v("\n      Explore\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("a",{attrs:{href:t.formatPhone(t.listing.phone)}},[t._v(t._s(t._f("phone")(t.listing.phone)))])],1)],2)}),[],!1,null,"237b1a0a",null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VChip:f.a,VDivider:h.a,VProgressLinear:m.a,VRow:w.a,VSpacer:y.a})}}]);