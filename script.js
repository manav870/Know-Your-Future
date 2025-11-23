// Get DOM elements
const knowFutureBtn = document.getElementById('knowFutureBtn');
const palmSection = document.getElementById('palmSection');
const videoSection = document.getElementById('videoSection');
const futureVideo = document.getElementById('futureVideo');

// State management
let isScanning = false;
let hasShownVideo = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Ensure initial state
    palmSection.classList.add('hidden');
    videoSection.classList.add('hidden');
    
    // Add click event listener to button
    knowFutureBtn.addEventListener('click', handleKnowFutureClick);
});

/**
 * Handle the "Know Your Future" button click
 */
function handleKnowFutureClick() {
    if (isScanning) return; // Prevent multiple clicks
    
    isScanning = true;
    
    // Step 1: Fade out button
    knowFutureBtn.classList.add('fade-out');
    
    // Step 2: Show palm section after button fades
    setTimeout(() => {
        knowFutureBtn.style.display = 'none';
        palmSection.classList.remove('hidden');
        
        // Trigger fade-in animation
        setTimeout(() => {
            palmSection.classList.add('active');
        }, 50);
        
        // Step 3: Start scanning animation
        startScanningAnimation();
        
    }, 500);
}

/**
 * Start the scanning animation sequence
 */
function startScanningAnimation() {
    // Scanning animation duration (4 seconds)
    const scanningDuration = 4000;
    
    // After scanning completes, show video
    setTimeout(() => {
        showVideo();
    }, scanningDuration);
}

/**
 * Show the video after scanning completes
 */
function showVideo() {
    // Fade out palm section
    palmSection.classList.remove('active');
    
    setTimeout(() => {
        palmSection.classList.add('hidden');
        
        // Show video section
        videoSection.classList.remove('hidden');
        
        // Trigger fade-in animation
        setTimeout(() => {
            videoSection.classList.add('active');
            
            // Play video
            futureVideo.play().catch(error => {
                console.error('Error playing video:', error);
                // If autoplay fails, show a message or handle gracefully
            });
        }, 50);
        
    }, 500);
}

/**
 * Reset the experience (optional - for replay functionality)
 */
function resetExperience() {
    isScanning = false;
    hasShownVideo = false;
    
    knowFutureBtn.classList.remove('fade-out');
    knowFutureBtn.style.display = 'block';
    
    palmSection.classList.remove('active');
    palmSection.classList.add('hidden');
    
    videoSection.classList.remove('active');
    videoSection.classList.add('hidden');
    
    if (futureVideo) {
        futureVideo.pause();
        futureVideo.currentTime = 0;
    }
}

// Optional: Add keyboard support for reset (press 'R' to reset)
document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        resetExperience();
    }
});

// Handle video end (optional - loop or show message)
futureVideo.addEventListener('ended', () => {
    // Video has ended - you can add custom behavior here
    console.log('Video playback completed');
});

// Error handling for missing assets
futureVideo.addEventListener('error', (e) => {
    console.error('Video error:', e);
    // You could show a fallback message here
});

// Check if palm image loads successfully
const palmImage = document.getElementById('palmImage');
if (palmImage) {
    palmImage.addEventListener('error', () => {
        console.error('Palm image failed to load. Please ensure assets/palm.png exists.');
    });
}

