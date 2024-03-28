import React, { useRef, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "./Nav.css";
import { RiMenuLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import LogoDark from "../../assets/icons/logo-dark.webp";

const Nav = () => {
  const navRef = useRef();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const scrollUp = currentScrollPosition < lastScrollPosition;

      if (scrollUp) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const offset = 100;

      if (scrollTop > offset) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirectToTelegramProfile = () => {
    Swal.fire({
      title: 'Kursga buyurtma berish',
      text: 'S.M.A.R.T kursiga yozilish va buyurtma berish uchun quyidagi raqam bilan bog`laning:',
      icon: 'info',
      confirmButtonText: 'Telegram',
      reverseButtons: true,
      showCloseButton: true,
      preConfirm: () => {
        window.open('https://t.me/techSarvarbek', '_blank');
      },
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar justify-content-around ${
        !isNavVisible ? "hidden" : ""
      }`}
    >
      <div>
        <a href="#home">
          <img
            src={LogoDark}
            style={{ width: "120px", height: "40px" }}
            alt="logo"
          />
        </a>
      </div>

      <div className={`nav-items ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#basicservices" onClick={closeMenu}>
          Basic Services
        </a>
        <a href="#info" onClick={closeMenu}>
          Info
        </a>

        <button
          onClick={redirectToTelegramProfile}
          type="button"
          className="contact-btn"
        >
          Contact
        </button>
      </div>

      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <AiOutlineClose color="#fff" size={24} />
        ) : (
          <RiMenuLine color="#fff" size={24} />
        )}
      </div>
    </nav>
  );
};

export default Nav;