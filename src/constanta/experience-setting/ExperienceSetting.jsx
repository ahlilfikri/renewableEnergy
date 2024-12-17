// import { SlickArrowLeft, SlickArrowRight } from './SlickArrow';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  autoplay: true,
//   nextArrow: <SlickArrowRight />,
//   prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
};

export default settings;
