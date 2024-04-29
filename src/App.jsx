import React from "react";
import Card from "./components/Card.jsx";

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Card title={`Hello, I'm stupid`}/>
                <Card text={'because I don\'t completely understand what I\'m doing '}/>
                <Card title={'rofl'} text={'rafl'}/>
            </div>
        )
    }
}

export default App;