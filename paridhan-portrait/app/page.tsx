'use client';

import { useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import DressSelector from '@/components/DressSelector';
import ImageEditor from '@/components/ImageEditor';

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedDress, setSelectedDress] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setStep(2);
  };

  const handleDressSelect = (dressUrl: string) => {
    setSelectedDress(dressUrl);
    setStep(3);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setSelectedDress(null);
    setStep(1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Paridhan Portrait
              </h1>
              <p className="text-gray-600 mt-1">Experience the beauty of tribal heritage</p>
            </div>
            {step > 1 && (
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center ${step >= 1 ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 1 ? 'bg-amber-600 text-white' : 'bg-gray-200'
            }`}>
              1
            </div>
            <span className="ml-2 font-medium hidden sm:inline">Upload Photo</span>
          </div>
          <div className="w-16 h-1 bg-gray-300">
            <div className={`h-full transition-all ${step >= 2 ? 'bg-amber-600 w-full' : 'w-0'}`}></div>
          </div>
          <div className={`flex items-center ${step >= 2 ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 2 ? 'bg-amber-600 text-white' : 'bg-gray-200'
            }`}>
              2
            </div>
            <span className="ml-2 font-medium hidden sm:inline">Select Dress</span>
          </div>
          <div className="w-16 h-1 bg-gray-300">
            <div className={`h-full transition-all ${step >= 3 ? 'bg-amber-600 w-full' : 'w-0'}`}></div>
          </div>
          <div className={`flex items-center ${step >= 3 ? 'text-amber-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= 3 ? 'bg-amber-600 text-white' : 'bg-gray-200'
            }`}>
              3
            </div>
            <span className="ml-2 font-medium hidden sm:inline">Download</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {step === 1 && <ImageUploader onImageUpload={handleImageUpload} />}
        {step === 2 && <DressSelector onDressSelect={handleDressSelect} />}
        {step === 3 && uploadedImage && selectedDress && (
          <ImageEditor 
            userImage={uploadedImage} 
            dressImage={selectedDress}
            onBack={() => setStep(2)}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-amber-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          <p>Celebrating the rich cultural heritage of tribal communities</p>
        </div>
      </footer>
    </main>
  );
}
