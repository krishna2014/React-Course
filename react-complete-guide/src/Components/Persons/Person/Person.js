import React from 'react';
import styled from 'styled-components';
import './Person.css';


const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
    width: 450px
}
`;
const person = (props) => {
    /*return <p>I'm a person and I'm {Math.floor(Math.random() * 30
        )} years old.</p>;
    */
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    console.log('[Person.js] rendering...');
    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" value={props.name}  onChange={props.changed}/>
        </StyledDiv>
        
    );
}

export default person;