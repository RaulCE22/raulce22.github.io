(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["academy"],{"823f":function(e,t,i){},cd27:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"academy"},[i("time-line-academy")],1)},o=[],a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-layout",{attrs:{"align-start":"","justify-center":"",row:"","fill-height":""}},[i("v-timeline",{staticClass:"mx-2"},e._l(e.years,function(t,n){return i("v-timeline-item",{key:n,attrs:{color:t.color,small:""}},[i("span",{class:"headline font-weight-bold "+t.color+"--text",attrs:{slot:"opposite"},domProps:{textContent:e._s(t.year)},slot:"opposite"}),i("div",{staticClass:"py-3"},[i("h2",{class:"headline font-weight-light mb-3 "+t.color+"--text"},[e._v(e._s(e.$t(t.name)))]),i("div",[e._v("\n                    "+e._s(e.$t(t.school))+"\n                ")])])])}),1)],1)},l=[],r=(i("cadf"),i("551c"),i("f751"),i("097d"),a["default"].extend({name:"time-line-academy",data:function(){return{years:[{color:"cyan",year:"2016",school:"academy.uni_sala",name:"academy.doctor",icon:"dii.png"},{color:"green",year:"2014",school:"academy.uni_sala",name:"academy.master",icon:"mayr.png"},{color:"pink",year:"2013",school:"academy.uni_sala",name:"academy.web_course",icon:"cdw.png"},{color:"amber",year:"2013",school:"academy.uni_extre",name:"academy.degree",icon:"itis.png"},{color:"orange",year:"2012",school:"academy.uni_extre",name:"academy.title_monitor",icon:"moytl.png"}]}}})),c=r,m=i("2877"),d=i("6544"),h=i.n(d),u=i("a722"),p=(i("823f"),i("58df")),f=i("6a18"),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g=Object(p["a"])(f["a"]).extend({name:"v-timeline",props:{alignTop:Boolean,dense:Boolean},computed:{classes:function(){return v({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),y=i("9d26"),_=i("b64a"),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},$=Object(p["a"])(_["a"],f["a"]).extend({name:"v-timeline-item",props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(y["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",b({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody()];return this.hideDot||t.unshift(this.genDot()),this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:b({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--left":this.left,"v-timeline-item--right":this.right},this.themeClasses)},t)}}),C=Object(m["a"])(c,s,l,!1,null,null,null),w=C.exports;h()(C,{VLayout:u["a"],VTimeline:g,VTimelineItem:$});var x=a["default"].extend({components:{"time-line-academy":w}}),O=x,B=Object(m["a"])(O,n,o,!1,null,null,null);t["default"]=B.exports}}]);
//# sourceMappingURL=academy.16ccee5f.js.map