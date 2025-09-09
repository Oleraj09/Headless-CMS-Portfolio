const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#f8f8f8] text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500 underline">Go to Home</a>
    </div>
  );
};

export default NotFound;
