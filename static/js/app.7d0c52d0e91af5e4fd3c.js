webpackJsonp([1],{"0CO9":function(t,e,a){t.exports=a.p+"static/img/fail.1818b5d.jpg"},"0zEM":function(t,e){},"4cev":function(t,e){},"5OHe":function(t,e){},"6qOA":function(t,e){},Aqvc:function(t,e){},B3XK:function(t,e){},DDL8:function(t,e,a){t.exports=a.p+"static/img/empty.689b20a.jpg"},DLMo:function(t,e,a){t.exports=a.p+"static/img/guanyu.f394fdd.jpg"},EQOd:function(t,e){},JAdy:function(t,e){},L8ig:function(t,e){},LtOE:function(t,e,a){"use strict";(function(t){e.a={data:function(){return{income:"",outcome:""}},mounted:function(){var t=JSON.parse(localStorage.getItem("orderSum")),e=JSON.parse(localStorage.getItem("stockSum"));t&&e?(this.income=t,this.outcome=e):(this.income=null,this.outcome=null)},methods:{createPro:function(){t(".wave").animate({top:"-146px"},6e3),setTimeout(function(){t(".income").addClass("fadeLeft")},500),setTimeout(function(){t(".outcome").addClass("fadeLeft")},2e3),setTimeout(function(){t(".comeLine").addClass("fadeRight")},3e3),setTimeout(function(){t(".allIncome").addClass("fadeUp")},4e3)}}}}).call(e,a("hcrA"))},MITL:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("rVsN"),i=a.n(s),r=a("kV13"),n=a("3cXf"),o=a.n(n),c={name:"App",data:function(){return{}},beforeMount:function(){JSON.parse(localStorage.getItem("account"))},mounted:function(){var t=JSON.parse(localStorage.getItem("myStock_s")),e=JSON.parse(localStorage.getItem("myOrder_s"));t&&localStorage.setItem("myStock",o()(t)),e&&localStorage.setItem("myOrder",o()(e))}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var u=a("C7Lr")(c,l,!1,function(t){a("4cev")},null,null).exports,m=a("wUgx"),d=a("QGQj"),p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"mainContent"},[a("router-view")],1),t._v(" "),a("nav",[a("router-link",{staticClass:"tab checkLog",attrs:{to:"/first",title:"first",tag:"div"}},[a("i",{staticClass:"el-icon-goblet-square-full"}),t._v(" "),a("p",[t._v("首页")])]),t._v(" "),a("router-link",{staticClass:"tab checkLog",attrs:{to:"/stock",title:"stock",tag:"div"}},[a("i",{staticClass:"el-icon-shopping-cart-2"}),t._v(" "),a("p",[t._v("库存管理")])]),t._v(" "),a("router-link",{staticClass:"tab checkLog",attrs:{to:"/order",title:"order",tag:"div"}},[a("i",{staticClass:"el-icon-document"}),t._v(" "),a("p",[t._v("订单管理")])]),t._v(" "),a("router-link",{staticClass:"tab checkLog",attrs:{to:"/person",title:"person",tag:"div"}},[a("i",{staticClass:"el-icon-user"}),t._v(" "),a("p",[t._v("个人中心")])])],1)])},staticRenderFns:[]};var v=function(t){a("ZZ1p")},h=a("C7Lr")(d.a,p,!1,v,"data-v-b33658d0",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homePage"},[s("router-view"),t._v(" "),s("div",{staticClass:"homeHead"},[t._v("酒品分销")]),t._v(" "),s("div",{staticClass:"homeLunbo"},[s("mt-swipe",{attrs:{auto:4e3}},[s("mt-swipe-item",[s("router-link",{staticStyle:{height:"100%"},attrs:{to:{name:"detail",query:{id:1}},tag:"div"}},[s("img",{attrs:{src:a("WcXg"),alt:""}})])],1),t._v(" "),s("mt-swipe-item",[s("router-link",{staticStyle:{height:"100%"},attrs:{to:{name:"detail",query:{id:2}},tag:"div"}},[s("img",{attrs:{src:a("sueL"),alt:""}})])],1),t._v(" "),s("mt-swipe-item",[s("router-link",{staticStyle:{height:"100%"},attrs:{to:{name:"detail",query:{id:3}},tag:"div"}},[s("img",{attrs:{src:a("DLMo"),alt:""}})])],1),t._v(" "),s("mt-swipe-item",[s("router-link",{staticStyle:{height:"100%"},attrs:{to:{name:"detail",query:{id:4}},tag:"div"}},[s("img",{attrs:{src:a("zUdq"),alt:""}})])],1)],1)],1),t._v(" "),s("div",{staticClass:"homeSearch"},[s("el-autocomplete",{staticClass:"input-with-select",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容",clearable:""},on:{select:t.handleSelect},model:{value:t.state1,callback:function(e){t.state1=e},expression:"state1"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.search()}},slot:"append"})],1)],1),t._v(" "),s("el-tabs",{attrs:{stretch:!0},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"精品展示",name:"first"}},[s("p",{staticClass:"homeTitle"},[s("i",{staticClass:"el-icon-sold-out"}),t._v(" Hot热卖\n      ")]),t._v(" "),s("div",{staticClass:"boutique"},t._l(t.boutiqueArr1,function(e,a){return s("router-link",{key:a,attrs:{tag:"div",to:{name:"detail",query:{id:a+5}}}},[s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("p",[t._v("\n            "+t._s(e.name)+"\n            "),s("span",{staticClass:"homePrice"},[s("i",{staticClass:"el-icon-coin",staticStyle:{color:"black"}}),t._v("\n              "+t._s(e.price)+"起\n            ")])])])}),1)]),t._v(" "),s("el-tab-pane",{attrs:{label:"入库推荐",name:"second"}},[s("p",{staticClass:"homeTitle"},[s("i",{staticClass:"el-icon-sold-out"}),t._v(" Hot热卖\n      ")]),t._v(" "),s("div",{staticClass:"boutique"},t._l(t.boutiqueArr2,function(e,a){return s("router-link",{key:a,attrs:{tag:"div",to:{name:"detail",query:{id:a+9}}}},[s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("p",[t._v("\n            "+t._s(e.name)+"\n            "),s("span",{staticClass:"homePrice"},[s("i",{staticClass:"el-icon-coin",staticStyle:{color:"black"}}),t._v("\n              "+t._s(e.price)+"起\n            ")])])])}),1)])],1),t._v(" "),s("div",{staticClass:"homeShow"})],1)},staticRenderFns:[]};var g=a("C7Lr")({data:function(){return{activeName:"second",restaurants:[],dataList:{},state1:"",boutiqueArr1:[],boutiqueArr2:[]}},mounted:function(){this.getRecommand(),this.restaurants=this.loadAll()},methods:{search:function(){this.$router.push({name:"searchDetail",params:{keyWord:this.state1}})},loadAll:function(){return[{value:"茅台"},{value:"五粮液"},{value:"知名品牌"},{value:"养生"}]},handleClick:function(t,e){},querySearch:function(t,e){var a=this.restaurants;e(t?a.filter(this.createFilter(t)):a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){},getRecommand:function(){var t=this;this.$http.get("../static/recommand.json").then(function(e){t.boutiqueArr1=e.data[0],t.boutiqueArr2=e.data[1]}).catch(function(t){return t})}}},f,!1,function(t){a("tTMS")},"data-v-30bcb27d",null).exports,_={data:function(){return{myStock:{}}},mounted:function(){this.myStock=JSON.parse(localStorage.getItem("myStock"))},methods:{del:function(t){var e=this;t.exist&&this.$messagebox.confirm("确定删除该项?").then(function(a){"confirm"===a&&(t.num++,delete e.myStock[t.name],localStorage.setItem("myStock",o()(e.myStock)),localStorage.setItem("myStock_s",o()(e.myStock)))}).catch(function(t){console.log(t)})},tab:function(){localStorage.setItem("myStock",o()(this.myStock)),localStorage.setItem("myStock_s",o()(this.myStock)),this.$router.push({name:"stockTab"})},buy:function(){this.$router.push({name:"settle"})}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stock"},[s("Header",{attrs:{title:"库存"}}),t._v(" "),Object.keys(t.myStock).length>0?s("div",{staticClass:"allStock"},[t._l(t.myStock,function(e,a){return s("div",{key:a,staticClass:"stockItem"},[s("el-checkbox",{model:{value:e.exist,callback:function(a){t.$set(e,"exist",a)},expression:"item.exist"}}),t._v(" "),s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("div",{staticClass:"itemInfo"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("p",[s("span",{staticClass:"oldPrice"},[t._v("￥"+t._s(1*e.price+30))]),t._v("\n          ￥"+t._s(e.price)+"\n        ")]),t._v(" "),s("el-input-number",{attrs:{size:"mini",min:0},model:{value:e.num,callback:function(a){t.$set(e,"num",a)},expression:"item.num"}})],1),t._v(" "),s("div",{staticClass:"itemDel",on:{click:function(a){return t.del(e)}}},[s("i",{staticClass:"el-icon-delete"})])],1)}),t._v(" "),s("button",{staticClass:"stockTab",on:{click:t.tab}},[t._v("生成表格")])],2):s("div",{staticClass:"emptyStock"},[s("img",{attrs:{src:a("DDL8"),alt:""}})])],1)},staticRenderFns:[]};var k=a("C7Lr")(_,y,!1,function(t){a("0zEM")},"data-v-33433820",null).exports,S=a("HzJ8"),b=a.n(S),C={data:function(){return{tableData:[],myStock:[],sum:0}},mounted:function(){var t=[];for(var e in this.myStock=JSON.parse(localStorage.getItem("myStock")),this.myStock){var a={name:"",price:"",num:""};a.name=this.myStock[e].name,a.price=this.myStock[e].price,a.num=this.myStock[e].num,t.push(a)}this.tableData=t;var s=0,i=!0,r=!1,n=void 0;try{for(var c,l=b()(t);!(i=(c=l.next()).done);i=!0){var u=c.value;s+=u.price*u.num}}catch(t){r=!0,n=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw n}}this.sum=s,localStorage.setItem("stockSum",o()(this.sum))},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2==0?"warning-row":e%2!=0?"success-row":""},getSummaries:function(t){var e=t.columns,a=t.data,s=[];return e.forEach(function(t,e){if(0!==e){var i=a.map(function(e){return Number(e[t.property])});i.every(function(t){return isNaN(t)})?s[e]="N/A":(s[e]=i.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0),s[e]+=" 元")}else s[e]="总价"}),s}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stockTable"},[a("Header",{attrs:{title:"库存报表"}}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:t.tableData,border:"","show-summary":"","row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"num",sortable:"",label:"商品数量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",sortable:"",label:"商品单价"}})],1),t._v(" "),a("div",{staticClass:"settle"},[a("span",[t._v("总购入: ")]),t._v(" "),a("span",[t._v(" "+t._s(t.sum))]),t._v(" "),a("span",[t._v(" 元 ")])])],1)},staticRenderFns:[]};var w=a("C7Lr")(C,L,!1,function(t){a("B3XK")},"data-v-348ac836",null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header",{attrs:{title:"结算"}})],1)},staticRenderFns:[]},$=a("C7Lr")(null,x,!1,null,null,null).exports,N={data:function(){return{myOrder:{}}},mounted:function(){var t=JSON.parse(localStorage.getItem("myStock_s"));for(var e in this.myOrder=t?JSON.parse(localStorage.getItem("myStock_s")):JSON.parse(localStorage.getItem("myStock")),this.myOrder)this.myOrder[e].price-=-30;localStorage.setItem("myOrder",o()(this.myOrder)),localStorage.setItem("myOrder_s",o()(this.myOrder))},methods:{tab:function(){localStorage.setItem("myStock",o()(this.myStock)),this.$router.push({name:"stockTab"})},purchase:function(t){this.$router.push({name:"purchase",params:{item:t}})}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[s("Header",{attrs:{title:"订单"}}),t._v(" "),Object.keys(t.myOrder).length>0?s("div",{staticClass:"orderList"},t._l(t.myOrder,function(e,a){return s("div",{key:a,staticClass:"orderItem",on:{click:function(a){return t.purchase(e)}}},[s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("div",{staticClass:"itemInfo"},[s("p",[t._v(t._s(e.name))]),t._v(" "),t._l(e.tag,function(e,a){return s("span",{key:a,staticClass:"featureTag"},[t._v(t._s(e))])}),t._v(" "),s("p",{staticClass:"orderPrice"},[s("span",{staticStyle:{"font-size":"12px"}},[t._v("￥")]),t._v("\n          "+t._s(e.price)+"\n        ")])],2)])}),0):s("div",{staticClass:"emptyStock"},[s("img",{attrs:{src:a("DDL8"),alt:""}})])],1)},staticRenderFns:[]};var O=a("C7Lr")(N,I,!1,function(t){a("Aqvc")},"data-v-6971b1fe",null).exports,q={data:function(){return{userName:"admin"}},mounted:function(){var t=JSON.parse(localStorage.getItem("account"));t&&(this.userName=t.nickName)},methods:{orderTable:function(){this.$router.push({name:"personOrder"})},profit:function(){var t=JSON.parse(localStorage.getItem("orderSum")),e=JSON.parse(localStorage.getItem("stockSum"));t&&e?this.$router.push({name:"profit"}):this.$toast("订单未结算")},logOut:function(){localStorage.setItem("isLog",o()(!1)),this.$router.push({name:"login"})}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"perCenter"},[a("Header",{attrs:{title:"个人中心"}}),t._v(" "),a("div",{staticClass:"perContent"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"userName"},[t._v(t._s(t.userName))])]),t._v(" "),a("div",{staticClass:"personList",on:{click:t.orderTable}},[a("i",{staticClass:"el-icon-notebook-2"}),t._v("\n        订单报表\n      "),a("i",{staticClass:"userLink el-icon-arrow-right"})]),t._v(" "),a("div",{staticClass:"personList",on:{click:t.profit}},[a("i",{staticClass:"el-icon-money"}),t._v("\n        盈利详情\n      "),a("i",{staticClass:"userLink el-icon-arrow-right"})]),t._v(" "),a("div",{staticClass:"personList",on:{click:t.logOut}},[a("i",{staticClass:"el-icon-switch-button"}),t._v("\n        退出登录\n      "),a("i",{staticClass:"userLink el-icon-arrow-right"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"userImg"},[e("img",{attrs:{src:a("kUec")}})])}]};var D=a("C7Lr")(q,T,!1,function(t){a("EQOd")},"data-v-8db70cde",null).exports,J={data:function(){return{detailArr:{},num:1,newsID:"",myStock:{},inset:"",dataList:{}}},created:function(){this.getDataList()},mounted:function(){var t=this.$route.query.id;this.newsID=t,this.getData(t),JSON.parse(localStorage.getItem("myStock_s"))?this.myStock=JSON.parse(localStorage.getItem("myStock_s")):this.myStock=JSON.parse(localStorage.getItem("myStock")),console.log(this.myStock)},methods:{stock:function(){JSON.parse(localStorage.getItem("isLog"))?this.$router.push({name:"stock"}):(this.$toast({message:"请登录后操作",duration:800}),this.$router.push({name:"login"}))},addStock:function(){if(!JSON.parse(localStorage.getItem("isLog")))return this.$toast({message:"请登录后操作",duration:800}),void this.$router.push({name:"login"});console.log(this.dataList[this.newsID]),this.insert=this.dataList[this.newsID].name,this.myStock[this.insert]?this.$message({message:"该类酒已经在购物车里",type:"error",center:"true",duration:"700",offset:400}):(this.dataList[this.newsID].num=this.num,this.myStock[this.insert]=this.dataList[this.newsID],console.log(this.myStock[this.insert]),localStorage.setItem("myStock",o()(this.myStock)),localStorage.setItem("myStock_s",o()(this.myStock)),this.$message({message:"添加成功",type:"success",center:"true",duration:"700",offset:400}))},getData:function(t){var e=this;this.$http.get("../static/detail.json").then(function(a){e.detailArr=a.data[t-1]}).catch(function(t){return t})},getDataList:function(){var t=this;this.$http.get("../static/dataList.json").then(function(e){t.dataList=e.data}).catch(function(t){return t})}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("Header",{attrs:{title:"详情"}}),t._v(" "),a("div",{staticClass:"detail-wrap"},[a("img",{staticClass:"detailLogo",attrs:{src:t.detailArr.img,alt:""}}),t._v(" "),a("div",{staticClass:"Homebuy"},[a("b",{staticStyle:{"margin-right":"40%","font-size":"20px"}},[t._v("购买数量")]),t._v(" "),a("el-input-number",{attrs:{size:"mini",min:0},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),a("button",{staticStyle:{background:"#ff976a"},on:{click:t.addStock}},[a("span",[t._v("加入库存")])]),t._v(" "),a("button",{staticStyle:{background:"#ff4444"},on:{click:t.stock}},[a("span",[t._v("我的库存")])])])],1)},staticRenderFns:[]};var E=a("C7Lr")(J,A,!1,function(t){a("JAdy")},"data-v-b8f65d64",null).exports,R={data:function(){return{form:{phone:"13543565736",region:"",delivery:!1},auto:!0,value:"",items:{},activeName:"first",desc:"",purchaseList:[],myStock:{}}},mounted:function(){var t=JSON.parse(localStorage.getItem("myStock"));localStorage.setItem("myStock",o()(t)),this.items=this.$route.params.item,this.myStock=JSON.parse(localStorage.getItem("myStock"));var e=[];for(var a in this.myStock){var s={name:"",price:"",num:""};s.name=this.myStock[a].name,s.price=this.myStock[a].price- -30,s.num=this.myStock[a].num,s.tag=this.myStock[a].tag.join(","),e.push(s)}this.purchaseList=e},methods:{overPay:function(){var t={};for(var e in delete(t=this.items).exist,t.tag=t.tag.join(","),t.desc=this.desc,t.phone=this.form.phone,t.region=this.form.region,t.delivery=this.form.delivery,t.activeName=this.activeName,"first"==t.activeName?t.activeName="在线支付":t.activeName="货到付款",t.delivery?t.delivery="是":t.delivery="否",this.purchaseList)this.purchaseList[e].name==t.name&&this.purchaseList.splice(e,1,t);this.form.phone||this.form.region?("first"==this.activeName?this.$router.push({name:"payCode"}):this.$router.push({name:"paySuccess",query:{boo:!0}}),localStorage.setItem("purchaseList",o()(this.purchaseList))):this.$toast("信息未完善")}}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchase"},[a("Header",{attrs:{title:"结算"}}),t._v(" "),a("div",{staticClass:"address"},[a("el-form",{ref:"form",attrs:{"label-position":"left",model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"电话"}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择活动区域"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}},[a("el-option",{attrs:{label:"13543565736",value:"13543565736"}}),t._v(" "),a("el-option",{attrs:{label:"13945465142",value:"13945465142"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{size:"mini",label:"收货地址"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[a("el-option",{attrs:{label:"浙江绍兴",value:"浙江绍兴"}}),t._v(" "),a("el-option",{attrs:{label:"湖北荆州",value:"湖北荆州"}}),t._v(" "),a("el-option",{attrs:{label:"甘肃兰州",value:"甘肃兰州"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"shopItem"},[a("h4",[t._v("商品明细")]),t._v(" "),a("div",[a("span",[a("img",{attrs:{src:t.items.img,alt:""}})]),t._v(" "),a("div",{staticClass:"shopDetail"},[a("p",[t._v(t._s(t.items.name))]),t._v(" "),a("p",[t._v("￥"+t._s(t.items.price))])]),t._v(" "),a("div",[t._v("x"+t._s(t.items.num))])])]),t._v(" "),a("div",{staticClass:"pay-wrap"},[a("h4",[t._v("支付方式")]),t._v(" "),a("el-tabs",{attrs:{stretch:t.auto,type:"border-card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"在线支付",name:"first"}},[t._v("支持支付宝支付、微信支付、银行卡支付、财付通等")]),t._v(" "),a("el-tab-pane",{attrs:{label:"货到付款",name:"second"}},[t._v("货到再付款，支持现金交易")])],1)],1),t._v(" "),a("div",{staticClass:"shopComment"},[a("h4",[t._v("备注")]),t._v(" "),a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),t._v(" "),a("div",{staticClass:"overPay"},[a("span",[a("span",[t._v("合计:")]),t._v(" "),a("span",[t._v("￥"+t._s(t.items.price*t.items.num))])]),t._v(" "),a("button",{on:{click:t.overPay}},[t._v("结算")])])],1)},staticRenderFns:[]};var H=a("C7Lr")(R,j,!1,function(t){a("L8ig")},"data-v-110ef7ac",null).exports,F=a("af4o"),P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"payCode"},[e("Header",{attrs:{title:"支付"}}),this._v(" "),e("img",{attrs:{src:a("xnyY"),alt:""}})],1)},staticRenderFns:[]};var z=function(t){a("jpGC")},Q=a("C7Lr")(F.a,P,!1,z,"data-v-3eade7ed",null).exports,W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"paySuccess"},[s("Header",{attrs:{title:"结算"}}),t._v(" "),t.$route.query.boo?s("div",[s("img",{attrs:{src:a("QqkE"),alt:""}}),t._v(" "),s("p",[t._v("订单已完成")]),t._v(" "),s("p",[t._v("祝您生活愉快 感谢您的支持与厚爱")])]):s("div",[s("img",{attrs:{src:a("0CO9"),alt:""}}),t._v(" "),s("p",[t._v("支付失败,请重试")])])],1)},staticRenderFns:[]};var M=a("C7Lr")(null,W,!1,function(t){a("MITL")},"data-v-4f8858d7",null).exports,X={data:function(){return{dataList:{},keyWord:"",restaurants:[],state1:"",answer:[]}},mounted:function(){this.getDataList(),this.restaurants=this.loadAll();this.dataList;this.keyWord=this.$route.params.keyWord},methods:{detail:function(t){this.$router.push({name:"detail",query:{id:t}})},search:function(){for(var t in this.answer=[],this.keyWord=this.state1,this.dataList)this.dataList[t].name!=this.keyWord&&-1==this.dataList[t].tag.indexOf(this.keyWord)||(this.dataList[t].itemId=t,this.answer.indexOf(this.dataList[t])&&this.answer.push(this.dataList[t]));console.log(this.answer)},loadAll:function(){return[{value:"历史文化"},{value:"葡萄酒"},{value:"纯天然"},{value:"养生"}]},handleClick:function(t,e){console.log(t,e)},querySearch:function(t,e){var a=this.restaurants;e(t?a.filter(this.createFilter(t)):a)},createFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){console.log(t)},getDataList:function(){var t=this;this.$http.get("../static/dataList.json").then(function(e){for(var a in t.dataList=e.data,t.dataList)t.dataList[a].name!=t.keyWord&&-1==t.dataList[a].tag.indexOf(t.keyWord)||(t.dataList[a].itemId=a,t.answer.push(t.dataList[a]))}).catch(function(t){return t})}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{attrs:{title:"查询"}}),t._v(" "),s("div",{staticClass:"searchDetail"},[s("el-autocomplete",{staticClass:"input-with-select",attrs:{"fetch-suggestions":t.querySearch,placeholder:"请输入内容",clearable:""},on:{select:t.handleSelect},model:{value:t.state1,callback:function(e){t.state1=e},expression:"state1"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.search()}},slot:"append"})],1)],1),t._v(" "),0!=t.answer.length?s("div",{staticClass:"searchImg"},t._l(t.answer,function(e,a){return s("div",{key:a,on:{click:function(a){return t.detail(e.itemId)}}},[s("img",{attrs:{src:e.img,alt:""}}),t._v(" "),s("div",{staticClass:"sd_itemInfo"},[s("p",[t._v(t._s(e.name))]),t._v(" "),s("p",[t._v("净含量:"+t._s(e.kg)+"kg")]),t._v(" "),s("span",[t._v("￥")]),t._v(" "),s("span",[t._v(t._s(e.price- -30))]),t._v(" "),s("p",{staticClass:"sd-tags"},t._l(e.tag,function(e,a){return s("span",{key:a},[t._v(t._s(e))])}),0)])])}),0):s("div",{staticClass:"noData"},[s("p",[t._v("暂无数据")]),t._v(" "),s("img",{attrs:{src:a("sjts"),alt:""}})])],1)},staticRenderFns:[]};var G=a("C7Lr")(X,U,!1,function(t){a("X50l")},"data-v-16de5df6",null).exports,Z={data:function(){return{orderTable:[],sum:0}},mounted:function(){this.orderTable=JSON.parse(localStorage.getItem("purchaseList")),console.log(this.orderTable);var t=0;if(this.orderTable){var e=!0,a=!1,s=void 0;try{for(var i,r=b()(this.orderTable);!(e=(i=r.next()).done);e=!0){var n=i.value;t+=n.price*n.num}}catch(t){a=!0,s=t}finally{try{!e&&r.return&&r.return()}finally{if(a)throw s}}}this.sum=t,localStorage.setItem("orderSum",o()(this.sum))},methods:{tableRowClassName:function(t){t.row;var e=t.rowIndex;return e%2==0?"warning-row":e%2!=0?"success-row":""}},getSummaries:function(t){var e=t.columns,a=t.data,s=[];return e.forEach(function(t,e){if(0!==e){var i=a.map(function(e){return Number(e[t.property])});i.every(function(t){return isNaN(t)})?s[e]="N/A":(s[e]=i.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0),s[e]+=" 元")}else s[e]="总价"}),s}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stockTable"},[a("Header",{attrs:{title:"我的订单"}}),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderTable,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",block:""}},[a("el-form-item",{attrs:{label:"分类"}},[a("span",[t._v(t._s(e.row.tag))])]),t._v(" "),a("el-form-item",{attrs:{label:"配送电话"}},[a("span",[t._v(t._s(e.row.phone))])]),t._v(" "),a("el-form-item",{attrs:{label:"配送地址"}},[a("span",[t._v(t._s(e.row.region))])]),t._v(" "),a("el-form-item",{attrs:{label:"即时配送"}},[a("span",[t._v(t._s(e.row.delivery))])]),t._v(" "),a("el-form-item",{attrs:{label:"支付方式"}},[a("span",[t._v(t._s(e.row.activeName))])]),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("span",[t._v(t._s(e.row.desc?e.row.desc:"——"))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称",prop:"name",sortable:!0}}),t._v(" "),a("el-table-column",{attrs:{label:"商品数量",prop:"num",sortable:!0}}),t._v(" "),a("el-table-column",{attrs:{label:"商品单价",prop:"price",sortable:!0}})],1),t._v(" "),a("div",{staticClass:"settle"},[a("span",[t._v("总售出:")]),t._v(" "),a("span",[t._v(t._s(t.sum))]),t._v(" "),a("span",[t._v("元")])])],1)},staticRenderFns:[]};var K=a("C7Lr")(Z,B,!1,function(t){a("qwhG"),a("TtxS")},"data-v-120ca2fe",null).exports,V=a("LtOE"),Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profit"},[a("Header",{attrs:{title:"盈利情况"}}),t._v(" "),a("p",[t._v("计算盈利")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"calProfit"},[a("p",[t._v("\n      总收入:\n      "),a("span",{staticClass:"income"},[t._v(t._s(t.income))])]),t._v(" "),a("p",[t._v("\n      总购入:\n      "),a("span",{staticClass:"outcome",staticStyle:{color:"#555"}},[a("i",{staticStyle:{float:"left"}},[t._v("-")]),t._v("\n        "+t._s(t.outcome)+"\n      ")])]),t._v(" "),a("div",{staticClass:"comeLine"}),t._v(" "),a("br"),t._v(" "),a("p",{staticClass:"allIncome",staticStyle:{color:"#f44"}},[t._v(t._s(t.income-t.outcome))])]),t._v(" "),a("button",{staticClass:"createPro",on:{click:t.createPro}},[t._v("生成盈利")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"water"},[e("div",{staticClass:"wave"})])])}]};var tt=function(t){a("cuoO")},et=a("C7Lr")(V.a,Y,!1,tt,"data-v-0a58a359",null).exports,at={data:function(){return{nickName:"",password:"",phone:"",isLog:!1}},methods:{registe:function(){var t={nickName:this.nickName,phone:this.phone,password:this.password},e=JSON.parse(localStorage.getItem("account"));if(e)if(e.phone==t.phone)this.$toast("账号已存在");else{if(!(this.nickName&&this.password&&this.phone))return void this.$toast("信息尚未完善");localStorage.setItem("account",o()(t)),this.isLog=!0,this.$toast("请登录")}else{if(!(this.nickName&&this.password&&this.phone))return void this.$toast("信息尚未完善");localStorage.setItem("account",o()(t)),this.isLog=!0,this.$toast("请登录"),localStorage.setItem("account",o()(t)),this.$toast("请登录"),this.isLog=!0}},login:function(){var t=JSON.parse(localStorage.getItem("account"));t?this.phone==t.phone&&this.password==t.password?(this.$router.push({name:"first"}),localStorage.setItem("isLog",o()(!0))):this.$toast("登录错误,请重试"):this.$toast("请先注册")}}},st={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bruce flex-ct-x"},[a("form",{staticClass:"bubble-distribution"},[t.isLog?a("h3",[t._v("登录")]):t._e(),t._v(" "),t.isLog?t._e():a("h3",[t._v("注册")]),t._v(" "),t.isLog?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"nickName",attrs:{type:"text",placeholder:"请输入昵称",pattern:"[A-z]{6}",maxlength:"6",required:"",autocomplete:"on"},domProps:{value:t.nickName},on:{input:function(e){e.target.composing||(t.nickName=e.target.value)}}}),t._v(" "),a("div",{staticClass:"accout"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"accountInput",attrs:{type:"text",placeholder:"请输入账号",pattern:"^1[3456789]\\d{9}$|^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$",required:"",autocomplete:"on"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),a("img",{attrs:{src:"https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"}})]),t._v(" "),a("div",{staticClass:"password"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码",pattern:"^[\\dA-Za-z_]{6,20}$",required:"",autocomplete:"on"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("img",{attrs:{src:"https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png"}})]),t._v(" "),t._m(0),t._v(" "),a("img",{attrs:{src:"https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png"}}),t._v(" "),a("ul",[a("li",[a("input",{attrs:{type:"radio",name:"sex",id:"log"}}),t._v(" "),a("label",{attrs:{for:"log"},on:{click:function(e){t.isLog=!0}}},[a("span",[t._v("登录")])])]),t._v(" "),a("li",[a("input",{attrs:{type:"radio",name:"sex",id:"reg"}}),t._v(" "),a("label",{attrs:{for:"reg"},on:{click:function(e){t.isLog=!1}}},[a("span",[t._v("注册")])])])]),t._v(" "),t.isLog?a("button",{attrs:{type:"button"},on:{click:t.login}},[t._v("登录")]):t._e(),t._v(" "),t.isLog?t._e():a("button",{attrs:{type:"button"},on:{click:t.registe}},[t._v("注册")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code"},[e("img",{attrs:{src:"https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png"}})])}]};var it=a("C7Lr")(at,st,!1,function(t){a("Qyhv")},"data-v-24d39bf2",null).exports;r.default.use(m.a);var rt=m.a.prototype.push;m.a.prototype.push=function(t){return rt.call(this,t).catch(function(t){return t})};var nt=new m.a({routes:[{path:"/",name:"home",component:h,children:[{path:"/first",name:"first",component:g,children:[{path:"/first/detail",name:"detail",component:E}]},{path:"/stock",name:"stock",component:k},{path:"/order",name:"order",component:O},{path:"/person",name:"person",component:D},{path:"*",redirect:"/first"}]},{path:"/stockTab",name:"stockTab",component:w},{path:"/settle",name:"settle",component:$},{path:"/purchase",name:"purchase",component:H},{path:"/payCode",name:"payCode",component:Q},{path:"/paySuccess",name:"paySuccess",component:M},{path:"/searchDetail",name:"searchDetail",component:G},{path:"/personOrder",name:"personOrder",component:K},{path:"/profit",name:"profit",component:et},{path:"/login",name:"login",component:it}]}),ot=a("bQIR"),ct=a.n(ot),lt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"headerTitle"},[a("div",{staticClass:"header-left",on:{click:function(e){return t.$router.go(-1)}}},[a("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),a("div",{staticClass:"header-in"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"header-rigth"})])},staticRenderFns:[]};var ut=a("C7Lr")({name:"headerTitle",props:["title"]},lt,!1,function(t){a("6qOA")},"data-v-07db0373",null).exports;var mt=function(t){t.component("Header",ut)},dt=a("wSez"),pt=a.n(dt),vt=(a("5OHe"),a("Xcu2"),a("hcrA"),{});window.localStorage.setItem("myStock",o()(vt));var ht={myStock:vt},ft=a("C7Lr")(ht,null,!1,null,null,null).exports,gt=a("I29D"),_t=a.n(gt);r.default.config.productionTip=!1,_t.a.interceptors.request.use(function(t){return t},function(t){return i.a.reject(t)}),_t.a.interceptors.response.use(function(t){return t},function(t){return i.a.reject(t)}),r.default.prototype.$http=_t.a,r.default.use(ct.a),r.default.use(mt),r.default.use(pt.a),new r.default({el:"#app",router:nt,components:{App:u},template:"<App/>",render:function(t){return t(u)}}),r.default.prototype.myStock=ft},QGQj:function(t,e,a){"use strict";(function(t){e.a={data:function(){return{Data:[],pageUrl:""}},mounted:function(){var e=this;t(".checkLog").click(function(a){JSON.parse(localStorage.getItem("isLog"))?(t(".checkLog").eq(t(this).index()).addClass("cur").siblings().removeClass("cur"),e.$router.push({name:a.delegateTarget.title}),console.log(a.delegateTarget.title,e.$router)):(e.pageUrl="/"+a.delegateTarget.title,e.$toast({message:"请登录后操作",duration:800}),e.$router.push({name:"login"}))})},methods:{stock:function(){JSON.parse(localStorage.getItem("isLog"))?this.$router.push({name:"stock"}):(this.$toast("请登录后操作"),setTimeout(function(){this.$router.push({name:"login"})},1e3))},order:function(){JSON.parse(localStorage.getItem("isLog"))?this.$router.push({name:"order"}):(this.$toast("请登录后操作"),setTimeout(function(){this.$router.push({name:"login"})},1e3))},person:function(){JSON.parse(localStorage.getItem("isLog"))?this.$router.push({name:"person"}):(this.$toast("请登录后操作"),setTimeout(function(){this.$router.push({name:"login"})},1e3))}}}}).call(e,a("hcrA"))},QqkE:function(t,e,a){t.exports=a.p+"static/img/success.4e5e8c3.jpg"},Qyhv:function(t,e){},TtxS:function(t,e){},WcXg:function(t,e,a){t.exports=a.p+"static/img/maotai.b437fc5.jpg"},X50l:function(t,e){},Xcu2:function(t,e){},ZZ1p:function(t,e){},af4o:function(t,e,a){"use strict";(function(t){e.a={data:function(){return{}},mounted:function(){var e=this;t(".payCode img ").click(function(){console.log(1),setTimeout(function(){e.$router.push({name:"paySuccess",query:{boo:!1}})},3e3)})}}}).call(e,a("hcrA"))},cuoO:function(t,e){},jpGC:function(t,e){},kUec:function(t,e,a){t.exports=a.p+"static/img/admin.ffb6d24.jpg"},qwhG:function(t,e){},sjts:function(t,e,a){t.exports=a.p+"static/img/nodata.92e5797.png"},sueL:function(t,e,a){t.exports=a.p+"static/img/wuliangye.143c815.jpg"},tTMS:function(t,e){},xnyY:function(t,e,a){t.exports=a.p+"static/img/code.652b508.jpg"},zUdq:function(t,e,a){t.exports=a.p+"static/img/grape.cdba7c7.jpg"}},["NHnr"]);
//# sourceMappingURL=app.7d0c52d0e91af5e4fd3c.js.map