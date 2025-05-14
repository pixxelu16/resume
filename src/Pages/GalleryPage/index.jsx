// src/components/WorkGallery.js
import React, { useState } from 'react';
import './index.css'; // Your styles
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Collage1 from '../../Assets/Images/gallery-images/gallery-1.png';
import Collage2 from '../../Assets/Images/gallery-images/gallery-2.png';
import Collage3 from '../../Assets/Images/gallery-images/gallery-3.png';
import Collage4 from '../../Assets/Images/gallery-images/gallery-4.png';
import Collage5 from '../../Assets/Images/gallery-images/gallery-5.png';
import Collage6 from '../../Assets/Images/gallery-images/gallery-6.png';
import Collage7 from '../../Assets/Images/gallery-images/gallery-7.png';
import Collage8 from '../../Assets/Images/gallery-images/gallery-8.png';

const categories = ['All', 'Sketchbooks', 'Motion', 'Stickers', 'Zines'];

const allItems = [
  { id: 1, category: 'Sketchbooks', img: Collage1 },
  { id: 2, category: 'Motion',      img: Collage2 },
  { id: 3, category: 'Stickers',    img: Collage3 },
  { id: 4, category: 'Sketchbooks', img: Collage4 },
  { id: 5, category: 'Zines',       img: Collage5 },
  { id: 6, category: 'Motion',      img: Collage6 },
  { id: 7, category: 'Sketchbooks', img: Collage7 },
  { id: 8, category: 'Zines',       img: Collage8 },
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter(item => item.category === activeCategory);

  return (
    <>
    <Header/>
    <section className="work-gallery">
      <h1 className="font-52">
        Here's a compilation of my work including<br/> personal as well as client projects.
      </h1>

      <div className="filter-nav">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div className="gallery-item" key={item.id}>
            <img src={item.img} alt={item.category} />
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default WorkGallery;
