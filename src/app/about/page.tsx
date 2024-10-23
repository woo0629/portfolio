// app/about/page.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-customBlue">
      <div className="flex flex-col lg:flex-row min-h-screen mx-auto max-w-5xl text-white px-10 lg:px-0 ">
        <div className=" w-full lg:w-80 h-fit rounded-2xl lg:sticky lg:top-20 bg-customBlue shadow-lg shadow-slate-700/40 flex-shrink-0 flex flex-col items-center justify-center p-10 mt-10">
          <div className="w-28 h-28 rounded-full overflow-hidden border-customBlueAbout border-4 mb-5">
            <Image
              src="/image/myphoto1.png"
              alt="myPhoto1"
              width={200}
              height={200}
            />
          </div>
          <p className="font-bold text-2xl pb-3 text-center">Jeong, Jae Woo</p>
          <p className="font-bold text-base pb-3 text-center">
            경기도 안양시 만안구
          </p>
          <p className="text-base pb-3 text-center">Front-End Developer</p>
        </div>
        <div className=" ml-0 lg:ml-10  rounded-2xl   mt-10 lg:mt-0">
          <div className="p-8 lg:p-14 flex justify-start flex-col bg-customBlue shadow-lg shadow-slate-700/40  lg:text-left rounded-2xl mt-10">
            <div className="flex text-2xl pb-6 ">Skill</div>
            <div className="pb-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                React.js
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3 ">
                useState와 useEffect를 사용하여 상태 관리 및 사이드 이펙트를
                처리하고 컴포넌트 상태를 동적으로 관리할 수 있습니다.
              </li>
              <li className="mb-3 ml-3 ">
                fetch API를 통해 백엔드와 통신하며, 토큰 검증 및 사용자 데이터
                처리 경험이 있습니다.
              </li>
              <li className="mb-3 ml-3 ">
                localStorage를 사용하여 자동 로그아웃 기능을 구현하였습니다.
              </li>
              <li className="mb-3 ml-3">
                React-Bootstap을 사용하여 커스터마이징을 해본 경험이 있습니다.
              </li>
              <li className="mb-3 ml-3">
                공공데이터를 사용하여 웹개발을 해본 경험이 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Next.js
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3 ">
                SSR 및 SSG 개발을 해본 경험이 있습니다.
              </li>
              <li className="mb-3 ml-3 ">
                페이지 기반 라우팅 / 데이터 패칭을 위한 API Routes / 최적화된
                이미지 로딩을 해본 경험이 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                JavaScript
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                JavaScript 기본 문법, 자료형, 함수, 배열 및 객체 조작등 기본
                개념을 알 고 있습니다.
              </li>
              <li className="mb-3 ml-3">
                비동기 처리방식 및 API 호출에 대한 이해를 하고 있습니다.
              </li>
              <li className="mb-3 ml-3">
                클로저, 프로토타입, ES6+ 문법 등 JavaScript 개념을 이해하며
                공부하고 있습니다.
              </li>
              <li className="mb-3 ml-3">
                React-Bootstap을 사용하여 커스터마이징을 해본 경험이 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                CSS
              </div>
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Tailwind CSS
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                미디어 쿼리를 활용하여 반응형 디자인을 해본 경험이 있습니다.
              </li>
              <li className="mb-3 ml-3">
                Grid와 Flexbox를 사용하여 요소들의 정렬과 배치를 이해하고 조정할
                수 있습니다.
              </li>
              <li className="mb-3 ml-3">
                Bootstrap, Tailwind와 같은 Css 프레임워크를 활용하여 스타일링을
                적용하고, 커스터마이징을 하여 디자인 할 수 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Node.js
              </div>
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Express.js
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                RESTful API를 설계하고, 다양한 HTTP메서드를 통해 클라이언트의
                요청을 라우팅 및 미들웨어 설정을 통해 데이터 흐름을 관리한
                경험이 있습니다
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                MongoDB
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                클라우드 기반 DB를 관리하고, 데이터를 저장 및 조회하는 경험이
                있습니다.
              </li>
            </ul>

            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                AWS
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                이미지와 파일을 저장하고, 웹 애플리케이션에서 업로드 및
                다운로드한 경험이 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                JWT
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                클라이언트와 서버 간의 인증 정보를 전달하기 위해 JWT를 사용한
                경험이있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Python
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                Selenium을 사용하여 웹 자동화 및 데이터 수집을 수행하며, 동적 웹
                페이지에서의 정보 추출 방법을 익혔습니다.
              </li>
              <li className="mb-3 ml-3">
                Flask로 서버를 구축하고 REST API를 설계하여, 클라이언트와 서버
                간의 데이터 전송을 경험하였습니다.
              </li>
              <li className="mb-3 ml-3">
                CORS 설정을 통해 다양한 출처의 클라이언트와 통신하는 방법을
                배웠습니다.
              </li>
              <li className="ml-3">
                Selenium을 통하여 웹사이트 상품 정보를 수집한 경험이 있습니다.
              </li>
            </ul>
            <div className="py-6">
              <div className="inline-flex text-sm font-bold text-gray-300 bg-customAboutBg rounded-lg px-2 mr-3">
                Distribute
              </div>
            </div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3">
                Cludtype을 활용하여 Node.js 기반의 서버와 React.js 클라이언트를
                배포한 경험이 있습니다.
              </li>
            </ul>
          </div>

          <div className="p-8 lg:p-14 flex justify-start flex-col bg-customBlue shadow-lg shadow-slate-700/40  lg:text-left rounded-2xl mt-10">
            <div className="flex text-2xl pb-6 "> Certificate</div>
            <div className="pb-3"></div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3 ">정보처리기사(필기)</li>
            </ul>
          </div>

          <div className="p-8 lg:p-14 flex justify-start flex-col bg-customBlue shadow-lg shadow-slate-700/40  lg:text-left rounded-2xl mt-10">
            <div className="flex text-2xl pb-6 "> Education</div>
            <div className="pb-3"></div>

            <ul className="text-gray-300 text-sm list-disc list-outside">
              <li className="mb-3 ml-3 ">
                멀티잇 프론트엔드 개발자 부트캠프(리액트&뷰)
              </li>
              <li className="mb-3 ml-3 ">전기전자공학 (졸업)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
