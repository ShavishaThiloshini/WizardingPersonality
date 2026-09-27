import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const BackgroundMusic = forwardRef((props, ref) => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('wizarding-personality-music-muted');
    return saved === 'true';
  });
  const [isPlaying, setIsPlaying] = useState(false);
  
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const targetVolume = 0.18;

  // Handle local storage sync
  useEffect(() => {
    localStorage.setItem('wizarding-personality-music-muted', isMuted);
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Attempt autoplay on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          fadeIn();
        }).catch(() => {
          // Autoplay blocked - do nothing, wait for user interaction
          setIsPlaying(false);
        });
      }
    }
    
    return () => clearInterval(fadeIntervalRef.current);
  }, []);

  const fadeIn = () => {
    if (!audioRef.current) return;
    clearInterval(fadeIntervalRef.current);
    
    let vol = 0;
    audioRef.current.volume = vol;
    
    fadeIntervalRef.current = setInterval(() => {
      if (vol < targetVolume) {
        vol = Math.min(vol + 0.02, targetVolume);
        if (audioRef.current) audioRef.current.volume = vol;
      } else {
        clearInterval(fadeIntervalRef.current);
      }
    }, 200);
  };

  useImperativeHandle(ref, () => ({
    startMusic: () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          fadeIn();
        }).catch(err => {
          console.warn("Audio playback failed:", err);
        });
      }
    }
  }));

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // If we unmute and it wasn't playing (maybe blocked initially), try to play it
    if (isMuted && !isPlaying && audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        fadeIn();
      }).catch(err => {
        console.warn("Audio playback failed:", err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/audio/wizarding-bgm.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={toggleMute}
        className="music-control-btn"
        aria-label={isMuted ? "Play background music" : "Mute background music"}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>
    </>
  );
});

export default BackgroundMusic;
