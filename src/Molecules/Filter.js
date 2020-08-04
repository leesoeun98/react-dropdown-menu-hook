import FilterWrapper from "../Atoms/FilterWrapper";
import FilterButton from "../Molecules/FilterButton";
import DropdownMenu from "../Molecules/DropdownMenu";
import styled from "styled-components";
import React, { Component } from "react";
import { useState } from "react";

export default function Filter(props) {
	const [clicked, setClicked] = useState(false);
	const openMenu = () => {
		console.log(clicked);
		setClicked(!clicked);
	};
	const [item, setItem] = useState(null);

	const selectItem = (item) => {
		console.log(item);
		setItem(item);
	};
	return (
		<FilterWrapper onClick={() => openMenu()}>
			<FilterButton
				title={item ? item.name : props.title}
				//title = {item?.name || props.title}
			></FilterButton>
			{clicked && <DropdownMenu data={props.data} selectItem={selectItem}></DropdownMenu>}
		</FilterWrapper>
	);
}
