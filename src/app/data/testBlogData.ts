interface ServiceCardItem {
    image: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
    tags: string[];
    target: string;
  }

const BlogData : ServiceCardItem[] = [
    {
        image: '/images/helios.png',
        title: 'Title 1',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/1',
        target: '_self',
    },
    {
        image: '/images/wordpress.png',
        title: 'Title 2',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/2',
        target: '_self',
    },
    {
        image: '/images/wordpress.png',
        title: 'Title 3',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/3',
        target: '_self',
    },
    {
        image: '/images/wordpress.png',
        title: 'Title 4',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/4',
        target: '_self',
    },
    {
        image: '/images/wordpress.png',
        title: 'Title 5',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/5',
        target: '_self',
    },
    {
        image: '/images/wordpress.png',
        title: 'Title 6',
        buttonText: 'Learn More',
        description: 'Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized.',
        tags: ['Web Development', 'React', 'Node.js'],
        link: '/blog/6',
        target: '_self',
    }
]

export default BlogData;