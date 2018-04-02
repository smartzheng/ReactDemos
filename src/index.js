import React from "react";
import ReactDOM from 'react-dom';
const element = {
    name: "smartzheng",
    age: 25,
};

function formatInfo(element) {
    return "My name is " + element.name + ", I am " + element.age + " years old."
}

const info = (
    <h1> Hello,{formatInfo(element)}</h1>
);

ReactDOM.render(
    info,
    document.getElementById('root')
);

