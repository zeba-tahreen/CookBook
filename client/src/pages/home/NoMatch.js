import React from 'react';

// import style-component
// import style from 'styled-components';

class NoMatch extends React.Component{
    render(){
        return(
            <div classname= "no-match">
               <h1>404 Page Not Found </h1>
                </div>
        )
    }

}
export default NoMatch;



// import axios from 'axios';

// export default {
//     //==================== UserLogin and Register API ======================
//     // Create new user
//     newuser: function (data) {
//         return axios.post("/api/user/create", data)
//     },
//      // log in existing user
//      loginUser: function (data) {
//         return axios.post("/api/user/login", data)
//     }, // log out user
//     logOut: function (data) {
//         return axios.post("/api/user/logout", data)
//     }, 

// } 


// class Login extends React.Component {
//     state = {
//         email: '',
//         password: ''
    
// }

// handleSubmit = (e) => {
//     // console.log(this.state)
//     e.preventDefault();
//     API.loginUser(this.state)
//     .then( res => this.setState({ user: res.data }))
//     .catch(err => console.log(err));
    
// }