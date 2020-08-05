import React, { Component }  from 'react';
import Filterproject from "../src/Organisms/Filters"
import styled, {css} from "styled-components";
function App() {
  return (
    <Div>
      <Filterproject></Filterproject>
    </Div>
  );
}

export default App;

const Div= styled.div`
    width: 100%;
    height: 48rem;
    background: #c4f4fe;
    justify-content: center;
    display: flex;
    `;
