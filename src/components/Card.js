import React from "react";
import styled from "styled-components";

// export default function Card (props){
// const Card = (props) => {

export const Outer = styled.div`
    background: grey;
    border: 1px solid black;
    margin: 5px;
`;

const Card = ({info}) => { 
    
    console.log("I am stater from Card", info)

        return(
            <Outer>
            <div className="card">
                
                <h1>{info.name}</h1>
                <h2>{info.birth_year}</h2>
                <h2>{info.gender}</h2>
            {/* <h1>{props.info.name}</h1> */}
            {/* <img src ={props.info.hdurl} width = "150" height = "150"/> */}
           
            </div>
            </Outer>
        )
    
}

export default Card;