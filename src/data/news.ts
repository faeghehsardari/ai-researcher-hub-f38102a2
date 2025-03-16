
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New Research Paper Published in NeurIPS 2023",
    date: "2023-12-10",
    summary: "Our latest research on transformer efficiency has been accepted and published in the prestigious NeurIPS conference.",
    category: "Publication"
  },
  {
    id: 2,
    title: "Received $2.5M Grant for AI Ethics Research",
    date: "2023-11-15",
    summary: "We are excited to announce a new multi-year grant to support our work on ensuring fairness and transparency in machine learning systems.",
    category: "Funding"
  },
  {
    id: 3,
    title: "Collaboration with Industry Partner Announced",
    date: "2023-10-22",
    summary: "Beginning a new collaborative project with a leading tech company to implement our research in real-world applications.",
    category: "Partnership"
  },
  {
    id: 4,
    title: "Two Papers Accepted to ICML 2023",
    date: "2023-09-05",
    summary: "Our team's work on reinforcement learning and computer vision has been accepted to the International Conference on Machine Learning.",
    category: "Publication"
  },
  {
    id: 5,
    title: "Hosting AI Ethics Workshop Next Month",
    date: "2023-08-20",
    summary: "Join us for a day-long workshop exploring the ethical implications of AI deployment in healthcare and finance.",
    category: "Event"
  }
];
