import React from 'react'
import Navigation from './Navigation'
import { UserSidebarContainer } from './UserSidebar'


const User = () => {
    return (
        <>
            <UserSidebarContainer>
                <Navigation />
            </UserSidebarContainer>
        </>
    )
}

export default User