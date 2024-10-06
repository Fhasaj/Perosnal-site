import React from "react";
import ServiceCard from "./serviceCard";

interface ServiceCardItem {
  image: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
  tags: string[];
  target: string;
}

interface CustomServiceCardProps {
  items: ServiceCardItem[];
}

export default function ServiceCardBlog({ items }: CustomServiceCardProps): JSX.Element {
  return (

    <div className="bg-backgroundColour flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-center items-center text-center mb-2 ">
        {items.map((item, index) => (
          <div key={index} className="col-span-1">
            <ServiceCard
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
              buttonText="Learn More"
              // tags={item.tags}
              target="_self"
            />
          </div>
        ))}
      </div>
    </div>
  );
}