webpackJsonp([4],{470:function(t,e,i){i(501);var a=i(180)(i(485),i(518),"data-v-76d6972d",null);t.exports=a.exports},471:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAWRJREFUaN7tlz2KwlAURu+bsVYSRYythQ/vTQobXYWdYCdoYWFh4wLcga7CwiKNrQg2Vo+IIIg7EIJVCBZiYiH2Mpnw5ueeBVy+cyCEB8AwiXAKTsEp1OsYYojhditDGcrQsnTvepePpAfu3t27e42G6Iu+6DebGStjZaz1+reE+Ex6wJ/6U3+qVHFWnBVn5zMEEEDQ7QoQIKDVMnNmzsy57mV32V12QaBbOHVoRStaDQbUoQ51ogjnOMf56VTtVXvVXrmsex+H4BAcgkP8CDgEh+AQHIJDvAHucY/70egVgrKUpezxWFvUFrVFqZT0fuLHUOo44IBjGHCAAxyEABdccK/XaBNtos3tpnteamCMMcaTCRERURw/PwnPk0M5lMN8Xvc+FmdxFmdxFv8O8ef/3DR172NxFmdxFv8SVKEKVcbjlzj66KOvlG3btm0bhu596QdQpEhJSW1qU3u5/DfizB/hAeCjdvdTt5dyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE5VDE0OjI4OjA5KzA4OjAwNq6uWQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xOVQxNDoyODowOSswODowMEfzFuUAAABadEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uXzhvYmVlNzUzOHp2MGxpazkvJUU4JUJGJTk0JUU1JTlCJTlFLnN2Z793rdAAAAAASUVORK5CYII="},485:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(182),r=i.n(a),n=i(181);e.default={data:function(){return{name:"",idCard:"",bankCard:"",bankName:"请选择银行",bankPhone:"",fileValue:!1,bankColor:"gray",bankListFlag:!1,bankList:["中国银行","农业银行","招商银行","工商银行","平安银行","交通银行","邮政储蓄","杭州银行","华夏银行","南京银行","北京银行","浙江银行"]}},mounted:function(){},methods:{back:function(){this.$router.push("/login")},bankShow:function(){!1===this.bankListFlag?this.bankListFlag=!0:this.bankListFlag=!1},selectBank:function(t){console.log(t),this.bankName=t,this.bankColor="black",this.bankListFlag=!1},register:function(){var t=this;""===this.name?this.checkRegister("姓名不能为空"):""===this.idCard?this.checkRegister("身份证号不能为空"):/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t.idCard)?""===this.bankCard?this.checkRegister("银行卡号不能为空"):t.bankCard.length<16||t.bankCard.length>19?this.checkRegister("银行卡号格式不正确"):"请选择银行"===this.bankName?this.checkRegister("银行名称不能为空"):""===this.bankPhone?this.checkRegister("预留手机号不能为空"):/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(t.bankPhone)?!1===this.fileValue?this.checkRegister("请阅读并同意娱白条协议"):i.i(n.a)({url:"register.php",data:r()({name:t.name,idCard:t.idCard,bankCard:t.bankCard,bankName:t.bankName,bankPhone:t.bankPhone})}).then(function(e){console.log(e.data),"0000"===e.data.code&&setTimeout(function(){t.$router.push("/main")},600),t.checkRegister(e.data.message)}):this.checkRegister("预留手机号格式不正确"):this.checkRegister("身份证号格式不正确")},readFile:function(){!1===this.fileValue?this.fileValue=!0:this.fileValue=!1},checkRegister:function(t){var e=this;this.$store.commit("SET_TIP_INFOR",{tipFlag:!0,tipMsg:t}),setTimeout(function(){e.$store.commit("SET_TIP_INFOR",{tipFlag:!1,tipMsg:""})},1500)}}}},492:function(t,e,i){var a=i(461);e=t.exports=i(459)(!1),e.push([t.i,".g-register[data-v-76d6972d]{width:100%;height:100%;min-width:350px}.g-register .f-title[data-v-76d6972d]{width:100%;height:45px;text-align:center;line-height:45px;border-bottom:1px solid #dcdcdc;position:relative}.g-register .f-title span[data-v-76d6972d]{display:inline-block;width:25px;height:25px;float:left;position:absolute;top:11px;left:10px;background-image:url("+a(i(462))+");background-repeat:no-repeat;background-size:100% 100%}.g-register a[data-v-76d6972d]{text-decoration:none}.g-register .f-registerCon[data-v-76d6972d]{text-align:center;margin-top:100px}.g-register .f-registerCon input[data-v-76d6972d]{width:80%;height:30px;padding-left:15px;border-radius:30px;outline:none;box-shadow:none;border:1px solid #dcdcdc;font-size:.9rem}.g-register .f-registerCon p[data-v-76d6972d]{text-align:center;font-size:.7rem}.g-register .f-registerCon p a[data-v-76d6972d]{color:#169bd5}.g-register .f-registerBtn[data-v-76d6972d]{margin:0 auto;font-size:1.1rem}.g-register .g-register[data-v-76d6972d]{width:100%;height:auto;position:relative}.g-register ul[data-v-76d6972d]{list-style:none;width:100%;margin:0;padding:0}.g-register ul li[data-v-76d6972d]{width:100%;height:50px;line-height:50px;position:relative;font-size:1rem;border-top:1px solid #f2f2f2}.g-register ul li .f-infor[data-v-76d6972d]{float:left;margin-left:25px;display:block}.g-register ul li .m-conInput[data-v-76d6972d]{display:block;height:50px;border:none;outline:none;width:200px;font-size:1rem;margin-left:40px;position:relative;top:0}.g-register ul li .m-text7[data-v-76d6972d]{top:0}.g-register ul li .f-bankSpan[data-v-76d6972d]{display:block;width:61%;float:left;margin-left:9%;height:50px;line-height:50px}.g-register ul li .f-bankSpan .f-userBank[data-v-76d6972d]{float:left;width:100%;height:50px;font-size:.9rem;color:gray}.g-register ul li .f-allBank[data-v-76d6972d]{display:inline-block;width:20px;height:20px;position:absolute;top:14px;right:25px;background-image:url("+a(i(471))+");background-repeat:no-repeat;background-size:100% 100%}.g-register ul li .m-conInput[data-v-76d6972d]{float:left;width:61%;box-sizing:border-box;margin-left:9%}.g-register ul li .f-bankList[data-v-76d6972d]{position:absolute;top:50px;left:39%;z-index:200;width:58%;height:auto;max-height:250px;background-color:#fff;color:#000;overflow-x:hidden;overflow-y:scroll;transition:.5s ease;font-size:.95rem;border-radius:3px;box-shadow:0 0 15px gray}.g-register ul li .f-bankList div[data-v-76d6972d]{line-height:32px;text-align:left;padding-left:20px}.g-register ul .f-liSpecial[data-v-76d6972d]{width:100%;height:15px;background-color:#f2f2f2;border:none}.g-register .f-registerBtn[data-v-76d6972d]{width:80%;height:36px;text-align:center;line-height:38px;border-radius:5px;background-color:#169bd5;margin:10px auto 20px;font-size:1rem;color:#fff}.g-register .f-registerFlie[data-v-76d6972d]{text-align:center;font-size:.85rem;margin-top:-10px;color:#949494;margin-top:35px}.g-register a[data-v-76d6972d]{color:#479eff}.g-register .f-registerXy[data-v-76d6972d]{width:80%;margin:35px auto 10px;font-size:.85rem;text-align:center;color:#949494}.g-register .f-registerXy span[data-v-76d6972d]{color:#409eff}.g-register .f-bankRefirm[data-v-76d6972d]{width:100%;height:auto;padding:10px 0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.g-register .f-bankRefirm div[data-v-76d6972d]:first-child{line-height:17px;position:relative;top:8px;padding:0 10px;font-size:.8rem;color:#949494}.g-register .f-bankMessage[data-v-76d6972d]{width:110px;height:35px;text-align:center;line-height:35px;color:#fff;background-color:#f90;border-radius:5px;position:relative;top:5px;margin-right:5px;font-size:.85rem}.g-register .f-infor[data-v-76d6972d]{float:left;display:block;width:30%!important;text-align:right!important;margin-left:0!important}.g-register .f-fucengtz[data-v-76d6972d]{width:80%;height:230px;position:fixed;top:20%;left:10%;z-index:400;text-align:center;font-size:1rem;background-color:#fff;border-radius:5px;box-shadow:0 0 10px #fff;display:none}.g-register .f-fucengtz div[data-v-76d6972d]:first-child{height:40px;line-height:40px;margin-top:0}.g-register .f-fucengtz div[data-v-76d6972d]:nth-child(2){margin-top:45px}.g-register .f-fucengtz div[data-v-76d6972d]:nth-child(3){margin-top:40px}.g-register .f-fcTime[data-v-76d6972d]{font-size:2rem;color:gray;font-weight:700}.g-register .f-mengban[data-v-76d6972d]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);z-index:300;display:none}.g-register .m-text5[data-v-76d6972d]{top:1px!important}.g-register .f-fcdBtn[data-v-76d6972d]{width:120px;height:35px;line-height:35px;text-align:center;background-color:#169bd5;border-radius:5px;margin:40px auto 0;color:#fff;cursor:pointer;letter-spacing:2px}.g-register .f-fcnr[data-v-76d6972d]{position:relative;overflow:hidden;height:50px}.g-register .f-thetexts[data-v-76d6972d]{width:auto;height:auto;padding:3px 8px;background-color:#169bd5;color:#fff;border-radius:5px;position:absolute;top:4px;right:8%;font-size:1rem}",""])},501:function(t,e,i){var a=i(492);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(460)("a08f4f86",a,!0)},518:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"g-register"},[i("div",{staticClass:"f-title",on:{click:t.back}},[i("span",{staticClass:"f-registerBack"}),t._v("信息认证")]),t._v(" "),i("ul",[i("li",[i("span",{staticClass:"f-infor"},[t._v("姓　名　: ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"m-conInput",attrs:{type:"text",value:"",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("li",[i("span",{staticClass:"f-infor"},[t._v("身份证　: ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.idCard,expression:"idCard"}],staticClass:"m-conInput",attrs:{type:"text",value:"",placeholder:"请输入身份证号"},domProps:{value:t.idCard},on:{input:function(e){e.target.composing||(t.idCard=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"f-liSpecial"}),t._v(" "),i("li",[i("span",{staticClass:"f-infor"},[t._v("　银行卡号　:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bankCard,expression:"bankCard"}],staticClass:"m-conInput",attrs:{type:"text",value:"",placeholder:"请输入银行卡号"},domProps:{value:t.bankCard},on:{input:function(e){e.target.composing||(t.bankCard=e.target.value)}}})]),t._v(" "),i("li",[i("span",{staticClass:"f-infor"},[t._v("　　　银行　:")]),t._v(" "),i("span",{staticClass:"f-bankSpan",on:{click:t.bankShow}},[i("span",{staticClass:"f-userBank",style:{color:t.bankColor}},[t._v(t._s(t.bankName))]),t._v(" "),i("span",{staticClass:"f-allBank"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bankListFlag,expression:"bankListFlag"}],staticClass:"f-bankList"},t._l(t.bankList,function(e){return i("div",{on:{click:function(i){t.selectBank(e)},m:function(t){}}},[t._v(t._s(e))])}))]),t._v(" "),i("li",[i("span",{staticClass:"f-infor"},[t._v("预留手机号　:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.bankPhone,expression:"bankPhone"}],staticClass:"m-conInput",attrs:{type:"tel",value:"",placeholder:"请输入预留手机号"},domProps:{value:t.bankPhone},on:{input:function(e){e.target.composing||(t.bankPhone=e.target.value)}}})]),t._v(" "),i("li",{staticClass:"f-liSpecial"})]),t._v(" "),i("p",{staticClass:"f-registerXy"},[i("input",{staticClass:"f-agreeFile",attrs:{type:"checkbox",value:""},on:{change:t.readFile}}),t._v(" 我已阅读并同意\n\t\t"),i("span",[t._v("《 娱白条信用付款服务协议》")]),t._v("、\n\t\t"),i("span",[t._v("《娱白条自动付款服务协议》")])]),t._v(" "),i("div",{staticClass:"f-registerBtn",on:{click:t.register}},[t._v("立即开通")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"f-mengban"}),t._v(" "),this.$store.state.tip.tipFlag?i("div",{staticClass:"f-alert"},[t._v(t._s(this.$store.state.tip.tipMsg))]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f-fucengtz"},[i("div",[i("span",{staticClass:"f-sucess"}),t._v("开通成功！")]),t._v(" "),i("div",[t._v("您的额度为： 　"),i("span",{staticStyle:{"font-size":"1.3rem"}},[t._v("100 ")]),t._v("元")]),t._v(" "),i("div",[i("span",{staticClass:"f-fcTime"},[t._v("3")]),t._v("　秒后跳转到支付页面")])])}]}}});