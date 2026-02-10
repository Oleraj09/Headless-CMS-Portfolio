import Lottie from "lottie-react";
import LoadingImg from "../assets/WebDevelopment.json"; 

const Loader = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-[#fff] z-[100000000000] flex flex-col justify-center items-center">
      <Lottie animationData={LoadingImg} loop autoplay />
      <p className="text-white mt-4">Loading...</p>
    </div>
  );
};

export default Loader;
