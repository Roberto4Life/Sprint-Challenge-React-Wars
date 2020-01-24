import React, { useState, useEffect } from "react";
import Card, { Outer } from "./Card";
import axios from "axios";
import styled from "styled-components";


export const OuterDos = styled.div`
    display:flex;
    justify-content: center;
`;

export default function CardDisplay() {
  
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://swapi.co/api/people/?format=json"
      )
      .then(response => {
        setInfo(response.data.results); 
        console.log(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <>
        {info.map(info => {
          return (
            <OuterDos>
            <div>
            <Card 
              info = {info}
              key = {info.id}
            />
            </div>
            </OuterDos>
          )
        })}
    </>
  );
}
