import React, { Component } from 'react';

// style-component
import style from 'styled-components';


class Footer extends Component{
    render(){
        return(
           <FooterContainer>
               <div className="footer-bottom">
                   <p className="content">
                       &copy; 2019 CookBook - All Rights Reserved
                   </p>
               </div>
           </FooterContainer>
        )
    }
}

 export default Footer;

 const FooterContainer = style.footer`
 .footer-bottom {
     position:fixed;
     width:100%;
     height: 10%;
     left: 0;
     bottom: 0;     
     background: rgb(199, 164, 8);
     padding-top: 2rem;
     padding-bottom: 1rem;
     text-align: right;
     color: white;
     font-family: italic;
}
.content{
margin-right: 20%;
}
`;