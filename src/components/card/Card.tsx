import "./card.scss";
import { useState, useEffect } from "react";
import loading from "../../../public/assets/images/logo.png";

interface CardProps {
  data: {
    image: string;
    label: string;
    link: string;
    desciption: string; // Keeping original typo as in your interface
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setImageLoaded(false);
    setIsTransitioning(true);
    
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);

    return () => clearTimeout(transitionTimeout);
  }, [data.image]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = loading;
    setImageLoaded(true);
  };

  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <div className="card-body">
        <div className="card-image">
          {(!imageLoaded || isTransitioning) && (
            <img 
              src={loading} 
              alt="Loading" 
              className="loading-image"
            />
          )}
          <img
            src={data.image}
            alt={data.label}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ 
              opacity: imageLoaded && !isTransitioning ? 1 : 0,
              transition: 'opacity 0.3s ease-out'
            }}
          />
        </div>
        <div className="card-text">
          <span className="card-name">
            <span className="card-heading">{data.label}</span>
          </span>
          <span className="card-description">{data.desciption}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;