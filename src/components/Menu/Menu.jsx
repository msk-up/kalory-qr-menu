import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuCategory from "../MenuCategory/MenuCategory";
import "./Menu.css";

function Menu() {
  const { slug } = useParams(); // 📌 URL'deki restoran slug'ını al
  const [activeCategory, setActiveCategory] = useState("food");
  const [activeSubcategory, setActiveSubcategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/qrmenu/${slug}/menu`);
        if (!response.ok) throw new Error("Menü verileri alınamadı!");

        const data = await response.json();

        // 📌 **Gelen menü verisinden kategorileri al**
        if (data.categories) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Menü kategorileri alınırken hata oluştu:", error);
      }
    };

    fetchMenuData();
  }, [slug]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(""); // **Alt kategori seçimini sıfırla**
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory === activeSubcategory ? "" : subcategory);
  };

  return (
    <div className="menu">
      {/* 📌 **Ana Kategori Butonları** */}
      <div className="category-switch">
        <button
          className={`food-drink-button ${activeCategory === "food" ? "active" : "not-active"}`}
          onClick={() => handleCategoryClick("food")}
        >
          Yiyecek
        </button>
        <button
          className={`food-drink-button ${activeCategory === "drink" ? "active" : "not-active"}`}
          onClick={() => handleCategoryClick("drink")}
        >
          İçecek
        </button>
      </div>

      {/* 📌 **Alt Kategoriler (Yemek & İçecek için)** */}
      <div className="subcategory-switch">
        {categories
          .filter((cat) => cat.mainCategory === activeCategory)
          .map((sub) => (
            <div
              key={sub._id}
              className={`subcategory-item ${activeSubcategory === sub.name ? "active" : ""}`}
              onClick={() => handleSubcategoryClick(sub.name)}
            >
              <div className="subcategory-image-wrapper">
                <img src={`http://localhost:5000${sub.image}`} alt={sub.name} className="subcategory-image" />
              </div>
              <p className="subcategory-text">{sub.name}</p>
            </div>
          ))}
      </div>

      {/* 📌 **Seçilen Kategoriye Ait Menü Öğeleri** */}
      <MenuCategory category={activeCategory} subcategory={activeSubcategory} />
    </div>
  );
}

export default Menu;
