import React, { useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Nav from "../Nav/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
import Bmw from '../../assets/bmw.jpeg'
import Mers from '../../assets/mers.jpeg'
import SuperCar from '../../assets/supercar.jpeg'


const sliderItems = [
  {
    image: Bmw,
    captionTitle: 'First slide label',
    captionText: 'Some representative placeholder content for the first slide.'
  },
  {
    image: Mers,
    captionTitle: 'Middle slide label',
    captionText: 'Some representative placeholder content for the first slide.'
  },
  {
    image: SuperCar,
    captionTitle: 'Last slide label',
    captionText: 'Some representative placeholder content for the first slide.'
  },
];

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = navRef.current;

    if (navbar && scrollTop > 0) {
      navbar.classList.add("scrolled");
    } else if (navbar) {
      navbar.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Nav />
      <br /><br /><br /><br />
      <div className="carousel-div">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          interval={4000}
          autoPlay={true}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          className="carousel"
        >
          {sliderItems.map((slider, index) => (
            <div className="slider-item" key={index}>
              <img src={slider.image} alt="" className="slider-image" />
              <div className="slider-caption">
                <h5 className="caption-title">{slider.captionTitle}</h5>
                <p className="caption-text">{slider.captionText}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </header>
  );
}

export default Header;