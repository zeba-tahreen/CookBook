import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {Layout} from '../style/Style';
import style from 'styled-components';
import { Label, Input, Button, Row, Form } from 'reactstrap';

class Login extends Component {
    constructor() {
      super();
      this.state = {
        email: "",
        password: "",
        errors: {}
      };
    }
  
    componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }
  
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
  
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  
    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  
    onSubmit = e => {
      e.preventDefault();
  
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
  
      this.props.loginUser(userData);
    };
  
    render() {
      const { errors } = this.state;
          
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
                  <h4><b>Login</b> below</h4>
                  <p>Don't have an account?
                      <Link to="/register">Register</Link>
                  </p>
              <Form noValidate onSubmit={this.onSubmit}>
                <div className="userlogin">
                    <Label className="userlable" htmlFor="email">Email</Label>
        <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                    <Input
                        onChange={this.onChange}
                        value={this.state.email}
                        error = {errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {invalid: errors.email || errors.emailnotfound})}
                        placeholder="example@gmail.com"
                        required />
                </div>
                <div className="userlogin" >
                    <Label className="Userlabel" htmlFor="password">Password</Label>
                    <span className="red-text">{errors.password}{errors.passwordincorrect}</span>
                    <Input className="form-control"
                       onChange={this.onChange}
                       value={this.state.password}
                       error = {errors.password}
                       id="password"
                       type="password"
                       className={classnames("", {invalid: errors.password || errors.passwordincorrect})}
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
        );
    }

}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);


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