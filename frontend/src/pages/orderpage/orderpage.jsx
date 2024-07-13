import { useState } from "react";
import "./orderpage.css"


export const Orderpage = () => {
  const [harvestTime, setHarvestTime] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleTrack = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ harvestTime }),
    });

    const data = await response.json();
    setStatusMessage(data.status);
  };


  return (
    <>
    <div className='header3'>
    <div className='header4'>
  <a href=""><img src="../../public/images/p2.png" alt="" /></a>
    <nav>
    <div className="nav-link">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">Contact Us</a></li>
      <li ><a href="">Sign up</a></li>
      <li ><a href="">Log In</a></li>
    </ul>
    </div>
    </nav>
  </div>
  </div>
  <div className="part3">
    <button className="A">Farmer</button>
    <button className="B">Farmer</button>
  </div>
  <div className="weather">
    <h2>Meru</h2>
    <img className="pic1"  src="../../public/images/icon4.png" alt="" />
    <img className="pic2" src="../../public/images/icon6.png" alt="" />
    <img className="pic3" src="../../public/images/icon5.png" alt="" />
    <h3>June 9th</h3>
    <h4>23 Degrees</h4>
    <h5>Strong winds</h5>
  </div>
  <div className="harvests">
        <div className="harvest1">
          <form onSubmit={handleTrack}>
            <h2>Details</h2>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" required />
            <div className="flex">
              <label className="C" htmlFor="price">Harvest time</label>
              <label className="D" htmlFor="harvesttime">Price</label>
            </div>
            <input
              className="E"
              type="datetime-local"
              id="harvesttime"
              name="harvesttime"
              required
              onChange={(e) => setHarvestTime(e.target.value)}
            />
            <input className="F" type="text" id="price" name="price" required />
            <label htmlFor="contact">Contact</label>
            <input type="tel" id="contact" name="contact" required />
            <button className="track" type="submit">Track</button>
            <h4>{statusMessage}</h4>
          </form>
        </div>
      </div>
    
    <footer>
    <a href=""><img src="../../public/images/p2.png" alt="" /></a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus libero id natus asperiores ipsum consequatur, eum eveniet, ullam ipsa aut autem obcaecati. Obcaecati laborum saepe totam temporibus quasi error.</p>
    <div className="contents">
    <a href="https://www.instagram.com/"><img src="../../public/images/insta.png" alt="" /></a>
    <a href="https://twitter.com/"><img src="../../public/images/twitter.png" alt="" /></a>
    <a href="https://youtube.com/"><img src="../../public/images/youtube.png" alt="" /></a>
    <a href="https://web.whatsapp.com/"><img src="../../public/images/whatsapp.png" alt="" /></a>
    </div>
    <p className='boom'>AgriGrow © 2024 Privacy Policy</p>
    <ul>
    <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Contact Us</a></li>
        <li ><a href="">Sign up</a></li>
        <li ><a href="">Log In</a></li>
        </ul>
    </footer>
  </>
  )
}
