
import './Foto.css';

const Photo = ({ photo, onClick }) => {
  return (
    <div className="photo" onClick={onClick}>
      <img src={photo.src} alt={photo.title} />
    </div>
  );
};

export default Photo;