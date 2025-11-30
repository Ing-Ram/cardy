import '../Styles/card.css';
import Button from './button';
import FaceCard from './facecard';


function Card(props) {
    return ( 
        <div className="card">
            <FaceCard cardName={props.cardName} />
            <h1>{props.cardName}</h1>
            <p>{props.cardDescription}</p>
           <Button />
        </div>
        );
}

export default Card;