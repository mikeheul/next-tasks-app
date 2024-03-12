"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider"

const Sidebar = () => {

  const { theme } = useGlobalState();

  return (
    <SidebarStyled theme={ theme }>Sidebar</SidebarStyled>
  )
}

// props.theme.sidebarWidth from themes.js
const SidebarStyled = styled.nav`
    width: ${(props) => props.theme.sidebarWidth}
`;

export default Sidebar