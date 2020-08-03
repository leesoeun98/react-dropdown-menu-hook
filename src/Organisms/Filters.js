import Bar from "../Atoms/Bar";
import Filter from "../Molecules/Filter";
import styled from "styled-components";
import React, { Component } from "react";
import { Animal, Flower, Food, Location } from "../Molecules/Item";

export default function Filters(props) {
	return (
		<Bar>
			<Filter data={Animal}></Filter>
			<Filter data={Flower}></Filter>
			<Filter data={Food}></Filter>
			<Filter data={Location}></Filter>
		</Bar>
	);
}
