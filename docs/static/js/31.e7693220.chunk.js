(this["webpackJsonpbasic-authentication"]=this["webpackJsonpbasic-authentication"]||[]).push([[31],{359:function(t,e,i){"use strict";i.r(e),i.d(e,"amplify_select_mfa_type",(function(){return f}));var n=i(17),s=i(51),a=i(14),r=i(35),o=i(78),u=i(11),l=i(23),h=function(t,e,i,n){return new(i||(i=Promise))((function(s,a){function r(t){try{u(n.next(t))}catch(e){a(e)}}function o(t){try{u(n.throw(t))}catch(e){a(e)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}u((n=n.apply(t,e||[])).next())}))},c=function(t,e){var i,n,s,a,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,n=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(s=(s=r.trys).length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){r=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){r.label=a[1];break}if(6===a[0]&&r.label<s[1]){r.label=s[1],s=a;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(a);break}s[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(o){a=[6,o],n=0}finally{i=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},T=new s.a("SelectMFAType"),f=function(){function t(t){var e=this;Object(n.k)(this,t),this.handleSubmit=function(t){return e.verify(t)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1,this.isToastVisible=!1}return t.prototype.handleRadioButtonChange=function(t){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1,this.isToastVisible=!1;var e=t.target,i=e.value,n=e.type,s=e.checked,a=["radio","checkbox"].includes(n);i===r.c.SMS&&a&&(this.isSMS=s),i===r.c.TOTP&&a&&(this.isTOTP=s),i===r.c.NOMFA&&a&&(this.isNoMFA=s)},t.prototype.verify=function(t){return h(this,void 0,void 0,(function(){var e,i,n,s;return c(this,(function(h){switch(h.label){case 0:if(t&&t.preventDefault(),T.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=r.c.TOTP:this.isSMS?this.MFAMethod=r.c.SMS:this.isNoMFA&&(this.MFAMethod=r.c.NOMFA),e=this.authData,!o.a||"function"!==typeof o.a.setPreferredMFA)throw new Error(l.d);this.loading=!0,h.label=1;case 1:return h.trys.push([1,3,4,5]),[4,o.a.setPreferredMFA(e,this.MFAMethod)];case 2:return i=h.sent(),T.debug("Set Preferred MFA Succeeded",i),this.selectMessage=a.a.get(u.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return n=h.sent(),(s=n.message)===l.l||s===l.m?(this.TOTPSetup=!0,this.selectMessage=a.a.get(u.a.SETUP_TOTP_REQUIRED)):(T.debug("Set Preferred MFA failed",n),this.selectMessage=a.a.get(u.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,this.isToastVisible=!0,[7];case 5:return[2]}}))}))},t.prototype.contentBuilder=function(){var t=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return T.debug(a.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(n.i)("div",null,Object(n.i)("a",null,a.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var e=this.MFATypes,i=e.SMS,s=e.TOTP,r=e.Optional;return Object(n.i)("amplify-form-section",{submitButtonText:a.a.get(u.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:a.a.get(u.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(e){return t.handleSubmit(e)},loading:this.loading},i?Object(n.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(e){return t.handleRadioButtonChange(e)}}):null,s?Object(n.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(e){return t.handleRadioButtonChange(e)}}):null,r?Object(n.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(e){return t.handleRadioButtonChange(e)}}):null)},t.prototype.renderToast=function(){var t=this;return this.isToastVisible&&this.selectMessage?Object(n.i)("amplify-toast",{message:this.selectMessage,handleClose:function(){t.selectMessage=null,t.isToastVisible=!1}}):null},t.prototype.render=function(){return Object(n.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(n.i)("amplify-totp-setup",{user:this.authData}):null,this.renderToast())},t}()}}]);
//# sourceMappingURL=31.e7693220.chunk.js.map