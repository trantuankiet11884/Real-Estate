import React from "react";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="w-full h-fit relative">
        <img src="/bannerHome.png " alt="banner" />
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
          <h1 className="text-4xl text-white">Find Your Dream Home</h1>
          <span className="text-white text-md flex flex-col justify-center items-center">
            <span>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </span>
            <span>Proin sodales ultrices nulla blandit volutpat.</span>
          </span>
        </div>
      </div>
      <div className="w-full">Content</div>
    </div>
  );
}
