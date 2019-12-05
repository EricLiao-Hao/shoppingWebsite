(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-528815a7"],{"2a3f":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"vld-parent"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}})],1),s("div",{staticClass:"row mt-4"},t._l(t.products,(function(a){return s("div",{key:a.id,staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card border-0 shadow-sm"},[s("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),s("h5",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(" "+t._s(a.title)+" ")])]),s("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price?t._e():s("div",{staticClass:"h5"},[t._v(" 原價 "+t._s(a.origin_price)+" ")]),a.price?s("del",{staticClass:"h6"},[t._v(" 原價 "+t._s(a.origin_price)+" ")]):t._e(),a.price?s("div",{staticClass:"h5"},[t._v(" 特價 "+t._s(a.price)+" ")]):t._e()])]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(s){return t.getProduct(a.id)}}},[t.status.loadingItem==a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 查看更多 ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(s){return t.addtoCart(a.id)}}},[t.status.loadingItem==a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),s("div",{staticClass:"pull-right"},[s("button",{staticClass:"btn btn-primary btn-sm cartBtn",on:{click:t.cartModal}},[s("i",{staticClass:"fas fa-cart-plus"}),t._v(" "),s("br"),t._v(" 購"),s("br"),t._v("物"),s("br"),t._v("車")])]),s("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),s("blockquote",{staticClass:"blockquote mt-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),s("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():s("div",{staticClass:"h4"},[t._v(t._s(t.product.origin_price)+" 元")]),t.product.price?s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?s("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t.product.price)+" 元")]):t._e()]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?s:s[0])}}},t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v(" 選購 "+t._s(a)+" "+t._s(t.product.unit)+" ")])})),0)]),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計 "),s("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元 ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),s("div",{staticClass:"modal",attrs:{id:"cartModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"col-8 mx-auto"},[s("table",{staticClass:"table mt-4 test"},[t._m(2),s("tbody",t._l(t.cart.carts,(function(a,e){return s("tr",{key:e},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCart(a.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?s("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),s("td",[t._v(" "+t._s(a.qty)+" / "+t._s(a.product.unit)+" ")]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(a.final_total))+" ")])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t.cart.final_total!==t.cart.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),s("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),s("div",{staticClass:"input-group mb-3 primary"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.codes,expression:"codes"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.codes},on:{input:function(a){a.target.composing||(t.codes=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:t.setCoupon}},[t._v("套用優惠")])])])])]),s("div",{staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useremail"}},[t._v("Email")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email",required:""},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),t.errors.has("email")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email"))+" ")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),t.errors.has("name")?s("span",{staticClass:"text-danger"},[t._v(" 請輸入姓名 ")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",name:"phone",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),t.errors.has("phone")?s("span",{staticClass:"text-danger"},[t._v(" 請輸入電話號碼 ")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),t.errors.has("address")?s("span",{staticClass:"text-danger"},[t._v(" 請輸入地址 ")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),t._m(3)])])])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("購物車")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{attrs:{width:"40"}}),s("th",{attrs:{width:"150"}},[t._v("品名")]),s("th",{attrs:{width:"90"}},[t._v("數量")]),s("th",{attrs:{width:"90"}},[t._v("單價")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],r=(s("99af"),s("1157")),o=s.n(r),n={data:function(){return{products:[],product:{},status:{loadingItem:""},isLoading:!1,cart:{carts:{}},form:{user:{name:"",email:"",tel:"",address:""}},codes:""}},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s="".concat("https://vue-course-api.hexschool.io","/api/erictest/products?page").concat(a);this.isLoading=!0,this.$http.get(s).then((function(a){t.isLoading=!1,t.products=a.data.products,t.pagination=a.data.pagination}))},getProduct:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/erictest/product/").concat(t);this.status.loadingItem=t,this.$http.get(s).then((function(t){console.log(t.data),a.product=t.data.product,a.status.loadingItem="",o()("#productModal").modal("show")}))},addtoCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat("https://vue-course-api.hexschool.io","/api/erictest/cart");this.status.loadingItem=t;var i={product_id:t,qty:s};this.$http.post(e,{data:i}).then((function(t){console.log(t.data),console.log(i),a.status.loadingItem="",a.getCart(),o()("#productModal").modal("hide")}))},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/erictest/cart");this.isLoading=!0,this.$http.get(a).then((function(a){t.cart=a.data.data,t.isLoading=!1}))},removeCart:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/erictest/cart/").concat(t);this.isLoading=!0,this.$http.delete(s).then((function(t){a.getCart(),a.isLoading=!1}))},cartModal:function(){o()("#cartModal").modal("show")},setCoupon:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/erictest/coupon");this.isLoading=!0;var e={code:this.codes};this.$http.post(s,{data:e}).then((function(t){console.log(t.data),console.log(e),a.getCart()}))},createOrder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/erictest/order"),s=this.form;this.$http.post(a,{data:s}).then((function(a){console.log("訂單已建立",a),a.data.success&&t.$router.push("customCheckout/".concat(a.data.orderId))}))}},created:function(){this.getProducts(),this.getCart()}},c=n,l=(s("6992"),s("2877")),d=Object(l["a"])(c,e,i,!1,null,"04e71cf3",null);a["default"]=d.exports},6992:function(t,a,s){"use strict";var e=s("b1c0"),i=s.n(e);i.a},b1c0:function(t,a,s){}}]);
//# sourceMappingURL=chunk-528815a7.67268b9e.js.map