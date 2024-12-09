import Carousel from 'react-bootstrap/Carousel';
import './Slide.css'

function Slidecomponent() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="img"
          src="https://i.pinimg.com/564x/8b/b1/31/8bb1314c1da11f5398842e255e4959e1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text'>First slide label</h5>
          <p className='text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://i.pinimg.com/564x/21/ea/58/21ea58c97ac74d4f0ed267632a0d1ca6.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text'>Second slide label</h5>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://i.pinimg.com/564x/85/72/01/8572014189ce09b9626aa6233183bdb8.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text'>Third slide label</h5>
          <p className='text'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidecomponent;