import Lottie from "lottie-react";
import LoadingImg from "../assets/WebDevelopment.json"; 

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-white-500">
      <Lottie animationData={LoadingImg} loop autoplay />
      <p className="text-white mt-4">Loading...</p>
    </div>
  );
};

export default Loader;
