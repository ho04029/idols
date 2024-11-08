export interface IidolMember {
  name: string;
  img: string;
  birth: string;
  role: string;
}

export interface IidolGroup {
  name: string;
  logo: string;
  mainPhoto: string;
  slogan: string;
  members: IidolMember[];
  albums: [];
  bgColor: string;
  pointColor: string;
  textColor: string;
  albumconbgColor: string;
  albumcontextColor: string;
}
