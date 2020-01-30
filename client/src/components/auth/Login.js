import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Layout} from '../style/Style';
import style from 'styled-components';
import { Label, Input, Button, Row, Form } from 'reactstrap';
// import API
import API from '../../utils/API';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            redirect: false,
            errors:{}
        }
    }
    onChange = e => {
        this.setState({ [ e.target.id]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const userData ={
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
    }

    render() {
        const { errors } = this.state;
        if(this.state.loggedIn){
            return <Redirect to="/recipe" />
        }
        return (
            <Layout>
                <Row style={{width:"100%"}}>
                   <ColumnOne>
                   <div className="image-display">
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1550776692%2FGettyImages-887636042.jpg%3Fitok%3Dxrvft3cr&w=400&c=sc&poi=face&q=85" 
                    alt="welcome back"/>
                      </div>
                      </ColumnOne>
               <ColumnTwo>
              <div className="login-form" >
              <Form noValidate onSubmit={this.onSubmit}>

                <div className="userlogin">
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
                <div className="userlogin" >
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

                <Button className="btn btn-outline" onClick={this.handleSubmit}>
                    <span>
                       Start Cooking  <i className="fas fa-utensils"></i>
                    </span>
                </Button>
                </Form>
            </div>
               </ColumnTwo>
                </Row>

            </Layout>
        )
    }

}
export default Login;
const ColumnOne = style.div`
width: 50%;
padding:10%;

.login-form{ 
margin-top:10%;
}
`
const ColumnTwo = style.div`
postion: absolute;
width:50%;
padding:10%
.userlogin, button {
    margin-top:5%;
    font-family: 'Liu Jian Mao Cao', cursive;
    font-weight: bolder;
}
Input{
    border-style: none;
    border-bottom: 1px solid ;
    font-family: Arial;
}

`