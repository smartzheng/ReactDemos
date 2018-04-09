function handleClick(e) {
    e.preventDefault();
    console.log("Clicked");
    alert("Clicked");
}

ReactDOM.render(
    (<a href="#" onClick={handleClick}>
        Click me.
    </a>),
    document.getElementById('root1')
);








class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: props};
        this.handleClick = this.handleClick.bind(this);//如果没有使用属性初始化器语法，你可以在回调函数中使用箭头函数
    }

    handleClick() {
        this.setState(
            this.state = (prevState => ({
                    isToggleOn: !prevState.isToggleOn

                })
            ));
    }

    render() {
        return (<button style={{width:200,height:150,backgroundColor:"#e6e",fontSize:35}} onClick={this.handleClick}>
            {this.state.isToggleOn ? "ON" : "OFF"}
        </button>);
    }
}

ReactDOM.render(
    <Toggle props={true}/>,
    document.getElementById('root2')
);

