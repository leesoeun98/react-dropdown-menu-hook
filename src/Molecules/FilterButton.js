import FilterWrapper from "../Atoms/Bar";
import FilterButton from "../Atoms/FilterButton";
import styled from "styled-components";
import React, { Component } from "react";
import FilterItem from "../Atoms/FilterItem";
import Text from "../Atoms/Text";
import IconDown from "../Atoms/Icons/Down";
import IconUp from "../Atoms/Icons/Up";
import IconX from "../Atoms/Icons/X";

export default function Filterbutton(props) {
	const iconStyle = {
		width: "0.6rem",
		height: "0.6rem",
		margin: "0 0 0 0",
		align: "center",
	};
	const iconXStyle = {
		width: "0.6rem",
		height: "0.6rem",
		margin: "0 0 0 0",
		align: "center",
	};
	let icon = <IconDown styled={iconStyle} fill="#8b90a0"></IconDown>;
	let background = "#ffffff";
	if (props.item) {
		icon = (
			<Button
				onClick={() => {
					props.setItem(null);
					props.setClicked(false);
				}}>
				<IconX styled={iconXStyle} fill="#8b90a0"></IconX>
			</Button>
		);
		background = "#d3d4d8";
	} else if (props.clicked) {
		icon = <Button><IconUp styled={iconStyle} fill="#8b90a0"></IconUp></Button>;
		background = "#f0f1f3";
	} else {
		icon = <Button><IconDown styled={iconStyle} fill="#8b90a0"></IconDown></Button>;
		background = "#ffffff";
	}
	return (
		<FilterButton backgroundColor={background} border="0.08rem" borderColor="#8b90a0">
			<Text line="1.08rem" level={4} align="center" color="#232735">
				{props.title}
			</Text>
			{icon}
		</FilterButton>
	);
}
const Button = styled.div`
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 1rem;
	width: 0.8rem;
	margin: 0 0.2rem 0.1rem 0;
`;
