import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import img10 from '../assets/PMimg10.jpg';
import img9 from '../assets/PMimg9.jpg';
import img8 from '../assets/PMimg8.jpg';
import img7 from '../assets/PMimg7.jpg';
import img6 from '../assets/PMimg6.avif';
import img5 from '../assets/PMimg5.webp';
import img4 from '../assets/PMimg4.webp';
import img11 from '../assets/PMimg11.avif';
import img12 from '../assets/PMimg12.jpg';
import img13 from '../assets/PMimg13.png';
import img14 from '../assets/PMimg14.jpeg';
import img15 from '../assets/PMimg15.jpg';
import img16 from '../assets/PMimg16.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    setUserName(storedUserName || '');  // Get the username from localStorage
  }, []);

  const images = [img16, img15, img14, img13, img10, img9, img8, img12, img7, img11, img6, img5, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <>
      <div>
        <h3 className="text-center fw-bolder text-secondary">
          WELCOME TO PETS MEET <span className='text-primary'>{userName && ` ${userName}`}</span>
        </h3>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{ height: '300px', width: '300px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Slider>

        <div className="d-flex justify-content-center align-items-center mt-5">
          {/* Card plan section */}
        </div>

        <h3 className='fw-bolder text-secondary text-center m-5'>WHO ARE YOU LOOKING FOR?</h3>

        <div className="d-flex justify-content-center align-items-center">
          <Card style={{ width: '20rem' }} className='shadow m-2'>
            <Card.Img variant="top" style={{ height: '250px' }} src="https://myfurbabyphoto.com/wp-content/uploads/2020/06/IMG_3939-002-1024x902.jpg" />
            <Card.Body>
              <Link to={'/cats'}>
                <Button variant="primary">Go CATS</Button>
              </Link>      
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }} className='shadow m-2'>
            <Card.Img variant="top" style={{ height: '250px' }} src="https://originstudiosphotography.com/wp-content/uploads/2022/01/Bernese-Dog-Portrait-on-the-Beach%28pp_w1600_h1066%29.jpg" />
            <Card.Body>
              <Link to={'/dogs'}>
                <Button variant="primary">Go DOGS</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
