import React from 'react'
import img1 from "../../images/hero_bg_3.jpg";
import img2 from "../../images/hero_bg_2.jpg";
import img3 from "../../images/hero_bg_1.jpg";

function Home() {
  return (
    <>


      <div className="hero">
      <div className="hero-slide">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
        
        {/* <div className="hero-slide">
          <div
            className="img overlay"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="img overlay"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div
            className="img overlay"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
        </div> */}

        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center">
              <h1 className="heading" data-aos="fade-up">
                Easiest way to find your dream home
              </h1>
              <form
                action="#"
                className="narrow-w form-search d-flex align-items-stretch mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  className="form-control px-4"
                  placeholder="Your ZIP code or City. e.g. New York"
                />
                <button type="submit" className="btn btn-primary">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
