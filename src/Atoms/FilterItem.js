import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 6rem;
		display: flex;
		flex-direction: row;
		height: 1.8rem;
		background: ${props.background} ;
		justify-content: left;
        align-items: center;
        padding: 0.2rem 0.4rem 0.2rem 0.4rem;
	`}
`;
