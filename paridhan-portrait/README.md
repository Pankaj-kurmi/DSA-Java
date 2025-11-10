# Paridhan Portrait

A beautiful web application that allows users to virtually try on traditional tribal dresses from various Indian tribal communities and download their customized portraits.

## 🌟 Features

- **Image Upload**: Drag-and-drop or browse to upload portrait photos
- **8 Tribal Dress Options**: Choose from authentic traditional dresses including:
  - Gond Traditional (Madhya Pradesh & Chhattisgarh)
  - Bhil Attire (Rajasthan & Gujarat)
  - Santhal Dress (Jharkhand & West Bengal)
  - Warli Traditional (Maharashtra)
  - Naga Shawl (Nagaland)
  - Khasi Jainsem (Meghalaya)
  - Mizo Puan (Mizoram)
  - Bodo Dokhona (Assam)
- **Real-time Preview**: See the dress overlay on your photo instantly
- **Customization Controls**:
  - Adjust dress opacity (30% - 100%)
  - Scale dress size (60% - 140%)
  - Adjust vertical position
  - Reset all adjustments
- **Download**: Export your final portrait as a high-quality PNG image
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd paridhan-portrait
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
paridhan-portrait/
├── app/
│   ├── page.tsx          # Main application page
│   ├── demo/
│   │   └── page.tsx      # Demo page for testing
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ImageUploader.tsx # Image upload component
│   ├── DressSelector.tsx # Tribal dress gallery
│   └── ImageEditor.tsx   # Canvas-based editor with overlays
├── public/
│   └── test-portrait.svg # Test portrait image
└── README.md
```

## 🎨 Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Processing**: HTML5 Canvas API
- **Libraries**: 
  - fabric.js for advanced canvas manipulation
  - html2canvas for image export

## 🎯 How to Use

1. **Upload Your Photo**: 
   - Click "Browse Files" or drag and drop your portrait photo
   - Supports JPG, PNG, and WEBP formats (max 10MB)

2. **Select a Tribal Dress**:
   - Browse through 8 different tribal dress options
   - Click on your preferred dress to select it

3. **Customize Your Portrait**:
   - Adjust the dress opacity for a natural blend
   - Scale the dress size to fit your photo
   - Move the dress vertically for perfect positioning
   - Use "Reset Adjustments" to start over

4. **Download Your Portrait**:
   - Click "Download Image" to save your customized portrait
   - Image is saved as a high-quality PNG file

## 🌐 Demo Mode

Visit `/demo` route to see a quick demonstration with a test portrait and all tribal dress options.

## 🎭 Cultural Significance

This application celebrates the rich cultural heritage of India's tribal communities. Each dress represents:

- **Centuries of tradition**: Passed down through generations
- **Artistic expression**: Unique patterns and designs
- **Cultural identity**: Symbols of community and celebration
- **Craftsmanship**: Handwoven and embroidered with care

## 🔧 Customization

### Adding New Tribal Dresses

Edit `components/ImageEditor.tsx` and add new dress SVG patterns to the `dressOverlays` object:

```typescript
dressOverlays: {
  'new-dress': {
    name: 'New Dress Name',
    svg: `<svg>...</svg>`
  }
}
```

Then update `components/DressSelector.tsx` to add the dress to the gallery.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

Alternatively, deploy to any Node.js hosting platform that supports Next.js.

## 📄 License

This project is created for educational and cultural appreciation purposes.

## 🙏 Acknowledgments

- Celebrating the diverse tribal communities of India
- Honoring traditional craftsmanship and cultural heritage
- Promoting awareness of tribal art and traditions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on the GitHub repository.

---

**Made with ❤️ to celebrate India's tribal heritage**
