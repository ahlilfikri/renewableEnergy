import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ title, description, image, index }) => {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  // Menentukan warna latar belakang berdasarkan index atau props lainnya
  const cardBackgroundColor = index == 1 ? '#B3F0AA' : '#EEC879'; // Contoh background color bergantian

  return (
    <div className="card" style={{ backgroundColor: cardBackgroundColor }}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-card">{title}</div>
      <button className="button-card"><a href={description}>Baca Lebih Lanjut</a></button>
    </div>
  );
};

export default Card;
