import '../Styles/card.css';
import Button from './button';
import CardCounter from './CardCounter';

function Card(props) {
    return ( 
        <div className="card">
            <h1>{props.cardName}</h1>
            <p>{props.cardDescription}</p>
            
            <CardCounter />
        </div>
        );
}

export default Card;