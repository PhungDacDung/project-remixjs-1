import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Navbar from "./components/Navbar";
import 'flowbite';
import { ThemeProvider } from "./contexts/ThemeContext";
import { useContext } from "react"
import { ThemeContext, useTheme } from "~/contexts/ThemeContext"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];



/* function Layout({ children }: { children: React.ReactNode }) {

  // const {theme} = useContext(ThemeContext);
  const { theme } = useTheme();

  
  return (
   
      <html lang="en" className={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body >
          <Navbar />
          {children}
          <ScrollRestoration />
          <Scripts />
          <script src="/scripts/flowbite.js" defer></script>
          <script src="/scripts/theme.js" defer></script>
        </body>
      </html>
    
  );
} */

function Layout({ children }: { children: React.ReactNode }) {

  // const {theme} = useContext(ThemeContext);
  const { theme } = useTheme();
  console.log(theme);
  
  const theme1 = "dark"

  return (
   
      <html lang="en" className={theme}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body >
          <Navbar />
          {children}
          <ScrollRestoration />
          <Scripts />
          <script src="/scripts/flowbite.js" defer></script>
          <script src="/scripts/theme.js" defer></script>
        </body>
      </html>
   
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}
