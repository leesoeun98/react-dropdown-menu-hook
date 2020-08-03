import FilterItem from "../Atoms/FilterItem";
import Text from "../Atoms/Text";
import React, { Component } from "react";
export default function Filteritem(props) {
	return (
		<FilterItem>
			<Text line="1.08rem" level={3} align="center" color="#232735">
				{props.Item.name}
			</Text>
		</FilterItem>
	);
}
