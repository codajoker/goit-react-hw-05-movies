"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247,618],{1247:function(e,t,r){r.r(t);var n=r(885),a=r(2791),u=r(6871),i=r(4618),c=r(184);t.default=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],s=t[1],o=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,i.apiCredits)(o).then((function(e){var t=e.data;return s(t.cast)}))}),[o]),(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)("ul",{children:r.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{width:100,src:" https://image.tmdb.org/t/p/w300".concat(e.profile_path),alt:""}),(0,c.jsxs)("span",{children:["character ",e.character," "]}),(0,c.jsxs)("span",{children:["name ",e.name," "]})]},e.id)}))})})}},4618:function(e,t,r){r.r(t),r.d(t,{apiCredits:function(){return s},apiDetails:function(){return o},apiReviews:function(){return p},apiTrand:function(){return f},apiQuery:function(){return h}});var n=r(5861),a=r(7757),u=r.n(a),i=r(4569),c=r.n(i),s=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=166aeb1e62f46939f496859b559d3511"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=166aeb1e62f46939f496859b559d3511"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=166aeb1e62f46939f496859b559d3511"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/trending/all/week?api_key=166aeb1e62f46939f496859b559d3511");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=166aeb1e62f46939f496859b559d3511&query=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.c2c26391.chunk.js.map