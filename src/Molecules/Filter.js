import FilterWrapper from "../Atoms/FilterWrapper";
import FilterButton from "../Molecules/FilterButton";
import DropdownMenu from "../Molecules/DropdownMenu";
import styled from "styled-components";
import React, { Component } from "react";
import {useState} from 'react';

export default function Filter(props) {
    const [clicked, setClicked]=useState(false);
    const openMenu=()=>{
        console.log(clicked)
        setClicked(!clicked)
    }
	return (
		<FilterWrapper onClick={()=>openMenu()}>
			<FilterButton></FilterButton>
			{clicked && <DropdownMenu data={props.data}></DropdownMenu>}
		</FilterWrapper>
	);
}
