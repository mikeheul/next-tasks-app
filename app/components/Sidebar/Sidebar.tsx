"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider"

const Sidebar = () => {

  const context = useGlobalState();

  return (
    <SidebarStyled>Sidebar</SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
    
`;

export default Sidebar