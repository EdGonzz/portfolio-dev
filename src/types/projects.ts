export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  links: { [name: string]: { url: string; logo: any } };
  tags: Array<{
    name: string;
    classProp: string;
    logo: any;
  }>;
}
