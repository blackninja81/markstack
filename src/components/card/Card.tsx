import "./card.scss";

interface CardProps {
  data: { 
    image: string;
    label: string;
    
  };
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    
    <div className="card-body">
      <div className="card-image">
        <img src={data.image} alt={data.label}/>
      </div>
      <div className="card-text">
        <div className="card-name">{data.label}</div>
      </div>
    </div>
  
  );
};

export default Card;
