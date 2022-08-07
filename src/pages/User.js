import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import User from '../components/User'
import { BrowserRouter } from 'react-router-dom'
import MainContent from '../components/User/MainContent'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const UserPage = () => {
    return (
        <>
            <ScrollToTop />
            <BrowserRouter>
                <User />
                <MainContent />
            </BrowserRouter>
        <div>
            <MessengerCustomerChat
            pageId="106889658678079"
            appId="1017473769194839"
            />,
        </div>
        </>
    )
}

export default UserPage
