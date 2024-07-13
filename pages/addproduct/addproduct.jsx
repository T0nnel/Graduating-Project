import "./addproduct.css"
import { useState } from 'react';


export const Addproduct = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [harvestTime, setHarvestTime] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { description, location, harvestTime, price, contact };

    try {
      const response = await fetch('http://localhost:5000/addproducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        console.log('Product added successfully!');
        // Reset form
        setDescription('');
        setLocation('');
        setHarvestTime('');
        setPrice('');
        setContact('');
      } else {
        const errorData = await response.json();
        console.error('Failed to add product:', errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
        <form onSubmit={handleSubmit}>
            <h2>Details</h2>
            <label htmlFor="name">Description</label>
            <input type="text" id="description" name="description"  onChange={e => setDescription(e.target.value)}  required />
            <label htmlFor="name">Location</label>
            <input type="text" id="location" name="location" onChange={e => setLocation(e.target.value)} required />
            <div className="flex">
            <label className="C" htmlFor="name">Harvest Time</label>
            <label className="D" htmlFor="name">Price</label>
            </div>
            <input className="E" type="text" id="harvesttime" onChange={e => setHarvestTime(e.target.value)} name="harvesttime" required />
            <input className="F" type="text" id="price" onChange={e => setPrice(e.target.value)} name="price" required />
            <label htmlFor="name">Contact</label>
            <input type="tel" id="contact" onChange={e => setContact(e.target.value)} name="contact" required  />
            <button  type="submit" className="Dodo">Post</button>
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
