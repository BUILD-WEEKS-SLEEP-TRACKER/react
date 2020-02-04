import styled from 'styled-components';

export const HeaderContainer = styled.div`
    max-width: 100%;
    position: fixed;
    top: 50px;
    width: 100%;
    padding: 0 0 0 5em;
    height: 7em;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212;
`

export const NavBar = styled.nav`
    width: 100%;
`
export const NavBarContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    max-width: 100%
    max-height: 100%;
`

export const NavLinks = styled.ul`
    display:flex;
    justify-content: space-between;
    width: 40%;
`

export const LogoContainer = styled.div`
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 54px;


    display: flex;
    align-items: center;    
`

export const Li = styled.li`
    font-size: 1.6rem;
    list-style: none;
    color: rgba(255, 255, 255, 0.6);
`

export const H1 = styled.h1`
    width: 100%;
    font-size: 3rem;
    font-family: Comfortaa, cursive;
    font-weight: 900;
    font-size: 48px;
    line-height: 54px;
    color: rgba(255, 255, 255, 0.87);
`

export const LinksContainer = styled.div`
    width: 50%;
    align-self: center;
`

export const SignOutContainer = styled.div`
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: right;
    padding-right: 3%;
    margin-right: 5%;
    color: rgba(255, 255, 255, 0.4);
`

export const GreyContainer = styled.div`
    position: fixed;
    top: 0;
    height: 3.5em;
    width: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), #121212;
`
