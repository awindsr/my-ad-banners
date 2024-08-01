"use client";
import React from "react";

export default function Header() {
  return (
    <div className="w-screen h-[5vw] bg-white p-4 font-poppins shadow-lg flex items-center">
      <div >
        <h1 className="text-2xl text-left text-black t">BannerGen.</h1>
        <p className="text-sm text-left text-black">
          Create and manage your ad banners
        </p>
      </div>
    </div>
  );
}
