import logo from './logo.svg';
import './App.css';
import fontawesome from "fontawesome-4.7";

// const book="assets/images/Booking-img.webp";
const book = require("./assets/images/Booking-img.webp");

function App() {
  return (
    <>
      <div className='ticket-booking'>
        <div className='ticket-booking1'>
          <h1>Boooking</h1>
          <img src={book} />
          <address style={{textAlign:"left", marginLeft:"90px"}}><b style={{fontSize:"20px", borderRadius:"50%", backgroundColor:"blue", padding:"15px",color:"white"}}><span className='fa fa-address-book'></span></b> <span style={{fontWeight:"bold"}}>Address: </span>Amibika park, Near hanuman madhi, Raiya road; Rajkot</address>

          <p style={{textAlign:"left", marginLeft:"90px",marginTop:"30px"}}>
          <b style={{fontSize:"20px", borderRadius:"50%", backgroundColor:"blue", padding:"15px",color:"white"}}><span className='fa fa-phone'></span></b>
          <span style={{fontWeight:"bold"}}>Phone: </span>+91 (9825166515)</p>
        </div>
        <div className='ticket-booking2'>
          <h1>Online Booking</h1>
          <form>
            <label>Name:</label>
            <input className='inp' type="text" placeholder='Enter your name' /> <br/> <br/>
            <label>Email:</label>
            <input className='inp' type="text" placeholder='Enter your E-mail' /> <br/> <br/>
            <label>Date of journey:</label>
            <input className='inp' type="date" placeholder='Enter your E-mail' /> <br/> <br/>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn' type='reset'>Reset</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
