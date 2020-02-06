import styled from 'styled-components';


export const ListContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    top: 25%;
    right: 8%;
    width: 25%;
`


export const H2 = styled.h2`
text-align: center;
font-family: Comfortaa;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;
color: rgba(255, 255, 255, 0.87)
`
export const SleepListTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: rgb(56, 56, 56);
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.25);
max-width: 100%;
`

export const EntryContainer = styled.div`
display: flex;
flex-direction: column;
width:25%;
height: 100%;
position: fixed;
top: 25%;
right: 8%;
bottom: 0%;
color: white;
`

export const SleepDisplay = styled.div`
    margin-bottom: 1em;
    width: 100%;
    align-self: center;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`