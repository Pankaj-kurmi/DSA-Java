# How to Access Paridhan Portrait

## 🌐 The Application is Currently Running!

The development server is already running in the background.

### 📍 Access URLs

**Main Application:**
```
http://localhost:3000
```

**Demo Page (Quick Test):**
```
http://localhost:3000/demo
```

## 🎯 What You Can Do

### Main Application (http://localhost:3000)
1. **Upload Your Photo**
   - Drag and drop an image
   - Or click "Browse Files"
   - Supports JPG, PNG, WEBP

2. **Select a Tribal Dress**
   - Choose from 8 different tribal dresses
   - Each represents a unique tribal community

3. **Customize Your Portrait**
   - Adjust opacity
   - Scale size
   - Position vertically
   - Reset if needed

4. **Download Your Portrait**
   - Click "Download Image"
   - Get high-quality PNG file

### Demo Page (http://localhost:3000/demo)
- See all 8 tribal dresses instantly
- Test with a sample portrait
- Switch between dresses with one click
- Perfect for quick testing

## 🎨 Available Tribal Dresses

1. **Gond** - Red & gold geometric patterns
2. **Bhil** - Orange with mirror work
3. **Santhal** - White with red border
4. **Warli** - Beige with tribal art
5. **Naga** - Red & black stripes
6. **Khasi** - Purple silk with gold
7. **Mizo** - Green & red woven
8. **Bodo** - Blue & green wrap

## 🔧 Server Management

### Check Server Status
```bash
# View server logs
cat /vercel/sandbox/.blackbox/tmp/shell_tool_7345b59ba22a.log
```

### Restart Server (if needed)
```bash
cd /vercel/sandbox/paridhan-portrait
npm run dev
```

### Stop Server (if needed)
```bash
# Find the process
ps aux | grep "next dev"

# Kill the process (replace PID with actual process ID)
kill -9 <PID>
```

## 📱 Mobile Access

If you want to test on mobile devices on the same network:

1. Find your local IP address:
```bash
hostname -I
```

2. Access from mobile:
```
http://[YOUR_IP]:3000
```

Example: `http://192.168.1.100:3000`

## 🚀 Production Build

To create a production build:

```bash
cd /vercel/sandbox/paridhan-portrait
npm run build
npm start
```

Then access at: `http://localhost:3000`

## 🎉 Quick Test Workflow

1. Open browser → `http://localhost:3000/demo`
2. Click different dress buttons at the top
3. See instant dress changes
4. Scroll down to adjust controls
5. Click "Download Image" to test download

## 📸 Screenshot Locations

Browser testing screenshots and videos are saved in:
```
/vercel/sandbox/videos/
```

## 💡 Tips

- **First Time?** Start with the demo page
- **Testing Upload?** Use the main page
- **Need Help?** Check README.md
- **Quick Reference?** See QUICKSTART.md

## 🔥 Features to Try

1. ✨ Upload different photos
2. 🎨 Try all 8 tribal dresses
3. 🎛️ Adjust opacity for blending
4. 📏 Scale dress to fit perfectly
5. ⬆️⬇️ Position dress vertically
6. 💾 Download your creations
7. 🔄 Use "Start Over" to try again

## 🌟 Enjoy!

Explore the beautiful diversity of India's tribal heritage through this interactive experience!

---

**Server Status:** ✅ Running
**Port:** 3000
**Environment:** Development
**Hot Reload:** Enabled
