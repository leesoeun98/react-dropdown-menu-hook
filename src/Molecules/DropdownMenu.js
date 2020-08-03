import DropdownMenu from "../Atoms/Dropdown";
import styled from "styled-components";
import React, { Component } from "react";
import FilterItem from "../Molecules/FilterItem";

export default function Dropdown(props) {
	return (
		<DropdownMenu>
            {props.data.map((value)=>(
                <FilterItem Item={value}></FilterItem>
            ))}
		</DropdownMenu>

	);
}
