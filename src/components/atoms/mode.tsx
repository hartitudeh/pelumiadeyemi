"use client";

import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { WiDaySunny } from "react-icons/wi";
import { MdNightlightRound } from "react-icons/md";

// import { lightTheme, darkTheme } from "@/theme";

// Global Styles with Correct Typing
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease;
  }
`;

// Styled button with theme
const ToggleButton = styled.button`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  position: relative;
  top: -23px;
  left: 90px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Toggler: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToggleButton onClick={toggleTheme}>
        {theme === darkTheme ? <WiDaySunny size={20} /> : <MdNightlightRound size={20} />}
      </ToggleButton>
    </ThemeProvider>
  );
};

export default Toggler;
