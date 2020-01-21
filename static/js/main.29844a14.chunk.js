(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},43:function(e,t,a){},44:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(43),a(44),a(16)),i=a(6),s=a(7),u=a(10),m=a(8),p=a(11),d=a(9),E=a(3);function h(e){var t=e.search.length?e.search:e.products;return r.a.createElement("div",{className:"product-list-component"},r.a.createElement("h4",null,"Products"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-6 col-md-4 col-mb"},r.a.createElement("div",{className:"card product-list"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:e.imageUrl,className:"card-img-top",alt:"productdisplay"}),r.a.createElement(E.b,{to:"/product/".concat(e.id)},r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"text"},"View"))),r.a.createElement("h5",{className:"card-title"},e.name))))})))))}var b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleChange=function(e){var t=e.target.value;a.setState({value:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.searchProducts(a.state.value,a.props.products)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container searchbar"},r.a.createElement("form",{onSubmit:this.handleSubmit,style:{marginTop:"56px"}},r.a.createElement("div",{className:"md-form active-pink active-pink-2 mb-3 mt-0"},r.a.createElement("label",null,"Search"),r.a.createElement("input",{onChange:this.handleChange,className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",value:this.state.value}))))}}]),t}(r.a.Component),f="SEARCH";var v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){return this.props.products?r.a.createElement("div",null,r.a.createElement(b,{products:this.props.products,searchProducts:this.props.searchProducts}),r.a.createElement(h,{products:this.props.products,search:this.props.search})):r.a.createElement("p",null,"Loading...")}}]),t}(r.a.Component),y=Object(d.b)((function(e){return{products:e.products,search:e.search}}),{getProducts:function(){return function(e){fetch("http://localhost:3010/products").then((function(e){return e.json()})).then((function(t){e(function(e){return{type:"SET_PRODUCTS",payload:{products:e}}}(t))}))}},searchProducts:function(e,t){return{type:f,payload:{query:e,products:t}}}})(v),g=a(35),O=a.n(g);a(63);function N(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid container-product"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 col-lg-6 col-md-6 col-left"},r.a.createElement(O.a,{thumbnail:e.product.imageUrl,image:e.product.imageUrl})),r.a.createElement("div",{className:"col-md-12 col-lg-6 right-col"},r.a.createElement("div",{className:"body"},r.a.createElement("h4",null,e.product.name),r.a.createElement("div",{className:"detail-product"},r.a.createElement("span",{className:"price-num"},"\u20ac",e.product.price)),r.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"),r.a.createElement("div",{className:"st-info"},r.a.createElement("div",{className:"extra-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-check"})),r.a.createElement("span",null,"Order before tomorrow 15:00 to receive tomorrow.")),r.a.createElement("div",{className:"extra-info"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-check"})),r.a.createElement("span",null,"Worldwide shipping.")))),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-add-cart",onClick:function(){return e.addToCart(e.product)}},"Add to cart"),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-add-wish",onClick:function(){return e.addWish(e.product)}},"Add to wishlist"))))))}var j=a(36),w=a.n(j);function D(e){return function(t){w()("http://localhost:3010/products/".concat(e)).then((function(e){return e.body})).then((function(e){t(function(e){return{type:"SET_PRODUCTS_DETAILS",payload:e}}(e))}))}}function T(e){return{type:"ADD_TO_CART",payload:e}}var k=function(e){return{type:"REMOVE_FROM_CART",payload:e}},C=function(e,t){return{type:"INCREMENT",payload:{quantity:t,id:e}}},S=function(e,t){return{type:"DECREMENT",payload:{quantity:t,id:e}}},P=function e(t,a){return{type:"TOTAL",payload:{quantity:t,price:a,total:e}}};function _(e,t){return{type:"ADD_WISH",payload:{product:e,id:t}}}var R=function(e){return{type:"REMOVE_FROM_WISH_LIST",payload:e}},A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).addToCart=function(){},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;console.log("product id?",e),this.props.getProductDetail(e)}},{key:"render",value:function(){return console.log("AM I RENDERED",this.props),this.props.product.name?r.a.createElement("div",null,r.a.createElement(N,{product:this.props.product,addToCart:this.props.addToCart,addWish:this.props.addWish})):"Loading"}}]),t}(r.a.Component),q=Object(d.b)((function(e){return console.log("mapstate",e),{product:e.productDetail,cart:e.cart,wish:e.wish}}),{getProductDetail:D,addToCart:T,addWish:_})(A);a(32);function x(e){return!e.cart.length?r.a.createElement("p",{style:{marginTop:"100px",textAlign:"center",fontFamily:"Quicksand",fontWeight:500}},"Your bag is empty!"):r.a.createElement("div",{className:"wrapper-cart"},r.a.createElement("div",{className:"container-fluid container-product"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-4 col-left-cart"},r.a.createElement("h5",null,"Your bag"),r.a.createElement(E.b,{to:"/products",class:"btn btn-link btn-delete btn-rm-bg"},r.a.createElement("span",null,r.a.createElement("i",{class:"fa fa-chevron-left"})),"Keep Shopping")),r.a.createElement("div",{className:"col-xs-12 col-md-8 col-right-cart"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Ref."),r.a.createElement("th",{scope:"col",className:"qty"},"Qty."),r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"Price"))),r.a.createElement("tbody",null,e.cart.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},t.name),r.a.createElement("td",null,"87320"),r.a.createElement("th",{scope:"row",className:"qty"},r.a.createElement("span",null,r.a.createElement("button",{type:"button",className:"btn btn-lg btn-checkout btn-rm-bg",onClick:function(){return e.decrement(t.id)}},r.a.createElement("i",{class:"fa fa-minus"}))),r.a.createElement("span",null,t.quantity),r.a.createElement("span",null,r.a.createElement("button",{type:"button",className:"btn btn-lg btn-checkout",onClick:function(){return e.increment(t.id)}},r.a.createElement("i",{class:"fa fa-plus"})))),r.a.createElement("th",{scope:"row"},r.a.createElement("button",{type:"button",class:"btn btn-link btn-delete btn-rm-bg",onClick:function(){return e.deleteFromCart(t.id)}},"Delete")),r.a.createElement("td",null,"\u20ac ",t.price*t.quantity))})))))),r.a.createElement("button",{className:"btn",id:"btn-checkout-cart"},"Checkout")))}var L=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){P()}},{key:"render",value:function(){return r.a.createElement(x,{cart:this.props.cart,deleteFromCart:this.props.deleteFromCart,increment:this.props.increment,decrement:this.props.decrement,total:this.props.total})}}]),t}(r.a.Component),M=Object(d.b)((function(e){return{cart:e.cart}}),{deleteFromCart:k,increment:C,decrement:S,total:P})(L);function W(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid container-product"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-left-cart"},r.a.createElement("h5",null,"Your Wish List"),r.a.createElement(E.b,{to:"/",className:"btn btn-link btn-delete"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-chevron-left"})),"Keep Shopping")),r.a.createElement("div",{className:"col-md-8 col-right-cart"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Product"),r.a.createElement("th",{scope:"col"},"Ref."),r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"Price"))),r.a.createElement("tbody",null,e.wish.map((function(t){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t.name),r.a.createElement("td",null,"87320"),r.a.createElement("th",{scope:"row"},r.a.createElement("button",{type:"button",className:"btn btn-link btn-delete",onClick:function(){return e.deleteFromWishList(t.id)}},"Delete")),r.a.createElement("td",null,"\u20ac ",t.price),r.a.createElement("img",{src:t.imageUrl,key:t.id,alt:t.name}))}))))))))}var I=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{wish:this.props.wish,deleteFromWishList:this.props.deleteFromWishList}))}}]),t}(r.a.Component),F=Object(d.b)((function(e){return{wish:e.wish,deleteFromWishList:R}}))(I);function U(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer font-small bg-light"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-heart"})),r.a.createElement("p",null,"\xa9 2019 Copyright"))))}function V(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home-image"},r.a.createElement("div",{className:"hero-text"},r.a.createElement(E.b,{to:"/products"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-home"},"Shop")))))}function H(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-light"},r.a.createElement(E.b,{className:"navbar-brand nav-brand-custom",to:"/"},r.a.createElement("span",null,"Shop "),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-circle"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0 navbar-nav-custom"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(E.b,{className:"nav-link link-custom",to:"/products"},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link link-custom",to:"/cart"},e.cart.length,r.a.createElement("i",{className:"fa fa-shopping-cart"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link link-custom",to:"/wishlist"},"Wishlist",r.a.createElement("i",{className:"fa fa-heart"}))),r.a.createElement("li",{className:"nav-item"})))))}var X=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{cart:this.props.cart}),";")}}]),t}(n.Component),Y=Object(d.b)((function(e){return{cart:e.cart}}))(X);var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:V}),r.a.createElement(o.a,{path:"/products",component:y}),r.a.createElement(o.a,{path:"/product/:id",component:q}),r.a.createElement(o.a,{path:"/cart",component:M}),r.a.createElement(o.a,{path:"/wishlist",component:F})),r.a.createElement(U,null))},K=a(15),Q=a(17),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_PRODUCTS":return[].concat(Object(Q.a)(e),Object(Q.a)(t.payload.products));default:return e}},z=a(21);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_PRODUCTS_DETAILS":return Z({},t.payload);default:return e}};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach((function(t){Object(z.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_TO_CART":var a=te({},t.payload,{quantity:1}),n=e.find((function(e){return e.id===t.payload.id}));return n?e.map((function(e){return e.id===t.payload.id?te({},e,{quantity:e.quantity+1}):e})):[].concat(Object(Q.a)(e),[a]);case"REMOVE_FROM_CART":return console.log("action being called?",t.payload),e.filter((function(e){return e.id!==t.payload}));case"INCREMENT":var r=e.map((function(e){return e.id===t.payload.id&&(console.log("found the product!",e),e.quantity++),e}));return r;case"DECREMENT":var c=e.map((function(e){return e.id===t.payload.id&&(console.log("found the product!",e),e.quantity--),e}));return c;case"TOTAL":var l=e.map((function(e){return e.id})).reduce((function(e,t){return e+t.quantity*t.price}),0);return console.log("TOTAL",l),l;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_WISH":return[].concat(Object(Q.a)(e),[t.payload.product]);case"REMOVE_FROM_WISH_LIST":return e.filter((function(e){return e.id!==t.payload}));default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("action test:",t),t.type){case f:var a=t.payload,n=a.products,r=(a.query,n.filter((function(e){return e.name.includes(t.payload.query)})));return console.log("filtered test:",r),r;default:return e}},ce=Object(K.c)({products:B,productDetail:$,cart:ae,wish:ne,search:re}),le=a(37),oe=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),ie=Object(K.d)(Object(K.a)(le.a),oe),se=Object(K.e)(ce,ie);l.a.render(r.a.createElement(d.a,{store:se},r.a.createElement(E.a,null,r.a.createElement(J,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.29844a14.chunk.js.map