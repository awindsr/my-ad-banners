"use client";

import React, { useState, useEffect } from 'react';
import EditBannerTemplateBs from './EditBannerTemplateBs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

interface AdBannerProps {
  banner: {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
  };
  onUpdate: (updatedBanner: any) => void;
}

const buttonStyles = [
  "px-4 py-2 bg-blue-500 text-white rounded font-medium",
  "px-4 py-2 bg-yellow-500 text-white rounded font-medium",
  "px-4 py-2 border-2 border-yellow-500 text-white rounded font-medium",
  "px-4 py-2 bg-green-500 text-white rounded font-medium",
  "px-4 py-2 bg-red-500 text-white rounded font-medium"
];

const editButtonStyles = [
  "",
  "absolute top-2 right-2 px-4 py-2 bg-purple-500 text-white  rounded",
  "absolute top-2 right-2 px-4 py-2 bg-orange-500 text-white rounded"
];

const BannerImageComp: React.FC<AdBannerProps> = ({ banner, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(buttonStyles[0]);
  const [editButtonStyle, setEditButtonStyle] = useState(editButtonStyles[0]);

  useEffect(() => {
    setButtonStyle(buttonStyles[Math.floor(Math.random() * buttonStyles.length)]);
    setEditButtonStyle(editButtonStyles[Math.floor(Math.random() * editButtonStyles.length)]);
  }, []);

  const handleSave = (updatedBanner: any) => {
    onUpdate(updatedBanner);
    setIsEditing(false);
  };

  return (
    <div className="relative rounded shadow-md overflow-hidden">
      <img src={banner.image} alt={banner.title} className="w-full h-60 object-fill" />
      <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-4 bg-black bg-opacity-20 ">
        <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
        <p className="text-center mb-2">{banner.description}</p>
        <button className={buttonStyle}>{banner.cta}</button>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-black bg-opacity-40 absolute top-2 right-2 px-4 py-2  text-white rounded"
        >
          <FontAwesomeIcon icon={faEdit} className='text-white '/>
        </button>
      </div>
      {isEditing && (
        <EditBannerTemplateBs
          banner={banner}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default BannerImageComp;
