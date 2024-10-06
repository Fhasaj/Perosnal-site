import React from "react";
import Image from "next/image";
import { Carousel, Typography, Button } from "@material-tailwind/react";

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

interface CustomCarouselProps {
  items: CarouselItem[];
}

export default function CustomCarousel({ items }: CustomCarouselProps): JSX.Element {
  return (
    <div className="pl-1 md:pl-5 lg:pl-10 pr-1 md:pr-5 lg:pr-10 bg-backgroundColour relative z-10 ">
      <Carousel
        className="rounded-lg"
        autoplay={true}
        autoplayDelay={12000}
        loop={true}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {items.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <Image
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-md md:text-4xl lg:text-5xl"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-2 lg:mb-12 hidden sm:block opacity-80 text-sm md:text-lg"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {item.description}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button
                    size="lg"
                    color="white"
                    variant="filled"
                    className="font-FireSans-SemiBold text-textColour  bg-backgroundColour hover:bg-accentColourGR transition duration-300 ease-in-out hover:text-SecondaryColour rounded-md"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    onClick={() => window.open(item.link, "_self")}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}