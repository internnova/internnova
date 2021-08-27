type jobType = {
  id: number;
  position: string;
  contract: string;
  location: string;
  logo: string;
  company: string;
  postedAt: Date;
  tools: string[];
  isNew?: boolean;
  featured?: boolean;
};

export default jobType;
