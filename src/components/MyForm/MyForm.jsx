import {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import {cloneDeep} from "lodash";
import Input from "../UI/Input/index.js";
import Select from "../UI/Select/index.js";
import Checkbox from "../UI/Checkbox/index.js";
import PropTypes from "prop-types";

const formInitialValues = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: 'Choose country',
    rules: 'off',
}


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData ? {...props.formData} : {...formInitialValues},
        }
    }

    handleChange = (event) => {
        const previousData = cloneDeep(this.state.formData)

        if (event.target.name === 'rules' && previousData[event.target.name] === 'on') {
            previousData[event.target.name] = 'off';

        } else if (event.target.name === 'rules' && previousData[event.target.name] === 'off') {
            previousData[event.target.name] = 'on';
        } else {
            previousData[event.target.name] = event.target.value
        }

        this.setState({formData: previousData})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.formData);
        this.setState({formData: {...formInitialValues}});

    }

    render() {
        const {email, password, address, city, country, rules} = this.state.formData;
        return (
            <Form onSubmit={this.handleSubmit}>
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
                        {value: '', label: 'Choose country'},
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


MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object,
}


export default MyForm;