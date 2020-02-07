import styled from 'styled-components';


export const Form = styled.form`
   position: fixed;
   top: 3em;
   left: 22em;
   right: 22em;
    display:flex;
    height:75vh;
    margin-top:7%;
    flex-direction: column;
    justify-content:center;
    align-items:center;
   
`
export const Header = styled.h3`

    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content:center;
    color: rgba(255, 255, 255, 0.87);
    
   
`
export const Label=styled.label`

    width:558px;
    height:176px;
    padding:1%;
    margin-bottom:1%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`

export const Input=styled.input`
   background-color:black;
   color:white;
`
export const Button=styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    width:280px;
    height:36px;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    color: #FFFFFF;

`

export const TotalTimeInput = styled.label`
    width:558px;
    height:50px;
    padding:1%;
    margin-bottom:1%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);

`

export const H2 = styled.h2`
    color: white;
    font-family: Comfortaa;
`