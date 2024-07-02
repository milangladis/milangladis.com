import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [videoSrc, setVideoSrc] = useState('https://milangladis.com/tmp/procreate.mp4');
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const video = document.getElementById('myVideo');
    const playByPortionButton = document.getElementById('playByPortion');
    const clickCounter = document.getElementById('clickCounter');
    const intro = document.getElementById('intro');

    const handlePlayByPortion = (event) => {
      intro.classList.add('hide');
      const portion = video.duration / 1000;
      video.currentTime += portion;

      setClickCount((prevCount) => {
        const newCount = prevCount + 1;
        clickCounter.textContent = newCount;
        return newCount;
      });

      const x = event.clientX;
      const y = event.clientY;
      const point = document.createElement('div');
      point.classList.add('point');
      point.textContent = '+1';
      point.style.left = `${x}px`;
      point.style.top = `${y}px`;
      document.body.appendChild(point);

      point.addEventListener('animationend', () => {
        point.remove();
      });
    };

    playByPortionButton.addEventListener('click', handlePlayByPortion);

    return () => {
      playByPortionButton.removeEventListener('click', handlePlayByPortion);
    };
  }, [clickCount]);

  useEffect(() => {
    const video = document.getElementById('myVideo');
    video.load(); // Load the new video source when videoSrc changes
  }, [videoSrc]);

  const handleSourceChange = (newSrc) => {
    setVideoSrc(newSrc);
    setClickCount(0);
    document.getElementById('clickCounter').textContent = 0;
  };

  const styles = {
    body: {
      padding: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      width: '100%',
      height: '100%',
      maxWidth: '640px',
      maxHeight: '640px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '16px',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0,
    },
    intro: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      fontSize: '24px',
      color: 'white',
      pointerEvents: 'none',
    },
    hide: {
      transform: 'translateY(-30px)',
      opacity: 0,
    },
    point: {
      position: 'absolute',
      fontSize: '32px',
      color: 'white',
      fontWeight: 800,
      zIndex: 100,
      transform: 'translate(-50%, -100%)',
      animation: 'moveUpFadeOut 0.3s forwards',
    },
    clickCounterWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      position: 'absolute',
      top: '24px',
      right: '24px',
      fontSize: '24px',
      color: 'white',
      fontWeight: 800,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '8px 16px',
      borderRadius: '8px',
    },
    buttonWrapper: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      zIndex: 1000,
    },
    buttonSmall: {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
        <div style={styles.buttonWrapper} c>
          <div style={styles.buttonSmall} onClick={() => handleSourceChange('https://milangladis.com/tmp/procreate.mp4')}>Procreate Video</div>
          <div style={styles.buttonSmall} onClick={() => handleSourceChange('https://milangladis.com/tmp/ai.mp4')}>AI Video</div>
        </div>
      <div style={styles.wrapper}>
        <div style={styles.clickCounterWrapper}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_6058_13290)">
              <rect x="1.5" y="2" width="21" height="21" rx="10.5" fill="url(#paint0_linear_6058_13290)" />
            </g>
            <rect x="3" y="3.5" width="18" height="18" rx="9" stroke="url(#paint1_linear_6058_13290)" strokeWidth="3" />
            <defs>
              <filter id="filter0_i_6058_13290" x="1.5" y="2" width="21" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_6058_13290" />
              </filter>
              <linearGradient id="paint0_linear_6058_13290" x1="1.5" y1="2" x2="22.5" y2="23" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFBD01" />
                <stop offset="1" stopColor="#FBA300" />
              </linearGradient>
              <linearGradient id="paint1_linear_6058_13290" x1="12" y1="2" x2="12" y2="23" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFDE8C" />
                <stop offset="1" stopColor="#FDC95E" />
              </linearGradient>
            </defs>
          </svg>
          <span id="clickCounter">{clickCount}</span>
        </div>
        <video id="myVideo" width="640" height="360" controls={false} style={styles.video}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="playByPortion" style={styles.button}></button>
        <div id="intro" style={styles.intro}>Give it a click</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
