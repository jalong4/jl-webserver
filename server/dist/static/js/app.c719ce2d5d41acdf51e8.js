webpackJsonp([1],{"7zck":function(t,e){},Enkq:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticClass:"cyan",attrs:{fixed:"",dark:""}},[r("v-toolbar-title",{staticClass:"mr-4"},[t._v("\n    JL-Dev Portal\n  ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",dark:"",to:{name:"login"}}},[t._v("\n      Login\n    ")])],1),t._v(" "),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",dark:"",to:{name:"register"}}},[t._v("\n      Sign Up\n    ")]),t._v(" "),t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:"",dark:""},on:{click:t.logout}},[t._v("\n      Log Out\n    ")]):t._e()],1)],1)},staticRenderFns:[]};var s={name:"App",components:{PageHeader:r("VU/8")({methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"login"})}}},a,!1,function(t){r("W1P6")},"data-v-9a3547d2",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("page-header"),this._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(s,o,!1,function(t){r("lk6z")},null,null).exports,i=r("/ocq"),c=r("Xxa5"),u=r.n(c),d=r("exGp"),v=r.n(d),p=r("mtWM"),f=r.n(p),m=function(){return f.a.create({baseURL:"http://localhost:8081/api"})},_=function(t){return m().post("register",t)},g=function(t){return m().post("login",t)},h={data:function(){return{email:"",password:"",error:null}},methods:{register:function(){var t=this;return v()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error=null,e.next=4,_({email:t.email,password:t.password});case 4:r=e.sent,console.log("Registered: ",r.data),t.$store.dispatch("setToken",r.data.token),t.$store.dispatch("setUser",r.data.user),t.$router.push({name:"root"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()}}},x={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("panel",{attrs:{title:"Sign Up"}},[r("form",{attrs:{autocomplete:"off"}},[r("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.register}},[t._v("\n        Sign Up\n      ")])],1)],1)],1)},staticRenderFns:[]},k=r("VU/8")(h,x,!1,null,null,null).exports,b={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return v()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error=null,e.next=4,g({email:t.email,password:t.password});case 4:r=e.sent,console.log("Logged in: ",r.data),t.$store.dispatch("setToken",r.data.token),t.$store.dispatch("setUser",r.data.user),t.$router.push({name:"root"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("panel",{attrs:{title:"Login"}},[r("form",{attrs:{autocomplete:"off"}},[r("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.login}},[t._v("\n        Login\n      ")])],1)],1)],1)},staticRenderFns:[]},U=r("VU/8")(b,w,!1,null,null,null).exports,y=function(t){return m().get("media",t)},$=function(t){return m().get("projects",t)},L={data:function(){return{media:[],projects:[]}},methods:{},mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return t.media=e.sent.data,e.next=5,$();case 5:t.projects=e.sent.data;case 6:case"end":return e.stop()}},e,t)}))()}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",[r("v-flex",{attrs:{xs6:""}},[r("v-date-picker",{attrs:{color:"cyan",landscape:""}}),t._v(" "),r("br"),r("br"),t._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:"cyan",dark:""}},[r("v-toolbar-title",[t._v("Projects")])],1),t._v(" "),r("v-list",{attrs:{"two-line":"",subheader:""}},t._l(t.projects,function(e){return r("v-list-tile",{key:e._id},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-tile-sub-title",[t._v(t._s(e.description))])],1)],1)}))],1)],1),t._v(" "),r("v-flex"),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-card",[r("v-toolbar",{attrs:{color:"cyan",dark:""}},[r("v-toolbar-title",[t._v("Media")])],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.media,function(e){return r("v-flex",{key:e._id,attrs:{xs6:""}},[r("v-card",[r("v-card-media",{attrs:{src:e.url,height:"200px"}},[r("v-container",{attrs:{"fill-height":"",fluid:""}},[r("v-layout",{attrs:{"fill-height":""}},[r("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[r("span",{staticClass:"headline white--text",domProps:{textContent:t._s(e.filename)}})])],1)],1)],1)],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]},E=r("VU/8")(L,C,!1,null,null,null).exports;n.a.use(i.a);var P=new i.a({routes:[{path:"/register",name:"register",component:k},{path:"/login",name:"login",component:U},{path:"/",name:"root",component:E}]}),T=r("3EgV"),R=r.n(T),j=(r("7zck"),r("9JMe")),V=r("NYxO");n.a.use(V.a);var F=new V.a.Store({strict:!0,state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!(null==e)},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),M={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      No slot content defined.\n    ")])],2)],1)},staticRenderFns:[]};var H=r("VU/8")({props:["title"]},M,!1,function(t){r("Enkq")},"data-v-4da9b2c8",null).exports;n.a.config.productionTip=!1,n.a.use(R.a),Object(j.sync)(F,P),n.a.component("panel",H),new n.a({el:"#app",router:P,store:F,components:{App:l},template:"<App/>"})},W1P6:function(t,e){},lk6z:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c719ce2d5d41acdf51e8.js.map