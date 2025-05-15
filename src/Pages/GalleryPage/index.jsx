// src/components/WorkGallery.js
import React, { useState } from 'react';
import './index.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Image imports
import Collage1 from '../../Assets/Images/gallery-images/gallery-1.png';
import Collage2 from '../../Assets/Images/gallery-images/gallery-2.png';
import Collage3 from '../../Assets/Images/gallery-images/gallery-3.png';
import Collage4 from '../../Assets/Images/gallery-images/gallery-4.png';
import Collage5 from '../../Assets/Images/gallery-images/gallery-5.png';
import Collage6 from '../../Assets/Images/gallery-images/gallery-6.png';
import Collage7 from '../../Assets/Images/gallery-images/gallery-7.png';
import Collage8 from '../../Assets/Images/gallery-images/gallery-8.png';
import Collage9 from '../../Assets/Images/gallery-images/gallery-9.png';
import Collage10 from '../../Assets/Images/gallery-images/gallery-10.png';
import Collage11 from '../../Assets/Images/gallery-images/gallery-11.png';
import Collage12 from '../../Assets/Images/gallery-images/gallery-12.png';
import Collage13 from '../../Assets/Images/gallery-images/gallery-13.png';

const categories = ['All', 'Sketchbooks', 'Motion', 'Stickers', 'Zines'];

const allItems = [
  { id: 1, category: 'Sketchbooks', img: Collage1 },
  { id: 2, category: 'Motion', img: Collage2 },
  { id: 3, category: 'Stickers', img: Collage3 },
  { id: 4, category: 'Sketchbooks', img: Collage4 },
  { id: 5, category: 'Zines', img: Collage5 },
  { id: 6, category: 'Motion', img: Collage6 },
  { id: 7, category: 'Sketchbooks', img: Collage7 },
  { id: 8, category: 'Zines', img: Collage8 },
  { id: 9, category: 'Motion', img: Collage9 },
  { id: 10, category: 'Sketchbooks', img: Collage10 },
  { id: 11, category: 'Zines', img: Collage11 },
  { id: 12, category: 'Sketchbooks', img: Collage12 },
  { id: 13, category: 'Zines', img: Collage13 },
];

const WorkGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? allItems
      : allItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Header />
      <section className="work-gallery">
        <h1 className="gallery-heading">
          Here's a compilation of my work including<br /> personal as well as client projects.
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
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.category} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkGallery;
