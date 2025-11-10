'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  };

  const handleContinue = () => {
    if (preview) {
      onImageUpload(preview);
    }
  };

  const handleReset = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Upload Your Photo
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Choose a clear portrait photo for the best results
        </p>

        {!preview ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-4 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-amber-500 bg-amber-50'
                : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50/50'
            }`}
          >
            <div className="flex flex-col items-center">
              <svg
                className="w-20 h-20 text-amber-500 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700 mb-2">
                {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
              </p>
              <p className="text-gray-500 mb-4">or</p>
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
                Browse Files
              </button>
              <p className="text-sm text-gray-400 mt-4">
                Supports: JPG, PNG, WEBP (Max 10MB)
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden bg-gray-100">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto max-h-96 object-contain mx-auto"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Choose Different Photo
              </button>
              <button
                onClick={handleContinue}
                className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
              >
                Continue to Dress Selection
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6">
        <h3 className="font-semibold text-gray-800 mb-3">Tips for best results:</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            Use a clear, well-lit portrait photo
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            Face the camera directly for better dress fitting
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 mr-2">•</span>
            Avoid busy backgrounds for cleaner results
          </li>
        </ul>
      </div>
    </div>
  );
}
