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

// home two section four data types
export type successType = {
  icon: string;
  title: string;
  total: number;
};

//home two section five data types
export type feedback = {
  name: string;
  img: string;
  description: string;
  address: string;
};

//exam zone data types

export type examzone = {
  icon: string;
  title: string;
  description: string;
};

//exam zone free mode test type

export type FreeModel = {
  bgColor: string;
  icon: string;
  title: string;
  start: string;
  time_count: string;
  button: string;
  description: string;
};

//live expert data types
export type ExpertType = {
  bgColor: string;
  icon: string;
  title: string;
  start: string;
  time_count: string;
  premium_icon: string;
  premium_text: string;
  description: string;
};
