// data type for home_two section one and two data
export type LinkType = {
  url: string;
  icon: string;
  title: string;
  description: string;
};

//home two section three data types
type SocialMediaLinks = {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
};

export type profileInfo = {
  name: string;
  img: string;
  role: string;
  company: string;
  location: string;
  socialMedia: SocialMediaLinks;
};
