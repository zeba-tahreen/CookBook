import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import { Layout } from '../style/Style';
import style from 'styled-components';
import { Label, Input, Button, Row, Form } from 'reactstrap';
import API from '../../utils/API';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            email:"",
            password:"",
            errors:{}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);
    };
    render(){
        const { errors } = this.state;
        return(
            <Layout>
                <Row style={{ width: "100%" }}>
                    <ColumnOne>
                        <div className="register-form" >
                        <Form noValidate onSubmit={this.onSubmit}>
                            <div className="userRegister">
                                <Label className="userlable" htmlFor="name">Full Name</Label>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error = {errors.name}
                                    id="name"
                                    type="text"
                                    placeholder="Enter you Full Name"
                                    required />
                            </div>
                            <div className="userRegister">
                                <Label className="userlable" htmlFor="name">Email</Label>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error = {errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    required />
                            </div>
                            <div className="userRegister" >
                                <Label className="Userlabel" htmlFor="name">Password</Label>
                                <Input className="form-control"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error = {errors.password}
                                    id="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    required />
                            </div>
                            <Button className="btn btn-outline" type="submit">
                                <span>
                                    Welcome Chef  <i className="fas fa-utensils"></i>
                                </span>
                            </Button>
                            </Form>
                        </div>
                    </ColumnOne>
                    <ColumnTwo>
                        <div className="image-display">
                            <img src="https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/peppers-pan-stove-flame.jpg?itok=Po__tNob"
                                alt="welcome back" />
                        </div>
                    </ColumnTwo>
                </Row>

            </Layout>
        )
    }
}

export default Register;
const ColumnTwo = style.div`
width: 50%;
padding:0%;
margin-top:7%;

`
const ColumnOne = style.div`
postion: absolute;
width:50%;
padding:5%;
margin-top:0;
margin-bottom:2%;
.userRegister, button {
    margin-top:1%;
    font-family: 'Liu Jian Mao Cao', cursive;
    font-weight: bolder;
}
Input{
    border-style: none;
    border-bottom: 1px solid ;
    font-family: Arial;
    width: 90%;
}
button{
    margin-top: 4%;
}

`