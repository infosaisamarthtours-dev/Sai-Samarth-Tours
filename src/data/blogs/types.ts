export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogTableData {
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  heading: string;
  subheading?: string;
  body: string;
  bulletPoints?: string[];
  tips?: string;
  image?: string;
  imageCaption?: string;
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
    summaryTable?: BlogTableData;
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
