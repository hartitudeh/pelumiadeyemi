import React from 'react';
import styled from 'styled-components';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaWallet, FaGamepad, FaSignal } from 'react-icons/fa';
import { useScreenResolution } from './useScreenResolution';
import Link from './link';

const BottomNavbar = () => {
  const { isMobile } = useScreenResolution();

  return (
    <Navbar style={{display: isMobile ? "flex" : "none"}}>
      <Link href='/dashboard'>
      <NavItem>
        <AiOutlineDashboard />
        <span>Dashboard</span>
      </NavItem>
      </Link>
      <Link href='/dashboard/signals'>
      <NavItem>
        <FaSignal />
        <span>Signal</span>
      </NavItem>
      </Link>
      <Link href='/dashboard/advert'>
      <NavItem>
        <FaWallet />
        <span>Task</span>
      </NavItem>
      </Link>
      <Link href='/dashboard/games'>
      <NavItem>
        <FaGamepad />
        <span>Games</span>
      </NavItem>
      </Link>
    </Navbar>
  );
};

export default BottomNavbar;

// Styled Components
const Navbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 5rem;
  background-color: #00c4f4;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid #011945;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  z-index: 999999999999999999;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #011945;
  font-size: 14px;
  cursor: pointer;

  svg {
    font-size: 20px;
    margin-bottom: 4px;
  }

  &:hover {
    color: #fff;
  }
`;
