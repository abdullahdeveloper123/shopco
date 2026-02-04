import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true
    },
    {
      id: 3,
      name: "James L.",
      rating: 5,
      review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true
    },
    {
      id: 4,
      name: "Monika",
      rating: 5,
      review: "Shop.co has completely transformed my wardrobe. The quality is outstanding and the customer service is exceptional. I highly recommend it to anyone looking for premium fashion.",
      verified: true
    },
    {
      id: 5,
      name: "David R.",
      rating: 5,
      review: "The attention to detail in every garment is impressive. From the fabric quality to the stitching, everything is top-notch. Shop.co has become my go-to for all fashion needs.",
      verified: true
    }
  ];

  const sectionStyle = {
    padding: '80px 0',
    background: '#ffffff',
    overflow: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    color: '#000000',
    margin: '0',
    letterSpacing: '-0.02em'
  };

  const navButtonsStyle = {
    display: 'flex',
    gap: '16px'
  };

  const navBtnStyle = {
    width: '48px',
    height: '48px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#000000'
  };

  const reviewCardStyle = {
    background: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    padding: '28px 32px',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const ratingStyle = {
    display: 'flex',
    gap: '2px',
    marginBottom: '16px'
  };

  const starStyle = {
    fontSize: '20px',
    color: '#ffc633'
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  };

  const reviewerInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px'
  };

  const reviewerNameStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000'
  };

  const verifiedBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const reviewTextStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: 'rgba(0, 0, 0, 0.6)',
    margin: '0',
    flex: 1,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical'
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <div style={headerStyle}>
          <h2 style={titleStyle} className='section-title'>OUR HAPPY CUSTOMERS</h2>
          <div style={navButtonsStyle}>
            <button style={navBtnStyle} id="reviews-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button style={navBtnStyle} id="reviews-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '#reviews-prev',
              nextEl: '#reviews-next',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            style={{
              '--swiper-navigation-color': '#000',
              '--swiper-pagination-color': '#000',
              paddingBottom: '50px'
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} style={{ height: 'auto', display: 'flex' }}>
                <div style={reviewCardStyle}>
                  <div style={ratingStyle}>
                    <span style={starStyle}>★</span>
                    <span style={starStyle}>★</span>
                    <span style={starStyle}>★</span>
                    <span style={starStyle}>★</span>
                    <span style={starStyle}>★</span>
                  </div>
                  <div style={contentStyle}>
                    <div style={reviewerInfoStyle}>
                      <span style={reviewerNameStyle}>{review.name}</span>
                      {review.verified && (
                        <span style={verifiedBadgeStyle}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 0L9.798 2.202L12.944 1.056L13.944 4.056L16.944 5.056L15.798 8.202L16.944 11.348L13.944 12.348L12.944 15.348L9.798 14.202L8 16L6.202 14.202L3.056 15.348L2.056 12.348L-0.944 11.348L0.202 8.202L-0.944 5.056L2.056 4.056L3.056 1.056L6.202 2.202L8 0Z" fill="#01AB31"/>
                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </div>
                    <p style={reviewTextStyle}>"{review.review}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;