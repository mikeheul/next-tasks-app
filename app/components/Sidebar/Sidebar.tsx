"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider"
import Image from 'next/image';

import menu from "@/app/utils/menu"
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = () => {

  const { theme } = useGlobalState();

  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (link:string) => {
    router.push(link)
  };

  return (
    <SidebarStyled theme={ theme }>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src="/avatar1.png" alt="profile" />
        </div>
        <h1>
          <span>My</span>
          <span>User</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {

          const link = item.link;

          return (
            <li 
              className={`nav-item ${ pathName === link ? "active" : "" }`} 
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  )
}

// props.theme.sidebarWidth from themes.js
const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${(props) => props.theme.colorGrey3};

    .profile {
      margin: 1.5rem;
      padding: 1rem 0.8rem;
      position: relative;
      border-radius: 1rem;
      cursor: pointer;
      font-weight: 500;
      color: ${(props) => props.theme.colorGrey0};
      display: flex;
      align-items: center;
    }

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all 0.55s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};
      opacity: 0.2;
    }
`;

export default Sidebar