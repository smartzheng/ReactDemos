//更新元素渲染
/**
 React 元素都是immutable 不可变的。当元素被创建之后，你是无法改变其内容或属性的。一个元素就好像是动画里的一帧，
 它代表应用界面在某一时间点的样子。
 根据我们现阶段了解的有关 React 知识，更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法：
 */
function tick() {
    const element = (
        <div>
            <h1>Hello! React!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);