import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 700px;
    box-shadow: 0 5px 16px #D9F1F1;
    background: #fff;
    color: #015C92;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        height: 600px;
        width: 500px;
    }

    @media screen and (max-width: 400px) {
        height: 70vh;
        width: 80vw;
    }

`;  

export const ModalImg = styled.img`
    width: 400px;
    height: 700px;
    border-radius: 10px 0 0 10px;
    background: #D9F1F1;

    @media screen and (max-width: 360px) {
        display: none;
    }

    @media screen and (max-width: 400px) {
        display: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    line-height: 5.8;
    color: #015C92;

    p {
        margin-bottom: 2rem;
        font-weight: bold;
    }

    /* button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    } */

    @media screen and (max-width: 768px) {
        height: 600px;
        width: 500px;
    }

    @media screen and (max-width: 400px) {
        height: 70vh;
        width: 80vw;

        p{
            font-size: small;
        }
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;

    @media screen and (max-width: 400px) {
        top: 10px;
        right: 10px;
        height: 22px;
    }
`;

export const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
    margin-top: 1rem;
    
`;

export const ButtonContainer = styled.div`
    /* margin: 1rem 0 2rem 0; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 400px) {
        margin: 0.2rem 0 1rem 0;
    }
`;

export const LoginWith = styled.h5`
    /* cursor: pointer; */
    color: gray;
    height: 20px;
`; 

export const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    /* margin: 0.25rem 0 1rem 0; */
    background: linear-gradient(to right, #015C92 0%, #BCE6FF 79%);
    backdrop-filter: blur(25px);
`;

export const IconContainer = styled.div`
    /* display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%; */

    /* margin: 2rem 0 3rem 0; */
    /* display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    /* max-width: 1100px; */
    /* margin: 40px auto 0 auto; */

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const IconN = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    height: 10px;
    margin-bottom: 3rem;

    @media screen and (max-width: 400px) {
        height: 20px;
        width: 180px;
    }
    
`;

export const IconLink = styled.a`
    color: #015C92;
    font-size: 2rem;
    height: 60px;
`;

export const ForgetPassword = styled.h5`
    cursor: pointer;
    color: gray;
    height: 40px;
    margin-top: 1.7rem;
`;

export const Agree = styled.h6`
    cursor: pointer;
    color: gray;
    height: 50px;
`;
  
