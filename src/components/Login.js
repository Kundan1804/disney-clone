import React from 'react';
import styled from "styled-components";

const Login = (props) => {  
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src = '/images/cta-logo-one.jpg' alt= 'unable to load' />
                    <SignUp>Get All There</SignUp>
                    <Description>
                    Enjoy the latest shows & movies, when it airs along with 
                    live cricket streaming only on Disney+ Hotstar. Get your 
                    Subscription now!
                    </Description>
                    <CTALogoTwo src = 'images/cta-logo-two.png' alt = 'unable to load' />
                </CTA>
                <BgImage src="images/login-background.jpg" alt="kya hua bhai"/>
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    //margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height:100vk;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background: url("images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column; 
`;

const CTALogoOne = styled.img`
   // margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`; 

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 12px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px

`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-ottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;
export default Login;