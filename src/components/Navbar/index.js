import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from 'react-router-dom'
import PopupSign from '../PopupSign';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElement';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const history = useHistory()

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    //Popup sign up function
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    function handleClick() {
        history.push("/user");
    }
    

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Psyche</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                เกี่ยวกับ ไซคีย์
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='bot'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                kapX
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='feature'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >
                                ฟีตเจอร์ของเรา
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={handleClick}>เริ่มกันเลย</NavBtnLink>
                        {/* <NavBtnLink onClick={openModal} >เริ่มกันเลย</NavBtnLink> */}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            <PopupSign showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Navbar;
