export interface IdolMember {
  name: string;
  img: string;
  birth: string;
  role: string;
}

export interface IdolGroup {
  name: string;
  logo: string;
  mainPhoto: string;
  slogan: string;
  members: IdolMember[];
  albums?: [];
  bgColor: string;
  pointColor: string;
  textColor: string;
}
