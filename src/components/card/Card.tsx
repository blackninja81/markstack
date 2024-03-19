import "./card.scss";

interface CardProps {
  data: { 
    image: string;
    label: string;
    link: string;
    desciption: string;
    
  };
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <a href={data.link} target="_blank">
    <div className="card-body">
      <div className="card-image">
        <img src={data.image} alt={data.label}/>
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
