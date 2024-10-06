
// Define the type for CarouselItem
type CarouselItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
};

// Update the Test array to use the CarouselItem type
const ImageTest: CarouselItem[] = [
  {
    src: '/images/test/img1.jpg',
    alt: 'Image 1',
    title: 'Image 1',
    description: 'This is the first image josjaodjoiadjioadjioadj oadajod aod',
    link: 'https://www.google.com',
  },
  {
    src: '/images/test/img1.jpg',
    alt: 'Image 2',
    title: 'Image 2',
    description: 'This is the first image josjaodjoiadjioadjioadj oadajod aod',
    link: 'https://www.google.com',
  },
  {
    src: '/images/test/img1.jpg',
    alt: 'Image 3',
    title: 'Image 3',
    description: 'This is the first image josjaodjoiadjioadjioadj oadajod aod',
    link: 'https://www.google.com',
  },
  {
    src: '/images/test/img1.jpg',
    alt: 'Image 4',
    title: 'Image 4',
    description: 'This is the first image josjaodjoiadjioadjioadj oadajod aod',
    link: 'https://www.google.com',
  },
  {
    src: '/images/test/img1.jpg',
    alt: 'Image 5',
    title: 'Image 5',
    description: 'This is the first image josjaodjoiadjioadjioadj oadajod aod',
    link: 'https://www.google.com',
  },
];

export default ImageTest;