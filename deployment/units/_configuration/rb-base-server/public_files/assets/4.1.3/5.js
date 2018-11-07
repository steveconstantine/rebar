(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{7101:function(e,n,t){"use strict";t.r(n);var o=t(25),a=t.n(o),r=t(14),i=t(0),l=t.n(i),u=t(13),s=t(61),d=t.n(s),c=t(41),f=t(21),p=function(){return t(909)};function T(e,n,t){var o=e.get(n.id);["any","active"].forEach(function(e){var n=f.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:e});n&&f.ConnectionHandler.insertEdgeAfter(n,t)})}var m=0;var y={commit:function(e,n,t){var o=m++;return Object(u.commitMutation)(e,{mutation:p,variables:{input:{ToDo_Text:t,clientMutationId:o}},updater:function(e){var t=e.getRootField("ToDoAdd");T(e,n,t.getLinkedRecord("ToDosEdge"))},optimisticUpdater:function(e){var a="client:ToDoAdd:ToDo:".concat(o),r=e.create(a,"ToDo");r.setValue(t,"ToDo_Text"),r.setValue(a,"id");var i=e.create("client:ToDoAdd:ToDosEdge:".concat(o),"ToDosEdge");i.setLinkedRecord(r,"node"),T(e,n,i);var l=e.get(n.id),u=l.getValue("ToDo_TotalCount");null!=u&&l.setValue(u+1,"ToDo_TotalCount")}})}};function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var v=function(e){function n(e,t){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=_(this,h(n).call(this,e,t)))._handle_onKeyDown_AddToDo=function(e){if(13===e.keyCode){var n=o.props,t=n.relay,a=n.Viewer;y.commit(t.environment,a,o.state.ToDo_Text_New),o.setState({ToDo_Text_New:""})}},o._handle_OnChange=function(e){o.setState({ToDo_Text_New:e.target.value})},o.state={ToDo_Text_New:""},o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,l.a.Component),function(e,n,t){n&&D(e.prototype,n),t&&D(e,t)}(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(c.a,null,l.a.createElement(a.a,{className:e.card},l.a.createElement(o.CardHeader,{title:"TO DOs",subheader:"List of TO DOs for user"}),this.props.children,l.a.createElement("div",{style:{marginLeft:4,marginRight:4}}),l.a.createElement(d.a,{label:"What needs to be done?",value:this.state.ToDo_Text_New,fullWidth:!0,onKeyDown:this._handle_onKeyDown_AddToDo,onChange:this._handle_OnChange})))}}]),n}();n.default=Object(u.createFragmentContainer)(Object(r.withStyles)(function(e){return{card:{minWidth:275}}})(v),{Viewer:function(){return t(910)}})},909:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoAddInput!",defaultValue:null}],n={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},t=[{kind:"LinkedField",alias:null,name:"ToDoAdd",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoAddInput!"}],concreteType:"ToDoAddPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"ToDosEdge",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}]}];return{kind:"Request",operationKind:"mutation",name:"ToDoAddMutation",id:null,text:"mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoAddMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:t},operation:{kind:"Operation",name:"ToDoAddMutation",argumentDefinitions:e,selections:t}}}();o.hash="684ae97e6e6d46d3fd07c9e663e1a314",e.exports=o},910:function(e,n,t){"use strict";var o={kind:"Fragment",name:"ToDoScreen_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}],hash:"51f13adf0441eb6987038deaeea9998d"};e.exports=o}}]);