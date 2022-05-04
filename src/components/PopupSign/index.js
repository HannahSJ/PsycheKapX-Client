import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useSpring, animated, } from 'react-spring'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { authenticate, isAuth } from '../../helpers/auth'
import { Redirect } from 'react-router-dom'
import styled from "styled-components";
import {
    Background,
    ModalWrapper,
    ModalImg,
    ModalContent,
    CloseModalButton,
    InputContainer,
    ButtonContainer,
    LoginWith,
    HorizontalRule,
    IconContainer,
    ForgetPassword,
    IconLink,
    IconN,
    Agree
    // styledIcon
} from './PopupSignElement'
import InputBox from './Input'
import ButtonSing from './Button'

const PopupSign = ({ showModal, setShowModal }) => {
    const modalRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    // const FacebookBackground = "linear-gradient(to right, #0546a0 0%, #663fb6 100%)"

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const { email, name, password1, password2 } = formData
    //Handle change form inputs
    const handleChange = text => e => {
        console.log(name, email, password1, password2);
        setFormData({ ...formData, [text]: e.target.value })
    }

    //Submit data to backend
    const handleSubmit = e => {
        e.preventDefault();
        if (name && email && password1) {
            if (password1 === password2) {
                axios.post(`${process.env.REACT_APP_API_URL}/register`, {
                    name, email, password: password1
                }).then(res => {
                    setFormData({
                        ...formData,
                        name: '',
                        email: '',
                        password1: '',
                        password2: ''
                    });
                    toast.success(res.data.message)
                })
                    .catch(err => {
                        toast.error(err.response.data.error)
                    });
            } else {
                toast.error("Password don't matches");
            }
        } else {
            toast.error("Please fill all fields");
        }
    }

    return (
        <>
            {isAuth() ? <Redirect to='/' /> : null}
            <ToastContainer />
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg src={require('../../images/signup.svg').default} />
                            <ModalContent>
                                <p>Let Create Your Account For PSYCHE</p>
                                <InputContainer
                                    onSubmit={handleSubmit}
                                >
                                    <Input
                                        type="name"
                                        placeholder="Usesername"
                                        onChange={handleChange('name')}
                                        value={name}
                                    />
                                    {/* <InputBox type="age" placeholder="Age" /> */}
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange('email')}
                                        value={email}
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange('password1')}
                                        value={password1}
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Confirm password"
                                        onChange={handleChange('password2')}
                                        value={password2}
                                    />
                                    <ButtonContainer>
                                        <Button
                                            type='submit'
                                        >
                                            Register
                                        </Button>
                                    </ButtonContainer>
                                </InputContainer>
                                {/* <ButtonContainer>
                                    <ButtonSing
                                        type='submit'
                                        content="Sign up"
                                    />
                                </ButtonContainer> */}
                                {/* <LoginWith>or Login with</LoginWith>
                                <HorizontalRule />
                                <IconContainer>
                                    <IconN>
                                        <IconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></IconLink>
                                        <IconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></IconLink>
                                        <IconLink href="/" target="_blank" aria-label="Twitter"><FaGoogle /></IconLink>
                                    </IconN>
                                </IconContainer>
                                <ForgetPassword>Forgot Password?</ForgetPassword>
                                <Agree>By continuing to use PSYCHE, you agree to our Terms</Agree> */}
                            </ModalContent>
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    )
}

const Input = styled.input`
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

const Button = styled.button`
    background: linear-gradient(to right, #015C92 0%, #88CDF6 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    margin-top: 0.5rem;

    @media screen and (max-width: 400px) {
        height: 2rem;
        width: 55%;
    }
`;

export default PopupSign
