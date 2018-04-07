webpackJsonp([6],{1241:function(e,n,t){function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=t(306),d=o(u),s=t(70),c=t(0),f=o(c),p=t(49),T=t(308),m=o(T),g=t(481),D=o(g),_=t(2584),y=o(_),h=t(69),v=(o(h),function(e){return{card:{minWidth:275}}}),b=function(e){function n(e,t){a(this,n);var o=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return o._handle_onKeyDown_AddToDo=function(e){if(13===e.keyCode){var n=o.props,t=n.relay,a=n.Viewer;y.default.commit(t.environment,a,o.state.ToDo_Text_New),o.setState({ToDo_Text_New:""})}},o._handle_OnChange=function(e){o.setState({ToDo_Text_New:e.target.value})},o.state={ToDo_Text_New:""},o}return i(n,e),r(n,[{key:"render",value:function(){var e=this.props.classes;return f.default.createElement(D.default,null,f.default.createElement(d.default,{className:e.card},f.default.createElement(u.CardHeader,{title:"TO DOs",subheader:"List of TO DOs for user"}),this.props.children,f.default.createElement("div",{style:{marginLeft:4,marginRight:4}}),f.default.createElement(m.default,{label:"What needs to be done?",value:this.state.ToDo_Text_New,fullWidth:!0,onKeyDown:this._handle_onKeyDown_AddToDo,onChange:this._handle_OnChange})))}}]),n}(f.default.Component);b.propTypes={},n.default=(0,p.createFragmentContainer)((0,s.withStyles)(v)(b),{Viewer:function(){return t(2586)}})},2584:function(e,n,t){function o(e,n,t){var o=e.get(n.id);["any","active"].forEach(function(e){var n=i.ConnectionHandler.getConnection(o,"ToDoList_ToDos",{status:e});n&&i.ConnectionHandler.insertEdgeAfter(n,t)})}function a(e,n,t){var a=u++;return(0,l.commitMutation)(e,{mutation:r,variables:{input:{ToDo_Text:t,clientMutationId:a}},updater:function(e){var t=e.getRootField("ToDoAdd");o(e,n,t.getLinkedRecord("ToDosEdge"))},optimisticUpdater:function(e){var l="client:ToDoAdd:ToDo:"+a,i=e.create(l,"ToDo");i.setValue(t,"ToDo_Text"),i.setValue(l,"id");var r=e.create("client:ToDoAdd:ToDosEdge:"+a,"ToDosEdge");r.setLinkedRecord(i,"node"),o(e,n,r);var u=e.get(n.id),d=u.getValue("ToDo_TotalCount");null!=d&&u.setValue(d+1,"ToDo_TotalCount")}})}Object.defineProperty(n,"__esModule",{value:!0});var l=t(49),i=t(40),r=function(){return t(2585)},u=0;n.default={commit:a}},2585:function(e,n,t){"use strict";var o=function(){var e=[{kind:"LocalArgument",name:"input",type:"ToDoAddInput!",defaultValue:null}],n={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},t=[{kind:"LinkedField",alias:null,name:"ToDoAdd",storageKey:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"ToDoAddInput!"}],concreteType:"ToDoAddPayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"Viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_TotalCount",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"ToDosEdge",storageKey:null,args:null,concreteType:"ToDosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"cursor",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"ToDo",plural:!1,selections:[n,{kind:"ScalarField",alias:null,name:"ToDo_Complete",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"ToDo_Text",args:null,storageKey:null}]}]}]}];return{kind:"Request",operationKind:"mutation",name:"ToDoAddMutation",id:null,text:"mutation ToDoAddMutation(\n  $input: ToDoAddInput!\n) {\n  ToDoAdd(input: $input) {\n    Viewer {\n      id\n      ToDo_TotalCount\n    }\n    ToDosEdge {\n      cursor\n      node {\n        id\n        ToDo_Complete\n        ToDo_Text\n      }\n    }\n  }\n}\n",metadata:{},fragment:{kind:"Fragment",name:"ToDoAddMutation",type:"Mutation",metadata:null,argumentDefinitions:e,selections:t},operation:{kind:"Operation",name:"ToDoAddMutation",argumentDefinitions:e,selections:t}}}();o.hash="684ae97e6e6d46d3fd07c9e663e1a314",e.exports=o},2586:function(e,n,t){"use strict";var o={kind:"Fragment",name:"ToDoScreen_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]};o.hash="51f13adf0441eb6987038deaeea9998d",e.exports=o}});