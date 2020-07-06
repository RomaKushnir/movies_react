(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{14:function(t,e,a){t.exports=a(24)},19:function(t,e,a){},20:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(11),c=a.n(i),r=(a(19),a(13)),s=a(1),l=a(2),u=a(7),m=a(4),v=a(3),p=(a(20),a(21),a(9));var h=function(t){var e=t.movie,a=t.sortKey,i=t.willWatch,c=t.movieRemove,r=function(){var t=Object(n.useState)(!1),e=Object(p.a)(t,2);return{addWillWatch:e[0],setAddWillWatch:e[1],toWillWatchCheck:function(t){return console.log(JSON.parse(localStorage.getItem("movies"))),JSON.parse(localStorage.getItem("movies")).some((function(e){return e.id===t.id}))}}}(),s=r.addWillWatch,l=r.setAddWillWatch,u=r.toWillWatchCheck,m=function(){var t=Object(n.useState)(!1),e=Object(p.a)(t,2);return{showedOverview:e[0],setShowedOverview:e[1]}}(),v=m.showedOverview,h=m.setShowedOverview;return Object(n.useEffect)((function(){return l(u(e))})),o.a.createElement("div",{className:"movie-card ".concat(v?"text-overflow":"")},o.a.createElement("img",{className:"card-img",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:""}),o.a.createElement("p",{className:"card-title"},e.title),o.a.createElement("p",{className:"card-rating"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ".concat(e.vote_average)),o.a.createElement("p",{className:"card-overview ".concat(v?"show":"overflow-hidden")},e.overview),o.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},o.a.createElement("button",{className:"expand-text-btn ".concat(v?"active":""),type:"button",onClick:function(){return h(!v)}}),"myWillWatchList"===a?o.a.createElement("button",{type:"button",style:{minWidth:"100px"},className:"btn btn-danger",onClick:function(){return c(e.id)}},"delete"):o.a.createElement("button",{type:"button",style:{minWidth:"100px"},className:"btn ".concat(s?"btn-success":"btn-secondary"),onClick:function(){i(e),l(!s)}},!1===s?"will watch":"don't watch")))},d=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(){}},{key:"shouldComponentUpdate",value:function(t,e){return t.sortKey!==this.props.sortKey}},{key:"render",value:function(){var t=this.props,e=t.sortKey,a=t.sortTabSwitch,n=function(t){return function(e){return a(t)}},i=function(t){return e===t?"btn-primary":"btn-default"};return o.a.createElement("div",{className:"movie-tabs p-3"},o.a.createElement("div",{className:"row justify-content-around"},o.a.createElement("button",{className:"".concat(i("popularity.desc")," col-4 m-1"),onClick:n("popularity.desc")},"popularity"),o.a.createElement("button",{className:"".concat(i("revenue.desc")," col-4 m-1"),onClick:n("revenue.desc")},"revenue"),o.a.createElement("button",{className:"".concat(i("release_date.desc")," col-3 m-1"),onClick:n("release_date.desc")},"release")))}}]),a}(o.a.Component),f=a(12),g=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"paginationPrev",value:function(t){t>1&&(this.props.paginationClick(+t-1),console.log("prev",t))}},{key:"paginationNext",value:function(t){t<this.props.totalPages&&this.props.paginationClick(+t+1)}},{key:"paginationCustomPage",value:function(t,e){13===e&&t>0&&this.props.totalPages>=t&&this.props.paginationClick(t)}},{key:"render",value:function(){var t=this,e=this.props,a=e.paginationClick,n=e.currentPage,i=e.totalPages;return o.a.createElement("div",{className:"pagination-block p-5 row"},o.a.createElement("button",{type:"button",onClick:function(){return a(1)}},"first"),o.a.createElement("button",{type:"button",onClick:function(){return t.paginationPrev(n)}},"prev"),o.a.createElement(f.a,{id:"pagination-input-page",value:n,onKeyDown:function(e){return t.paginationCustomPage(e.target.value,e.keyCode)}}),o.a.createElement("button",{type:"button",onClick:function(){return t.paginationNext(n)}},"next"),o.a.createElement("button",{type:"button",onClick:function(){return a(i)}},"last ".concat(i)))}}]),a}(o.a.Component),y="6e15d434ee1f8d03ce480c0399e7258d",b="https://api.themoviedb.org/3",w=function(t){Object(m.a)(a,t);var e=Object(v.a)(a);function a(){var t;return Object(s.a)(this,a),(t=e.call(this)).paginationClick=function(e){fetch("".concat(b,"/discover/movie?api_key=").concat(y,"&sort_by=").concat(t.state.sortBy,"&page=").concat(e||1,"&language=ru")).then((function(t){return t.json()})).then((function(a){t.setState({movies:a.results,currentPage:e})}))},t.willWatch=function(e){var a=Object(r.a)(t.state.willWatchList);t.state.willWatchList.some((function(t){return t===e}))?a=t.state.willWatchList.filter((function(t){return t!==e})):a.push(e),t.setState({willWatchList:a}),localStorage.setItem("movies",JSON.stringify(a))},t.sortTabSwitch=function(e){"myWillWatchList"!==e?t.setState({sortBy:e,currentPage:1}):t.setState({sortBy:e,movies:JSON.parse(localStorage.getItem("movies"))||[]})},t.state={movies:JSON.parse(localStorage.getItem("movies"))||[],willWatchList:JSON.parse(localStorage.getItem("movies"))||[],sortBy:"popularity.desc",currentPage:1},t.movieRemove=t.movieRemove.bind(Object(u.a)(t)),console.log("App: ",Object(u.a)(t)),t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,e){e.sortBy!==this.state.sortBy&&this.getMovies()}},{key:"getMovies",value:function(){var t=this;"myWillWatchList"!==this.state.sortBy&&fetch("".concat(b,"/discover/movie?api_key=").concat(y,"&sort_by=").concat(this.state.sortBy,"&language=ru")).then((function(t){return t.json()})).then((function(e){t.setState({movies:e.results,totalPages:e.total_pages})}))}},{key:"movieRemove",value:function(t){var e=this.state.movies.filter((function(e){return e.id!==t})),a=this.state.willWatchList.filter((function(e){return e.id!==t})),n=JSON.parse(localStorage.getItem("movies")).filter((function(e){return e.id!==t}));localStorage.setItem("movies",JSON.stringify(n)),this.setState({movies:e,willWatchList:a})}},{key:"render",value:function(){var t=this;return console.log("App render"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-9"},o.a.createElement(d,{sortTabSwitch:this.sortTabSwitch,sortKey:this.state.sortBy}),o.a.createElement("div",{className:"movie-list"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.state.movies.map((function(e){return o.a.createElement("div",{className:"movie-item-wrap col-md-6 col-lg-4",key:e.id},o.a.createElement(h,{movie:e,movieRemove:t.movieRemove,willWatch:t.willWatch,sortKey:t.state.sortBy}))})))))),o.a.createElement("div",{className:"col-3 p-3"},o.a.createElement("button",{className:"".concat("myWillWatchList"===this.state.sortBy?"btn-primary":"btn-default"," m-1 col-12"),onClick:function(){t.sortTabSwitch("myWillWatchList")}},"will watch"),o.a.createElement("p",{className:"will-watch-info text-center font-weight-bold"},"Will watch: ".concat(String(this.state.willWatchList.length))))),"myWillWatchList"!==this.state.sortBy?o.a.createElement(g,{sortBy:this.state.sortBy,paginationClick:this.paginationClick,currentPage:this.state.currentPage,totalPages:this.state.totalPages}):null)}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,{data:"test props"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.09aae0d6.chunk.js.map