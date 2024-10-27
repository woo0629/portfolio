"use client";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Banner from "@components/Banner";
import "./globals.css"; // CSS 파일 경로
import { usePathname } from "next/navigation";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <html lang="en">
      <body>
        <div>
          <div>
            <Navbar pathname={pathname} />
            {pathname !== "/" && <Banner pathname={pathname} />}
          </div>
        </div>
        <main className=" ">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
