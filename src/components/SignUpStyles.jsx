import styled from "styled-components"


export const Header= styled.h1`
   
    width: 448px;
    height: 112px;
    left: 144px;
    top: 352px;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 54px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.87);
    
 `
 export const Paragraph= styled.p`
   
    width: 448px;
    height: 56px;
    left: 144px;
    top: 496px;
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 27px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    
 `
 export const Form =styled.form`
    
    
    width:50%;
    @media only screen and (max-width: 500px) {
        margin:0%;
       
        
    }
`
export const Name = styled.div`
    display:flex;
    width:45%;
    margin-left:23.5%;
`
export const Input=styled.input`
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;
    border-radius: 8px 8px 0px 0px;
    color:white;
    @media only screen and (max-width: 500px) {
        width:150px;
       
    }
`
export const Button=styled.button`
    background: #39869D;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    width: 280px;
    height: 36px;

`
export const Container =styled.div`

display:flex;
justify-content:center;
align-items:center;
text-align:center;


`
export const Scontainer = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;


@media only screen and (max-width: 500px) {
    display:none;
}
`
