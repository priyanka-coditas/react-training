(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(t,e,n){t.exports=n(61)},38:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=n(19),i=n(7),s=n(8),d=n(10),u=n(9),p=n(11),m=n(14),h=n(1),f=(n(38),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"X")))}}]),e}(o.Component)),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},y=f,g=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(a.a.Component);var j={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},v={color:"#fff",textDecoration:"none"},E=function(){return a.a.createElement("header",{style:j},a.a.createElement("h1",null,"Todolist"),a.a.createElement(m.b,{style:v,to:"/"},"Home")," | ",a.a.createElement(m.b,{style:v,to:"/about"},"About"))},O=n(32),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0 It os part of a react crash course"))},C=n(15),T=n.n(C),S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})})),console.log("id",t)},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})),console.log("title",t)},n.state={todos:[]},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(E,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(a.a.Component);c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4c1ffe74.chunk.js.map