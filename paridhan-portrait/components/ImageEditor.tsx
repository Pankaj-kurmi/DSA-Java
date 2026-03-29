'use client';

import { useEffect, useRef, useState } from 'react';

interface ImageEditorProps {
  userImage: string;
  dressImage: string;
  onBack: () => void;
}

export default function ImageEditor({ userImage, dressImage, onBack }: ImageEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(0.8);
  const [scale, setScale] = useState(1);
  const [positionY, setPositionY] = useState(0);

  const dressOverlays: { [key: string]: { svg: string; name: string } } = {
    gond: {
      name: 'Gond Traditional',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gondPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#8B0000"/>
            <circle cx="20" cy="20" r="8" fill="#FFD700" stroke="#000" stroke-width="1"/>
            <path d="M10,10 L30,30 M30,10 L10,30" stroke="#FFD700" stroke-width="2"/>
          </pattern>
        </defs>
        <path d="M100,50 Q200,30 300,50 L320,400 Q200,450 80,400 Z" fill="url(#gondPattern)" stroke="#000" stroke-width="2"/>
        <ellipse cx="200" cy="80" rx="60" ry="40" fill="#8B0000" stroke="#FFD700" stroke-width="3"/>
      </svg>`
    },
    bhil: {
      name: 'Bhil Attire',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bhilPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="#FF6B35"/>
            <circle cx="15" cy="15" r="3" fill="#FFD700"/>
            <circle cx="5" cy="5" r="2" fill="#FFF" opacity="0.8"/>
            <circle cx="25" cy="25" r="2" fill="#FFF" opacity="0.8"/>
          </pattern>
        </defs>
        <path d="M90,60 Q200,40 310,60 L330,420 Q200,480 70,420 Z" fill="url(#bhilPattern)" stroke="#8B4513" stroke-width="2"/>
        <rect x="150" y="70" width="100" height="80" fill="#FFD700" stroke="#8B4513" stroke-width="2" rx="10"/>
        <circle cx="180" cy="100" r="8" fill="#FFF" stroke="#000" stroke-width="1"/>
        <circle cx="220" cy="100" r="8" fill="#FFF" stroke="#000" stroke-width="1"/>
      </svg>`
    },
    santhal: {
      name: 'Santhal Dress',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <path d="M80,80 L320,80 L340,450 Q200,500 60,450 Z" fill="#FFFAF0" stroke="#8B0000" stroke-width="4"/>
        <rect x="80" y="80" width="240" height="20" fill="#8B0000"/>
        <rect x="60" y="440" width="280" height="30" fill="#8B0000"/>
        <path d="M100,120 Q200,110 300,120" stroke="#8B0000" stroke-width="2" fill="none"/>
        <path d="M100,160 Q200,150 300,160" stroke="#8B0000" stroke-width="2" fill="none"/>
        <circle cx="200" cy="90" r="15" fill="#FFD700" stroke="#8B0000" stroke-width="2"/>
      </svg>`
    },
    warli: {
      name: 'Warli Traditional',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="warliPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <rect width="50" height="50" fill="#F5DEB3"/>
            <circle cx="25" cy="10" r="3" fill="#8B4513"/>
            <line x1="25" y1="13" x2="25" y2="25" stroke="#8B4513" stroke-width="2"/>
            <line x1="25" y1="18" x2="15" y2="28" stroke="#8B4513" stroke-width="2"/>
            <line x1="25" y1="18" x2="35" y2="28" stroke="#8B4513" stroke-width="2"/>
            <line x1="25" y1="25" x2="15" y2="40" stroke="#8B4513" stroke-width="2"/>
            <line x1="25" y1="25" x2="35" y2="40" stroke="#8B4513" stroke-width="2"/>
          </pattern>
        </defs>
        <path d="M95,70 Q200,50 305,70 L325,430 Q200,470 75,430 Z" fill="url(#warliPattern)" stroke="#8B4513" stroke-width="2"/>
        <rect x="160" y="80" width="80" height="60" fill="#D2691E" stroke="#8B4513" stroke-width="2"/>
      </svg>`
    },
    naga: {
      name: 'Naga Shawl',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="nagaPattern" x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
            <rect width="60" height="10" fill="#8B0000"/>
            <rect y="10" width="60" height="10" fill="#000"/>
          </pattern>
        </defs>
        <path d="M70,100 L330,100 L330,450 Q200,480 70,450 Z" fill="url(#nagaPattern)" stroke="#000" stroke-width="3"/>
        <rect x="150" y="110" width="100" height="80" fill="#8B0000" stroke="#FFD700" stroke-width="3"/>
        <path d="M180,140 L220,140 L220,160 L180,160 Z" fill="#FFD700"/>
      </svg>`
    },
    khasi: {
      name: 'Khasi Jainsem',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="khasiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8B008B;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4B0082;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M85,65 Q200,45 315,65 L335,440 Q200,490 65,440 Z" fill="url(#khasiGrad)" stroke="#FFD700" stroke-width="4"/>
        <rect x="85" y="65" width="230" height="15" fill="#FFD700"/>
        <rect x="65" y="430" width="270" height="20" fill="#FFD700"/>
        <ellipse cx="200" cy="75" rx="50" ry="30" fill="#8B008B" stroke="#FFD700" stroke-width="3"/>
      </svg>`
    },
    mizo: {
      name: 'Mizo Puan',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mizoPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="20" height="40" fill="#228B22"/>
            <rect x="20" width="20" height="40" fill="#8B0000"/>
            <path d="M0,20 L40,20" stroke="#FFD700" stroke-width="2"/>
          </pattern>
        </defs>
        <path d="M90,75 Q200,55 310,75 L330,435 Q200,475 70,435 Z" fill="url(#mizoPattern)" stroke="#000" stroke-width="2"/>
        <rect x="155" y="85" width="90" height="70" fill="#228B22" stroke="#FFD700" stroke-width="3"/>
      </svg>`
    },
    bodo: {
      name: 'Bodo Dokhona',
      svg: `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bodoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#1E90FF;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#32CD32;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M88,68 Q200,48 312,68 L332,438 Q200,478 68,438 Z" fill="url(#bodoGrad)" stroke="#000" stroke-width="2"/>
        <rect x="88" y="68" width="224" height="12" fill="#FFD700"/>
        <rect x="68" y="428" width="264" height="18" fill="#FFD700"/>
        <ellipse cx="200" cy="78" rx="55" ry="35" fill="#1E90FF" stroke="#FFD700" stroke-width="3"/>
      </svg>`
    }
  };

  useEffect(() => {
    renderCanvas();
  }, [userImage, dressImage, opacity, scale, positionY]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsLoading(true);

    const userImg = new Image();
    userImg.crossOrigin = 'anonymous';
    userImg.src = userImage;

    userImg.onload = () => {
      canvas.width = 800;
      canvas.height = 1000;

      ctx.fillStyle = '#f3f4f6';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const imgAspect = userImg.width / userImg.height;
      const canvasAspect = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgAspect > canvasAspect) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(userImg, offsetX, offsetY, drawWidth, drawHeight);

      const dressOverlay = dressOverlays[dressImage];
      if (dressOverlay) {
        const svgBlob = new Blob([dressOverlay.svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);
        const dressImg = new Image();
        
        dressImg.onload = () => {
          ctx.globalAlpha = opacity;
          
          const dressWidth = canvas.width * scale;
          const dressHeight = (dressImg.height / dressImg.width) * dressWidth;
          const dressX = (canvas.width - dressWidth) / 2;
          const dressY = (canvas.height * 0.15) + positionY;

          ctx.drawImage(dressImg, dressX, dressY, dressWidth, dressHeight);
          ctx.globalAlpha = 1;
          
          URL.revokeObjectURL(url);
          setIsLoading(false);
        };
        
        dressImg.src = url;
      } else {
        setIsLoading(false);
      }
    };

    userImg.onerror = () => {
      setIsLoading(false);
      console.error('Failed to load user image');
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `paridhan-portrait-${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  };

  const dressName = dressOverlays[dressImage]?.name || 'Tribal Dress';

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Canvas Preview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Portrait with {dressName}
            </h2>
            
            <div className="relative bg-gray-100 rounded-xl overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Creating your portrait...</p>
                  </div>
                </div>
              )}
              <canvas
                ref={canvasRef}
                className="w-full h-auto"
                style={{ maxHeight: '600px', objectFit: 'contain' }}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Choose Different Dress
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Image
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Adjust Dress</h3>
            
            <div className="space-y-6">
              {/* Opacity Control */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dress Opacity
                </label>
                <input
                  type="range"
                  min="0.3"
                  max="1"
                  step="0.05"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Transparent</span>
                  <span>{Math.round(opacity * 100)}%</span>
                  <span>Solid</span>
                </div>
              </div>

              {/* Scale Control */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dress Size
                </label>
                <input
                  type="range"
                  min="0.6"
                  max="1.4"
                  step="0.05"
                  value={scale}
                  onChange={(e) => setScale(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Smaller</span>
                  <span>{Math.round(scale * 100)}%</span>
                  <span>Larger</span>
                </div>
              </div>

              {/* Position Control */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vertical Position
                </label>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="5"
                  value={positionY}
                  onChange={(e) => setPositionY(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Up</span>
                  <span>Center</span>
                  <span>Down</span>
                </div>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setOpacity(0.8);
                  setScale(1);
                  setPositionY(0);
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Reset Adjustments
              </button>
            </div>

            {/* Info */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-amber-700">Tip:</strong> Adjust the controls to perfectly fit the dress on your portrait. Download when you're satisfied!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
