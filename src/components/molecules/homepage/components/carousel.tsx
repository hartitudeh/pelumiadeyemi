"use client";

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideOne from "/public/img/banner/slide.png";
import SlideTwo from "/public/img/banner/slide1.jpeg";
import SlideThree from "/public/img/banner/slide2.jpg";
import Image from "@/components/atoms/image";

const cardData = [
  {
    id: 1,
    image: SlideOne,
    languages: ["JavaScript", "SASS", "React.js", "Next.js", "Boostrap5"],
    apis: [],
    features: [
      "Fullstack project including backend built with (Express.js) and frontend built with (Next.js)",
      "Beautiful UI and animations",
      "Register / Login",
      "Reset Password",
      "JWT Refresh and Access Tokens",
      "Integration with payment gateway",
      "Cart feature",
      "Checkout feature",
      "User's wishlist",
    ],
    link: "https://www.restoraweb.com"
  },
  {
    id: 2,
    image: SlideTwo,
    languages: ["React.js", "JavaScript"],
    apis: ["CoinGecko API"],
    features: [
      "Crypto dashboard with live data",
      "Interactive charts",
      "Secure wallet integration",
    ],
    link: "https://example.com/project2"
  },
  {
    id: 3,
    image: SlideThree,
    languages: ["Next.js", "TypeScript"],
    apis: ["Stripe API"],
    features: ["E-commerce platform", "Product reviews", "Payment Gateway"],
    link: "https://example.com/project2"
  },
];

// Styled Components
const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  max-width: 100%;

  &:hover .info-overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

const InfoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000009c;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease-in-out;
  border-radius: 16px;

  overflow: scroll;
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Pill = styled.div`
  background: transparent;
  border: 1.5px solid #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  color: white;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  &::before {
    content: "•";
    color: #fff;
    margin-right: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  color: #000;
  border-radius: 12px;
  text-align: center;
  margin-top: 15px;
  text-decoration: none;
`;



// Project Component
export const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    waitForAnimate: false,
    arrow: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Wrap>
        <Slider {...settings}>
          {cardData.map((card) => (
            <CardWrapper key={card.id}>
              {/* Image */}
              <Image src={card.image} 
              styles={{
                width: "100%", 
                border: "1px solid #fff", 
                borderRadius: "1rem",
                }} height={350} alt="Project Image" />

              {/* Hover Overlay */}
              <InfoOverlay className="info-overlay">
                {/* Tech Stack Pills */}
                <PillContainer>
                  {card.languages.map((lang, index) => (
                    <Pill key={index}>{lang}</Pill>
                  ))}
                  {card.apis.map((api, index) => (
                    <Pill key={index}>{api}</Pill>
                  ))}
                </PillContainer>

                {/* Feature List */}
                <List>
                  {card.features.map((feature, index) => (
                    <ListItem key={index}>{feature}</ListItem>
                  ))}
                </List>
                <Button href={card.link} target="_blank" rel="noopener noreferrer">
                Preview
              </Button>
              </InfoOverlay>
            </CardWrapper>
          ))}
        </Slider>
      </Wrap>
    </CarouselContainer>
  );
};
