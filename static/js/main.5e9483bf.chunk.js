(this.webpackJsonppeliculas=this.webpackJsonppeliculas||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c(19),i=c.n(a),r=c(11),o=(c(26),c(6)),l=c(7),j=c(9),d=c(8),u=c(2),h=function(e){var t=e.children;return Object(n.jsx)("h1",{className:"title",children:t})},b="75cf9de2",p=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={inputMovie:""},e._handleChange=function(t){e.setState({inputMovie:t.target.value})},e._handleSubmit=function(t){t.preventDefault();var c=e.state.inputMovie;fetch("http://www.omdbapi.com/?apikey=".concat(b,"&s=").concat(c)).then((function(e){return e.json()})).then((function(t){var c=t.Search,n=void 0===c?[]:c,s=t.totalResults,a=void 0===s?"0":s;console.log({Search:n,totalResults:a}),e.props.onResults(n)}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("form",{onSubmit:this._handleSubmit,children:Object(n.jsxs)("div",{className:"field has-addons",children:[Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("input",{className:"input",onChange:this._handleChange,type:"text",placeholder:"Pelicula a encontrar"})}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{className:"button is-info",children:"Buscar"})})]})})}}]),c}(s.Component),O=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.id,c=e.poster,s=e.title,a=e.year;return Object(n.jsxs)(r.b,{to:"/detail/".concat(t),className:"card",children:[Object(n.jsx)("div",{className:"card-image",children:Object(n.jsx)("img",{className:"card-poster",src:c,alt:s})}),Object(n.jsx)("div",{className:"card-content",children:Object(n.jsx)("div",{className:"media",children:Object(n.jsxs)("div",{className:"media-content",children:[Object(n.jsx)("p",{className:"title is-4",children:s}),Object(n.jsx)("p",{className:"subtitle is-6",children:a})]})})})]})}}]),c}(s.Component),m=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.movies;return Object(n.jsx)("div",{className:"MoviesList",children:e.map((function(e){return Object(n.jsx)("div",{className:"MoviesList-item",children:Object(n.jsx)(O,{id:e.imdbID,title:e.Title,poster:e.Poster,year:e.Year})},e.imdbID)}))})}}]),c}(s.Component),v=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:"https://www.linkedin.com/in/developer-daniel-cisneros/",children:" Daniel Alejandro Cisneros "}),"| \xa9 Todos los derechos reservados | 2021"]})})},x=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={usedSearch:!1,results:[]},e._handleResults=function(t){e.setState({results:t,usedSearch:!0})},e}return Object(l.a)(c,[{key:"_renderResults",value:function(){return 0===this.state.results.length?Object(n.jsx)("p",{children:"Lo sentimos! No hemos encontrado ningun resultado"}):Object(n.jsx)(m,{movies:this.state.results})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"divHome",children:[Object(n.jsx)(h,{children:"Encuentra tus peliculas"}),Object(n.jsx)("div",{className:"SearchForm-wrapper",children:Object(n.jsx)(p,{onResults:this._handleResults})}),this.state.usedSearch?this._renderResults():Object(n.jsx)("small",{children:"Use el buscador para encontar una pelicula"}),Object(n.jsx)(v,{})]})}}]),c}(s.Component),f=function(){return Object(n.jsx)(r.b,{className:"button is-info",to:"/",children:"Volver a la portada"})},N=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={movie:{}},e}return Object(l.a)(c,[{key:"_fetchMovie",value:function(e){var t=this,c=e.id;fetch("http://www.omdbapi.com/?apikey=".concat("75cf9de2","&i=").concat(c)).then((function(e){return e.json()})).then((function(e){console.log({movie:e}),t.setState({movie:e})}))}},{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props.match.params.id;this._fetchMovie({id:e})}},{key:"render",value:function(){var e=this.state.movie,t=e.Title,c=e.Poster,s=e.Actors,a=e.Metascore,i=e.Plot;return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsx)("h1",{className:"title",children:t}),Object(n.jsxs)("div",{className:"detail",children:[Object(n.jsx)("div",{className:"detdiv-1",children:Object(n.jsx)("img",{className:"card-poster",src:c})}),Object(n.jsxs)("div",{className:"detdiv-2",children:[Object(n.jsxs)("p",{className:"plot",children:["Plot: ",i]}),Object(n.jsxs)("h3",{className:"cast",children:["Cast: ",s]}),"Metascore:",Object(n.jsxs)("span",{className:"score",children:[" ",a]})]})]}),Object(n.jsx)(v,{})]})}}]),c}(s.Component),y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title",children:"404!"}),Object(n.jsx)("h2",{className:"subtitle",children:"No existe la pagina"}),Object(n.jsx)(f,{}),Object(n.jsx)(v,{})]})},g=(c(32),c(33),function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",component:x}),Object(n.jsx)(u.a,{path:"/detail/:id",component:N}),Object(n.jsx)(u.a,{component:y})]})})}}]),c}(s.Component)),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(n.jsx)(r.a,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.5e9483bf.chunk.js.map