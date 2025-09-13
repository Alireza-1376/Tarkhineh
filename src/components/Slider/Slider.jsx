import { Carousel } from "flowbite-react";

export function MainCarousel() {
  return (
    <div dir="ltr" className=" md:h-80 h-56 relative">
      <Carousel className="bg-black overflow-x-hidden">
        <img className="object-cover" src="/images/slides/slide1.svg" alt="..." />
        <img className="object-cover" src="/images/slides/slide2.svg" alt="..." />
        <img className="object-cover" src="/images/slides/slide3.svg" alt="..." />
      </Carousel>
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 flex flex-col items-center md:gap-12 gap-3">
        <h2 className="md:text-[40px] text-white font-bold text-base text-nowrap mt-16 md:mt-20">تجربه غذای سالم و گیاهی به سبک ترخینه</h2>
        <button className="text-white bg-primary rounded-lg md:px-4 p-2 text-sm md:text-base mb-4 md:mb-0">سفارش آنلاین غذا</button>
      </div>
      <div className="abs">
      </div>
    </div>
  );
}
