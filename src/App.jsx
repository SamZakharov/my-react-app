import MyForm from './components/MyForm';
import {Container} from 'react-bootstrap';
import React from "react";
import {cloneDeep} from "lodash";
import DataTable from "./components/DataTable";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            UIShowTable: false
        }
    }

    onSubmitHandler = (formData) => {
        const formDataCope = cloneDeep(formData);
        this.setState({data: formDataCope, UIShowTable: true});
    }

    handleClick = (e) => {
        this.setState({UIShowTable: false});
    }

    render() {
        return (
            <Container>
                {!this.state.UIShowTable && <MyForm onSubmit={this.onSubmitHandler} formData={this.state.data}/>}
                {this.state.UIShowTable && <DataTable tableData={this.state.data} onClickBack={this.handleClick}/>}
            </Container>
        )
    }
}


export default App;