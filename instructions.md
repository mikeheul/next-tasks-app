# Next Tasks App

## Instructions 

- Install vscode-styled-components

- Create a new project (TypeScript, TailWindCSS and App Router)
``` properties
npx create-next-app@latest next-tasks-app
```

- Test your project with
``` properties
npm run dev
```

- In app/page.tsx, delete all content between <main> tags and in app/globals.css :

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  background-color: #181818;
  font-size: 17px;
  color: #fff;
  height: 100vh;
}
```

- Install styled-components dependencies
``` properties
npm i styled-components
```

- In app folder, create a "components" folder with 2 sub folders : Button and Sidebar with rafce (React component) inside it (Button.tsx and Sidebar.tsx)
    - "use client" is used to declare a boundary between a Server and Client Component modules. This means that by defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.

``` javascript
"use client"
import React from 'react'

const Button = () => {
  return (
    <div>Button</div>
  )
}

export default Button

"use client"
import React from 'react'

const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar
```

- In layout.tsx, include Sidebar component
``` javascript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
```

- In page.tsx, include Content part
``` javascript
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Content</h1>
    </main>
  );
}
```

- In a "providers" fold (in app folder), create a new "GlobalStyleProvider.tsx" file

``` javascript
"use client"

import React from 'react';
import styled from "styled-components"

interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
    return <GlobalStyles>{children}</GlobalStyles>
}

const GlobalStyles = styled.div`
    padding: 2.5rem;
    display: flex;
    gap: 2.5rem;
    height: 100%;
`;

export default GlobalStyleProvider
```

- And in layout.tsx
``` javascript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyleProvider>
          <Sidebar />
          {children}
        </GlobalStyleProvider>
      </body>
    </html>
  );
}
```

- Create a new app/ folder "context" with "themes.js" file
``` javascript
const themes = [
  {
    name: "default",
    colorBg: "#252525",
    colorBg2: "#212121",
    colorBg3: "#181818",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorFontPrimary: "#e5e7eb",
    colorTextSecondary: "#B0B3B8",
    colorTextPrimary: "#FFFFFF",
    colorTextLight: "#f8f8f8",
    colorbackground: "#FBFBFD",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    activeNavLink: "rgba(249,249,249, 0.08)",
    activeNavLinkHover: "rgba(249,249,249, 0.03)",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorGreyDark: "#131313",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorWhite: "#fff",
    colorPrimaryGreen: "#6FCF97",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    shadow7: "1px 7px 12px rgba(8, 18, 69, 0.1)",
    sidebarWidth: "15rem",
    sidebarCollapsed: "5.4rem",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    padLRSm: "0 2rem",
    colorIcons: "rgba(249,249,249, 0.35)",
    colorIcons2: "rgba(249,249,249, 0.75)",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    marLRSm: "0 1rem",
  },
  {
    name: "light",
    colorBg: "#fff",
    colorBg2: "#F9F9F9",
    colorBg3: "#EDEDED",
    colorBg4: "#1A1A1A",
    colorButton: "#3A3B3C",
    colorDanger: "#fe6854",
    colorTextSecondary: "#B0B3B8",
    colorFontPrimary: "#6c7983",
    colorTextPrimary: "#FFFFFF",
    colorTextLight: "#f8f8f8",
    colorbackground: "#FBFBFD",
    colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
    colorGreenDark: "#27AE60",
    colorGreenLight: "#dbe1e8",
    activeNavLink: "rgba(230,230,230, .87)",
    activeNavLinkHover: "#C5C5C5",
    colorPrimary: "#7263F3",
    colorPrimary2: "#705DF2",
    colorGreyDark: "#131313",
    colorGrey0: "#f8f8f8",
    colorGrey1: "#dbe1e8",
    colorGrey2: "#b2becd",
    colorGrey3: "#6c7983",
    colorGrey4: "#454e56",
    colorGrey5: "#2a2e35",
    colorGrey6: "#12181b",
    colorWhite: "#fff",
    buttonGradient1:
      "linear-gradient(110.42deg, rgba(107, 190, 146, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient2:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient3:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient4:
      "linear-gradient(110.42deg, rgba(168, 85, 247, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
    buttonGradient5:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient6:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient7:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    buttonGradient8:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient9:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    buttonGradient10:
      "linear-gradient(110.42deg, rgba(235, 87, 87, 0.7) 29.2%, rgba(189, 68, 166, 0.7) 53.82%, rgba(247, 85, 143, 0.1) 63.56%)",
    buttonGradient11:
      "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
    buttonGradient12:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
    buttonGradient13:
      "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(99, 3, 255, 0.7) 63.56%)",
    buttonGradient14:
      "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
    borderRadiusMd: "12px",
    borderRadiusMd2: "15px",
    borderRadiusSm: "8px",
    borderColor: "rgba(249,249,249, 0.08)",
    borderColor2: "rgba(249,249,249, 0.08)",
    shadow1: "4px 4px 84px rgba(16, 10, 86, 0.04)",
    shadow2: "0px 48px 77px rgba(8, 18, 69, 0.07)",
    shadow3: "0 14px 40px rgb(0 0 0 / 25%)",
    shadow7: "0px 48px 77px rgba(8, 18, 69, 0.16)",
    shadow5: "0px 4px 0px rgba(249,249,249, 0.35)",
    shadow6:
      "0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",
    sidebarWidth: "15rem",
    sidebarCollapsed: "5.4rem",
    fH4: "19px",
    fontSmall: "14px",
    fontSmall2: "15px",
    gridGap: "2rem",
    padLRSm: "0 2rem",
    colorIcons: "#999999",
    colorIcons2: "#181818",
    colorIcons3: "rgba(249,249,249, 0.08)",
    colorIcons4: "rgba(0,0,0, 0.3)",
    marLRSm: "0 1rem",
  },
];
export default themes;
```

- In Sidebar component
``` javascript
"use client";
import React from 'react'
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarStyled>Sidebar</SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
    
`;

export default Sidebar
```

- In "context" folder, "globalProvider.js" file

``` javascript
"use client";
import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

    return (
        <GlobalContext.Provider value={{
            theme, 
        }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
}
```

- In "providers" folder, "ContextProvider.tsx" file
``` javascript
"use client";
import React from 'react'
import { GlobalProvider } from '../context/globalProvider';

interface Props {
    children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {

  const [isReady, setIsReady] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
        setIsReady(true);
    }, 200);
  }, []);

  if(!isReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>
}

export default ContextProvider
```

- In layout.tsx
``` javascript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar />
            {children}
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
```

- In globalProvider.js, add this at the end :
``` javascript
export const useGlobalState = () => useContext(GlobalContext)
export const useGlobalUpdate = () => useContext(GlobalUpdateContext)
```

- In Sidebar component
``` javascript
"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider"

const Sidebar = () => {

  const { theme } = useGlobalState();

  return (
    <SidebarStyled>Sidebar</SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
`;

export default Sidebar
```

- Create a "utils" folder in app/ and menu.js to list all menu items for SideBar component 

``` javascript
import { list, check, todo, home } from "./Icons";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: todo,
    link: "/incomplete",
  },
];

export default menu;
```

- Icons.js in "utils" folder
``` javascript
export const bars = <i className="fa-solid fa-bars fa-beat"></i>;
export const arrowLeft = <i className="fa-solid fa-arrow-left fa-beat"></i>;

export const add = <i className="fa-solid fa-plus"></i>;
export const moon = <i className="fa-solid fa-moon"></i>;
export const search = <i className="fa-solid fa-magnifying-glass"></i>;
export const bell = <i className="fa-solid fa-bell"></i>;
export const home = <i className="fa-solid fa-house"></i>;
export const list = <i className="fa-solid fa-list-check"></i>;
export const check = <i className="fa-solid fa-check"></i>;
export const help = <i className="fa-solid fa-circle-info"></i>;
export const gear = <i className="fa-solid fa-gear"></i>;
export const login = <i className="fa-solid fa-right-to-bracket"></i>;
export const logout = <i className="fa-solid fa-right-from-bracket"></i>;
export const user = <i className="fa-solid fa-user"></i>;
export const join = <i className="fa-solid fa-user-plus"></i>;
export const heart = <i className="fa-solid fa-heart"></i>;
export const edit = <i className="fa-solid fa-file-pen"></i>;
export const users = <i className="fa-solid fa-user-group"></i>;
export const todo = <i className="fa-solid fa-clipboard-list"></i>;
export const down = <i className="fa-solid fa-caret-down"></i>;
export const trash = <i className="fa-solid fa-trash"></i>;
export const admin = <i className="fa-solid fa-lock"></i>;
export const linked = <i className="fa-brands fa-linkedin"></i>;
export const mailIcon = <i className="fa-solid fa-envelope"></i>;
export const plus = <i className="fa-solid fa-plus fa-beat-fade"></i>;
```

- Add Fontawesome CDN in layout.tsx
``` javascript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
        crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar />
            {children}
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
```

- Update SideBar style (cf Sidebar component)













