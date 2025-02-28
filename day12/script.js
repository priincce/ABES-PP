// const domRoot = document.getElementById("root");

// const reactRoot = ReactDOM.createRoot(domRoot);

// const li1 = React.createElement('li', {
//       style:{
//             color:"blue"
//       }
// }, "itemm 1");
// const li2 = React.createElement('li', {
//       className :"text-big"
// }, "itemm 2");
// const li3 = React.createElement('li', {}, "itemm 3");

// const ul = React.createElement('ul', {},[li1, li2, li3]);

// reactRoot.render(ul);

//.............................................................................

// const domRoot = document.getElementById("root");

// const reactRoot = ReactDOM.createRoot(domRoot);

// const title = React.createElement('h1', {}, "sjvjdsnd h ")
// console.log("type of title: ",typeof title);
// console.log("title: ", title)
// const title2 ={
//       $$typeof:Symbol.for("react.element"),
//       "type": "h1",
//       "key": null,
//       "ref": null,
//       "props": {
//           "style":{color:"brown"},
//           "children": "bhak.."
//       },
//       "_owner": null,
//       "_store": {}
//   }
// reactRoot.render(title);

//...............................................................................


const domRoot = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(domRoot);
const title = <h1>hello from jsx</h1>

reactRoot.render(title)