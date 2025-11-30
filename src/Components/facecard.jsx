
import React from 'react';
import '../Styles/facecard.css';
import fallbackImage from '../Pictures/defaultImage.jpg';
import getImageByName from './imageMapper';

function FaceCard(props) {
    const name = props.cardName;
    const matched = getImageByName(name) || fallbackImage;
    console.log(`FaceCard rendering for name: ${name}, using image: ${matched}`);
    return (
        <div className="facecard-photo">
            <img src={matched} alt={name} />
        </div>
    );
}

export default FaceCard;