(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,n){e.exports=n(64)},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),i=(n(27),n(28),n(5)),l=n.n(i),s=n(17),m=n(3),u=n(4),v=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),d=(n(46),n(18)),h=n(21),f=n.n(h);var p=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,r=Object(a.useState)([]),i=Object(m.a)(r,2),u=i[0],h=i[1],p=Object(a.useState)(""),g=Object(m.a)(p,2),b=g[0],_=g[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,t),o.a.createElement("div",{className:"row__posters"},u.map((function(e){return o.a.createElement("img",{key:e.id,onClick:function(){return function(e){b?_(""):f()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)||(null===e||void 0===e?void 0:e.title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch(console.error())}(e)},className:"row__poster ".concat(c&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),b&&o.a.createElement(d.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g="739f18bcb1eb0668d608183159336b45",b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetfilxOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(62);var _=function(){var e,t,n=Object(a.useState)([]),c=Object(m.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/discover/tv?api_key=739f18bcb1eb0668d608183159336b45&with_networks=213").then((function(e){return e.json()})).then((function(e){console.log(e),i(e.results[Math.floor(19*Math.random())])})).catch((function(e){return console.log(e)}))}),[]),console.log(r),o.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(\n            https://image.tmdb.org/t/p/original/".concat(null===r||void 0===r?void 0:r.backdrop_path,")"),backgroundPosition:"center center"}},o.a.createElement("div",{className:"banner__contents"},o.a.createElement("h1",{className:"banner__title"},(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)),o.a.createElement("div",{className:"banner__buttons"},o.a.createElement("button",{className:"banner__button"},"Play"),o.a.createElement("button",{className:"banner__button"},"My List")),o.a.createElement("h1",{className:"banner__description"},null===r||void 0===r?void 0:r.overview,(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),o.a.createElement("div",{className:"banner--fadeBottom"}))};n(63);var w=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>50?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),o.a.createElement("div",{className:"nav ".concat(n&&"nav__black")},o.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png",alt:"netflix logo"}),o.a.createElement("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netlix Logo"}))};var E=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(w,null),o.a.createElement(_,null),o.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:b.fetchNetfilxOriginals,isLargeRow:!0}),o.a.createElement(p,{title:"Trending Now",fetchUrl:b.fetchTrending}),o.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),o.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),o.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),o.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),o.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceMovies}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ffeb6031.chunk.js.map