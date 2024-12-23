import React, { useState } from 'react';
import MenuCategory from '../MenuCategory/MenuCategory';
import './Menu.css';
import anayemek from "../../assets/ana-yemek.webp";
import corba from "../../assets/corba.webp";
import aperatif from "../../assets/aperatif.webp";
import alkolsuz from "../../assets/alkolsuz.webp";
import alkollu from "../../assets/alkollu.webp";
import kahvem from "../../assets/kahvem.jpg";
import cerez from '../../assets/cerez.png';
import tatli from '../../assets/tatlı.webp';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('food');
  const [activeSubcategory, setActiveSubcategory] = useState('');

  const subcategories = {
    food: [
      { key: 'Ana-Yemek', image: anayemek },
      { key: 'Çorba', image: corba },
      { key: 'Aperatif', image: aperatif },
      { key: 'Tatlı', image: tatli },
      { key: 'Çerez', image: cerez },
    ],
    drink: [
      { key: 'Kahve', image: kahvem },
      { key: 'Alkolsüz', image: alkolsuz },
      { key: 'Alkollü', image: alkollu }
    ]
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(''); // Alt kategori seçimlerini sıfırlar
  };

  // Subcategory sayısına göre dinamik sınıf belirleme
  const subcategoryClass = subcategories[activeCategory].length <= 3 
    ? 'subcategory-switch-center' 
    : 'subcategory-switch-start';

  return (
    <div className="menu">
      <div className="category-switch">
        <button
          className={`food-drink-button ${activeCategory === 'food' ? 'active' : 'not-active'}`}
          onClick={() => handleCategoryClick('food')}
        >
          Yiyecek
        </button>
        <button
          className={`food-drink-button ${activeCategory === 'drink' ? 'active' : 'not-active'}`}
          onClick={() => handleCategoryClick('drink')}
        >
          İçecek
        </button>
      </div>
      <div className={`subcategory-switch ${subcategoryClass}`}>
        {subcategories[activeCategory].map((sub) => (
          <div
            key={sub.key}
            onClick={() => setActiveSubcategory(sub.key === activeSubcategory ? '' : sub.key)}
            className={`subcategory-item ${activeSubcategory === sub.key ? 'active' : ''}`}
          >
            <div className="subcategory-image-wrapper">
              <img
                src={sub.image}
                alt={sub.key}
                className="subcategory-image"
              />
            </div>
            <p className="subcategory-text">{sub.key.replace('-', ' ')}</p>
          </div>
        ))}
      </div>
      <MenuCategory category={activeCategory} subcategory={activeSubcategory} />
    </div>
  );
}

export default Menu;
