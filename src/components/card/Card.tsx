import "./card.scss";
import { useState } from 'react';
import loading from '../../../public/assets/images/logo.png';

interface CardProps {
  data: { 
    image: string;
    label: string;
    link: string;
    desciption: string; // Fixed typo in the property name
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Function to handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = loading; // Replace with loading image if original image fails to load
  };

  return (
    <a href={data.link} target="_blank">
      <div className="card-body">
        <div className="card-image">
          {!imageLoaded && <img src={loading} alt="Loading" />} {/* Display loading image if not loaded */}
          <img
            src={data.image}
            alt={data.label}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        <div className="card-text">
          <div className="card-name"><h3><b>{data.label}</b></h3></div>
          <div className="card-description">{data.desciption}</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
