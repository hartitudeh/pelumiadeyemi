import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import User from "../../public/img/user/user.png";
import {
  FaAd,
  FaChartBar,
  FaExchangeAlt,
  FaGamepad,
  FaHistory,
  FaHome,
  FaLock,
  FaSignal,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

import Logo from "../../public/img/logo/logo.png";
import styled from "styled-components";
import Flex from "./flex";
import Text from "./text";
import Image from "./image";
import { useScreenResolution } from "./useScreenResolution";
import Link from "./link";
import { useRouter } from "next/router";
import { profile } from "console";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#00c4f4" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#cfcfcf")};
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00c4f4;
    color: #fff;
  }
`;

const ToggleLeft = styled(Button)`
  position: relative;
  top: -15px;
  left: -15px;
  // background-color: #011945 !important;
  color: #00c4f4 !important;
  z-index: 1300;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:hover {
    color: #fff !important;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 96%;
  right: 50px;
  background: #011945;
  color: #fff;
  list-style: none;
  padding: 1rem;
  margin: 0;
  border: 1px solid #00c4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-wrap: nowrap;

  li {
    cursor: pointer;
    font-size: 0.875rem;
    padding: 0.3rem 0.8rem;

    &:hover {
      background: #00c4f4;
      border-radius: 4px;
      color: #011945;
    }
  }
`;

interface SidebarProps {
  onNavClick: (navItem: string) => void;
}

const TemporaryDrawer: React.FC<SidebarProps> = ({ onNavClick }) => {
  const { isMobile } = useScreenResolution();
  const router = useRouter(); // Hook to get the current route

  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState<string>("dashboard");

  // upload profile
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    if (option === "profile") {
      router.push("/dashboard/profile");
    } else if (option === "logout") {
      router.push("/");
    }
    setDropdownVisible(false);
  };

  const [profileImage, setProfileImage] = useState<string | null>(
    "https://via.placeholder.com/150"
  );
  const handleFileUpload = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  // upload profile end

  const handleNavigation = (page: string) => {
    setActivePage(page);
    onNavClick(page);
    setOpen(false);
  };

  const navItems = [
    { id: 1, text: "Dashboard", icon: <FaHome />, link: "/dashboard" },
    { id: 2, text: "Affiliate", icon: <FaUserFriends />, link: "/dashboard/affiliate" },
    { id: 3, text: "Games", icon: <FaGamepad />, link: "/dashboard/games" },
    { id: 4, text: "Trade", icon: <FaExchangeAlt />, link: "/dashboard/trade" },
    // { id: 5, text: "Charts", icon: <FaChartBar />, link: "/dashboard/charts" },
    { id: 6, text: "Signals", icon: <FaSignal />, link: "/dashboard/signals" },
    { id: 7, text: "My Team", icon: <FaUsers />, link: "/dashboard/my-team" },
    { id: 8, text: "Advert", icon: <FaAd />, link: "/dashboard/advert" },
    {
      id: 9,
      text: "Affiliate History",
      icon: <FaHistory />,
      link: "/dashboard/affiliate-history",
    },
    {
      id: 10,
      text: "Change Password",
      icon: <FaLock />,
      link: "/dashboard/change-password",
    },
  ];

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: "#011945",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 0",
      }}
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <LogoWrapper>
        <Image src={Logo} alt="Logo" width={200} height={50} />
      </LogoWrapper>
      <hr
        style={{
          border: "2px solid #00c4f4",
          height: "1px",
          margin: "5px 0",
        }}
      />
      <List style={{ margin: ".4rem 1.5rem" }}>
        {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <NavItem isActive={router.pathname === item.link}>
              {item.icon}
              {item.text}
            </NavItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Flex
        gap="5rem"
        justify="space-between"
        align="center"
        padding="1rem 1.5rem"
        styles={{
          display: isMobile ? "flex" : "none",
          borderBottom: "1px solid",
          // position: "fixed",
          top: "0",
          zIndex: "99999",
          background: "#011945",
        }}
      >
        <ToggleLeft onClick={toggleDrawer(true)}>
          <HiMiniBars3BottomLeft size={34} style={{ marginTop: "1.8rem" }} />
        </ToggleLeft>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="User Profile"
              height={50}
              width={50}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #00c4f4",
              }}
            />
          </DropdownButton>
          {dropdownVisible && (
            <DropdownMenu>
              <li onClick={() => handleOptionClick("profile")}>
                Account Settings
              </li>
              <li onClick={() => handleOptionClick("logout")}>Logout</li>
            </DropdownMenu>
          )}
        </DropdownContainer>
      </Flex>

      {/* MUI Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
