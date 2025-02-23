import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // 🔥 URL'den slug almak için
import "./Hero.css";
import kaloryco_logo from "../../assets/kaloryco_logo.svg";
import Loader from "../Loader/Loader"; 

function Hero() {
  const { slug } = useParams(); // 📌 URL'deki restoran slug'ını al
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/qrmenu/${slug}`);
        if (!response.ok) throw new Error("Restoran bilgileri alınamadı!");
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error("Restoran verisi alınırken hata oluştu:", error);
      }
    };

    fetchRestaurant();
  }, [slug]);

  if (!restaurant) return  <Loader /> ;

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <img src={kaloryco_logo} alt="Kalory Logo" />
        </div>
        <div className="hero-restaurant">
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
        <div className="hero-slider">
          <div className="overlay"></div>
          <img
            className="hero-image"
            src={restaurant.image ? `http://localhost:5000${restaurant.image}` : "/placeholder.jpg"}
            alt="Restaurant"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
