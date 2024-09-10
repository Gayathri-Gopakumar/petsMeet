import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Dogs = () => {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Your Dog API key here (get it from https://thedogapi.com/)
  const API_KEY = 'live_BMFbZqsSsVhgA3wpGaXzgCafUCJ4tbgR96IxPM2En9jysVhVawnzAhxyFeRpprdk';
  
  useEffect(() => {
    fetchMoreImages();
  }, []);

  const fetchMoreImages = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
        params: {
          limit: 10, // Fetch 10 images at a time
          page: page,
          api_key: API_KEY,
        },
      });
      const newImages = response.data.map((img) => img.url);

      setImages((prevImages) => [...prevImages, ...newImages]);
      setPage((prevPage) => prevPage + 1);

      // If the API returns fewer images than requested, assume there are no more images
      if (newImages.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <Container>
       <h3 className='text-center my-4 text-secondary fw-bolder'>PETS MEET</h3>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreImages}
        hasMore={hasMore}
        loader={<h4 className='text-secondary'>Loading...</h4>}
        endMessage={<p className='text-center'>No more images</p>}
      >
        <Row>
          {images.map((img, index) => (
            <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
              <Card className='shadow'>
                <Card.Img 
                  variant="top" 
                  src={img} 
                  alt={`Dog ${index}`} 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className='text-center text-secondary'>Profile {index + 1}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default Dogs;
