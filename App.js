import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is  React 🚀"),
//     React.createElement("h2", {}, "by Ashish"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

// console.log(parent); // object 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const Title = ()=>(
    <h1>Hi From JSX</h1>
)

const HeaderComponent = ()=>(

    <div className="conatiner">
        <Title/>
        <h2>Header </h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeaderComponent />);