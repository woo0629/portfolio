import Link from "next/link";

const HomePage = () => {
  return (
    <div className="relative bg-[url('/image/homebackgroundimage.jpg')] bg-cover bg-center px-8 lg:px-0">
      <div className="flex flex-col items-center min-h-screen mx-auto max-w-5xl text-white">
        <div className="pt-40 text-center">
          <p className="mt-4 text-3xl font-bold ">
            도전을 두려워 하지 않는 개발자
          </p>
          <p className="mt-4 text-lg text-center  max-w-md text-gray-300">
            실패를 두려워하지 않고, 매 순간 배움의 기회로 삼아 성장하는 개발자가
            되겠습니다.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="mt-10 inline-block mr-7 bg-black border border-white text-white py-2 px-4 rounded-2xl hover:text-blue-400 hover:border-blue-400 "
            >
              About me
            </Link>
            <Link
              href="/project"
              className="mt-10 inline-block bg-black border border-white text-white py-2 px-4 rounded-2xl hover:text-blue-400 hover:border-blue-400"
            >
              Web Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
