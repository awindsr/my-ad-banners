// pages/index.tsx or wherever your parent component is

"use client";


import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import ads from '../data/ads.json';
import Header from '../components/Header';

const Home: React.FC = () => {
  const [bannerData, setBannerData] = useState(ads);

  const handleUpdateBanner = (updatedBanner: any) => {
    setBannerData((prevData) =>
      prevData.map((banner) =>
        banner.id === updatedBanner.id ? updatedBanner : banner
      )
    );
  };

  return (
    <div>
      <Header/>
  
    <div className="grid grid-cols-2 gap-4 p-8 bg-[#eff3f4]">
      {bannerData.map((banner) => (
        <BannerImageComp
          key={banner.id}
          banner={banner}
          onUpdate={handleUpdateBanner}
        />
      ))}
    </div>
    </div>
  );
};

export default Home;
