import React, { useRef, useState } from 'react';
import resortVideo from '../assets/resort.mp4'; // Make sure this path is correct
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section id="video" className="py-20 bg-gradient-to-br from-teal-900 to-orange-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Immerse yourself in the beauty of MADRAS VILLA through our exclusive video showcase.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
            <video
              ref={videoRef}
              className="w-full h-96 object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            >
              <source src={resortVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Control Buttons */}
            <div className="absolute bottom-4 left-4 flex gap-4">
              <button
                onClick={togglePlay}
                className="bg-white/80 p-2 rounded-full backdrop-blur hover:scale-105 transition"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-gray-800" />
                ) : (
                  <Play className="w-6 h-6 text-gray-800" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="bg-white/80 p-2 rounded-full backdrop-blur hover:scale-105 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-gray-800" />
                ) : (
                  <Volume2 className="w-6 h-6 text-gray-800" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-xl inline-block">
            <h3 className="font-bold text-gray-800 text-lg">MADRAS VILLA Experience</h3>
            <p className="text-gray-600 text-sm">A glimpse into luxury and comfort</p>
          </div>

          <p className="text-gray-300 text-sm mt-6">
            Watch our resort showcase video to explore what awaits you at MADRAS VILLA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
