"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{815:function(t,n,e){e.d(n,{Hg:function(){return s},TP:function(){return p},V0:function(){return o},tx:function(){return l},zv:function(){return f}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="6f033a77847b5b83d2b4d12dccf6a045",s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},387:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,a,u,c=e(439),i=e(815),s=e(478),o=e(791),p=e(689),f=e(168),l=e(867),d=l.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  padding-left: 0;\n"]))),h=l.ZP.img(a||(a=(0,f.Z)(["\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n"]))),g=l.ZP.p(u||(u=(0,f.Z)(["\n  font-style: italic;\n"]))),v=e(184),m=function(){var t=(0,p.UO)().movieId,n=(0,o.useState)(!1),e=(0,c.Z)(n,2),r=e[0],a=e[1],u=(0,o.useState)([]),f=(0,c.Z)(u,2),l=f[0],m=f[1],x=(0,o.useState)(""),w=(0,c.Z)(x,2),Z=w[0],y=w[1];(0,o.useEffect)((function(){a(!0),(0,i.tx)(t).then((function(t){m(t)})).catch((function(t){y(t.message)})).finally((function(){a(!1)}))}),[t]);return(0,v.jsxs)("div",{children:[r&&(0,v.jsx)(s.Z,{}),0!==l.length?(0,v.jsx)(d,{children:l.map((function(t){var n,e=t.id,r=t.author,a=t.author_details.avatar_path,u=t.content,c=t.created_at;return(0,v.jsxs)("li",{children:[(0,v.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://bitslog.files.wordpress.com/2013/01/unknown-person1.gif",alt:r,width:"50px"}),(0,v.jsx)("h3",{children:r}),(0,v.jsx)(g,{children:(n=c,new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))}),(0,v.jsx)("p",{children:u})]},e)}))}):(0,v.jsx)("h3",{children:"No reviews"}),Z&&(0,v.jsxs)("p",{style:{textAlign:"center",margin:"auto"},children:["Sorry. ",Z," \ud83d\ude2d"]})]})}}}]);
//# sourceMappingURL=387.ca7dd0a5.chunk.js.map