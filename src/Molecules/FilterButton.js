import FilterWrapper from "../Atoms/Bar";
import FilterButton from "../Atoms/FilterButton";
import styled from "styled-components";
import React, { Component } from "react";
import FilterItem from "../Atoms/FilterItem";
import Text from "../Atoms/Text";

export default function Filterbutton(props) {
	return (
		<FilterButton backgroundColor="#ffffff" border="0.08rem" borderColor="#8b90a0">
			<Text line="1.08rem" level={4} align="center" color="#232735">
				{props.title}
			</Text>
		</FilterButton>
	);
}
