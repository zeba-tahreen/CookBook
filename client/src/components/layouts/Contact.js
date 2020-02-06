import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'reactstrap'
import axios from 'axios';
import style from 'styled-components';


class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <ColumnOne>
                    <Form
                        onSubmit={this.handleSubmit}
                        className="form"
                    >
                        <FormGroup className="form-group">
                            <Label for="name">Name:</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                className="name-input"
                                required />
                        </FormGroup>
                        <FormGroup className="form-group" >
                            <Label for="email">Email:</Label>
                            <Input
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                className="email-input"
                                required />
                        </FormGroup >                
                        <FormGroup className="form-group">
                            <Label for="message">Message:</Label>
                            <Input
                                type="textarea"
                                name="message"
                                onChange={this.handleChange}
                                className="message-input"
                                required />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </ColumnOne>
                </Col>
                <Col>
                <ColumnTwo>
                <p>
                    Thank you for your valuable feeed back...!!!
                </p>
                
                </ColumnTwo>
                </Col>
                </Row>
            </Container>
        )
    }
};

export default Contact;

const ColumnOne = style.form`
.form{
   padding: 5%;
   background-color: #f3ececab;
   border-radius: 7px;
   box-shadow: 0 0 15px -2px #444444;

}
.name-input, .email-input{
    width: 50%;
}
`
const ColumnTwo = style.div`
width: 100%;
padding: 5%;
   background-color: #f3ececab;
   border-radius: 7px;
   box-shadow: 0 0 15px -2px #444444;
`

const Container = style.div`
padding:3%;
background-size: 100%;
background-image: url("https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/03/1453488046-rbk-skin-foods.jpg")


`
