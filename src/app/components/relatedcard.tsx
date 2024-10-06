import React from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@/app/components/buttons";

interface ServiceCardItem {
  image: StaticImageData;
  title: string;
  link: string;
  buttonText: string;
  extra?: string;
}

interface CustomServiceCardProps {
  items: ServiceCardItem[];
}

export default function ServiceCardBlog({ items }: CustomServiceCardProps): JSX.Element {
  return (
    <div className="bg-backgroundColour flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-center items-center text-center mb-2 max-h-96 overflow-auto">
        {items.slice(0, 3).map((item, index) => (
          <div key={index} className={`w-auto h-auto ${item.extra}`}>
            <div className="bg-SecondaryColour overflow-x-auto w-full h-full rounded-lg flex flex-col">
              <div className="flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-t-lg"
                />
                <h1 className="text-3xl mt-5 underline underline-offset-4 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
                  {item.title}
                </h1>
              </div>
              <div className="flex-shrink-0 p-4">
                <Button
                  link={item.link}
                  text={item.buttonText}
                  target="_self"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}