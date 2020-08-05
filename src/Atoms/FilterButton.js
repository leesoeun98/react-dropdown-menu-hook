import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 6.8rem;
		display: flex;
		font-family: inherit;
		flex-direction: row;
		height: 2rem;
		background: ${props.backgroundColor};
		border-radius: 0.2rem;
		border: ${props.border} solid ${props.borderColor};
		justify-content: space-between;
		align-items: center;
        padding: 0 0.4rem 0 0.4rem;
        position: relative;
		box-sizing: border-box;
	`}
`;
