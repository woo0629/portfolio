// Import the plugin from Tailwind CSS
import plugin from "tailwindcss/plugin";

const tailwindConfig = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 사용할 파일 경로
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0E1826",
        customBlueAbout: "rgba(221, 228, 240, 0.08)",
        customBorder: "rgba(255, 255, 255, 0.4)",
        customAboutBg: "rgba(38, 50, 67, 1)",
        customAboutx: "rgba(229, 229, 229, 0.71)",
        customFromBorder: "rgba(255, 2255, 255, 0.41)",
      },
      height: {
        128: "32rem", // 사용자 정의 높이 추가 (32rem = 512px)
        144: "36rem", // 사용자 정의 높이 추가 (36rem = 576px)
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".backdrop-blur-sm": {
          backdropFilter: "blur(4px)",
        },
        ".backdrop-blur": {
          backdropFilter: "blur(10px)",
        },
        // 필요한 다른 블러 효과 추가
      });
    }),
  ],
};

// Assigning the object to a variable before exporting
export default tailwindConfig;
