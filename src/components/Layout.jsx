import React from 'react'
import Navbar from './Navbar'
import Notifications from './Notifications'

const Layout = ({ children }) => (
    <>
        <Navbar />
        {children}
        <Notifications />
    </>
)

export default Layout