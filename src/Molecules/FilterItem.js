import FilterItem from "../Atoms/FilterItem";
import Text from "../Atoms/Text";
import React, { Component } from "react";
import { useState } from "react";
export default function Filteritem(props) {
	const [background, setBackground]=useState("#ffffff");
	return (
		<FilterItem background={background} onClick={()=>{props.selectItem(props.item)}}
		onMouseOver={()=>setBackground("#aab9ff")}
		onMouseOut={()=>setBackground("#ffffff")}>
			<Text line="1.08rem" level={4} align="center" color="#232735">
				{props.item.name}
			</Text>
		</FilterItem>
	);
}
