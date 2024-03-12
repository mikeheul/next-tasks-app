# Next Tasks App

## Instructions 

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







