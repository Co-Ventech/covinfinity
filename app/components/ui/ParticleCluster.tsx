import React from 'react';

interface ParticleClusterProps {
  className?: string;
}

const ParticleCluster: React.FC<ParticleClusterProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none relative h-32 w-32 ${className}`}>
      {/* This creates a concentrated cluster of small square particles as shown in the reference image */}
      {/* Purple particles */}
      <div className="absolute top-[20%] left-[30%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[40%] left-[20%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[60%] left-[50%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[30%] left-[60%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[70%] left-[35%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[45%] left-[70%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[55%] left-[15%] h-1 w-1 rounded-sm bg-purple-500/30"></div>
      <div className="absolute top-[75%] left-[60%] h-1 w-1 rounded-sm bg-purple-500/30"></div>

      {/* Blue particles */}
      <div className="absolute top-[15%] left-[40%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[35%] left-[25%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[50%] left-[55%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[65%] left-[30%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[25%] left-[65%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[80%] left-[45%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[10%] left-[20%] h-1 w-1 rounded-sm bg-blue-400/30"></div>
      <div className="absolute top-[70%] left-[75%] h-1 w-1 rounded-sm bg-blue-400/30"></div>

      {/* Yellow particles - fewer and more prominent */}
      <div className="absolute top-[30%] left-[35%] h-1 w-1 rounded-sm bg-yellow-200/40"></div>
      <div className="absolute top-[60%] left-[65%] h-1 w-1 rounded-sm bg-yellow-200/40"></div>
      <div className="absolute top-[45%] left-[45%] h-1 w-1 rounded-sm bg-yellow-200/40"></div>
    </div>
  );
};

export default ParticleCluster;
