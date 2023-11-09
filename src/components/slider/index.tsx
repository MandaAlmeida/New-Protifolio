import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Language from "./components/language";

function SimpleSlider() {
  let settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1240px] h-16">
      <Slider {...settings}>
        <Language className="bg-[#FF4D00]" text="Git" />
        <Language className="bg-[#2BE5E9]" text="React" />
        <Language className="bg-[#FF0000]" text="Html" />
        <Language className="bg-[#001AFF]" text="Css" />
        <Language className="bg-black" text="Github" />
        <Language className="bg-[#04B400]" text="Node.js" />
        <Language className="bg-[#DB00FF]" text="Vtex" />
        <Language className="bg-[#00B7C2]" text="Tailwind" />
        <Language className="bg-[#FFE500]" text="Javascript" />
        <Language className="bg-[#0085FF]" text="Typescript" />
        <Language className="bg-[#FA00FF]" text="Sass" />
        <Language className="bg-[#8000FF]" text="Vite" />
      </Slider>
    </div>
  );
}

export default SimpleSlider;
