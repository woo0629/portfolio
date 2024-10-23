// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
interface NavbarProps {
  pathname: string;
}

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getPathname = pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 border-b border-b-slate-400 backdrop-blur bg-opacity-70  z-10 px-8 lg:px-0 ">
      <nav className="flex justify-between items-center py-4 mx-auto max-w-5xl ">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-blue-400"
        >
          JJW_Portfolio
        </Link>

        {/* 햄버거 메뉴 버튼 (작은 화면에서만 보이도록 설정) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-blue-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* 네비게이션 메뉴 (큰 화면에서만 보이도록 설정) */}
        <ul className="hidden lg:flex space-x-11 text-white">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* 모달 네비게이션 메뉴 (작은 화면에서 햄버거 버튼 클릭 시 표시) */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-950 bg-opacity-90 z-10">
          <div className="fixed right-0 flex flex-col items-center h-screen space-y-8 w-1/3 bg-gray-950">
            {/* 나가기 버튼 */}
            <button
              onClick={toggleMenu}
              bg-gray-950
              className="absolute top-7 right-8 text-white text-2xl hover:text-red-500 focus:outline-none"
            >
              &times;
            </button>

            <Link
              href="/"
              className={`text-xl hover:text-blue-400 ${getPathname === "/" ? "text-blue-400" : "text-white"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl hover:text-blue-400 ${getPathname === "/about" ? "text-blue-400" : "text-white"}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/project"
              className={`text-xl hover:text-blue-400 ${getPathname === "/project" ? "text-blue-400" : "text-white"}`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`text-xl hover:text-blue-400 ${getPathname === "/contact" ? "text-blue-400" : "text-white"}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
