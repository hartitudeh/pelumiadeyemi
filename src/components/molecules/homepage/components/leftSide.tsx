import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/img/pm.jpg";
import Link from "next/link";
import Text from "@/components/atoms/text";
import Flex from "@/components/atoms/flex";
import { useScreenResolution } from "@/components/atoms/useScreenResolution";
import Toggler from "@/components/atoms/mode";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const LeftSideWrapper = styled.div`
  width: 30%;
  height: 100vh;
  padding: 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid;

  @media screen and (max-width: 900px) {
    width: 100%;
    border: none;
    margin: 0;
    position: relative;
    padding: 0;
  }
`;

// const NavItem = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify: flex-start;
//   gap: 1rem;
//   padding: 1rem;
//   font-size: 1rem;
//   // background-color: ${({ isActive }) => (isActive ? "#00c4f4" : "transparent")};
//   // color: ${({ isActive }) => (isActive ? "#fff" : "#cfcfcf")};
//   cursor: pointer;
//   border-radius: 5px;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     background-color: #00c4f4;
//     color: #fff;
//   }

//   @media (max-width: 900px){
//   flex-direction: row;
//   }
// `;

const Box = styled.div`
background: #fff;
border-radius: 50%;
height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.3s ease;
border: 1px solid;
`;

const LeftSide = () => {
  const { isMobile } = useScreenResolution();

  //   const router = useRouter();

  // const navItems = [
  //   { id: 1, text: "Portfolio", icon: "", link: "/dashboard" },
  //   { id: 2, text: "About Me", icon: "", link: "/dashboard/affiliate" },
  //   { id: 3, text: "Article", icon: "<FaGamepad />", link: "/dashboard/games" },
  // ];

  return (
    <>
      <LeftSideWrapper>
        <Flex
          justify="center"
          align="center"
          gap={isMobile ? "1.5rem" : "1rem"}
          direction={isMobile ? "column" : "row"}
          styles={{
            padding: "0 1.5rem",
          }}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={isMobile ? 250 : 140}
            height={isMobile ? 250 : 140}
            style={{
              borderRadius: isMobile ? "10%" : "50%",
              border: "3px solid #fff",
            }}
          />

          <Flex
            direction="column"
            justify="flex-start"
            align="center"
            gap=".5rem"
          >
            <Toggler />
            <Text
              type="h2"
              text="Pelumi O. Adeyemi"
              styles={{
                fontSize: isMobile ? "2.2rem" : "1.5rem",
              }}
            />
            <Text
              type="p"
              text="Software Engineer"
              styles={{
                fontSize: isMobile ? "1.8rem" : "1.2rem",
              }}
            />
            <Text
              type="p"
              text="React.js | TypeScript | Next.js"
              // color="#fff"
              styles={{
                fontSize: ".7rem",
              }}
            />
          </Flex>
        </Flex>
        <Text
          type="p"
          text="(Mostly) React.js and TypeScript. Next.js programmer interested in Full-Stack web development and Web3 development! See my Github profile for my public projects."
          styles={{
            textAlign: "center",
            fontSize: "1.1rem",
            fontStyle: "italic",
            fontWeight: "lighter",
            // color: "#bab2b2",
          }}
        />
        <hr
          style={{
            border: ".5px solid",
            height: "1px",
            margin: "5px 0",
            display: isMobile ? "none" : "flex",
          }}
        />
        {/* {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
              <NavItem>
              {item.icon}
              {item.text}
              </NavItem>
          </Link>
        ))} */}

        <Flex
          justify="center"
          align={isMobile ? "center" : "flex-start"}
          direction={isMobile ? "row" : "column"}
          gap={isMobile ? "1.5rem" : "1rem"}
        >
          
          <Link href="">
            <Text text="Profile" type="p" />
          </Link>
          <Link href="">
            <Text text="About Me" type="p" />
          </Link>
          <Link href="">
            <Text text="Refries" type="p" />
          </Link>
        </Flex>

        <Flex justify={isMobile ? "flex-start" : "center"} align={isMobile ? "flex-start" : "center"} direction={isMobile ? "row" : "column"} gap="1rem" styles={{
          marginTop: isMobile ? "1rem" : "1.5rem",
        }}>
          <Flex direction="row" justify={isMobile ? "flex-end" : "flex-start"} gap="1rem">
            <Box>
            <FaLinkedin size={25} color="#000" />
            </Box>
            <Box>
            <FaGithubSquare size={25} color="#000" />
            </Box>
            <Box>
            <FaWhatsappSquare size={25} color="#000" />
            </Box>
            <Box>
            <FaWhatsappSquare size={25} color="#000" />
            </Box>
          </Flex>
          {/*  */}
          {/* <Flex direction="row" justify="flex-start" gap="1rem">
            <Box>
            <IoIosMail size={20} color="#000" />
            </Box>
            
            <Box>
            <i className="fas fa-github"></i>
            </Box>
          </Flex> */}
        </Flex>
      </LeftSideWrapper>
    </>
  );
};

export default LeftSide;
