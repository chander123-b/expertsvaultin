(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{306:function(e,t,r){"use strict";r.r(t);r(56);var n=r(20),o={middleware:["guest"],data:function(){return{form:{email:""}}},methods:{sendOtp:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.preventDefault(),r.prev=1,t.$axios.post("/api/sent/otp",{email:t.form.email}).then((function(e){t.$router.push("/forgot-passwod-confirm?email="+t.form.email),t.$toast.show("Successfully sent opt on email.",{type:"success",duration:2e3})})).catch((function(e){return console.log(e)})),r.next=9;break;case 5:return r.prev=5,r.t0=r.catch(1),console.log(r.t0.message,"errors"),r.abrupt("return");case 9:case"end":return r.stop()}}),r,null,[[1,5]])})))()}}},c=r(57),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",[e._v(" Forgot Password ")]),e._v(" "),r("b-form",{on:{submit:function(t){return e.sendOtp(t)}}},[r("b-form-group",[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter Email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);