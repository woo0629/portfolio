// src/app/layout.tsx
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
        {/* <div className="relative bg-[url('/image/HomeBackGroundImage.jpg')] bg-cover bg-center" > */}
        <div>
          <div>
            <Navbar pathname={pathname} />
            {/* 현재 경로가 홈("/")일 때 Page 컴포넌트 호출 안함 */}
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
