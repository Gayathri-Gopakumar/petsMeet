import React from 'react';
import img1 from '../assets/PMimg1.jpg';
import img2 from '../assets/PMimg2.jpg';
import img3 from '../assets/PMimg3.jpg';
import img4 from '../assets/PMimg4.webp';
import img5 from '../assets/PMimg5.webp';
import img6 from '../assets/PMimg6.avif';
import '../Landing.css'; // Create a CSS file for styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
 


const Landing = () => {
  return (
    <>
      <div className="landing-container">
      <div className="header-section text-center d-flex justify-content-between align-items-center p-3 bg-primary">
          <img style={{width:'150px'}} src={logo} alt="" />
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <h1 className="text-dark fw-bolder">
              <i className="fa-solid fa-paw text-secondary"></i>
              PETS MEET
              <i className="fa-solid fa-paw text-secondary"></i>
            </h1>
          </Link>

          {/* Login Button */}
          <Link to={'/login'}>
            <Button variant="outline-secondary" className="fw-bold me-5">Login</Button>
          </Link>
        </div>

        <div className="parallax-section" style={{ backgroundImage: `url(${img2})` }}></div>

        {/* CARD CONTAINER 1 */}
        <div className="d-flex justify-content-center align-items-center gap-3 m-3">
        <Card style={{ width: '20rem' }} className='shadow'>
      <Card.Img variant="top" style={{height:'230px'}}  src="https://culturesync.net/wp-content/uploads/2018/12/icon-clients.png" />
      <Card.Body>
        <Card.Title className='fw-bolder text-primary'>DIRECT CONTACT WITH PET PARENTS</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }} className='shadow'>
      <Card.Img variant="top" style={{height:'250px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHXie-3MZlehgHWG0iPgz9k6Qh-doyOVaBw&s" />
      <Card.Body>
        <Card.Title className='fw-bolder text-primary'>VERIFIED PROFILES</Card.Title>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }} className='shadow'>
      <Card.Img variant="top" style={{height:'250px'}} src="https://media.istockphoto.com/id/1313417041/vector/medical-vaccine-icon-vector-medical-syringe-symbol-for-graphic-design-logo-web-site-social.jpg?s=612x612&w=0&k=20&c=p4fl-L686MzcDHmDIR5zoIhdV3jUx0Z9swfseMHuCOM=" />
      <Card.Body>
        <Card.Title className='fw-bolder text-primary'>VACCINATED PETS ONLY</Card.Title>
        
      </Card.Body>
    </Card>
        </div>
        
        <div className="parallax-section" style={{ backgroundImage: `url(${img1})` }}></div>

{/* CARD CONTAINER 2*/}
<div className="d-flex justify-content-center align-items-center gap-5 m-3 ">
        <Card style={{ width: '20rem' }} className='shadow' >
      <Card.Img variant="top" style={{height:'300px'}}  src={img4} />
      <Card.Body>
        <Card.Title className='fw-bolder text-secondary'>COOPER</Card.Title>
        <Card.Text>
          He loves to play with both cats and dogs . Customer since 2020.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='shadow'>
      <Card.Img variant="top" style={{height:'300px'}} src={img5} />
      <Card.Body >
        <Card.Title className='fw-bolder text-secondary'>BROWNIE</Card.Title>
        <Card.Text>
          Prefers to chill with other dogs . Customer since 2023.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='shadow'>
      <Card.Img variant="top" style={{height:'300px'}} src={img6} />
      <Card.Body>
        <Card.Title className='fw-bolder text-secondary'>HAZLE</Card.Title>
        <Card.Text>
          Gentle with kids and other pets . Customer since 2021.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>

        <div className="parallax-section" style={{ backgroundImage: `url(https://static.wixstatic.com/media/a5f03e_fee60358b0734a5cadd79953603cd6f8~mv2.jpg/v1/fill/w_640,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a5f03e_fee60358b0734a5cadd79953603cd6f8~mv2.jpg)` }}></div>
      </div>


      {/* card container 3 REVIEWS */}
      <div className="d-flex justify-content-center align-items-center gap-5 m-3">
      <Card style={{ width: '20rem' ,height:'auto'}} className='shadow'>
      <Card.Img variant="top" src="https://sunshine-photo.s3.us-east-2.amazonaws.com/wp-content/uploads/sunshine/2023/06/04160815/Sneak-6mo-final-6-3-1024x683.jpg" />
      <Card.Body>
      <h5 className='fw-bolder'>JESSICA</h5>

        <Card.Title><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i></Card.Title>
        <Card.Text>
          Very good service with affordable plans . Jumper always enjoys meeting his old and new friends via Pets Meet.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' ,height:'auto'}} className='shadow'>
      <Card.Img variant="top" src="https://st.depositphotos.com/36944248/55668/i/450/depositphotos_556680088-stock-photo-woman-kissing-dog-dog-and.jpg" />
      <Card.Body>
      <h5 className='fw-bolder'>ANGELINE</h5>

        <Card.Title><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i></Card.Title>
        <Card.Text>
         Rover my boy loves meeting his friends.  All profiles are verified and pets are up-to-date on vaccines . Very affordable .
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',height:'auto' }} className='shadow'>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1198100351/photo/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-natural-light.jpg?s=612x612&w=0&k=20&c=4p4gjq48aYnD9jNQf9yazpGCpn620btJ5H8VJX3OElo=" />
      <Card.Body>
      <h5 className='fw-bolder'>NATALIE </h5>
        <Card.Title><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i><i className="fa-solid fa-heart me-1 text-secondary "></i></Card.Title>
        <Card.Text>
         Peaches and I have always had such wonderful experiences connecting with fellow pet parents . She has so many  friends now.
        </Card.Text>
      </Card.Body>
    </Card>

      </div>

      <footer style={{height:'200px',width:'100vw'}} className='bg-primary '>
            <div className="d-flex justify-content-evenly align-items-center m-5 ">
              
              <div>
              <h3>            <i className="fa-solid fa-paw text-secondary"></i>
                PETS MEET            <i className="fa-solid fa-paw text-secondary"></i>
                </h3>
              </div>
              <div className='m-3 text-dark'>
                
                MADE WITH ALL THE LOVE IN THE WORLD FOR THE FLUFFY BABIES .
              </div>

              <div>
                <h4 className='mt-5'>FOLLOW US ON</h4>
                <div className='text-center'>
                  <i className="fa-brands fa-facebook text-dark me-3"></i>
                  <i className="fa-brands fa-x-twitter text-dark me-3"></i>
                  <i className="fa-brands fa-instagram text-dark me-3"></i>
                  <i className="fa-brands fa-youtube text-dark me-3"></i>
                  <i className="fa-brands fa-snapchat text-dark me-3"></i>
                </div>

              </div>
            </div>

            <p className='text-center'>All © Reserved by PETS MEET Enterprises.</p>
      </footer>
    </>
  );
};

export default Landing;
