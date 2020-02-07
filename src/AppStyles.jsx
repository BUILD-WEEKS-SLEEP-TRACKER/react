import styled from "styled-components"


export const AppStyles =styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
background: #121212;
@media only screen and (max-width: 500px) {
    max-width:100%;
    width:100vw;
    border:10px solid red;
}
`