type SocialId = "linkedin" | "github" | "mail" | "cv";

type SocialName = "Linkedin" | "Github" | "Mail" | "CV";

export interface Social {
  id: SocialId;
  name: SocialName;
  url: string;
  label: string;
  image: {
    logo: any;
  };
  class: string;
}
