import React from 'react'
import styled from "styled-components"

const Nav = styled.nav`
    background: transparent;
    color: #05386B;
    font-size: 1.5rem;
    font-weight: bold;
`
const NavItem = styled.a`
    &:hover {
        text-decoration: underline;
    }
`

function NavBar() {
    return (
        <div>
            <Nav className="flex flex-row space-x-8 mr-8 p-2 justify-end">
                <NavItem href="#">LOGIN</NavItem>
            </Nav>
        </div>
    )
}

export default NavBar
