import React from 'react'
import styled from 'styled-components'

const Profile = () => {
    return (
        <>
            <Section id="profile">
                <div className='content'>
                    <div className='content'>
                        <h1>สวัสดี</h1>
                        <p>บัญชีและการตั้งค่า</p>
                    </div>
                    <WrapContainer>
                        <Wrapper>
                            <Label htmlFor='for'>First Name</Label>
                            <Data>สัจจาลินี</Data>
                        </Wrapper>
                        <NavBtn>
                            <Button>Edit</Button>
                        </NavBtn>
                    </WrapContainer>
                    <WrapContainer>
                        <Wrapper>
                            <Label htmlFor='for'>Last Name</Label>
                            <Data>สัจจวิโส</Data>
                        </Wrapper>
                        <NavBtn>
                            <Button>Edit</Button>
                        </NavBtn>
                    </WrapContainer>
                    <WrapContainer>
                        <Wrapper>
                            <Label htmlFor='for'>Age</Label>
                            <Data>24</Data>
                        </Wrapper>
                        <NavBtn>
                            <Button>Edit</Button>
                        </NavBtn>
                    </WrapContainer>
                    <WrapContainer>
                        <Wrapper>
                            <Label htmlFor='for'>Email</Label>
                            <Data>Satjalinee@gmail.com</Data>
                        </Wrapper>
                        <NavBtn>
                            <Button>Edit</Button>
                        </NavBtn>
                    </WrapContainer>
                    <WrapContainer>
                        <Wrapper>
                            <Label htmlFor='for'>Password</Label>
                            <Data>********</Data>
                        </Wrapper>
                        <NavBtn>
                            <Button>Edit</Button>
                        </NavBtn>
                    </WrapContainer>
                    <WrapBtn>
                        <NavBtn>
                            <Button>Log out</Button>
                        </NavBtn>
                        <NavBtn>
                            <Button>Delete account</Button>
                        </NavBtn>
                    </WrapBtn>
                </div>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 5rem 0;
    .content {
        display: grid;
        padding: 0 3rem;
        .content {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            background-color: #FFF;
            border-radius: 1rem;
            text-align: center;
        }
    }
`

const WrapContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
`

const Wrapper = styled.div`
    height: 80px;
`

const WrapBtn = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
`

const Label = styled.label`
    margin-bottom: 1rem;
    font-size: 20px;
    color: #594F4F;
`
const Data = styled.div`
    padding: 10px 10px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 4px;
    display: flex;
    color: #015C92;
    font-weight: bold;
    background-color: #FFF;
`

const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

const Button = styled.button`
    border-radius: 50px;
    background: #015C92;
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16px;
    color: #FFF;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
`

export default Profile
