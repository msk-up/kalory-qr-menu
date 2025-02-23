import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader"; 

function MenuCategory({ category, subcategory }) {
  const { slug } = useParams(); // 📌 URL'deki restoran slug'ını al
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/qrmenu/${slug}/menu`);
        if (!response.ok) throw new Error("Menü öğeleri alınamadı!");

        const data = await response.json();

        console.log("📌 Gelen Menü Verisi:", data); // Debug için

        // 📌 **Kategoriye göre filtrele**
        const filteredItems = data.menuItems.filter(
          (item) =>
            item.category.mainCategory === category &&
            (!subcategory || item.category.name === subcategory) // Alt kategori seçilmişse ona göre filtrele
        );

        setItems(filteredItems);
      } catch (error) {
        console.error("Menü öğeleri alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [slug, category, subcategory]);

  // 📌 **Resim URL oluşturma**
  const getImageUrl = (imagePath) => {
    return imagePath ? `http://localhost:5000${imagePath}` : "/placeholder.jpg";
  };

  return (
    <div className="menu-category">
      {loading ? (
         <Loader /> 
      ) : items.length === 0 ? (
        <p className="empty-category-text">Bu kategoride ürün bulunmamaktadır.</p>
      ) : (
        items.map((item, index) => (
          <React.Fragment key={item._id}>
            <div className="menu-item">
              <img src={getImageUrl(item.image)} alt={item.name} className="menu-item-image" />
              <div className="menu-item-content">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="item-price">₺{item.price}</div>
            </div>

            {/* 📌 **Kalori ve Makro Değerleri** */}
            <div className="nutrition">
              <span className="kalori">
                Enerji: {item.nutritional_information?.calories_total ?? "-"} kcal
              </span>
              <span className="protein">
                Protein: {item.nutritional_information?.protein_grams_total ?? "-"} g
              </span>
              <span className="fats">
                Yağ: {item.nutritional_information?.fat_grams_total ?? "-"} g
              </span>
              <span className="karb">
                Karb: {item.nutritional_information?.carbonhydrate_grams_total ?? "-"} g
              </span>
            </div>

            {/* 📌 **Öğeler arasında çizgi** */}
            {index !== items.length - 1 && <hr className="menu-item-divider" />}
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default MenuCategory;
