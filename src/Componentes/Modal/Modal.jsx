
import Modal from 'react-modal';
import './Modal.css';

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Modal"
      className="reactmodal"
      overlayClassName="overlay"
    >


      <div className="reactmodal-content">
        <div className="left-section">
          <h2>{product.title}</h2>
          <img src={product.src} alt={product.title} />
          <span className="price">Precio: {product.price}</span>
        </div>
        <div className="right-section">
          <p>{product.description}</p>
          <button onClick={onRequestClose}>Cerrar</button>
        </div>
      </div>

    </Modal>
  );
};

export default ProductModal;
