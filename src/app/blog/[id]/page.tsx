
import '../../globals.css';
import type { Metadata } from "next";
import Image, { StaticImageData } from 'next/image';

import RelatedCard from '@/app/components/relatedcard';
import Comments from '@/app/components/comments';
//TESTING: This is a test to see if the image is being loaded from the public folder



interface HomeProps {
  params: {
    id: string;
  };
}

interface BlogPost {
  image: String;
  title: string;
  Author: string;
  Date: string;
  Content: string;
  QuickDescription: string;
}

const TestData: BlogPost = {
  image: '/images/test/img1.jpg',
  title: 'Test Title',
  Author: 'Test Author',
  Date: '01/01/2021',
  QuickDescription: 'This is a test description',
  Content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum dolor ante. Nullam laoreet fringilla mauris nec ornare. Quisque tempor nunc enim, ut porttitor libero vehicula eget. Donec egestas maximus turpis, vitae feugiat ipsum auctor sed. Nunc nec felis ac sem egestas laoreet nec id nibh. Donec vehicula ex id magna lacinia tempus. Phasellus pellentesque dolor eget ex sollicitudin feugiat quis in mi. Praesent varius, magna eget hendrerit ullamcorper, tellus quam fermentum magna, ac convallis ex dolor non ante. Vivamus ipsum felis, aliquet at libero at, venenatis lobortis sapien. Suspendisse volutpat quam cursus tortor elementum mollis. Aliquam eget diam metus. Vestibulum egestas, urna eget posuere fermentum, mi diam consequat felis, non aliquet odio metus sit amet metus. Aliquam sed aliquam ex. Morbi fringilla, urna porttitor scelerisque eleifend, tortor eros vestibulum justo, in blandit massa arcu quis ligula. Donec gravida sollicitudin rutrum. Duis a tincidunt odio. Pellentesque dignissim, nibh in condimentum semper, justo risus bibendum nunc, quis dictum sem nunc nec lacus. Donec feugiat magna nisl, ac bibendum mauris gravida eget. Nullam commodo euismod eros posuere lobortis. Aenean dictum ex ut turpis suscipit fringilla. Nam gravida tincidunt ultricies. Mauris ut varius lectus, in vestibulum lacus. Vivamus sed ex metus. Phasellus imperdiet tincidunt dui. Fusce aliquam mattis feugiat. Maecenas laoreet convallis nisi, id placerat nulla porta ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, est quis molestie efficitur, lacus nisi fermentum nunc, non placerat mi diam at tellus. Sed dapibus nulla non ligula dapibus, non porta enim ultricies. Donec ac purus nec nunc egestas placerat. Etiam et aliquet libero. Morbi volutpat libero et neque pellentesque, ut fermentum sem pharetra "
}

export default function Home({ params }: HomeProps) {

  console.log(params.id);

  return (
<div>

    <div className="relative items-center justify-center text-center px-10 lg:px-[50vh]">
      <div className='flex items-center justify-center mb-5'>
        <Image 
          src={TestData.image} 
          alt="Wordpress Logo" 
          className='rounded-md'
          width={1000} 
          height={700} 
        />
      </div>

      {/* This is going to be its own component */}
      <div className='bg-SecondaryColour text-textColour font-FiraSans-Bold p-10 rounded-lg mb-5'>
        ADD HERE
      </div>


      <div>
        <h1 className='font-FiraSans-Bold underline underline-offset-8 decoration-4 decoration-accentColour text-textColour text-lg md:text-4xl lg:text-6xl'>
          {TestData.title}
        </h1>
      </div>
      <div>
        <p className='font-FiraSans-Medium text-textColour text-start text-sm md:text-lg lg:text-xl'>
          Author: {TestData.Author} 
          <br/> 
          Date: {TestData.Date}
        </p>
      </div>
      <div className='flex text-start mt-5 mb-10'>
        <p className='font-FiraSans-Regular text-textColour text-sm md:text-lg lg:text-lg'>
          {TestData.Content}
        </p>
      </div>





    </div>

      {/* Related Articles */}

        <div className='overflow-x-auto flex-shrink-0 flex flex-row gap-3  px-56 items-center justify-center'>
          <RelatedCard 
            items={[
              {
                image: TestData.image,
                title: TestData.title,
                extra: 'w-96 h-86',
                buttonText: 'Learn More',
                link: '/blog/test',
              },
              {
                image: TestData.image,
                title: TestData.title,
                extra: 'w-96 h-86',
                buttonText: 'Learn More',
                link: '/blog/test',
              },
              {
                image: TestData.image,
                title: TestData.title,
                extra: 'w-96 h-86',
                buttonText: 'Learn More',
                link: '/blog/test',
              }
            ]}
              />

        </div>
        <hr className="h-px my-8 bg-gray-900 border-0 dark:bg-gray-700" >
        </hr>

      {/* Comments */}

      <Comments props={params.id}/>
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `${TestData.title} - FH Design Blog`,
    description: TestData.QuickDescription,
  };
}