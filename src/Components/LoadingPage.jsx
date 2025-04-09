import React from 'react';
import { useEffect, useState } from 'react';
import '../assets/css/LoadingPage.css';
import Logo from "../assets/images/resources/logo.png";

const LoadingPage = ({ onLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoaded();
    }, 5000); // You can increase the wait time you want thousands represent seconds 1 second is 1000

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!isVisible) return null;

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="logo">
          {/* Replace with your actual logo when using for your project */}
          <img src={Logo} />
        </div>
        <div className="circles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="circle"
              style={{
                '--i': i,
                '--total': 8,
                '--size': `${5 + i * 1}px`,
                '--color': `hsl(${i * 45}, 70%, 60%)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;