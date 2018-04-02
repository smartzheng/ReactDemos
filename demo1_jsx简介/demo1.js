//Hello World
ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById("root1")
);


//在 JSX 中使用表达式
const smartzheng = {
    name: "smartzheng",
    age: 25
};

function formatInfo(smartzheng) {
    return "I am" + smartzheng.name + ",I am " + smartzheng.age + "year's old!"
}

ReactDOM.render(
    <h1>Hello!{formatInfo(smartzheng)}</h1>,
    document.getElementById("root2")
);

//JSX 属性,嵌套
const element1 = (
    <div>
        <h1>问君能有几多愁</h1>
        <a href={"#"}>恰似一江春水向东流</a>
    </div>

);
ReactDOM.render(
    element1,
    document.getElementById("root3")
);

//JSX代表 Objects
const element2 = React.createElement(
    'h2',
    {className: "H"},
    'Hello world!');

ReactDOM.render(
    element2,
    document.getElementById("root4")
);
