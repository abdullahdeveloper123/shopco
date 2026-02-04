import React from 'react';
import { useNavigate } from 'react-router-dom';
import browse1 from '../assets/img/image 11.svg';
import browse2 from '../assets/img/image 12.svg';
import browse3 from '../assets/img/image 13.svg';
import browse4 from '../assets/img/image 14.svg';


const BrowseByStyle = () => {
  const navigate = useNavigate();

  const styles = [
    {
      id: 1,
      title: 'Casual',
      image: browse1,
      className: 'casual-card',
      category: 'casual'
    },
    {
      id: 2,
      title: 'Formal',
      image: browse3,
      className: 'formal-card',
      category: 'formal'
    },
    {
      id: 3,
      title: 'Party',
      image: browse2,
      className: 'party-card',
      category: 'party'
    },
    {
      id: 4,
      title: 'Gym',
      image: browse4,
      className: 'gym-card',
      category: 'gym'
    }
  ];

  const handleStyleClick = (category) => {
    navigate(`/catalog/${category}`);
  };

  return (
    <section className="browse-by-style">
      <div className="container">
        <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
        
        <div className="styles-grid">
          <div className="row">
            {/* First Row - Casual (smaller) and Formal (larger) */}
            <div className="col-lg-5 col-md-6 mb-4">
              <div 
                className={`style-card ${styles[0].className}`}
                onClick={() => handleStyleClick(styles[0].category)}
              >
                <img src={styles[0].image} alt={styles[0].title} />
                <div className="style-overlay">
                  <h3 className="style-title">{styles[0].title}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 mb-4">
              <div 
                className={`style-card ${styles[1].className}`}
                onClick={() => handleStyleClick(styles[1].category)}
              >
                <img src={styles[1].image} alt={styles[1].title} />
                <div className="style-overlay">
                  <h3 className="style-title">{styles[1].title}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            {/* Second Row - Party (larger) and Gym (smaller) */}
            <div className="col-lg-7 col-md-6 mb-4">
              <div 
                className={`style-card ${styles[2].className}`}
                onClick={() => handleStyleClick(styles[2].category)}
              >
                <img src={styles[2].image} alt={styles[2].title} />
                <div className="style-overlay">
                  <h3 className="style-title">{styles[2].title}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-4">
              <div 
                className={`style-card ${styles[3].className}`}
                onClick={() => handleStyleClick(styles[3].category)}
              >
                <img src={styles[3].image} alt={styles[3].title} />
                <div className="style-overlay">
                  <h3 className="style-title">{styles[3].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;