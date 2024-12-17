import './Card.css'
import PropTypes from 'prop-types';

const Card = ({title, description, image}) =>{
    Card.propTypes = {
        title : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        image : PropTypes.string.isRequired,
      };
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt="" />
            </div>
            <div className="title-card">{title}</div>
            <div className="description-card">{description}</div>
        </div>
    )
};

export default Card;