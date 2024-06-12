import { useState } from 'react';
import Photo from '../Foto/Foto';
import ProductModal from '../Modal/Modal';
import './Galeria.css';



const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const photos = [
    { id: 1, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/3en1.png?v=1697758205798', title: 'COFFEE 3 En 1', description: 'DXN Lingzhi Coffee 3 en 1 es todo lo que necesitas para una taza completa de suave y delicioso café. Esta especialmente mezclado con granos de café de la más fina calidad y Lingzhi 100% puro. Contenido en el empaque: 20 sobres x 21g', price: 'Bs.173' },
    { id: 2, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/3en1lite.png?v=1697758207025', title: 'DXN COFFEE 3 In 1 LITE', description: 'Lingzhi Coffee 3 en 1 Lite es otra nueva variante de la serie DXN Lingzhi Coffee que ofrece un café suave, cremoso y con cuerpo con un aroma irresistible. Sólo tiene que añadir un sobre del Lingzhi Coffee 3 en 1 Lite en 150ml de agua caliente y revuelva para disfrutar de una nueva experiencia de café sensacional con DXN', price: 'Bs.169' },
    { id: 3, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/black.png?v=1697758236639', title: 'BLACK COFFEE', description: 'Café Negro Lingzhi DXN no tiene azúcar o aditivos, pero logra mantener un fuerte sabor y rico aroma del café. Está perfectamente diseñado para la sociedad moderna. Café Negro Lingzhi También te ofrece el sabor satisfactorio del café real. Contenido en el empaque: 20 sobres x 4.5g.', price: 'Bs.173' },
    { id: 4, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/cordycep.png?v=1697758270000', title: 'DXN CORDYCEPS COFFEE 3 IN 1', description: 'DXN Cordyceps Coffee 3 en 1 está especialmente formulado a partir de polvo de café instantáneo añadido con extracto de Cordyceps. Esta formulación única hace que un café suave sea un café aromático para desaliñar tu día.', price: 'Bs.174' },
    { id: 5, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/zhimocha.png?v=1697758322620', title: 'DXN ZHI MOCHA', description: 'Es una mezcla de polvo de café instantáneo elaborado de granos de café selectos, extracto de Ganoderma y cacao en polvo. Con el café en frappe siendo popular en estos días, puedes probar agregando algunos hielos a tu taza de Zhi Mocha. Definitivamente es una buena elección para refrescarte en un día soleado de verano. Ya sea caliente o frio, Zhi Mocha tiene un sabor cremoso, dulce y único con un ligero sabor amargo después de probarlo. Si estas de humor para un poco de sabor extra, agrega un poco de crema batida y espolvoréalo con canela. ¡Delicioso! Contenido en el empaque: 20 sobres x 21g', price: 'Bs.203' },
    { id: 6, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/vita.png?v=1697758318852', title: 'DXN VITA CAFE', description: 'Una mezcla exclusiva de un café 6 en 1 con Ginseng, Tongkat Ali y Extracto de Ganoderma. - Una bebida refrescante con un exquisito y delicioso aroma. - Es fácil de preparar - disfrútalo en casa, trabajo o cualquier lugar donde quieras tener una taza de café caliente gourmet.- ¡Es emocionante y versátil - lo puedes disfrutar frío o caliente, mezclado con hielo, o frío!- Contiene únicamente los mejores ingredientes seleccionados.', price: 'Bs.206' },
    { id: 7, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/cocozhi.png?v=1697758244626', title: 'COCOZHI', description: 'Cocozhi está formulado de la más fina cocoa con extracto de Ganoderma. Es un polvo listo para beberse, el cual te da un sabor a chocolate. Solo vierta el contenido en una taza de agua caliente y mueva para disfrutar una bebida vigorizante adecuada para toda la familia. Contenido en el empaque: 20 sobres x 32g', price: 'Bs.200' },
    { id: 8, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/espirulina.png?v=1697758278050', title: 'SPIRULINA CEREAL', description: 'La Spirulina es bien conocida como un alimento balanceado mientras que los cereales ricos en fibras son usualmente recomendados por los especialistas en nutrición. El cereal de Spirulina DXN, está hecho de cereales de alta calidad y polvo de Spirulina que ofrece una de las mejores fuentes de nutrición. Contenido en el empaque: 30 sobres x 30g.', price: 'Bs.374' },
    { id: 9, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/lemonzhi.png?v=1697758301418', title: 'LEMONZHI', description: 'DXN Lemonzhi es una variación saludable y una bebida refrescantemente deliciosa para que usted comience el día o como un descanso para tomar el té. Está especialmente formulado a partir de limón con la adición de té instantáneo y extracto de Ganoderma. La combinación de té y Ganoderma es la fuente de energía perfecta para vigorizar su cerebro y darle el ‘levantamiento’ y la energía que necesita.', price: 'Bs.131' },
    { id: 10, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/tealate.png?v=1697758316887', title: 'TEA LATTE', description: 'DXN ha introducido un totalmente nuevo Té Latte Lingzhi. Es una mezcla de polvo de té Premium con crema no láctea y extracto de Ganoderma. Esta combinación ofrece un fuerte pero menos amargo sabor de té, el cual ha sido mejorado con la adición de deliciosa crema. Esta empacada convenientemente en sobres para tener una bebida suave y satisfactoria, amada por todos de cualquier estilo de vida, pero especialmente por aquellos que siempre están en movimiento. Con un delicioso y distintivo aroma, definitivamente te sentirás con más energía para comenzar el día. ¡Pruébalo ahora y experimenta la diferencia!', price: 'Bs.204' },
    { id: 11, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/nutrizhi.png?v=1697758306117', title: 'NUTRIZHI', description: 'DXN NutriZhi esta elaborado a base de una mezcla de bebida de soya y malta especialmente formulada usando los mejores granos de soya, malta y extracto de Ganoderma. Nutri Zhi es rico y cremoso con sabor natural a soya un delicioso aroma a mala, lo que lo vuelve delicioso y apetecible. Presentación 20 Sobres x 30 g', price: 'Bs.283' },
    { id: 12, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/zhimint.png?v=1697758320264', title: 'ZHI MINT PLUS', description: 'DXN le ofrece el innovador Zhi Mint Plus. Con uno en su boca, la sensación refrescante y el suave alivio serán instantáneos. No solamente le da un suave alivio a su garganta sino que además la sentirá fresca y agradable.', price: 'Bs.346' },
    { id: 13, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/spirudle.png?v=1697930720030', title: 'SPIRUDLE', description: 'Deleite sus papilas gustativas con los saludables fideos instantáneos ligeros y elásticos de DXN Spirudle. Estos son los únicos productos de fideos instantáneos con Espirulina fáciles de preparar que se producen bajo el proceso de secado sin aceite. Están libres de colorantes y aromatizantes artificiales.', price: 'Bs.65' },
    { id: 14, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/coco.png?v=1718225576781', title: 'VCO-L 285ml', description: 'DXN VCO-L es un producto elaborado con extracto de Ganoderma lucidum y aceite de coco virgen de alta calidad extraído del nucleo del un coco. Contiene ácidos grasos esenciales, especialmente ácidos grasos de cadena media, que se digieren fácilmente. También se puede utilizar para cocinar u hornear para producir una amplia variedad de alimentos deliciosos.', price: 'Bs.359' },
    { id: 15, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/oocha.png?v=1718225878095', title: 'OOCHA', description: 'Una premezcla de té Oolong en polvo with Ganoderma lucidum que viene en un sobre , en lugar de en una bolsita de té. La adición de una sabrosa crema en DXN Oocha le da al té un sabor maravilloso y menos amargo. ¡Disfruta de la inolvidable fragancia y sabor del té Oolong, para complacer a tus golosos y comenzar tu día!', price: 'Bs.182' },
    { id: 16, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/melena.png?v=1718226127003', title: 'LION´S MANE COFFEE', description: 'El café Lions Mane de DXN está hecho de café en polvo premezclado con polvo de hongo Lions Mane, crema vegetal y azúcar. Es delicioso y fácil de preparar. Se puede servir frío o caliente', price: 'Bs.177' },
    { id: 17, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/maycovita.png?v=1697758303472', title: 'MYCOVITA', description: 'Hierbas especialmente formuladas Derivado de una mezcla balanceada del cuerpo de la fruta Ganoderma de un hongo y su micelio Adecuado para el consumo de mega dosificación de polvo', price: 'Bs.6706' },
    { id: 18, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/ollaprecion.png?v=1697758308331', title: 'OLLA DE PRESION', description: 'La olla de presión DXN esta elaborada de acero de alta calidad SUS 304. Es una excelente opcion para vapor y alta presión de gran tecnología. Con una base de inducción mega termal , el calor de la olla se distribuye de forma homogénea. Cumple con los más altos y nuevos estándares de cocción. La olla de presión de DXNX es apta para todo tipo de fuetes de calor como eléctrico, gas, ceramica, inducción y halógeno. Es fácil de usar y limpiarse Propiedades del Producto: Diámetro: 220 mm, Capacidad: 1 x 4 Litros, 1 x 6 litros', price: 'Bs.1734' },
    { id: 19, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/smartpot.png?v=1697758315041', title: 'SMART POT', description: 'La DXN Smart Pot tiene un diseño de doble tambor que produce presión caliente que permite separar la sopa y sedimentos del material crudo durante el proceso de cocción. Esto prevendrá cualquier quemadura o residuo en el fondo de la olla. El diseño de separación de tambores es apto para hacer té, otras funciones como hervir, cocer al vapor sopas herbales y otros platillos. Propiedades del Producto: Voltaje: 220 V- 240 V 50 Hz /60 Hz Potencia: 700 W - 760 W Capacidad: 2000ml', price: 'Bs.3927' },
    { id: 20, src: 'https://cdn.glitch.global/362a0e10-917d-4260-9315-6cfa19031e59/aquazeon.png?v=1697758208119', title: 'AQUAZEON', description: 'DXN Aquazeon Energy Water System es un filtro de agua de 5 etapas hecho de los mejores materiales selectos para resolver la materia de los problemas de calidad del agua. Es un sistema de agua perfecto para purificar, energizar, anti-oxidar y magnetizar el agua.', price: 'Bs.5088' },
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
