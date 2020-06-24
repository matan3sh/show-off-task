(this["webpackJsonpshow-off-task"]=this["webpackJsonpshow-off-task"]||[]).push([[0],{47:function(e,t,a){e.exports=a(87)},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=a(45),s=a(2),i=a(12),u=a(9),m=a(42),v=a(43),p=a(15),f={movies:[]};var d=Object(u.combineReducers)({movieApp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIES":return Object(p.a)(Object(p.a)({},e),{},{movies:t.payload});default:return e}}}),h=Object(u.createStore)(d,Object(m.composeWithDevTools)(Object(u.applyMiddleware)(v.a))),E=a(16),g=a.n(E),b=a(21),y=a(10),O=a(11),j=a(14),w=a(13),N=a(44),M=a.n(N),C={query:function(){var e=Object(b.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("/movies.json");case 3:return a=e.sent,e.next=6,a.data;case 6:return n=e.sent,e.next=9,n.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()};function x(e){return e||(e=""),function(t){try{C.query(e).then((function(e){return t({type:"SET_MOVIES",payload:e})}))}catch(a){console.log(a)}}}var k={margin:"auto",width:"20%",display:"flex",justifyContent:"center",alignItems:"center"},S=function(){return r.a.createElement("img",{src:"https://thumbs.gfycat.com/SpryNegligibleLeafcutterant-size_restricted.gif",alt:"Loading...",style:k})},A=a(46),I=a(25),L=a.n(I),T=function(e){var t=e.rate;return r.a.createElement("div",{className:"stars-outer"},r.a.createElement("div",{className:"stars-inner",style:{width:"".concat(t,"%")}}))};a(83),a(84);L.a.setAppElement("#root");var q=function(e){var t=e.openModal,a=e.onClose,n=e.movie;return r.a.createElement(L.a,{isOpen:t,onRequestClose:function(){return a()},className:"modal",overlayClassName:"overlay"},r.a.createElement("div",{className:"movie-detail-wrapper"},r.a.createElement("img",{src:n.image,alt:""}),r.a.createElement("h1",null,n.title),r.a.createElement("span",{className:"tag tag-teal"},n.releaseYear),r.a.createElement("h3",null,n.genre.join(", ")),r.a.createElement("div",{className:"flex"},r.a.createElement(T,{rate:100*n.rating/10})," ",r.a.createElement("span",{className:"movie-rating"},n.rating))))},F=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={openModal:!1},e.onClose=function(){e.setState({openModal:!1})},e.onOpenModal=function(){e.setState({openModal:!0})},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=this.state.openModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{openModal:t,onClose:this.onClose,movie:e}),r.a.createElement("div",{className:"card",onClick:this.onOpenModal},r.a.createElement("div",{className:"card-header"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"tag tag-teal"},e.releaseYear),r.a.createElement(A.a,{className:"star",color:"#ffc107",size:25}),r.a.createElement("span",{className:"movie-rating"},e.rating)),r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.genre.join(", ")))))}}]),a}(r.a.Component),W=function(e){var t=e.movies;return r.a.createElement("div",{className:"card-container"},t.map((function(e,t){return r.a.createElement(F,{movie:e,key:t})})))},_=a(20),z=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={txt:""},e.onChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){var t=e.txt;return Object(p.a)(Object(p.a)({},t),{},Object(_.a)({},n,r))}),(function(){e.props.loadMovies(e.state.txt)}))},e}return Object(O.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"filter"},r.a.createElement("input",{type:"text",name:"txt",placeholder:"Search Movie...",onChange:this.onChange}),r.a.createElement("i",{className:"fas fa-search fa-2x",style:{color:"#92d4e4"}}))}}]),a}(n.Component),B={loadMovies:x},D=Object(i.b)(null,B)(z),J=function(e){Object(j.a)(a,e);var t=Object(w.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(g.a.mark((function e(){var t=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){return t.props.loadMovies()}),2e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.movies;return r.a.createElement(r.a.Fragment,null,e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(W,{movies:e})):r.a.createElement(S,null))}}]),a}(r.a.Component),R={loadMovies:x},V=Object(i.b)((function(e){return{movies:e.movieApp.movies}}),R)(J),Y=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("h1",null,r.a.createElement("i",{className:"fas fa-film"})," Show - Off"," "))};var $=function(){return r.a.createElement(i.a,{store:h},r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(Y,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:V})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.2b36e513.chunk.js.map