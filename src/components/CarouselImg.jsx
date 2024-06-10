import { Carousel } from "flowbite-react";
import thrust1 from "../assets/imagescroll/imagescroll1.jpg"
import thrust2 from "../assets/imagescroll/thrust2.jpg"
import thrust from "../assets/imagescroll/thrust.jpg"
import thrust3 from "../assets/imagescroll/thrust3.jpg"
import workshop from "../assets/imagescroll/workshop.jpg"
import tn from "../assets/imagescroll/tinkerersnight2024.png"

export function CarouselImg() {
  return (
    <div className="h-[20rem] sm:h-[25rem] xl:h-[30rem] 2xl:h-[40rem]">
      <Carousel slideInterval={2000}>
        <img src={thrust} alt="..." />
        <img src={thrust2} alt="..." />
        <img src={tn} alt="..." />
        <img src={thrust3} alt="..." />
        <img src={workshop} alt="..." />
      </Carousel>
    </div>
  );
}
