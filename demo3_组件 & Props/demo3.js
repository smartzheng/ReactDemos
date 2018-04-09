//函数定义/类定义组件和组件渲染

class Welcome extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>
    }
}

const element = <Welcome name={"World"}/>;

ReactDOM.render(
    element,
    document.getElementById('root1')
);

//组合组件
/*
通常，一个新的React应用程序的顶部是一个App组件。
但是，如果要将React集成到现有应用程序中，则可以从下而上使用像Button这样的小组件作为开始，并逐渐运用到视图层的顶部。
 */
function App() {
    return <div>
        <Welcome name={"Sara"}/>
        <Welcome name={"King"}/>
        <Welcome name={"Jhon"}/>
    </div>;
}

ReactDOM.render(
    <App/>,
    document.getElementById('root2')
);

//组件提取
//原组件:
/*function Avatar(props) {
    return (
        <div>
            <div className={"Actor"}>
                <h1>Actor is {props.user.actor}</h1>
            </div>
            <div className={"Director"}>
                <h1>Director is {props.user.director}</h1>
            </div>
            <div>
                <h1>Year is {props.year}</h1>
            </div>
        </div>
    );
}*/
const avatarInfo = {
    author: {
        director: "卡梅隆",
        actor: "萨姆·沃辛顿"
    },
    year: "2009"
};


function Actor(props) {
    return (
        <div className={"Actor"}>
            <h1>Actor is {props.author.actor}</h1>
        </div>
    );
}

function Director(props) {
    return (
        <div className={"Director"}>
            <h1>Director is {props.author.director}</h1>
        </div>
    );
}

function Info(props) {
    return (
        <div className={"Info"}>
            <Actor author={props.author}/>
            <Director author={props.author}/>
        </div>
    );
}


function Avatar(props) {
    return (
        <div className={"Avatar"}>
            <Info author={props.author}/>
            <div>
                <h1>Year is {props.year}</h1>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Avatar
        author={avatarInfo.author}
        year={avatarInfo.year}
    />,
    document.getElementById('root3')
);
















