"use client";

import React, { useState } from 'react';

interface EditBannerProps {
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;

  };
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
  ctaButtonStyle: string;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose, ctaButtonStyle  }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  // const [background, setBackground] = useState(banner.background);


  const handleSave = () => {
    onSave({ title, description, cta, image  });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 p-4 flex items-center justify-center h-full text-black">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full max-h-[1/2] overflow-y-auto">
        {/* Live Preview */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Live Preview</h2>
          <div className="relative rounded overflow-hidden bg-gray-100" style={{ height: '200px' }}>
            <img src={image} alt={title} className="w-full h-full object-fill"  />
            <div className="absolute inset-0 flex flex-col justify-end items-start text-white p-4  bg-black bg-opacity-20 ">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-center mb-2">{description}</p>
              <button className={ctaButtonStyle}>{cta}</button>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <h2 className="text-xl font-bold mb-4">Edit Banner</h2>
        <label className="block mb-2">
          <span className="text-gray-500">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mt-1 p-2 border rounded text-black"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-500">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full mt-1 p-2 border rounded text-black"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-500">CTA</span>
          <input
            type="text"
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            className="block w-full mt-1 p-2 border rounded text-black"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-500">Image URL</span>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="block w-full mt-1 p-2 border rounded text-black"
          />
        </label>
       
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
