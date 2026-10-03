export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
  tips?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  excerpt: string;
  content: {
    intro: string;
    sections: BlogSection[];
    conclusion: string;
    keyTakeaways: string[];
    faqs?: BlogFaq[];
  };
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  category: 'Pilgrimage Guide' | 'Heritage & Faith' | 'International Holidays' | 'Travel Tips' | 'Food & Rituals';
  tags: string[];
  featured?: boolean;
  relatedPackageId?: string;
}
