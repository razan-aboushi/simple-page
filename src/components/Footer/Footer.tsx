'use client';
import { FooterContainer, FooterContent, FooterSection, FooterLink, CopyRight } from "@/components/Footer/styled.components";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h4>معلومات عنا</h4>
                    <FooterLink href="/team">الفريق</FooterLink>
                    <FooterLink href="/careers">الوظائف</FooterLink>
                </FooterSection>
                <FooterSection>
                    <h4>اتصل بنا</h4>
                    <FooterLink href="/contact">تواصل معنا</FooterLink>
                    <FooterLink href="/support">الدعم</FooterLink>
                    <FooterLink href="/faq">الأسئلة الشائعة</FooterLink>
                </FooterSection>
            </FooterContent>
            <CopyRight>© 2024 رزان عبوشي . جميع الحقوق محفوظة</CopyRight>
        </FooterContainer>
    )
}

export default Footer;
