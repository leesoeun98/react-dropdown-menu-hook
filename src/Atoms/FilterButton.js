import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 6rem;
		display: flex;
		flex-direction: row;
		height: 1.8rem;
		background: ${props.backgroundColor};
		border-radius: 0.2rem;
		border: 0.1rem solid ${props.borderColor};
		justify-content: left;
		align-items: center;
        padding: 0 0.4rem 0 0.4rem;
        margin: 0 1rem 0 1rem;
        position: relative;
	`}
`;
