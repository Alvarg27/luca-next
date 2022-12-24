import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed w-full h-screen z-[10] bg-white flex justify-center items-center">
      <div className="bg-teal-100 w-[300px] h-[300px] rounded-full flex justify-center items-center animate-pulse">
        <div className="bg-teal-200 w-[250px] h-[250px] rounded-full flex justify-center items-center">
          <div className="bg-teal-400 w-[200px] h-[200px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
