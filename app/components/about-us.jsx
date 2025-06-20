"use client"
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #333;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease-out;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const ContactButton = styled.button`
  background: transparent;
  border: 2px solid #000;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #000;
    color: #fff;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const HeroText = styled.div`
  flex: 1;
  padding-right: 40px;
  animation: ${slideInLeft} 1s ease-out;
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.2;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const CtaButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #333;
  }
`;

const TestimonialSection = styled.section`
  background: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  animation: ${slideInRight} 1s ease-out;
`;

const TestimonialTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const TestimonialContent = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialText = styled.blockquote`
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
`;

const TestimonialAuthor = styled.div`
  margin-left: 30px;
`;

const AuthorName = styled.p`
  font-weight: 700;
  margin: 0 0 5px 0;
`;

const AuthorCompany = styled.p`
  margin: 0;
  color: #666;
`;

const GramerzComponent = () => {
  useEffect(() => {
    // Trigger animations when component mounts
    // The styled-components animations will handle this automatically
  }, []);

  return (
    <Container>
      <Header>
        <Logo>WHY GRAMERZ?</Logo>
        <ContactButton>CONTACT US</ContactButton>
      </Header>

      <HeroSection>
        <HeroText>
          <HeroTitle>MAKE YOUR STORY HEARD</HeroTitle>
          <HeroDescription>
            Gramerz is a trailblazing social media management company, empowering brands and talents to build impactful campaigns and vibrant communities. Since 2011 we've been leading the way in the social media evolution, combining innovation with authenticity at the core of everything we do. We deeply believe in the transformative power of social media to redefine traditional advertising, creating meaningful connections and delivering results that matter.
          </HeroDescription>
          <CtaButton>GET STARTED</CtaButton>
        </HeroText>
      </HeroSection>

      <TestimonialSection>
        <TestimonialTitle>TESTIMONIALS</TestimonialTitle>
        <TestimonialContent>
          <TestimonialText>
            Working with Trident has been a game-changer for our brand. Every team member's voice is valued, fostering a collaborative environment where innovation thrives. As social media evolves, Trident consistently helps us embrace new opportunities, elevating our brand above the noise and ensuring we stay ahead of the curve.
          </TestimonialText>
          <TestimonialAuthor>
            <AuthorName>Braxton Dan</AuthorName>
            <AuthorCompany>Trident</AuthorCompany>
          </TestimonialAuthor>
        </TestimonialContent>
      </TestimonialSection>
    </Container>
  );
};

export default GramerzComponent;