import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// style-component
import style from 'styled-components';


class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-4 left">
                        <p><Link 
                            className="footer-contact text-white" 
                            style={{textDecoration:"none"}}
                            to='/contact'
                            >Contact us&nbsp; 
                            <i className="far fa-envelope"></i>
                            </Link>
                            </p>
                        </div>
                        <div className="col-4 middle" style={{fontFamily:"'Liu Jian Mao Cao', cursive", fontSize:"20px"}}>
                        <b>The Belly Rules the Mind</b>   
                        </div>
                        <div className="col-4 right">
                            <p style={{marginRight:"5%"}}>
                            &copy; 2019 CookBook - All Rights Reserved
                            </p>
                       </div>
                    </div>
                </div>
            </FooterContainer>
        )
    }
}

export default Footer;

const FooterContainer = style.footer`
 .footer-bottom {
     position:fixed;
     width:99.9%;
     height: 10%;
     left: 0;
     bottom: 0;     
     background: rgb(199, 164, 8);
     padding-top: 2rem;
     padding-bottom: 3rem;
     text-align: center;
     color: white;
     font-family: italic;

     
}

`;