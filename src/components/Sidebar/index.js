import React, { useState } from 'react'
import PopupSign from '../PopupSign';
import { useHistory } from 'react-router-dom'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarWrapper,
    SidebarLink,
    SidebarRoute,
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const history = useHistory()
    function handleClick() {
        history.push("/user");
    }

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>เกี่ยวกับ ไซคีย์</SidebarLink>
                        <SidebarLink to='bot' onClick={toggle}>kapX</SidebarLink>
                        <SidebarLink to='contact' onClick={toggle}>ฟีตเจอร์ของเรา</SidebarLink>
                        {/* <SidebarLink to='signin' onClick={toggle}>เข้าสู่ระบบ</SidebarLink> */}
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/' onClick={handleClick} >เริ่มกันเลย</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
            <PopupSign showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Sidebar
