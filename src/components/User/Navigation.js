import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../../images/psyche.png'

function Navigation() {
    return (
        <>
            <NavigationStyled>
                <div className="avatar">
                    <img src={avatar} alt=""/>
                    <div>
                        <p>Satja</p>
                    </div>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/user" activeClassName="active-class">หน้าแรก</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/article" activeClassName="active-class">บทความน่ารู้</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/listening" activeClassName="active-class">ฟังเพลินๆ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/bookreviewe" activeClassName="active-class">หนังสือแนะนำ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/phq9test" activeClassName="active-class">ประเมิณสุขภาพจิต</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" activeClassName="active-class">Profile</NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 Psyche Application</p>
                </footer>
            </NavigationStyled>
        </>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid #BCE6FF;


    .avatar{
        width: 100%;
        border-bottom: 1px solid #BCE6FF;
        text-align: center;
        padding: 1rem 0;
        img{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 4px solid #BCE6FF;
        }
    }

    p{
        color: #015C92;
        font-weight: bold;
        margin-top: 10px;
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: #BCE6FF;
        }
        li{
            display: block;
            a{
                display: block;
                font-size: 1.2rem;
                color: #015C92;
                padding: 1rem 0;
                position: relative;
                text-decoration: none;
                z-index: 10;
                &:hover{
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: #BCE6FF;
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95);
                    z-index: 3;
                    opacity: 0.31;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }

        }
    }

    footer{
        border-top: 1px solid #BCE6FF;
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            color: #015C92;
            display: block;
            text-align: center;
        }
    }

`;
export default Navigation
