import React from "react";
import Progress from "./components/Progress.jsx";

class App extends React.Component{
    render() {
        return(
            <Progress percentage={50} />
        )
    }
}

export default App;