import DropdownMenu from "../Atoms/Dropdown";
import styled from "styled-components";
import React, { Component } from "react";
import Filteritem from "../Molecules/FilterItem";

export default function Dropdown(props) {
	return (
		<DropdownMenu>
			<Filteritem></Filteritem>
			<Filteritem></Filteritem>
			<Filteritem></Filteritem>
			<Filteritem></Filteritem>
		</DropdownMenu>
	);
}
