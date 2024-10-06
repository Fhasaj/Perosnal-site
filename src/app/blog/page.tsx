"use client";
import '../globals.css';
import Carousel from '../components/carousel';

import Test from '../data/testData';
import BlogData from '../data/testBlogData';


import ServiceCardBlog from '../components/BlogServiceCard';


export default function Home() {
  return (
    <div>

      <Carousel items={Test} />
      <div className='px-56'>
      <ServiceCardBlog items={BlogData} />
      </div>

    </div>
  );
}