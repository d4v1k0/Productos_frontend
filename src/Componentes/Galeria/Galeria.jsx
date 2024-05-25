import { useState } from 'react';
import Photo from '../Foto/Foto';
import ProductModal from '../Modal/Modal';
import './Galeria.css';



const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const photos = [
    { id: 1, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/3en1.png?v=1697758205798', title: 'Lingzhi Coffee 3 En 1', description: 'DXN Lingzhi Coffee 3 en 1 es todo lo que necesitas para una taza completa de suave y delicioso café. Esta especialmente mezclado con granos de café de la más fina calidad y Lingzhi 100% puro. Contenido en el empaque: 20 sobres x 21g', price: 'Bs.173' },
    { id: 2, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/3en1lite.png?v=1697758207025', title: 'DXN Lingzhi Coffee 3 In 1 LITE', description: 'Lingzhi Coffee 3 en 1 Lite es otra nueva variante de la serie DXN Lingzhi Coffee que ofrece un café suave, cremoso y con cuerpo con un aroma irresistible. Sólo tiene que añadir un sobre del Lingzhi Coffee 3 en 1 Lite en 150ml de agua caliente y revuelva para disfrutar de una nueva experiencia de café sensacional con DXN', price: 'Bs.1' },
    { id: 3, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/black.png?v=1697758236639', title: 'Café Negro Lingzhi', description: 'Café Negro Lingzhi DXN no tiene azúcar o aditivos, pero logra mantener un fuerte sabor y rico aroma del café. Está perfectamente diseñado para la sociedad moderna. Café Negro Lingzhi También te ofrece el sabor satisfactorio del café real. Contenido en el empaque: 20 sobres x 4.5g.', price: 'Bs.1' },
    { id: 4, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/cordycep.png?v=1697758270000', title: 'DXN CORDYCEPS COFFEE 3 IN 1', description: 'DXN Cordyceps Coffee 3 en 1 está especialmente formulado a partir de polvo de café instantáneo añadido con extracto de Cordyceps. Esta formulación única hace que un café suave sea un café aromático para desaliñar tu día.', price: 'Bs.1' },
    { id: 5, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/zhimocha.png?v=1697758322620', title: 'DXN CORDYCEPS COFFEE 3 IN 1', description: '¿Eres un amante del café y amas el sabor del chocolate también? ¡Entonces DXN Zhi Mocha es para ti! Es una mezcla de polvo de café instantáneo elaborado de granos de café selectos, extracto de Ganoderma y cacao en polvo. Con el café en frappe siendo popular en estos días, puedes probar agregando algunos hielos a tu taza de Zhi Mocha. Definitivamente es una buena elección para refrescarte en un día soleado de verano. Ya sea caliente o frio, Zhi Mocha tiene un sabor cremoso, dulce y único con un ligero sabor amargo después de probarlo. Si estas de humor para un poco de sabor extra, agrega un poco de crema batida y espolvoréalo con canela. ¡Delicioso! Contenido en el empaque: 20 sobres x 21g', price: 'Bs.1' },
    { id: 6, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/vita.png?v=1697758318852', title: 'DXN Vita Café', description: 'Es una mezcla única de extracto de gran calidad de Ginseng y Tongkat Ali con polvo de extracto de Ganoderma. Vita Café DXN esta convenientemente preparado para su fácil consumo. Todo lo que necesitas es agregar el polvo de Vita Café en una taza de agua caliente y experimentar el delicioso aroma de Vita Café. ¡No lo dudes! ¡Empieza tu Vita Vida hoy! ¡La singularidad de DXN Vita Café!- Una mezcla exclusiva de un café 6 en 1 con Ginseng, Tongkat Ali y Extracto de Ganoderma. - Una bebida refrescante con un exquisito y delicioso aroma. - Es fácil de preparar - disfrútalo en casa, trabajo o cualquier lugar donde quieras tener una taza de café caliente gourmet.- ¡Es emocionante y versátil - lo puedes disfrutar frío o caliente, mezclado con hielo, o frío!- Contiene únicamente los mejores ingredientes seleccionados.', price: 'Bs.1' },
  ]

  const openModal = (product) => {

    setSelectedProduct(product);
    setModalIsOpen(true);

  };

  const closeModal = () => {

    setModalIsOpen(false);
    setSelectedProduct(null);

  };

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} onClick={() => openModal(photo)} />
      ))}
      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} product={selectedProduct} />
    </div>
  );
};

export default Gallery;
