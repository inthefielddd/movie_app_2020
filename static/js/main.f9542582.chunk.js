(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),r=s.n(n),i=s(13),c=s.n(i),o=s(4),m=s.n(o),l=s(14),d=s(15),j=s(16),u=s(19),v=s(18),h=s(17),p=s.n(h);var b=function(e){var t=e.title,s=e.year,n=e.summary,r=e.poster,i=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:r,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsxs)("h3",{className:"movie__title",children:[" ",t]}),Object(a.jsxs)("h5",{className:"movie__year",children:[" ",s]}),Object(a.jsx)("ul",{className:"movie__geners",children:i.map((function(e,t){return Object(a.jsx)("li",{className:"geners__gener",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},_=(s(43),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading... "})}):Object(a.jsxs)("div",{className:"movies",children:[s.map((function(e){return Object(a.jsx)(b,{id:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)})),")"]})})}}]),s}(r.a.Component));c.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f9542582.chunk.js.map