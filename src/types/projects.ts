export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  links: { [name: string]: { url: string; logo: any } };
  tags: string[];
}
