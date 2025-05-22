# DIBK design

Shared components for DIBK applications

## How To Run Locally

```bash
$ pnpm install
$ pnpm run build
$ pnpm run storybook
```

## Use with Next.js

1. Create a client-based Provider for the ThemeProvider:

```jsx
'use client';
import React from 'react';
import { ThemeProvider } from 'dibk-design';

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) => {
  return <ThemeProvider injectToBody>{children}</ThemeProvider>;
};

export default Providers;
```

2. Import the Provider to your RootLayout

```jsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

3. Import component from the library into your client pages

```jsx
"use client"
import React from 'react'
import { Button } from 'dibk-design'

const Home = () => {
  return (
    <main>
      <Button onClick={()=>{void}} size="small" color="primary" content="Button">
          I'm a button
      </Button>
    </div>
  )
}

export default Home
```
