import styled from "styled-components";

export default function IconSign ({color, children}) {
    return (
    <styledIcon background={color}>{children}</styledIcon>
    )
}

const styledIcon = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    background: ${(props) => props.background};
    
    svg {
        width: 3.5rem;
        height: 3.5rem;
    }
`;