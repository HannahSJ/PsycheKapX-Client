import styled from "styled-components";

export default function ButtonSing({content}) {
    return <StyleButton>{content}</StyleButton>;
}

const StyleButton = styled.button`
    background: linear-gradient(to right, #015C92 0%, #88CDF6 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    margin-top: 4rem;

    @media screen and (max-width: 400px) {
        height: 2rem;
        width: 55%;
    }
`;