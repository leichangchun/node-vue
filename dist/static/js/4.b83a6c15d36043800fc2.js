webpackJsonp([4],{"0vk3":function(e,t,n){var i=n("VVtS");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("XkoO")("2185011b",i,!0)},"9DPH":function(e,t,n){"use strict";var i=n("Cz8s");t.a={data:function(){return{title:"关于"}},components:{topicHeader:i.a}}},"A/Do":function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,".container[data-v-0e71b255]{width:100%;height:100%;background-color:#fff;padding-top:60px}.container p[data-v-0e71b255]{text-indent:24px;font-size:14px;line-height:30px;padding:10px}","",{version:3,sources:["C:/Users/Administrator/Documents/MyCode/node-vue/src/components/about.vue"],names:[],mappings:"AACA,4BACE,WAAY,AACZ,YAAa,AACb,sBAA0B,AAC1B,gBAAkB,CACnB,AACD,8BACI,iBAAkB,AAClB,eAAgB,AAChB,iBAAkB,AAClB,YAAc,CACjB",file:"about.vue",sourcesContent:["\n.container[data-v-0e71b255] {\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  padding-top: 60px;\n}\n.container p[data-v-0e71b255] {\n    text-indent: 24px;\n    font-size: 14px;\n    line-height: 30px;\n    padding: 10px;\n}\n"],sourceRoot:""}])},Cz8s:function(e,t,n){"use strict";function i(e){n("0vk3")}var o=n("UP88"),A=n("UF9q"),a=n("J0+h"),s=i,r=a(o.a,A.a,s,null,null);t.a=r.exports},UF9q:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"topic-header",class:{"show-nav":e.showNav}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"left-menu",on:{click:e.toggleNav}},[n("span",{staticClass:"fa fa-bars"})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMenu,expression:"!showMenu"}],staticClass:"left-back",on:{click:e.goback}},[n("span",{staticClass:"fa fa-chevron-left"})]),e._v(" "),n("span",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.showAdd,expression:"showAdd"}],staticClass:"right-login",attrs:{to:"/add"}},[n("span",{staticClass:"fa fa-plus"})])],1)},o=[],A={render:i,staticRenderFns:o};t.a=A},UP88:function(e,t,n){"use strict";t.a={data:function(){return{}},props:{showMenu:Boolean,title:String,showNav:Boolean,showAdd:Boolean},methods:{toggleNav:function(){this.$emit("change")},goback:function(){this.$router.go(-1)}}}},VVtS:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,".line-bottom{border-bottom:1px solid #d4d4d4}.line-top{border-top:1px solid #d4d4d4}.single-row{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.author-img{width:40px;height:40px;border-radius:50%}.topic-header{z-index:2;position:fixed;top:0;left:0;width:100%;border-bottom:1px solid #e8e8e8;-webkit-box-shadow:0 0 4px rgba(0,0,0,.25);box-shadow:0 0 4px rgba(0,0,0,.25);-webkit-transition:all .5s ease;transition:all .5s ease;background-color:hsla(0,0%,100%,.95)}.topic-header.show-nav{-webkit-transform:translateX(200px);transform:translateX(200px)}.topic-header .left-back,.topic-header .left-menu{width:49px;height:44px;position:absolute;top:0;left:0}.topic-header .left-back span,.topic-header .left-menu span,.topic-header .right-login span{width:100%;height:44px;line-height:44px;text-align:center;font-size:20px}.topic-header .title{display:inline-block;width:100%;height:44px;line-height:44px;text-align:center;font-size:16px;font-weight:600}.topic-header .right-login{display:inline-block;width:49px;height:44px;position:absolute;top:0;right:0}.topic-header .right-login span{color:#42b983}.topic-header .right-login img{display:block;margin:8px;width:33px;border-radius:50%}","",{version:3,sources:["C:/Users/Administrator/Documents/MyCode/node-vue/src/components/header.vue"],names:[],mappings:"AAKA,aACE,+BAAiC,CAClC,AACD,UACE,4BAA8B,CAC/B,AACD,YACE,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CACzB,AACD,YACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,cACE,UAAW,AACX,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,gCAAiC,AACjC,2CAAgD,AACxC,mCAAwC,AAChD,gCAAkC,AAClC,wBAA0B,AAC1B,oCAA4C,CAC7C,AACD,uBACI,oCAAqC,AAC7B,2BAA6B,CACxC,AACD,kDACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,MAAQ,CACX,AACD,4FACI,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACnB,AACD,qBACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,eAAiB,CACpB,AACD,2BACI,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,OAAS,CACZ,AACD,gCACM,aAAe,CACpB,AACD,+BACM,cAAe,AACf,WAAY,AACZ,WAAY,AACZ,iBAAmB,CACxB",file:"header.vue",sourcesContent:['\n@charset "UTF-8";\n/*自定义样式*/\n/*尺寸常量*/\n/*颜色常量*/\n.line-bottom {\n  border-bottom: 1px solid #d4d4d4;\n}\n.line-top {\n  border-top: 1px solid #d4d4d4;\n}\n.single-row {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.author-img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.topic-header {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n.topic-header.show-nav {\n    -webkit-transform: translateX(200px);\n            transform: translateX(200px);\n}\n.topic-header .left-menu, .topic-header .left-back {\n    width: 49px;\n    height: 44px;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.topic-header .left-menu span, .topic-header .left-back span, .topic-header .right-login span {\n    width: 100%;\n    height: 44px;\n    line-height: 44px;\n    text-align: center;\n    font-size: 20px;\n}\n.topic-header .title {\n    display: inline-block;\n    width: 100%;\n    height: 44px;\n    line-height: 44px;\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n}\n.topic-header .right-login {\n    display: inline-block;\n    width: 49px;\n    height: 44px;\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.topic-header .right-login span {\n      color: #42b983;\n}\n.topic-header .right-login img {\n      display: block;\n      margin: 8px;\n      width: 33px;\n      border-radius: 50%;\n}\n'],sourceRoot:""}])},wpC8:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("topicHeader",{attrs:{title:e.title,"show-menu":!1,"show-nav":!1}}),e._v(" "),n("p",[e._v("\n    参考了github上大神的开源项目，学习并完成了 基于ES6 + vue-cli + vue2.0 + vue-router + axios + vuex -- 模拟node社区部分功能的网页应用\n    虽然部分地方还有待完善，但自觉已受益匪浅，加油加油，每天进步一点点！！！\n  ")])],1)},o=[],A={render:i,staticRenderFns:o};t.a=A},ynyz:function(e,t,n){var i=n("A/Do");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("XkoO")("83d48eea",i,!0)},zRCK:function(e,t,n){"use strict";function i(e){n("ynyz")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("9DPH"),A=n("wpC8"),a=n("J0+h"),s=i,r=a(o.a,A.a,s,"data-v-0e71b255",null);t.default=r.exports}});
//# sourceMappingURL=4.b83a6c15d36043800fc2.js.map