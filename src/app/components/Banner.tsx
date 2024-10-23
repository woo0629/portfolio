interface BannerProps {
  pathname: string;
}
const Banner: React.FC<BannerProps> = ({ pathname }) => {
  const getBannerText = () => {
    if (pathname.startsWith("/project/")) {
      return "Project";
    }
    switch (pathname) {
      case "/about":
        return "About";
      case "/project":
        return "Project";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };
  return (
    <div className="relative bg-[url('/image/homebackgroundimage.jpg')] bg-no-repeat bg-cover bg-[50%_55%] h-96 lg:h-144 w-full px-8 lg:px-0">
      <div className="flex flex-col  h-full mx-auto max-w-5xl  justify-center pt-12 lg:pt-0">
        <p className=" text-3xl md:text-5xl lg:text-7xl font-bold text-white">
          {/* <div className="flex flex-col  h-full  max-w-5xl ">
        <p className="flex justify-center text-start my-auto text-3xl md:text-5xl lg:text-7xl font-bold text-white"> */}
          {getBannerText()}
        </p>
      </div>
    </div>
  );
};

export default Banner;
