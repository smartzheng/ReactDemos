class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (<div>
            <h1>It is {this.state.date.toLocaleString()}</h1>
        </div>);
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root1')
);
