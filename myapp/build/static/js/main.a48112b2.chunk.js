(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},106:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(15),c=t.n(r),m=(t(41),t(5)),o=t(6),s=t(8),i=t(7),u=t(9),d=t(17),f=t(10),E=t(111),h=t(113),p=t(112),b=(t(63),t(110)),v=(t(65),function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"container p-2 text-center"},n.a.createElement("div",{className:"cearfix"},n.a.createElement("ul",{className:"dropdown-btn d-inline-block float-left"},n.a.createElement("svg",{className:"rf-icon rf-icon--hamburger",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15 10",height:"10",width:"15"},n.a.createElement("path",{d:"M0 8h15v2H0zM0 4h15v2H0zM0 0h15v2H0z"})),n.a.createElement("ul",{className:"dropdown"},n.a.createElement("li",null,n.a.createElement("b",{style:{fontSize:20,fontWeight:900}},"Popular Stores")),n.a.createElement("li",null," hello "),n.a.createElement("li",null," hello "),n.a.createElement("li",null," hello "))),n.a.createElement(b.a,{className:"search d-inline-block float-left",to:"/skills"},n.a.createElement("svg",{className:"rf-icon rf-icon--search",xmlns:"http://www.w3.org/2000/svg",viewBox:"5605.991 836 16.958 16.95"},n.a.createElement("path",{"data-name":"Path 150",d:"M5612.5 836a6.493 6.493 0 0 1 5.29 10.27l4.88 4.88a1.076 1.076 0 0 1-1.52 1.52l-4.88-4.88a6.5 6.5 0 1 1-3.77-11.79zm0 11a4.5 4.5 0 1 0-4.5-4.5 4.5 4.5 0 0 0 4.5 4.5z"}))),n.a.createElement("h3",{className:"d-inline money"},n.a.createElement(b.a,{className:"",style:{fontWeight:900},to:"/"},"#LOKI",n.a.createElement("span",null))))))}}]),a}(l.Component)),N=t(11),g=t(33),y=t.n(g),k=(t(91),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e)))._handleClick=function(e){t.setState({open:!0,modaldata:e})},t.state={pageNo:0,loading:!1,deals:[],open:!1,modaldata:null},t.getData=t.getData.bind(Object(N.a)(Object(N.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"getData",value:function(e){var a=this;e?this.setState({loading:!0,pageNo:1===this.state.pageNo?1:this.state.pageNo-=1}):this.setState({loading:!0,pageNo:this.state.pageNo+=1}),fetch("/api/hello/"+this.state.pageNo).then(function(e){return e.json()}).then(function(e){a.setState({deals:e,loading:!1})}),window.scrollTo(0,0)}},{key:"componentDidMount",value:function(){var e=this;this.getData(),setTimeout(function(){e.setState({open:!0})},5e3)}},{key:"render",value:function(){var e,a=this,t=this.state.modaldata;return this.state.loading?n.a.createElement(f.Animated,{animationOut:"fadeOut",animateOnMount:!0,isVisible:!0},n.a.createElement("div",{id:"content-box"},n.a.createElement("div",{id:"loader"},n.a.createElement(y.a,{type:"Puff",color:"#34373c",height:"100",width:"100"})))):(this.state.deals&&this.state.deals.length>0&&(e=this.state.deals.map(function(e,t){return n.a.createElement(f.Animated,{animationIn:"fadeIn",animationOut:"jello",animationInDelay:10*t,animateOnMount:!0,isVisible:!0,key:e._id,className:"col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 outer-box"},n.a.createElement("div",{className:"box",onClick:function(){return a._handleClick(e)}},n.a.createElement("div",{className:"image border"},n.a.createElement("img",{onError:function(e){console.log(e),e.src="https://ryanacademy.ie/wp-content/uploads/2017/08/placeholder-Copy.png"},"data-original":e.smallImageUrl,src:e.smallImageUrl})),n.a.createElement("div",{className:""},n.a.createElement("p",{className:"dealname","data-tip":e.dealName,"data-effect":"solid","data-delay-show":80,"data-for":e._id,"data-place":"top"},e.spinName?e.spinName:e.dealName),n.a.createElement("div",{className:"box-text"},n.a.createElement("div",{className:"price"},n.a.createElement("div",{className:""},n.a.createElement("del",{className:"cutprice"},n.a.createElement("small",null,e.cutPrice)),n.a.createElement("span",{className:"mainprice"},"$",e.mainPrice))),n.a.createElement("div",{className:"clearfix"},n.a.createElement("div",{className:"text-left"},n.a.createElement("a",{className:"storename float-left mt-2",href:e.storename},e.storeName),n.a.createElement("a",{className:"getdeal btn btn-primary btn-sm float-right","data-tip":"Get this Deal for $"+e.mainPrice,"data-delay-show":80,"data-for":e._id,"data-effect":"solid",href:e.dealUrl},"Get deal")))))))})),n.a.createElement("div",{className:"text-center"},n.a.createElement("br",null),n.a.createElement("div",{className:"text-center ml-auto mr-auto"},this.state.pageNo>1&&n.a.createElement("button",{style:{borderRadius:"2rem",marginRight:"10px"},className:"btn btn-secondary",onClick:function(){a.getData("back")}},"Previous Deals"),n.a.createElement("button",{style:{borderRadius:"2rem"},className:"btn btn-secondary",onClick:function(){a.getData()}},"View More Deals")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},this.state.deals&&n.a.createElement(f.Animated,{animationIn:"fadeIn",animationOut:"jello",animationInDelay:300,animateOnMount:!0,isVisible:!0,className:"row m-0",id:"content-box"},e),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"text-center ml-auto mr-auto"},this.state.pageNo>1&&n.a.createElement("button",{style:{borderRadius:"2rem",marginRight:"10px"},className:"btn btn-secondary",onClick:function(){a.getData("back")}},"Previous Deals"),n.a.createElement("button",{style:{borderRadius:"2rem"},className:"btn btn-secondary",onClick:function(){a.getData()}},"View More Deals")),null!==t&&n.a.createElement(d.a,{open:this.state.open,onClose:function(){a.setState({open:!1})}},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"image border p-4"},n.a.createElement("img",{style:{maxWidth:350,maxHeight:450},onError:function(e){e.src="images/supreme1.jpg"},"data-original":t.bigImageUrl,src:t.bigImageUrl})),n.a.createElement("div",{className:"box"},n.a.createElement("p",{className:"dealname","data-tip":t.dealName,"data-effect":"solid","data-delay-show":80,"data-for":t._id,"data-place":"top"},t.spinName?t.spinName:t.dealName),n.a.createElement("div",{className:"box-text"},n.a.createElement("div",{className:"price"},n.a.createElement("div",{className:""},n.a.createElement("del",{className:"cutprice"},n.a.createElement("small",null,t.cutPrice)),n.a.createElement("span",{className:"mainprice"},"$",t.mainPrice))),n.a.createElement("div",{className:"clearfix"},n.a.createElement("div",{className:"text-left"},n.a.createElement("a",{className:"storename float-left mt-2",href:t.storename},t.storeName),n.a.createElement("a",{className:"getdeal btn btn-primary btn-sm float-right","data-tip":"Get this Deal for $"+t.mainPrice,"data-delay-show":80,"data-for":t._id,"data-effect":"solid",href:t.dealUrl},"Get deal"))))))))))}}]),a}(l.Component)),w=(t(31),t(104),function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={text:"",results:[]},t.handleInput=t.handleInput.bind(Object(N.a)(Object(N.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"handleInput",value:function(e){this.setState({text:e.target.value})}},{key:"render",value:function(){return n.a.createElement(f.Animated,{animationIn:"fadeIn",animationOut:"jello",animationInDelay:50,animateOnMount:!0,isVisible:!0},n.a.createElement("div",{className:"view"},n.a.createElement("div",{className:""},n.a.createElement("div",{className:"text-center"},n.a.createElement("input",{onChange:this.handleInput,type:"text",name:"query",placeholder:"Search Deals & Stores"})),n.a.createElement("div",{id:"search",className:" results m-5 row"},n.a.createElement("div",{id:"search-results",className:"results m-5 row"},n.a.createElement("h1",null,this.state.text)),n.a.createElement("div",{id:"deal-results",className:"results m-5 row"})))))}}]),a}(l.Component)),O=(t(106),function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("footer",{className:"footer container"},n.a.createElement("div",{className:"newsletter row container-fluid"},n.a.createElement("div",{className:"col-12 col-md-6 col-lg-7"},n.a.createElement("p",{className:"lead m-0 text-center mt-3"},"Signup To Track the deals that you love")),n.a.createElement("div",{className:"col-12 col-md-6 col-lg-5 text-center"},n.a.createElement("form",{className:"form-inline m-0 mt-2"},n.a.createElement("div",{className:"text-center ml-auto mr-auto row p-0"},n.a.createElement("input",{className:"form-control mb-2",id:"inlineFormInputName2",placeholder:"Enter email address",type:"text"}),n.a.createElement("button",{style:{marginLeft:5},className:"btn btn-primary",type:"submit"},n.a.createElement("b",null,"Subscribe")))))),n.a.createElement("div",{className:"container-fluid row p-2",style:{marginLeft:"auto",marginRight:"auto"}},n.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},n.a.createElement("h3",null,"Festival Deals"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/diwali-offers"},"Diwali Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/new-year-offers"},"New Year Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/republic-day-offers"},"Republic Day Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/holi-gifts-offers"},"Holi Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/valentine-day-offers/"},"Valentine's Day Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/rakshabandhan-offers/"},"Rakhi Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/independence-day-offers/"},"Independence Day Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/dussehra-offers/"},"Dussehra Offers")),n.a.createElement("li",null,n.a.createElement("a",{href:"/deals/amazon-great-indian-festive-sale/"},"Amazon Great Indian Festive Sale")),n.a.createElement("li",null,n.a.createElement("a",{href:"/deals/flipkart-big-billion-day-sale/"},"Flipkart Big Billion Day Sale")))),n.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},n.a.createElement("h3",null,"Top Stores"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/jabong"},"Jabong Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/tatacliq-coupons"},"TataCliq Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/shopclues"},"Shopclues Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/koovs"},"Koovs Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/paytm"},"Paytm Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/biryaniblues"},"Biryani Blues Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/zivame"},"Zivame Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/abof"},"Abof Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/goair"},"Goair Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/justrelief"},"Justrelief Coupons")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/zomato"},"Zomato Coupons")))),n.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},n.a.createElement("h3",null,"Need Help ?"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/getting-started"},"Getting Started")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/contact-us"},"Contact Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/faq"},"FAQ's")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/press"},"Press")))),n.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 col-lg-2"},n.a.createElement("h3",null,"About"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/about-us"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/advertise-with-us"},"Advertising Opportunities")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://freekaamaal.com/contact-us"},"Contact Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://careers.freekaamaal.com/"},"Work With Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://blog.freekaamaal.com",target:"_blank"},"Blog")))),n.a.createElement("div",{style:{borderWidth:1},className:"col-12 col-md-12 col-lg-2 social-media text-center"},n.a.createElement("h3",null,"Follow Us"),n.a.createElement("ul",{className:"d-block m-4"},n.a.createElement("div",{className:"text-center"},n.a.createElement("li",{className:"col d-inline mr-2"},n.a.createElement("a",{href:"//twitter.com/Offers.io",target:"_blank"},n.a.createElement("div",{className:"twitter"}))),n.a.createElement("li",{className:"col d-inline ml-2"},n.a.createElement("a",{href:"//www.youtube.com/user/Offers.io",target:"_blank"},n.a.createElement("div",{className:"facebook"}))))))),n.a.createElement("br",null),n.a.createElement("div",{className:"row m-0 p-1"},n.a.createElement("div",{className:"col text-center p-0"},n.a.createElement("span",{style:{color:"#b2b1b1",paddingBottom:"10px"}},n.a.createElement("p",null,n.a.createElement("b",null,"Supreme"))))))}}]),a}(l.Component)),x=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(i.a)(a).call(this,e))).state={var:"hello",loaded:!1,open:!1},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement(E.a,null,n.a.createElement("div",null,n.a.createElement(v,null),n.a.createElement(h.a,null,n.a.createElement(p.a,{exact:!0,path:"/skills",component:w}),n.a.createElement(p.a,{exact:!0,path:"/",component:k})),n.a.createElement(O,null),n.a.createElement(d.a,{open:this.state.open,onClose:function(){e.setState({open:!1})}},n.a.createElement("div",{className:"modalm p-2"},n.a.createElement("div",{className:"newsletter row container-fluid"},n.a.createElement("div",{className:"col-12 col-md-6 col-lg-7"},n.a.createElement("p",{className:"lead m-0 text-center mt-3"},"Signup To Track the deals that you love")),n.a.createElement("div",{className:"col-12 col-md-6 col-lg-5 text-center"},n.a.createElement("form",{className:"form-inline m-0 mt-2"},n.a.createElement("div",{className:"text-center ml-auto mr-auto row p-0"},n.a.createElement("input",{className:"form-control mb-2",id:"inlineFormInputName2",style:{padding:10},placeholder:"Enter email address",type:"text"}),n.a.createElement("button",{style:{marginLeft:5},className:"btn btn-primary",type:"submit"},n.a.createElement("b",null,"Subscribe"))))))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,a,t){e.exports=t(109)},41:function(e,a,t){},63:function(e,a,t){},65:function(e,a,t){},91:function(e,a,t){}},[[35,2,1]]]);
//# sourceMappingURL=main.a48112b2.chunk.js.map