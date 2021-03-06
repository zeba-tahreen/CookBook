import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import style from 'styled-components';
import { Label, Input, Button, Row, Form, Col } from 'reactstrap';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <Row style={{ width: "100%" }}>
        <Col>
          <ColumnOne className="col-6 ml-5">
            <div className="register-form" style={{width:"300px"}} >
              <h4 style={{ textAlign: "center" }}>
              <i>Register</i>
                </h4>
              <p>Already have an account?
              <Link style={{ color:"rgb(199, 164, 8)"}} className="ml-2" to='/login'>Login &#8634;</Link>
              </p>
              <Form noValidate onSubmit={this.onSubmit}>
                <div className="userRegister">
                  <Label className="userlable" htmlFor="name">Full Name</Label>
                  <span className="red-text">{errors.name}</span>
                  <Input
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames('', { invalid: errors.name })}
                    placeholder="Enter you Full Name"
                    required />
                </div>
                <div className="userRegister">
                  <Label className="userlable" htmlFor="email">Email</Label>
                  <span className="red-text">{errors.email}</span>
                  <Input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames('', { invalid: errors.email })}
                    placeholder="example@gmail.com"
                    required />
                </div>
                <div className="userRegister" >
                  <Label className="Userlabel" htmlFor="password">Password</Label>
                  <span className="red-text">{errors.password}</span>
                  <Input className="form-control"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames('', { invalid: errors.password })}
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
        </Col>
        <Col>
          <ColumnTwo className="col-6 ml-0">
            <div className="image-display">
              <img src="https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/peppers-pan-stove-flame.jpg?itok=Po__tNob"
                alt="welcome Register" />
            </div>
          </ColumnTwo>
        </Col>
      </Row>

    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));


const ColumnTwo = style.div`
.image-display{
  width:100%;
  margin-top:8%;
}

`
const ColumnOne = style.div`
margin:0
.register-form{
width:500px;
}
.userRegister, button {
    margin-top:10%;
    font-family: 'Liu Jian Mao Cao', cursive;
    font-weight: bolder;
}
button{
  background:rgb(199, 164, 8);

}
Input{
    border-style: none;
    border-bottom: 1px solid ;
    font-family: Arial;
}

`