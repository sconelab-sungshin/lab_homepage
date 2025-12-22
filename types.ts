export interface NewsItem {
  id: string;
  date: string;
  content: string;
  htmlContent?: boolean;
  title?: string; 
  url?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  links: { label: string; url: string }[];
}
