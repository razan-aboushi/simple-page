"use client"
import {NavBarContainer, Logo, NavLinks, NavLink} from "@/components/NavBar/styled.components";

const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-fff0a0e4daba21899b66da8178055645" width="100px"
                     height="55px" alt="شعار"/>
            </Logo>
            <NavLinks>
                <NavLink href="/contact">اتصل بنا</NavLink>
                <NavLink href="/about">معلومات عنا</NavLink>
                <NavLink href="/cars">السيارات</NavLink>
                <NavLink href="/">الرئيسية</NavLink>
            </NavLinks>
        </NavBarContainer>
    )
}

export default NavBar;
