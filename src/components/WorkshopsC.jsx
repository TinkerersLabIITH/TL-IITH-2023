import { Carousel } from "flowbite-react"
import a from "../assets/tl-workshops/1.jpeg"
import b from "../assets/tl-workshops/2.jpeg"
import c from "../assets/tl-workshops/3.jpeg"
import d from "../assets/tl-workshops/4.jpeg"
import e from "../assets/tl-workshops/5.jpeg"
import f from "../assets/tl-workshops/6.jpeg"
import g from "../assets/tl-workshops/7.jpeg"
import h from "../assets/tl-workshops/8.jpeg"
import i from "../assets/tl-workshops/9.jpeg"


export function WorkshopsC() {
  return (
    <div className="h-[20rem] sm:h-[25rem] xl:h-[50rem] 2xl:h-[60rem] 3xl:h-[60rem]">
      <Carousel slideInterval={1500}>
        <img src={a} alt="..." />
        <img src={b} alt="..." />
        <img src={c} alt="..." />
        <img src={d} alt="..." />
        <img src={e} alt="..." />
        <img src={f} alt="..." />
        <img src={g} alt="..." />
        <img src={h} alt="..." />
        <img src={i} alt="..." />
      </Carousel>
    </div>
  );
}
