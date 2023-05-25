"use client";
import "./globals.css";
import { Pathway_Extreme } from "next/font/google";
import { ColorModeContext, useMode } from "@/components/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "@/components/Sidebar";
import { Box } from "@mui/material";
import TopBar from "@/components/TopBar";
const pathwayExtreme = Pathway_Extreme({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  return (
    <html lang="en">
      <body
        className={pathwayExtreme.className}
        suppressHydrationWarning={true}
      >
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProSidebarProvider>
              <div className="flex relative">
                <SideBar />
                <main className="h-full w-full">
                  <TopBar />
                  {children}
                </main>
              </div>
            </ProSidebarProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
