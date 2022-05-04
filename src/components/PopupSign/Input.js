import styled from "styled-components";

export default function InputBox({ type, placeholder }) {
    return <StyleInput type={type} placeholder={placeholder} />;
}

const StyleInput = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 #015C92;
    border-radius: 3rem;
    width: 80%;
    height: 2.5rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media screen and (max-width: 400px) {
        height: 1rem;
    }

    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9ebc0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder {
        color: #b9abc099;
        font-weight: 100;
        font-size: 1rem;
    }
`;