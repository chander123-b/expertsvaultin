(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,r,e){var content=e(291);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(78).default)("2a0d5cbc",content,!0,{sourceMap:!1})},290:function(t,r,e){"use strict";e(285)},291:function(t,r,e){(r=e(77)(!1)).push([t.i,".wrapper{width:100%;max-width:500px;margin:10px auto;padding:10px}",""]),t.exports=r},301:function(t,r,e){"use strict";e.r(r);e(56);var o=e(20),n={data:function(){return{form:{email:"",password:""}}},methods:{login:function(t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r.$auth.login({data:r.form}).then((function(){r.$toast.show("login successfully",{type:"success",duration:2e3})})).catch((function(t){console.log(t)}));case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()}}},c=(e(290),e(57)),component=Object(c.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"wrapper"},[t._v("\n      "+t._s(t.errors.message)+"\n  "),e("b-form",{on:{submit:function(r){return t.login(r)}}},[e("b-form-group",[e("b-form-input",{attrs:{required:"",placeholder:"Enter Email"},model:{value:t.form.email,callback:function(r){t.$set(t.form,"email",r)},expression:"form.email"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{attrs:{required:"",placeholder:"Enter Password",type:"password"},model:{value:t.form.password,callback:function(r){t.$set(t.form,"password",r)},expression:"form.password"}})],1),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1),t._v(" "),e("nuxt-link",{attrs:{to:"login-otp"}},[t._v("Login with Otp")]),t._v(" "),e("p"),t._v(" "),e("nuxt-link",{attrs:{to:"forgot-password"}},[t._v("Forgot Password?")])],1)}),[],!1,null,null,null);r.default=component.exports}}]);