import FilterWrapper from "../Atoms/Bar";
import FilterButton from "../Molecules/FilterButton";
import DropdownMenu from "../Molecules/DropdownMenu";
import styled from "styled-components";
import React, { Component } from "react";
import FilterItem from "../Atoms/FilterItem";

export default function Filter(props) {
	return (
		<FilterWrapper>
			<FilterButton></FilterButton>
			<DropdownMenu data={props.data}></DropdownMenu>
		</FilterWrapper>
	);
}
