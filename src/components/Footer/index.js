import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLinks,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconsLink,
    WebsiteRights 
} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLinks to="/signup">How it works</FooterLinks>
                                <FooterLinks to="/signup">Testimonials</FooterLinks>
                                <FooterLinks to="/signup">Careers</FooterLinks>
                                <FooterLinks to="/signup">Investors</FooterLinks>
                                <FooterLinks to="/signup">Terms of Service</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Contact Us</FooterLinksTitle>
                                <FooterLinks to="/signup">Contact</FooterLinks>
                                <FooterLinks to="/signup">Support</FooterLinks>
                                <FooterLinks to="/signup">Destinations</FooterLinks>
                                <FooterLinks to="/signup">Sponsorships</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Videos</FooterLinksTitle>
                                <FooterLinks to="/signup">Submit Video</FooterLinks>
                                <FooterLinks to="/signup">Ambassadors</FooterLinks>
                                <FooterLinks to="/signup">Agency</FooterLinks>
                                <FooterLinks to="/signup">Influencer</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Social Media</FooterLinksTitle>
                                <FooterLinks to="/signup">Instagram</FooterLinks>
                                <FooterLinks to="/signup">Facebook</FooterLinks>
                                <FooterLinks to="/signup">Youtube</FooterLinks>
                                <FooterLinks to="/signup">Twitter</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Psyche
                        </SocialLogo>
                            <WebsiteRights>Psyche © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                                <SocialIcons>
                                    <SocialIconsLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconsLink>
                                    <SocialIconsLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconsLink>
                                    <SocialIconsLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconsLink>
                                </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
