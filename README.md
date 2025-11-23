# Know Your Future

A modern, interactive website that features an advanced palm scanning animation and video display.

## Features

- **Modern UI**: Futuristic design with advanced graphics and animations
- **Palm Scanning Animation**: Advanced scanning effects with particles, grid lines, and glowing animations
- **Video Display**: Automatic video playback after scanning completes
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Setup Instructions

### 1. Add Your Palm Image

1. Find or create a palm image (JPG format recommended)
2. Save it as `palm.jpg` in the `assets/` folder
3. The image should be clear and well-lit for best scanning effect

**Recommended specifications:**
- Format: JPG or PNG
- Size: At least 600x600 pixels
- Aspect ratio: Square (1:1) works best

### 2. Add Your Video

1. Prepare your video file (MP4 format)
2. Save it as `future-video.mp4` in the `assets/` folder
3. Ensure the video is properly encoded for web playback

**Recommended specifications:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or 1280x720
- Duration: Any length
- File size: Optimize for web (under 50MB recommended)

### 3. File Structure

Your project should have the following structure:

```
know-your-future/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── palm.jpg          (add your palm image here)
    └── future-video.mp4  (add your video here)
```

## How to Use

1. Open `index.html` in a web browser
2. Click the "Know Your Future" button
3. Watch the palm scanning animation (4 seconds)
4. The video will automatically play after scanning completes

## Customization

### Changing Animation Duration

Edit `script.js` and modify the `scanningDuration` variable in the `startScanningAnimation()` function:

```javascript
const scanningDuration = 4000; // Change this value (in milliseconds)
```

### Changing Colors

Edit `styles.css` to customize the color scheme. Look for:
- `rgba(138, 43, 226, ...)` - Purple accent color
- `rgba(0, 191, 255, ...)` - Cyan/blue accent color

### Keyboard Shortcuts

- Press `R` to reset the experience and start over

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Troubleshooting

### Video doesn't play automatically
- Some browsers block autoplay. Users may need to interact with the page first
- Ensure the video file is in MP4 format with H.264 codec

### Images or video not showing
- Check that files are in the `assets/` folder
- Verify file names match exactly: `palm.jpg` and `future-video.mp4`
- Check browser console for error messages

### Scanning animation not visible
- Ensure the palm image is loaded correctly
- Check browser console for any CSS animation errors

## License

Free to use and modify for personal or commercial projects.

