import Bar from "../Atoms/Bar";
import Filter from "../Molecules/Filter";
import styled from "styled-components";
import React, { Component } from "react";
import { Animal, Flower, Food, Location } from "../Molecules/Item";

export default function Filters(props) {
	return (
		<Bar>
			<Filter data={Animal} title="animal"></Filter>
			<Filter data={Flower} title="flower"></Filter>
			<Filter data={Food} title="food"></Filter>
			<Filter data={Location} title="location"></Filter>
		</Bar>
	);
}
