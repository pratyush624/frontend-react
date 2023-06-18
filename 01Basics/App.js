/** heading is actually a react element , which itself is javascript objects */
const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello"
);

console.log(heading.props.children);

const root = ReactDOM.createRoot(document.getElementById("root"));

/** render method taking heading object and converting that into h1 tag and putting inside the root */
root.render(heading);

/**
 * * lets create nested structure
 * * <div id="parent">
 * *    <div id="child">
 * *      <h1>Iam h1 tag</h1>
 * *      <h2>Iam h2 tag</h2>
 * *    </div>
 * *  </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1 tag"),
    React.createElement("h2", {}, "Iam h2 tag"),
  ]),
]);

root.render(parent);
