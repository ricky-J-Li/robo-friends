(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(13),n(14),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))}),h=n(2),l=n(3),b=n(5),d=n(4),u=function(e){var t=e.id,n=e.name,r=e.email;return Object(o.jsxs)("div",{className:"bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robot photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:n}),Object(o.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(o.jsx)("div",{children:t.map((function(e,n){return console.log(e),Object(o.jsx)(u,{id:e.id,name:e.name,email:t[n].email},e.id)}))})},O=function(e){e.searchField;var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=(n(15),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this)).state={hasError:!1},o}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:" Oooooops, that is not good "}):this.props.children}}]),n}(r.Component)),g=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"750px"},children:e.children})},p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},console.log("1"),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})})),console.log("2");this.setState({robots:this.state.robots.concat({id:11,name:"Steve Rroboto",username:"S_roboto",email:"Steve.Roboto@kssv.biz"})})}},{key:"render",value:function(){console.log("3");var e=this.state,t=e.searchField,n=e.robots,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f2-l",children:"ROBOFRIENDS"}),Object(o.jsx)(O,{searchChange:this.onSearchChange}),Object(o.jsx)(g,{children:Object(o.jsx)(f,{children:Object(o.jsx)(j,{robots:r})})})]}):Object(o.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component);a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.3b44ec7a.chunk.js.map