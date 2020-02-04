import React from 'react';

import { HeaderContainer, NavBar, NavLinks, NavBarContainer, LogoContainer, Li, H1, LinksContainer, SignOutContainer, GreyContainer } from './HeaderStyles';

const Header = props => {
    return (
        <>
        <GreyContainer />
        <HeaderContainer>
            <NavBar>
                <NavBarContainer>
                    <LogoContainer>
                        <H1>Sleep Tracker</H1>
                    </LogoContainer>
                    <LinksContainer>
                        <NavLinks>
                            <Li><a>About</a></Li>
                            <Li><a>Settings</a></Li>
                        </NavLinks>
                    </LinksContainer>
                    <SignOutContainer>
                        <a>Log out</a>
                    </SignOutContainer>
                </NavBarContainer>
            </NavBar>
        </HeaderContainer>
        </>
    )
}

export default Header;