// components/ImageSplitter.js
import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { flushAllTraces } from 'next/dist/trace';

const ImageSplitter = ({
  locale = '',
  indexLanguageText
  }) => {
  

  const handleClick = () => {
      document.getElementById("game").requestFullscreen();
      console.log("Button clicked!");
  };

  return (
              
                    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative p-6">
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" title="Fullscreen">全画面</button>
                      </div>
                      <iframe id="game" src="https://cdn.geometrydashjp.com/dash-jp.html" allow="autoplay"  style={{ top: '0px', left: '0px',width: '100%', height: '800px'}}></iframe>
                    </div>
            
    

  );
};

export default ImageSplitter;
