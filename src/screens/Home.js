import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "bootstrap/dist/css/bootstrap.min.css";

import slider1 from "./slider1.png";
import slider2 from "./slider2.jpg";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src={slider1} alt="..." />
          </div>

          <div className="embla__slide">
            <img src={slider2} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
