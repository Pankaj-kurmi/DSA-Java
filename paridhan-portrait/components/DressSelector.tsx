'use client';

import { useState } from 'react';

interface DressSelectorProps {
  onDressSelect: (dressUrl: string) => void;
}

interface TribalDress {
  id: string;
  name: string;
  tribe: string;
  region: string;
  description: string;
  color: string;
  pattern: string;
}

const tribalDresses: TribalDress[] = [
  {
    id: 'gond',
    name: 'Gond Traditional',
    tribe: 'Gond',
    region: 'Madhya Pradesh & Chhattisgarh',
    description: 'Vibrant red and black patterns with geometric designs',
    color: 'from-red-600 to-black',
    pattern: 'geometric'
  },
  {
    id: 'bhil',
    name: 'Bhil Attire',
    tribe: 'Bhil',
    region: 'Rajasthan & Gujarat',
    description: 'Colorful embroidered dress with mirror work',
    color: 'from-yellow-500 to-red-500',
    pattern: 'embroidered'
  },
  {
    id: 'santhal',
    name: 'Santhal Dress',
    tribe: 'Santhal',
    region: 'Jharkhand & West Bengal',
    description: 'White saree with red border and traditional jewelry',
    color: 'from-white to-red-600',
    pattern: 'bordered'
  },
  {
    id: 'warli',
    name: 'Warli Traditional',
    tribe: 'Warli',
    region: 'Maharashtra',
    description: 'Simple cotton dress with distinctive Warli art motifs',
    color: 'from-amber-100 to-amber-600',
    pattern: 'tribal-art'
  },
  {
    id: 'naga',
    name: 'Naga Shawl',
    tribe: 'Naga',
    region: 'Nagaland',
    description: 'Bold striped shawl with traditional warrior patterns',
    color: 'from-red-700 to-black',
    pattern: 'striped'
  },
  {
    id: 'khasi',
    name: 'Khasi Jainsem',
    tribe: 'Khasi',
    region: 'Meghalaya',
    description: 'Elegant silk dress with golden borders',
    color: 'from-purple-600 to-yellow-500',
    pattern: 'silk'
  },
  {
    id: 'mizo',
    name: 'Mizo Puan',
    tribe: 'Mizo',
    region: 'Mizoram',
    description: 'Handwoven dress with intricate patterns',
    color: 'from-green-600 to-red-600',
    pattern: 'woven'
  },
  {
    id: 'bodo',
    name: 'Bodo Dokhona',
    tribe: 'Bodo',
    region: 'Assam',
    description: 'Traditional wrap-around dress with colorful designs',
    color: 'from-blue-600 to-green-600',
    pattern: 'wrap'
  }
];

export default function DressSelector({ onDressSelect }: DressSelectorProps) {
  const [selectedDress, setSelectedDress] = useState<string | null>(null);

  const handleSelect = (dress: TribalDress) => {
    setSelectedDress(dress.id);
  };

  const handleContinue = () => {
    if (selectedDress) {
      onDressSelect(selectedDress);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Choose a Tribal Dress
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Select from authentic traditional dresses of various tribal communities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {tribalDresses.map((dress) => (
            <div
              key={dress.id}
              onClick={() => handleSelect(dress)}
              className={`cursor-pointer rounded-xl overflow-hidden transition-all transform hover:scale-105 ${
                selectedDress === dress.id
                  ? 'ring-4 ring-amber-500 shadow-2xl'
                  : 'hover:shadow-xl'
              }`}
            >
              <div className={`h-48 bg-gradient-to-br ${dress.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="text-6xl mb-2">👗</div>
                    <p className="text-sm font-medium opacity-90">{dress.pattern}</p>
                  </div>
                </div>
                {selectedDress === dress.id && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white rounded-full p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="bg-white p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-1">{dress.name}</h3>
                <p className="text-sm text-amber-600 font-medium mb-2">{dress.tribe} Tribe</p>
                <p className="text-xs text-gray-500 mb-2">{dress.region}</p>
                <p className="text-sm text-gray-600">{dress.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedDress && (
          <div className="flex justify-center">
            <button
              onClick={handleContinue}
              className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors text-lg"
            >
              Continue to Preview
            </button>
          </div>
        )}
      </div>

      {/* Cultural Note */}
      <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6">
        <h3 className="font-semibold text-gray-800 mb-3">About Tribal Dresses:</h3>
        <p className="text-gray-600 leading-relaxed">
          Each tribal dress represents centuries of cultural heritage, craftsmanship, and identity. 
          These traditional attires are not just clothing but symbols of community, celebration, and 
          artistic expression. We honor and celebrate the rich diversity of India's tribal communities 
          through this virtual experience.
        </p>
      </div>
    </div>
  );
}
