import React, { useState } from 'react';
import './FoodDrink.css';

function FoodDrink() {
  const [activeTab, setActiveTab] = useState('yiyecek'); // Default active tab is 'yiyecek'

  return (
    <div className="food-drink-container">
      <button
        className={`food-drink-button ${activeTab === 'içecek' ? 'active' : ''}`}
        onClick={() => setActiveTab('içecek')}
      >
        İçecek
      </button>
      <button
        className={`food-drink-button ${activeTab === 'yiyecek' ? 'active' : ''}`}
        onClick={() => setActiveTab('yiyecek')}
      >
        Yiyecek
      </button>
    </div>
  );
}

export default FoodDrink;
