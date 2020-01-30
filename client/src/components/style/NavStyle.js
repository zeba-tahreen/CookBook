import style from 'styled-components';

const NavbarContainer = style.nav`
.navbar{
    background: rgb(199, 164, 8);
    color: white;

}
.navbar-brand{
    margin-left: 5%;
    font-weight: bold;
    font-size: 28px;
    font-family: 'Liu Jian Mao Cao', cursive;

}

.navbar-toggler:focus{
    outline:none
}
.navbar-toggler {
    border:none;
}
`
export default {
    NavbarContainer
}