webpackJsonp([1],{"7zck":function(t,e){},Enkq:function(t,e){},Fwbv:function(t,e){},IK7G:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{staticClass:"cyan",attrs:{fixed:"",dark:""}},[r("v-toolbar-title",{staticClass:"mr-4"},[r("router-link",{staticClass:"home",attrs:{tag:"span",to:{name:"root"}}},[t._v("\n      JL-Dev Portal\n    ")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",dark:"",to:{name:"login"}}},[t._v("\n      Login\n    ")])],1),t._v(" "),r("v-toolbar-items",[t.$store.state.isUserLoggedIn?t._e():r("v-btn",{attrs:{flat:"",dark:"",to:{name:"register"}}},[t._v("\n      Sign Up\n    ")]),t._v(" "),t.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:"",dark:""},on:{click:t.logout}},[t._v("\n      Log Out\n    ")]):t._e()],1)],1)},staticRenderFns:[]};var s={name:"App",components:{PageHeader:r("VU/8")({methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"login"})}}},n,!1,function(t){r("Q1wo")},"data-v-19cb317b",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("page-header"),this._v(" "),e("main",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var i=r("VU/8")(s,o,!1,function(t){r("IK7G")},null,null).exports,c=r("/ocq"),l=r("Xxa5"),u=r.n(l),d=r("exGp"),v=r.n(d),p=r("mtWM"),f=r.n(p),m=function(){return f.a.create({baseURL:"http://localhost:8081/api"})},_=function(t){return m().post("register",t)},g=function(t){return m().post("login",t)},b={data:function(){return{email:"",password:"",error:null}},methods:{register:function(){var t=this;return v()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error=null,e.next=4,_({email:t.email,password:t.password});case 4:r=e.sent,console.log("Registered: ",r.data),t.$store.dispatch("setToken",r.data.token),t.$store.dispatch("setUser",r.data.user),t.$router.push({name:"root"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("panel",{attrs:{title:"Sign Up"}},[r("form",{attrs:{autocomplete:"off"}},[r("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.register}},[t._v("\n        Sign Up\n      ")])],1)],1)],1)},staticRenderFns:[]},x=r("VU/8")(b,h,!1,null,null,null).exports,k={data:function(){return{email:"",password:"",error:null}},methods:{login:function(){var t=this;return v()(u.a.mark(function e(){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error=null,e.next=4,g({email:t.email,password:t.password});case 4:r=e.sent,console.log("Logged in: ",r.data),t.$store.dispatch("setToken",r.data.token),t.$store.dispatch("setUser",r.data.user),t.$router.push({name:"root"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("panel",{attrs:{title:"Login"}},[r("form",{attrs:{autocomplete:"off"}},[r("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:t.login}},[t._v("\n        Login\n      ")])],1)],1)],1)},staticRenderFns:[]},U=r("VU/8")(k,w,!1,null,null,null).exports,y=r("Dd8w"),L=r.n(y),$=r("NYxO"),F=function(t){return m().get("media",t)},j=function(t,e){return console.log("calling route: media/"+t+"/setfav?id="+e),m().put("media/"+t+"/setfav?id="+e)},E=function(t,e){return console.log("calling route: media/"+t+"/clearfav?id="+e),m().put("media/"+t+"/clearfav?id="+e)},C={props:["media"],computed:L()({},Object($.b)(["isUserLoggedIn","user"])),methods:{updateFavorite:function(t,e){var r=this;return v()(u.a.mark(function a(){var n;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=!r.media[e].isFavorite,r.media[e].isFavorite=n,a.prev=2,!n){a.next=9;break}return a.next=6,j(t,r.user._id);case 6:a.t0=a.sent.data,a.next=12;break;case 9:return a.next=11,E(t,r.user._id);case 11:a.t0=a.sent.data;case 12:r.response=a.t0,a.next=18;break;case 15:a.prev=15,a.t1=a.catch(2),console.log("Error updating favorite ",a.t1);case 18:case"end":return a.stop()}},a,r,[[2,15]])}))()}}},I={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{color:"cyan",dark:""}},[r("v-toolbar-title",[t._v("Media")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{light:"","prepend-icon":"search",color:"cyan",solo:"","append-icon":"cancel","hide-details":"","single-line":""}})],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.media,function(e,a){return r("v-flex",{key:e._id,attrs:{xs3:""}},[r("v-card",{staticStyle:{"background-color":"rgb(230, 230, 230)"}},[r("v-card-media",{attrs:{src:e.url,height:"200px"}}),t._v(" "),t.isUserLoggedIn?r("v-card-actions",[r("div",{domProps:{textContent:t._s(e.filename)}}),t._v(" "),r("v-spacer"),t._v(" "),t.media[a].isFavorite?r("v-btn",{attrs:{icon:""},on:{click:function(r){t.updateFavorite(e._id,a)}}},[r("v-icon",[t._v("favorite")])],1):t._e(),t._v(" "),t.media[a].isFavorite?t._e():r("v-btn",{attrs:{icon:""},on:{click:function(r){t.updateFavorite(e._id,a)}}},[r("v-icon",{attrs:{color:"white"}},[t._v("favorite")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("share")])],1)],1):t._e()],1)],1)}))],1)},staticRenderFns:[]},P=r("VU/8")(C,I,!1,null,null,null).exports,R={props:["projects"],computed:L()({},Object($.b)(["isUserLoggedIn","user"]))},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{color:"cyan",dark:""}},[r("v-toolbar-title",[t._v("Projects")])],1),t._v(" "),r("v-list",{attrs:{"two-line":"",subheader:""}},[t._l(t.projects,function(e){return t.isUserLoggedIn?r("v-list-tile",{key:e._id},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),r("v-list-tile-sub-title",[t._v(t._s(e.description))])],1)],1):t._e()}),t._v(" "),t.isUserLoggedIn?t._e():r("v-list-tile",[r("v-list-tile-content",[r("v-list-tile-title",[t._v("Log in to view current projects")])],1)],1)],2)],1)},staticRenderFns:[]};var V=r("VU/8")(R,T,!1,function(t){r("Fwbv")},"data-v-75bbe850",null).exports,O=function(t){return m().get("projects",t)},M={data:function(){return{media:[],isFavorite:[],projects:[],date:null}},computed:L()({},Object($.b)(["isUserLoggedIn","user"])),components:{Media:P,Projects:V},mounted:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t.media=e.sent.data,t.media=t.media.map(function(e,r){if(e.favorites)for(var a=0;a<e.favorites.length;a++)if(e.favorites[a]===t.user._id)return e.isFavorite=!0,e;return e}),e.next=6,O();case 6:t.projects=e.sent.data;case 7:case"end":return e.stop()}},e,t)}))()}},H={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",[r("v-flex",{staticClass:"mr-2 mb-2",attrs:{xs8:""}},[r("media",{attrs:{media:t.media}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-date-picker",{attrs:{color:"cyan",value:t.date,landscape:""}})],1)],1),t._v(" "),r("v-layout",[r("v-flex",{staticClass:"mr-2",attrs:{xs8:""}},[r("projects",{attrs:{projects:t.projects}})],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-time-picker",{attrs:{color:"cyan",value:t.date,landscape:""}})],1)],1)],1)},staticRenderFns:[]},S=r("VU/8")(M,H,!1,null,null,null).exports;a.a.use(c.a);var N=new c.a({routes:[{path:"/register",name:"register",component:x},{path:"/login",name:"login",component:U},{path:"/",name:"root",component:S}]}),q=r("3EgV"),A=r.n(q),G=r("9JMe"),J=(r("7zck"),r("424j"));a.a.use($.a);var z=new $.a.Store({strict:!0,plugins:[Object(J.a)()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),D={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),t._t("action")],2),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("\n      No slot content defined.\n    ")])],2)],1)},staticRenderFns:[]};var K=r("VU/8")({props:["title"]},D,!1,function(t){r("Enkq")},"data-v-4da9b2c8",null).exports;a.a.config.productionTip=!1,a.a.use(A.a),Object(G.sync)(z,N),a.a.component("panel",K),new a.a({el:"#app",router:N,store:z,components:{App:i},template:"<App/>"})},Q1wo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.aea4d8f01e3b70a10a47.js.map