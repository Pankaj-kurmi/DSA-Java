'use client';

import { useState } from 'react';
import ImageEditor from '@/components/ImageEditor';

export default function DemoPage() {
  const [selectedDress, setSelectedDress] = useState('gond');
  
  const dresses = ['gond', 'bhil', 'santhal', 'warli', 'naga', 'khasi', 'mizo', 'bodo'];

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
          Paridhan Portrait - Demo
        </h1>
        
        <div className="mb-6 flex justify-center gap-2 flex-wrap">
          {dresses.map((dress) => (
            <button
              key={dress}
              onClick={() => setSelectedDress(dress)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedDress === dress
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {dress.charAt(0).toUpperCase() + dress.slice(1)}
            </button>
          ))}
        </div>

        <ImageEditor
          userImage="/test-portrait.svg"
          dressImage={selectedDress}
          onBack={() => {}}
        />
      </div>
    </main>
  );
}
