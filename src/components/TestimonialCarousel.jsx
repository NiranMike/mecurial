import  { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "I scaled up my company’s monthly revenue by 45%",
    description: "Error voluptate adipisci. Quas a delectus optio ut. Non consequatur voluptatem quia rerum cum similique enim.",
    name: "Orimadegun Promise",
    title: "CEO LBT (raised $5M in funding)"
  },
  {
    quote: "I scaled up my company’s monthly revenue by 45%",
    description: "Error voluptate adipisci. Quas a delectus optio ut. Non consequatur voluptatem quia rerum cum similique enim.",
    name: "Orimadegun Promise",
    title: "CEO LBT (raised $5M in funding)"
  },
  {
    quote: "I scaled up my company’s monthly revenue by 45%",
    description: "Error voluptate adipisci. Quas a delectus optio ut. Non consequatur voluptatem quia rerum cum similique enim.",
    name: "Orimadegun Promise",
    title: "CEO LBT (raised $5M in funding)"
  },
  // Add more testimonials here
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleNext = () => {
    setClickedButton('next');
    sliderRef.current.slickNext();
    setTimeout(() => setClickedButton(null), 200); // Reset button state after 200ms
  };

  const handlePrev = () => {
    setClickedButton('prev');
    sliderRef.current.slickPrev();
    setTimeout(() => setClickedButton(null), 200); // Reset button state after 200ms
  };

  return (
    <div id='testimonials' className="mx-4 md:mx-[200px] my-8 md:my-[100px] relative">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 bwmgradual-bold">See what others are saying about us</h2>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 md:p-8">
            <div className="border-2 border-black rounded-lg p-4 md:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-3xl md:text-4xl mb-4 bwmgradual-bold">“</div>
                <p className="text-lg md:text-xl font-bold mb-4 bwmgradual-bold">{testimonial.quote}</p>
                <p className="text-[#3A3A3A] aeonik-light">{testimonial.description}</p>
              </div>
              <div className="mt-6">
                <p className="font-bold bwmgradual-medium">{testimonial.name}</p>
                <p className="text-[#3A3A3A] aeonik-light font-normal">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-controls flex items-center justify-end mt-4 absolute bottom-0 right-0 p-4">
        <button
          className={`custom-prev-arrow mx-2 ${clickedButton === 'prev' ? 'clicked' : ''}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className={`custom-next-arrow mx-2 ${clickedButton === 'next' ? 'clicked' : ''}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
      <div className="custom-dots flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          >
            {`${index + 1}`}
          </button>
        ))}
      </div>
      <style>{`
        .custom-prev-arrow,
        .custom-next-arrow {
          background: white;
          border: 1px solid black;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s;
        }
        
        .custom-prev-arrow:active,
        .custom-next-arrow:active {
          background: blue;
          
        }

        {/* .custom-prev-arrow.clicked,
        .custom-next-arrow.clicked {
          background: blue;
        } */}

        .custom-dots .dot {
          margin: 0 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .custom-dots .dot.active {
          font-weight: bold;
          color: blue;
        }

        .slick-prev, .slick-next{
          display: none !important;
        }

        .slick-prev, .slick-next{
          display: none !important;
        }
      `}</style>
    </div>
  );
}

export default TestimonialCarousel;
