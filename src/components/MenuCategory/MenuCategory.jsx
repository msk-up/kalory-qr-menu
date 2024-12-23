import React from 'react';
import tavuk from '../../assets/tavuk.jpeg';
import kofte from '../../assets/kofte.webp';
import mercimek from '../../assets/mercimek.webp';
import patates from '../../assets/patates.webp';
import bud from '../../assets/bud.jpeg';
import kahve from '../../assets/kahve.webp';
import limonata from '../../assets/limonata.jpeg';
import tavukgogsu from '../../assets/tavukgogsu.jpg';
import cheesecake from '../../assets/limonlucheesecake.jpeg';
import yerfistigi from '../../assets/yerfistigi.jpg';
import antepfistigi from '../../assets/antepfistigi.webp';


function MenuCategory({ category, subcategory }) {
  const items = getItems(category, subcategory);

  return (
    <div className="menu-category">
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="menu-item-content"> 
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="item-price">₺{item.price}</div>
          </div>
          <div className="nutrition">
                <span className="kalori">Kcal: {item.kcal}</span>
                <span className="protein">Protein: {item.protein}g</span>
                <span className="fats">Yağ: {item.fat}g</span>
                <span className="karb">Karb: {item.carb}g</span>
              </div>
          {index !== items.length - 1 && <hr className="menu-item-divider" />}
        </React.Fragment>
        
      ))}
    </div>
  );
}

function getItems(category, subcategory) {
  const allItems = {
    food: {
      'Ana-Yemek': [
        {
          name: 'Tavuk Izgara Şöleni',
          description: 'Sebzelerle (Kapya Biber, Patlıcan, Yeşil Biber ve Mantar) ile sotelenmiş baharatlı tavuk göğsü',
          price: 260,
          kcal: 420,
          protein: 52,
          fat: 20,
          carb: 50,
          image: tavuk
        },
        {
          name: 'Köfte Tutkunu Menüsü',
          description: 'Odun ateşinde pişirdiğimiz köftemiz, yanında pilav ve salata ile servis edilir.',
          price: 280,
          kcal: 520,
          protein: 46,
          fat: 34,
          carb: 66,
          image: kofte
        }
      ],
      Çorba: [
        {
          name: 'Mercimek Çorbası',
          description: 'Kadife kıvamında mercimek çorbamız',
          price: 70,
          kcal: 150,
          protein: 10,
          fat: 5,
          carb: 20,
          image: mercimek
        }
      ],
      Aperatif: [
        {
          name: 'Patates Kızartması',
          description: 'Çıtır çıtır patates kızartması',
          price: 50,
          kcal: 300,
          protein: 4,
          fat: 15,
          carb: 40,
          image: patates
        }
      ],
      'Tatlı': [
        {
          name: 'Tavuk Göğsü',
          description: 'Gerçek tavuk göğsü, ustasından!',
          price: 180,
          kcal: 270,
          protein: 12,
          fat: 10,
          carb: 42,
          image: tavukgogsu
        },
        {
          name: 'Cheesecake',
          description: 'Limonlu sos ve dondurma ile servis edilir.',
          price: 160,
          kcal: 320,
          protein: 16,
          fat: 14,
          carb: 46,
          image: cheesecake
        }
      ],
      'Çerez': [
        {
          name: 'Yer Fıstığı',
          description: 'Yer fıstığı tabağı',
          price: 90,
          kcal: 420,
          protein: 20,
          fat: 40,
          carb: 8,
          image: yerfistigi
        },
        {
          name: 'Antep Fıstığı',
          description: 'Antep fıstığı tabağı',
          price: 120,
          kcal: 420,
          protein: 18,
          fat: 42,
          carb: 10,
          image: antepfistigi
        }
      ]
    },
    drink: {
      Kahve: [
        {
          name: 'Türk Kahvesi',
          description: 'Geleneksel Türk kahvesi',
          price: 80,
          kcal: 50,
          protein: 1,
          fat: 2,
          carb: 5,
          image: kahve
        }
      ],
      Alkolsüz: [
        {
          name: 'Limonata',
          description: 'Serinletici limonata',
          price: 60,
          kcal: 120,
          protein: 0,
          fat: 0,
          carb: 30,
          image: limonata
        }
      ],
      Alkollü: [
        {
          name: 'Bud',
          description: '%4,5 Alkollü 50cl Amerikan Lager Bira',
          price: 120,
          kcal: 190,
          protein: 1,
          fat: 1,
          carb: 27,
          image: bud
        }
      ]
    }
  };

  if (!subcategory) {
    return Object.values(allItems[category]).flat();
  }

  return allItems[category][subcategory] || [];
}

export default MenuCategory;
