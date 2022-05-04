import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import User from '../components/User'
import { BrowserRouter } from 'react-router-dom'
import MainContent from '../components/User/MainContent'

const UserPage = () => {
    return (
        <>
            <ScrollToTop />
            <BrowserRouter>
                <User />
                <MainContent />
            </BrowserRouter>
        </>
    )
}

export default UserPage
