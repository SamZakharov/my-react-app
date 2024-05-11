import {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import {cloneDeep} from "lodash";
import Input from "../UI/Input/index.js";
import Select from "../UI/Select/index.js";
import Checkbox from "../UI/Checkbox/index.js";

const formInitialValues = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    rules: '',
}


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {...formInitialValues},
        }
    }

    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData);
        previousState[event.target.name] = event.target.value;
        this.setState({formData: previousState});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({formData: {...formInitialValues}});

    }

    render() {
        const {email, password, address, city, country, rules} = this.state.formData;
        return (
            <Form onClick={this.handleSubmit}>
                <h4 className='text-center'>Form</h4>

                <Input
                    label='Email address'
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                />

                <Input
                    label='Password'
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                />

                <Input
                    label='Address'
                    name="address"
                    value={address}
                    onChange={this.handleChange}
                    as="textarea"
                />

                <Input
                    label='City'
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                />

                <Select
                    label="Country"
                    name="country"
                    value={country}
                    onChange={this.handleChange}
                    options={[
                        {value: 'argentina', label: 'Argentina'},
                        {value: 'ukraine', label: 'Ukraine'},
                        {value: 'china', label: 'China'}
                    ]}

                />

                <Checkbox
                    type="checkbox"
                    label="Accept Rules"
                    name="rules"
                    value={rules}
                    onChange={this.handleChange}
                />

                <Button variant="primary" type="submit">Submit form</Button>
            </Form>
        )
    }

}

export default MyForm;