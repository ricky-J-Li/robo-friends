(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),s=n(3),a=n.n(s),i=(n(13),n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))}),l=n(4),h=n(5),b=n(7),d=n(6),j=function(e){var t=e.id,n=e.name,o=e.email;return Object(c.jsxs)("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robot photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:o})]})]})},u=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return console.log(e),Object(c.jsx)(j,{id:e.id,name:e.name,email:t[n].email},e.id)}))})},g=function(e){e.searchField;var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=(n(15),function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"750px"},children:e.children})}),O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},console.log("1"),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})),console.log("2")}},{key:"render",value:function(){console.log("3");var e=this.state,t=e.searchField,n=e.robots,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f2-l",children:"ROBOFRIENDS"}),Object(c.jsx)(g,{searchChange:this.onSearchChange}),Object(c.jsx)(f,{children:Object(c.jsx)(u,{robots:o})})]}):Object(c.jsx)("h1",{children:"Loading..."})}}]),n}(o.Component);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.a90ee355.chunk.js.map